#!/bin/bash

# Download function: tries Pexels CDN URL
download_img() {
  local id="$1"
  local filename="$2"
  local description="$3"
  
  local url="https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  
  echo "Downloading [$filename] - $description (ID: $id)..."
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

download_img "5212332" "hero-training.jpg" "teacher teaching students classroom"
download_img "8199135" "hero-training-v2.jpg" "students raising hands classroom"
download_img "4350094" "services-hero.jpg" "waitress serving dish to customer"
download_img "3796810" "services-hero-v2.jpg" "black female barista serving coffee"
download_img "7016425" "work-atrium.jpg" "barman serving food to customer"
download_img "14361688" "work-still-1.jpg" "bartender pouring gin"
download_img "5817617" "work-still-1-v2.jpg" "making cocktail infusion siphon"
download_img "7512139" "work-product.jpg" "hotel reception desk people"
download_img "14036250" "work-product-v2.jpg" "receptionist front desk hotel"
download_img "1181396" "work-still-2.jpg" "group of people conference room"
download_img "1181615" "work-still-2-v2.jpg" "two women meeting glass office"
download_img "8867265" "contact-hero.jpg" "call center agents working"
download_img "7682470" "contact-hero-v2.jpg" "call center laughing agents"
download_img "3864594" "contact-room.jpg" "empty tables chairs classroom"
download_img "356065" "contact-room-v2.jpg" "room chair lot auditorium"
download_img "19064004" "contact-room-v3.jpg" "empty classroom white desks"
download_img "1181304" "work-still-2-v3.jpg" "group of people in conference room"
download_img "6829538" "work-still-2-v4.jpg" "business people collaborating meeting"
download_img "29267517" "work-still-2-v5.jpg" "diverse team collaborating office"

echo ""
echo "=== Download complete ==="
ls -la *.jpg 2>/dev/null | awk '{print $5, $9}'
