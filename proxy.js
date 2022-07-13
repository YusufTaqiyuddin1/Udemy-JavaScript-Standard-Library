// Proxy

const target = {
    middleName: "Udin"
};

const handler = {
    get: function(target, property){
        return target[property];
    },

    set: function(target, property, value){
        target[property] = value;
    }
}

const proxy = new Proxy(target, handler);
proxy.firstName = "Yusuf";
proxy.lastName = "Taqiyuddin";

console.log(proxy.firstName); // Yusuf
console.log(proxy.lastName); // Taqiyuddin
console.log(proxy.middleName); // Udin