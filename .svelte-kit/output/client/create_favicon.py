#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import os

# Create a 32x32 image
size = (32, 32)
img = Image.new('RGBA', size, (17, 23, 35, 255))  # #111723 background
draw = ImageDraw.Draw(img)

# Create gradient effect (simplified)
# Draw circular background with gradient-like effect
draw.ellipse([2, 2, 30, 30], fill=(244, 42, 139, 255))  # Pink
draw.ellipse([4, 4, 28, 28], fill=(59, 154, 227, 255))  # Blue

# Add initials
try:
    # Try to use a system font
    font = ImageFont.truetype("/System/Library/Fonts/Arial.ttf", 12)
except:
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 12)
    except:
        font = ImageFont.load_default()

# Draw initials
text = "AB"
bbox = draw.textbbox((0, 0), text, font=font)
text_width = bbox[2] - bbox[0]
text_height = bbox[3] - bbox[1]
x = (size[0] - text_width) // 2
y = (size[1] - text_height) // 2

draw.text((x, y), text, fill=(255, 255, 255, 255), font=font)

# Save as PNG
img.save('favicon.png')
print("Favicon created successfully!")
