// Log Handler

const target = {
    middleName: "Udin"
};

const handler = {
    get:function(target, property){
        console.log(`Access Property ${property}`);
        return target[property];
    },

    set:function(target, property, value){
        console.log(`Change Property ${property} : ${value}`);
        if(value == null){
            // throw new Error("Tidak boleh null")
            target[property] = "value";
        } else{
            target[property] = value;
        }
        
    }
};

const proxy = new Proxy(target, handler);
proxy.firstName = "Yusuf";
proxy.lastName = null;

console.log(proxy.firstName); 
console.log(proxy.lastName); 
console.log(proxy.middleName); 