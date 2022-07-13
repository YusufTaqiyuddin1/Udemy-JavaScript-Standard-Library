// encodeURI dan DecodeURI

const url = 'http://www.contoh.com/?name=Yusuf Taqiyuddin';
console.log(url); // http://www.contoh.com/?name=Yusuf Taqiyuddin

const encoded = encodeURI(url);
console.log(encoded); // http://www.contoh.com/?name=Yusuf%20Taqiyuddin

const decoded = decodeURI(encoded);
console.log(decoded); // http://www.contoh.com/?name=Yusuf Taqiyuddin