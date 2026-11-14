#!/bin/sh
# Makes the images shown when a page of the site is shared (Open Graph, 1200×630):
# public/og/<slug>.jpg from the upper part of each app's first light screenshot.
# Run after the screenshots changed: scripts/og.sh   (needs dwebp and ImageMagick)
set -e
cd "$(dirname "$0")/.."
tmp=$(mktemp -d)
for pair in tusq:tusq marq:marq jayq:jayq xaq:xaq maillet:maillet-home pockettray:pockettray; do
  slug=${pair%%:*} shot=${pair##*:}
  dwebp -quiet "public/shots/$shot-light.webp" -o "$tmp/$slug.png"
  convert "$tmp/$slug.png" -resize 1200x -gravity north -crop 1200x630+0+0 +repage -quality 88 "public/og/$slug.jpg"
  echo "public/og/$slug.jpg"
done
rm -r "$tmp"
