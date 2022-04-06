const fs = require('fs');
const templates = require('./templates');

function writeFile(name, fileType) {
  const fileName =
    fileType === 'component' ? `./${name}.js` : `./${name}.${fileType}.js`;

  const fileString = templates[fileType](name);
  // const templateFunction = templates[fileType]
  // const fileString = templateFunction(name)

  fs.writeFileSync(fileName, fileString);
}

module.exports = writeFile;
