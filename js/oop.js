//  class Animals {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.sing = function(){
//             console.log (`${this.name} can sing`);
//         }
//     }
//     dance() {
//         return `${this.name} can dance`;
//     }
// } 
// class Cats extends Animals {
//     constructor(name, age, whiskerColor) {
//         super(name, age);
//         this.whiskerColor = whiskerColor;
//     }
//     whiskers() {
//         return `I have ${this.whiskerColor} whiskers`;
//     }
// }
// let clara = new Cats("Clara", 33, "indigo");
// console.log(clara);
// console.log(clara.sing());
// console.log(clara.whiskers());
// // Expected Output
// // "Clara can sing"
// // "I have indigo whiskers"
//Creating a constructor function  
function Vehicle()  
{  
    this.vehicleName="vehicleName";  
    throw new Error("You cannot create an instance of Abstract Class");  
}  
Vehicle.prototype.display=function()  
{  
    return "Vehicle is: "+this.vehicleName;  
}  
//Creating a constructor function  
function Bike(vehicleName)  
{  
    this.vehicleName=vehicleName;  
}  
//Creating object without using the function constructor  
Bike.prototype=Object.create(Vehicle.prototype);  
var bike=new Bike("Honda");  
document.writeln(bike.display());  