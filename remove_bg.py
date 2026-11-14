from PIL import Image
import os

def remove_white_bg(input_path, output_path=None):
    if not os.path.exists(input_path):
        print(f"File {input_path} does not exist, skipping.")
        return
    if output_path is None:
        output_path = input_path
    
    im = Image.open(input_path)
    im = im.convert("RGBA")
    width, height = im.size
    pixels = im.load()
    
    # Check if corner is white
    r0, g0, b0, a0 = pixels[0, 0]
    if r0 < 220 or g0 < 220 or b0 < 220:
        print(f"{input_path} corner is not white ({r0},{g0},{b0}), might already be transparent or colored.")
    
    # BFS from boundaries where pixel is white or light gray
    visited = set()
    queue = []
    
    for x in range(width):
        for y in [0, height - 1]:
            r, g, b, a = pixels[x, y]
            if min(r, g, b) > 200:
                queue.append((x, y))
                visited.add((x, y))
                
    for y in range(height):
        for x in [0, width - 1]:
            if (x, y) not in visited:
                r, g, b, a = pixels[x, y]
                if min(r, g, b) > 200:
                    queue.append((x, y))
                    visited.add((x, y))
                    
    print(f"[{input_path}] Starting BFS from {len(queue)} border pixels...")
    
    while queue:
        cx, cy = queue.pop(0)
        r, g, b, a = pixels[cx, cy]
        
        m = min(r, g, b)
        if m >= 248:
            # Practically pure white -> full transparency
            pixels[cx, cy] = (255, 255, 255, 0)
        else:
            # Transition / anti-aliased edge pixel (200 <= m < 248)
            # Compute alpha
            alpha_float = (248.0 - m) / (248.0 - 200.0)
            alpha_float = max(0.0, min(1.0, alpha_float))
            new_alpha = int(alpha_float * 255)
            
            if new_alpha == 0:
                pixels[cx, cy] = (255, 255, 255, 0)
            else:
                # Un-blend white background from RGB channels to prevent white halo on dark backgrounds
                # C_obs = alpha * C_fg + (1 - alpha) * 255 => C_fg = 255 - (255 - C_obs) / alpha
                def unblend(c, a_f):
                    res = 255.0 - (255.0 - float(c)) / max(0.05, a_f)
                    return int(max(0, min(255, res)))
                
                nr = unblend(r, alpha_float)
                ng = unblend(g, alpha_float)
                nb = unblend(b, alpha_float)
                pixels[cx, cy] = (nr, ng, nb, new_alpha)
                
            # If the pixel has significant opacity (> 100), don't propagate further into the foreground logo
            if new_alpha > 100:
                continue
                
        # Check 4 neighbors
        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nx, ny = cx + dx, cy + dy
            if 0 <= nx < width and 0 <= ny < height and (nx, ny) not in visited:
                nr, ng, nb, na = pixels[nx, ny]
                # Continue BFS if neighbor is light enough
                if min(nr, ng, nb) > 200:
                    visited.add((nx, ny))
                    queue.append((nx, ny))
                    
    im.save(output_path)
    print(f"[{input_path}] Successfully saved transparent image to {output_path}.")

if __name__ == "__main__":
    remove_white_bg("public/favicon.png")
    remove_white_bg("public/favicon.ico")
    remove_white_bg("public/greenlane-logo.png")
    remove_white_bg("public/GreenLane-logo.png")
    # Ensure both case variants exist on Linux file systems
    import shutil
    if os.path.exists("public/greenlane-logo.png"):
        shutil.copy("public/greenlane-logo.png", "public/GreenLane-logo.png")
        print("Copied transparent logo to public/GreenLane-logo.png for case-compatibility.")
