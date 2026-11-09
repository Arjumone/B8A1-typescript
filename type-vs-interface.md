# Title: Type alias Vs Interface

# Introduction:

Type vs Interface are describe the shape of data, and for plain object shapes they are almost interchangeable. The differences show up in a few specific places.

# Detailed Body Paragraphs with Code Examples:

- A type alias can name any type: unions, primitives, tuples, mapped types, and so on.
An interface can only describe object shapes (including functions and classes).

type ID = string | number;        
type Status = "active" | "inactive";  

interface User {
  id: ID;
  name: string;
}

- Declaring the same interface twice merges the declarations into one. Declaring the same type twice is an error.

interface Person {
  id: string;
}
interface Person {
  id: number;
}

type A = { id: number };
type A = { id: number }; 

- Types use intersections (&).Interfaces use extends.

type Animal = { name: string };
type Dog = Animal & { breed: string };

interface Animal { name: string }
interface Dog extends Animal { breed: string }

# Conclusion:

Type aliases and interfaces both describe the shape of data.
Use a type alias when you need unions, tuples, or other 
other types. Use an interface when you want declaration
merging or a clear contract for objects and classes.
 