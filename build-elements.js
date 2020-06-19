const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/address-element/runtime-es5.js',
    './dist/address-element/polyfills-es5.js',
    './dist/address-element/scripts.js',
    './dist/address-element/main-es5.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/address-element.js');
})();
