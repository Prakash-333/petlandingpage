Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile((Resolve-Path "assets/images/golden-retriever-studio.jpg").Path)
$rect = New-Object System.Drawing.Rectangle(0, 0, $src.Width, $src.Height)

# Create a 32-bit ARGB bitmap
$dst = New-Object System.Drawing.Bitmap($src.Width, $src.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($dst)
$g.DrawImage($src, 0, 0)
$g.Dispose()
$src.Dispose()

# Lock bits for high speed C# memory manipulation
$bmpData = $dst.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadWrite, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$ptr = $bmpData.Scan0
$bytes = [Math]::Abs($bmpData.Stride) * $dst.Height
$rgbValues = New-Object byte[] $bytes
[System.Runtime.InteropServices.Marshal]::Copy($ptr, $rgbValues, 0, $bytes)

# Iterate through pixels: Format32bppArgb is [B, G, R, A]
for ($i = 0; $i -lt $bytes; $i += 4) {
    $b = [int]$rgbValues[$i]
    $g = [int]$rgbValues[$i+1]
    $r = [int]$rgbValues[$i+2]
    
    # Check if pixel is white/near-white studio backdrop
    $minVal = [Math]::Min($r, [Math]::Min($g, $b))
    $maxVal = [Math]::Max($r, [Math]::Max($g, $b))
    
    # If the pixel is very bright and has low saturation (neutral white/gray background)
    if ($minVal -gt 225 -and ($maxVal - $minVal) -lt 25) {
        if ($minVal -gt 245) {
            $rgbValues[$i+3] = 0 # 100% transparent
        } else {
            # Smooth feather
            $alpha = [byte](255 * (245 - $minVal) / 20)
            $rgbValues[$i+3] = $alpha
        }
    }
}

[System.Runtime.InteropServices.Marshal]::Copy($rgbValues, 0, $ptr, $bytes)
$dst.UnlockBits($bmpData)

$dst.Save((Resolve-Path .).Path + "\assets\images\golden-retriever-cutout.png", [System.Drawing.Imaging.ImageFormat]::Png)
$dst.Dispose()

Write-Host "Success! Cutout saved to assets/images/golden-retriever-cutout.png"

