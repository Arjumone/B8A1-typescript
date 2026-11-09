"use strict";
//1
function multiplyValue(val1, val2) {
    if (val1) {
        return val1 * val1;
    }
    else {
        return val1 * 2;
    }
}
function processInput(val) {
    if (typeof val === "string") {
        const stringValue = val.trim().toLowerCase();
        return stringValue;
    }
    else if (typeof val === "number") {
        return val * 10;
    }
    else
        (typeof val === "boolean");
    {
        if (true) {
            return "Active";
        }
    }
    ;
}
const processResult = processInput(" Hello");
const processResult2 = processInput(99);
const processResult3 = processInput(true);
const processResult4 = processInput(false);
// console.log(processResult,processResult2,processResult3,processResult4)
//3
function formatCoordinate() {
}
//5 done
const getPopularCourses = (arr, minSNo) => {
    return courses.filter((course) => course.isPublished && course.students >= minSNo);
};
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];
const result = getPopularCourses(courses, 80);
const pluckValues = (items, key) => {
    return items.map((item) => item[key]);
};
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" },
];
const result1 = pluckValues(users, "name");
const result2 = pluckValues(users, "id");
//7 done 98%
class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    getDetails() {
        return `Employee:${this.name},Base Salary:${this._baseSalary}`;
    }
}
class Manager extends Employee {
    name;
    baseSalary;
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.name = name;
        this.baseSalary = baseSalary;
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const manager = new Manager("Alice", 500, "Engineering");
manager.getDetails();
manager.getRoleInfo();
