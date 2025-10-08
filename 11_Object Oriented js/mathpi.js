const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter); // {  value: 3.141592653589793,  writable: false,  enumerable: false,  configurable: false}

// console.log(Math.PI); //3.141592653589793
Math.pi = 34567
// console.log(Math.PI); // 3.141592653589793



const chai = {
    name : "masal chai",
    price : 250,
    isAvailable : true,
    orderChai : function(){
        // console.log("not ready");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name")); //{  value: 'masal chai',  writable: true,  enumerable: true,  configurable: true}

Object.defineProperty(chai, "name", {
    writable : false
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name")); //{  value: 'masal chai',  writable: false,  enumerable: true,  configurable: true}

// to stop iteration
Object.defineProperty(chai, "name", {
    enumerable: false
})
for (let [key , value] of Object.entries(chai)) {
    // console.log(`${key} : ${value}`); //name : masal chaiprice : 250 isAvailable : true orderChai : function(){    console.log("not ready");}
    if(typeof value !== "function"){
        // console.log(`${key} : ${value}`); //name : masal chai price : 250 isAvailable : true 
        }

    // after making enumerable false name is not iterated--> price : 250 isAvailable : true
}


class shape{
    area(){
        return 0
    }
}

class Circle extends shape {
    constructor (radius){
        super()
        this.radius = radius
    } 

    area(){
        return Math.PI * this.radius ** 2;
    }
}

class Triangle extends shape{
    constructor ( height, width){
        super()
        this.height = height 
        this.width = width
    }

    area(){
        return 0.5 * this.height * this.width
    }
}


const c1 = new Circle(4);
console.log("area of circle :", c1.area()); // area of circle : 50.26548245743669

const t1 = new Triangle(4, 5)
console.log("area of tringle :", t1.area()); // area of tringle : 10

