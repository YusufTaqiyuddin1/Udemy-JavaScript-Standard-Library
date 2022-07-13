// encodeURIComponent dan decodeURICompoentn

const value = "Yusuf&Taqiyuddin=Ucup";
const url = 'https://www.contoh.com?name';

const encoded = encodeURIComponent(value);
console.log(encoded); // Yusuf%26Taqiyuddin%3DUcup

const decoded = decodeURIComponent(encoded);
console.log(decoded); // Yusuf&Taqiyuddin=Ucup