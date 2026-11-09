# Title: Access modifier(OOP)

# Introduction:

Access Modifiers help you protect data and keep your code 
safe from accidental changes.

# Detailed Body Paragraphs with Code Examples:

public	anywhere (default)
private	only inside the same class
protected inside the class 
readonly anywhere to read

1. `public`: This is the default. If you write no modifier, 
the member is `public`.
class User {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}
const user = new User("Arju");
console.log(user.name);    

2. `private`: This is the `default`. If you write no modifier, 
the member is `public`.

class Account {
  constructor( private balance: number) {
    this.balance = balance;
  }

  deposit(amount: number): number {
    this.balance += amount;
  }
}

const account = new Account(1000);
account.deposit(500);

3. `protector`: A protected member works like `private`, except 
`subclasses` can also access it.

class Employee {
  constructor(protected salary: number) {
    this.salary = salary;
  }
}

class Manager extends Employee {
  getBonus() {
    return this.salary 
  }
}
const manager = new Manager(50000);
console.log(manager.getBonus()); 

4. `readonly`: A `readonly` property can be assigned only once: 
either where it is declared or inside the `constructor`. 
After that, it cannot be changed.

class Product {
  constructor( readonly id: number,
  name: string) {
    this.id = id;
    this.name = name;
  }

  rename(newName: string) {
    this.name = newName;
    this.id = 99;     //error
  }
}
const p = new Product(1, "Laptop");


# Conclusion:

Access modifiers help you control how the 
members of a `class` can be used. 
Together, they make
 your code safer, 
easier to maintain, and harder to misuse.
