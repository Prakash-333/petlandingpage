Add-Type -AssemblyName System.Drawing

$inputPath = "assets/images/reference-design.jpg"
$img = [System.Drawing.Image]::FromFile((Resolve-Path $inputPath).Path)

# Exact bounding box of the hero visual in reference-design.jpg (478x657)
# The hero visual starts around x=190 (capturing the subtle left petal curve that reaches toward the text)
# to x=478, and y=40 to y=258.
$x = 195
$y = 40
$w = 478 - $x
$h = 218

$rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
$bmp = New-Object System.Drawing.Bitmap($img)
$cropBmp = $bmp.Clone($rect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Upscale to high resolution (3x)
$scale = 3
$targetW = $w * $scale
$targetH = $h * $scale

$upscaled = New-Object System.Drawing.Bitmap($targetW, $targetH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($upscaled)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

$g.DrawImage($cropBmp, 0, 0, $targetW, $targetH)
$g.Dispose()

# Now let's create a transparent blend on the left edge and bottom edge:
# The left ~15% will fade from transparent to 100% opacity so it blends into the text area.
# The bottom ~8% will fade out gently.
$featherLeftPx = [int]($targetW * 0.16)
$featherBottomPx = [int]($targetH * 0.08)

for ($py = 0; $py -lt $targetH; $py++) {
    for ($px = 0; $px -lt $targetW; $px++) {
        $c = $upscaled.GetPixel($px, $py)
        
        $alphaLeft = 1.0
        if ($px -lt $featherLeftPx) {
            $alphaLeft = [Math]::Pow(($px / $featherLeftPx), 1.6)
        }
        
        $alphaBottom = 1.0
        $fromBottom = $targetH - 1 - $py
        if ($fromBottom -lt $featherBottomPx) {
            $alphaBottom = [Math]::Pow(($fromBottom / $featherBottomPx), 1.2)
        }
        
        $finalAlpha = [int]($c.A * $alphaLeft * $alphaBottom)
        if ($finalAlpha -lt 0) { $finalAlpha = 0 }
        if ($finalAlpha -gt 255) { $finalAlpha = 255 }
        
        if ($finalAlpha -ne $c.A) {
            $newColor = [System.Drawing.Color]::FromArgb($finalAlpha, $c.R, $c.G, $c.B)
            $upscaled.SetPixel($px, $py, $newColor)
        }
    }
}

$outputFile = (Resolve-Path .).Path + "\assets\images\hero-dog-blended.png"
$upscaled.Save($outputFile, [System.Drawing.Imaging.ImageFormat]::Png)

$cropBmp.Dispose()
$bmp.Dispose()
$img.Dispose()
$upscaled.Dispose()

Write-Host "Blended hero image generated at assets/images/hero-dog-blended.png"
