# npx create-react-app appName --template typescript

any is not recommended to use in typescript
let listener: unknown;
unknown can be used instead of using any
================================================================
let name: string;
let age: number | string;
now age can have number or string
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];
================================================================
let printName: (name: string) => void;
returns undefined

let printName: (name: string) => never;
returns nothing
================================================================
In TypeScript, aliases are used to create reusable names for types.
There are two main ways to create aliases: using the type keyword and using the interface keyword.
type UserID = string;
type User = {
id: UserID;
name: string;
age: number;
};

interface UserID extends String {}
interface User {
id: UserID;
name: string;
age: number;
}
================================================================
type X = {
a: string
}
type Y = {
b: string
}
if we want to use X properties in Y
type Y = X & {
b: string
}
================================================================
interface X {
a: string
}
interface Y extends X {
c: string
}
================================================================
type X = {
a: string
}
interface Y extends X {
c: string
}
================================================================
interface X {
a: string
}
type Y = X & {
c: string
}
================================================================
type Person = {
name: string;
age?: number;
};

let person: Person = {
name: 'Ram',
};

let peopleList: Person[];

================================================================
React.FC -> functional component
React.Node -> supports all component
