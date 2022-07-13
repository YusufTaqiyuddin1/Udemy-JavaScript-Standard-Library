// RegExp Modifier

const name = "Yusuf Taqiyuddin\n yUsuf taqiyuddin\nUcup Udin";
const regex1 = /Yusuf/ig;
const regex2 = /Taqiyuddin/ig;

let result;
while((result = regex1.exec(name)) !== null){
    console.log(result);
}

while((result = regex1.exec(name)) !== null){
    console.log(result);
}
