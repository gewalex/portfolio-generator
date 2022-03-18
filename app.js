//needed to use function in the source file
const fs = require('fs');
//source file function
const generatePage = require('./src/page-template.js');
//array begins at index two /collect input
const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;

  fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });
