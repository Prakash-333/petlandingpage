Add-Type -AssemblyName System.Drawing

$inputPath = "assets/images/reference-design.jpg"
$outputPath = "assets/images/hero-dog-original.png"

$img = [System.Drawing.Image]::FromFile((Resolve-Path $inputPath).Path)

# Exact hero bounds in 478x657:
# X from 160 (captures full purple petal extending towards buttons/text) to 478
# Y from 38 (top of purple blob and badge) to 258 (bottom of hero dog and leaves)
$x = 160
$y = 38
$w = 478 - $x
$h = 258 - $y

$cropRect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
$bmp = New-Object System.Drawing.Bitmap($img)
$cropBmp = $bmp.Clone($cropRect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Upscale by 2.5x with high quality bicubic for crispness
$scale = 2.5
$targetW = [int]($w * $scale)
$targetH = [int]($h * $scale)

$upscaled = New-Object System.Drawing.Bitmap($targetW, $targetH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($upscaled)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

$g.DrawImage($cropBmp, 0, 0, $targetW, $targetH)
$g.Dispose()

$upscaled.Save((Resolve-Path .).Path + "\" + $outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

$cropBmp.Dispose()
$bmp.Dispose()
$img.Dispose()
$upscaled.Dispose()

Write-Host "Success: hero-dog-original.png created with dimensions $targetW x $targetH"

