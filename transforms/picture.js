const Image = require('@11ty/eleventy-img');

async function imageShortcode (src, alt, className = '', sizes = '100vw') {
  if (alt === undefined) {
    // You bet we throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
  }
  let metadata = await Image(src, {
    widths: [300, 600, 900, 1200],
    formats: ['webp', 'jpeg'],
    outputDir: '_site/img',
  });

  let lowsrc = metadata.jpeg[0];

  return `<picture class="[ responsive-image ] ${className}">
          ${Object.values(metadata)
            .map((imageFormat) => {
              return `  <source type="image/${
                imageFormat[0].format
              }" srcset="${imageFormat
                .map((entry) => entry.srcset)
                .join(', ')}" sizes="${sizes}">`;
            })
            .join('\n')}        
          <img src="${lowsrc.url}" width="${lowsrc.width}" height="${
    lowsrc.height
  }" alt="${alt}">      
        </picture>`;
}

module.exports = imageShortcode;
