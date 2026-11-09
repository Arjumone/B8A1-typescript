//1

function multiplyValue(val1:number,val2?:number){
if(val1){
return val1 * val1
}
else {
    return val1* 2
}
}

// const result = multiplyValue(10)
// const result2 = multiplyValue(10,5)
// const result3 = multiplyValue(7,0)
// console.log(result,result2,result3)


//2

type Input= string |number| boolean

function processInput(val:Input){
    if(typeof val==="string"){
const stringValue = val.trim().toLowerCase()
return stringValue
    }
    else if(typeof val==="number"){
   return val * 10
    }
    else(typeof val==="boolean"){
 if(true){
    return "Active"
 }

 
    };

}

const processResult = processInput(" Hello")
const processResult2 = processInput(99)
const processResult3 = processInput(true)
const processResult4 = processInput(false)
// console.log(processResult,processResult2,processResult3,processResult4)

//3

function formatCoordinate(){

}


// const result1 =formatCoordinate([23.81, 90.41, "Dhaka"]);
// const result2=formatCoordinate([22.35, 91.78, "Chittagong"]);

//4

// const concatenateArrays = <T>(...arrays: T[][]): T[][] => {
 
// };

// const result1 = concatenateArrays(["a", "b"], ["c", "d"])


interface Course{
title :string
students:number
isPublished :boolean
}

 

//5 done
const getPopularCourses=(arr:Course[],minSNo:number):Course[]=>{
   return courses.filter(
    (course) => course.isPublished && course.students >= minSNo
  );
}

const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

const result = getPopularCourses(courses, 80);
// console.log(result)

//6

interface K{
    id:number
    name:string
    role:string
}

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];

const result1= pluckValues(users, "name");
const result2=pluckValues(users, "id");


//7 done 98%

class Employee{
    
    constructor(protected name:string,
    private _baseSalary:number){}

    getDetails(){
        return `Employee:${this.name},Base Salary:${this._baseSalary}`
    }

}

class Manager extends Employee{
    constructor(protected name:string,
    private baseSalary:number ,private department:string){
        super(name,baseSalary)
    }
    getRoleInfo(){
        return `Manager of ${this.department}: ${this.name}`
    }
}

const manager = new Manager("Alice", 500, "Engineering");
manager.getDetails();
manager.getRoleInfo();

// console.log(manager)


//8

interface User{
    age:number
}