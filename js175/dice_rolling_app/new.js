const URL = require('url').URL;
const myURL = new URL('/some/path?color=red', 'http://my-website');
let params = myURL.searchParams;
console.log(params);