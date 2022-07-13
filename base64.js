// Base64

const original = "Yusuf Taqiyuddin";

const encoded = btoa(original);
console.log(encoded); // WXVzdWYgVGFxaXl1ZGRpbg==

const decoded = atob(encoded);
console.log(decoded); // Yusuf Taqiyuddin