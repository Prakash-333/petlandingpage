Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Image]::FromFile((Resolve-Path "assets/images/reference-design.jpg").Path)
# Spotlight section in 478x657:
# Y is between 365 and 530, X is from 0 to 200
$rect = New-Object System.Drawing.Rectangle(0, 360, 200, 165)
$bmp = New-Object System.Drawing.Bitmap($img)
$crop = $bmp.Clone($rect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Upscale by 2x for clarity
$targetW = 400
$targetH = 330
$upscaled = New-Object System.Drawing.Bitmap($targetW, $targetH)
$g = [System.Drawing.Graphics]::FromImage($upscaled)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($crop, 0, 0, $targetW, $targetH)
$g.Dispose()

$upscaled.Save((Resolve-Path .).Path + "\assets\images\spotlight-phone-bg-ref.png", [System.Drawing.Imaging.ImageFormat]::Png)
$crop.Dispose()
$bmp.Dispose()
$img.Dispose()
$upscaled.Dispose()

Write-Host "Spotlight reference saved to assets/images/spotlight-phone-bg-ref.png"

