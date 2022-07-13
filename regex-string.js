// RegExp String
const string = "yusuf yusif yasuf yosif yisuf yesof yosef";

console.log(string.match(/yu[aiueo]/ig)); // null
console.log(string.search(/yu[aiuel]/ig)); // -1

console.log(string.replace(/yu[aiueo]/ig, "keren")); // yusuf yusif yasuf yosif yisuf yesof yosef
console.log(string.replaceAll(/yu[aiueo]/ig, "keren")); // yusuf yusif yasuf yosif yisuf yesof yosef
console.log(string.split(/y/ig)); 
/* output
[
  '',      'usuf ',
  'usif ', 'asuf ',
  'osif ', 'isuf ',
  'esof ', 'osef'
]
*/