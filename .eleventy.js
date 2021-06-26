const yaml = require('yaml');
const imageShortcode = require('./transforms/picture');


module.exports = (config) => {
  config.setTemplateFormats([
    // Templates:
    'html',
    'njk',
    'md',
    // Static Assets:
    'css',
    'jpeg',
    'jpg',
    'png',
    'svg',
    'woff',
    'woff2'
  ]);

  config.addPassthroughCopy('assets');
  config.addPassthroughCopy('js');

  // Set YAML as default content file
  config.addDataExtension('yaml', (contents) => yaml.parse(contents));

  // 11ty Shortcodes
  config.addNunjucksAsyncShortcode('picture', imageShortcode);

  return {
    dir: {
      input: 'views',
      output: '_site'
    }
  };
};
