#!/bin/bash
echo 'export default function ' >> ./defy-website/src/assets/jsx_of_svg/$1.jsx
echo $1 >> ./defy-website/src/assets/jsx_of_svg/$1.jsx
echo '() {
      return (
            <>' >> ./defy-website/src/assets/jsx_of_svg/$1.jsx
npx svg-to-jsx ./defy-website/src/assets/svg/$1.svg >> ./defy-website/src/assets/jsx_of_svg/$1.jsx
echo '</>)}' >> ./defy-website/src/assets/jsx_of_svg/$1.jsx
# ./defy-website/src/assets/jsx_of_svg/$1.jsx