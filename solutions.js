"use strict";
const multiplyValue = (value, multiplier) => {
    if (multiplier !== undefined) {
        return value * multiplier;
    }
    return value * 2;
};
multiplyValue(10);
multiplyValue(10, 5);
multiplyValue(7, 0);
const processInput = (value) => {
    if (typeof value === "string") {
        const stringValue = value.trim().toLowerCase();
        return stringValue;
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else if (typeof value === "boolean") {
        if (value) {
            return "Active";
        }
        else {
            return "Inactive";
        }
    }
};
processInput(" TypeScript ");
processInput(7);
processInput(true);
processInput(false);
const formatCoordinate = (coordinate) => {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude},${longitude})`;
};
formatCoordinate([23.81, 90.41, "Dhaka"]);
formatCoordinate([22.35, 91.78, "Chittagong"]);
const concatenateArrays = (...arrays) => {
    return arrays.reduce((acc, curr) => [...acc, ...curr], []);
};
concatenateArrays(["a", "b"], ["c", "d"]);
concatenateArrays([1, 2], [3, 4], [5]);
const getPopularCourses = (arr, minSNo) => {
    return courses.filter((course) => course.isPublished && course.students >= minSNo);
};
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];
getPopularCourses(courses, 80);
const pluckValues = (items, key) => {
    return items.map((item) => item[key]);
};
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" },
];
pluckValues(users, "name");
pluckValues(users, "id");
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee:${this.name},Base Salary:${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const manager = new Manager("Alice", 500, "Engineering");
manager.getDetails();
manager.getRoleInfo();
const validateAgeAsync = (age) => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
};

