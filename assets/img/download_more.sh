#!/bin/bash
download_img() {
  local id="$1"
  local filename="$2"
  local desc="$3"
  local url="https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  echo "Downloading [$filename] - $desc (ID: $id)..."
  curl -s -L -o "$filename" -w "HTTP %{http_code}, Size: %{size_download} bytes\n" "$url"
  if [ -f "$filename" ] && [ -s "$filename" ]; then
    echo "  ✓ Success: $filename ($(du -h "$filename" | cut -f1))"
    return 0
  else
    echo "  ✗ Failed: $filename"
    rm -f "$filename"
    return 1
  fi
}

# Try additional IDs for remaining categories
download_img "5137833" "work-arch.jpg" "women working in hotel housekeeping"
download_img "5648037" "work-portrait-1.jpg" "faceless black manager cafe"
download_img "4473415" "work-food.jpg" "happy ethnic woman apron cafe owner"
download_img "4473496" "work-food-v2.jpg" "exited ethnic waitress cash desk"
download_img "4349791" "services-hero-v3.jpg" "diverse waitresses restaurant"
download_img "9198183" "work-portrait-1-v2.jpg" "man in suit ordering bar"
download_img "28426637" "work-portrait-1-v3.jpg" "professional man business suit office"
download_img "34207040" "work-portrait-1-v4.jpg" "professional businesswoman portrait"
download_img "28703300" "studio-brooklyn.jpg" "chef modern kitchen cooking"
download_img "6284324" "studio-brooklyn-v2.jpg" "people cooking class kitchen"

echo ""
echo "=== Additional downloads ==="
ls -la work-arch.jpg work-food.jpg work-portrait-1.jpg studio-brooklyn.jpg studio-berlin.jpg 2>/dev/null || echo "(some files may not exist)"
