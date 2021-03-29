const visitor={
    name:"Winfred",
    age:23,
    nationality:"Kenyan",
    course:"Computer science",
    likes:["swimming","eating","dancing","soccer","hiking","travelling"],
};
console.log(typeof visitor);
console.log(visitor.likes);
console.log(visitor["name"]);

//functions as values
const student={
    name:"Grace",
    age:24,
    class:"Anitab",
    culture:"Taita",
    marks:{
        ux_research:"A",
        JavaScript:"A",
        Kotlin:"A",
        Python:"A",

    }
};
console.log(student.marks);
console.log(student.marks.Python);
console.log(student["marks"]);

const person={
    name:"Mickey",
    age:24,
    greeting:function(){
        console.log("hello")
    }
}
person.greeting();

//built-in methods
let number="32.45"
let result =parseInt(number)
console.log(result);
const numbers={

}
let num2= Math.sin(45);
console.log(num2);
let pupil={}
    pupil.name="Melannie";
    pupil.age=23;
    pupil.greet=function(){
        console.log("hello")
    }
    pupil.greet();
    //this keyword
    const employee ={
        name:"Ibu",
        age:34,
        intro:function(){
            let surname="Okafor";
            console.log("My name is" + ' '+this.name + ' '+surname);
        }
    }
    employee.intro();
