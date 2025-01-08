//const car = {type: "Chevrolet",model: "Malibu",color: "pink"};
//document.getElementById("demo").innerHTML =
 //"Bu mashinani rangi " + car.color;
 



 //const car =new Object();
 //car.type="Malibu";
 //car.model="LT";
 //car.color="pink";
 //car.since="2024";


//document.getElementById("demo").innerHTML =
 //"Bu mashinani yili " + car.since;

 //function Person(first, last, age, eye) {
 //   this.firstName = first;
 //   this.lastName = last;
  //  this.age = age;
 //   this.eyeColor = eye;
 // }
  
 // Person.prototype.gender = "male";
  
 // const myFather = new Person("John", "Doe", 50, "blue");
 // document.getElementById("demo").innerHTML =
 // "The nationality of my father is " + myFather.gender; 


 const sneakers1 = {
  firstName: "Nike",
  lastName: "airmax",
  price: 100,
  Color: "mixed"
};


const sneakers2 = {firstName: "Adidas",lastName: "Yeezy"};

Object.assign(sneakers1, sneakers2);


let text = Object.entries(sneakers1);  // returns an array
document.getElementById("demo").innerHTML = text;