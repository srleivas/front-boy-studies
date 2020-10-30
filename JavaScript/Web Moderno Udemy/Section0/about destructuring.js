const Person_Data = {
    name: "Lincy",
    age: 26,
    year_birth: 1981,
    likes: {
        food: "apple",
        number: 7.6,
        play: "tennis"
    }
}

// Destruct get an value(s) of an array or property(ies) of an Object and place into
// the new vartype you defined, first case is const;
const {name, likes} = Person_Data; 
console.log("Name =", name, "\nLikes =", likes);

console.log("\nData:", Person_Data);
// You can set a destruct item var name as follows;
const {name: Person_Data_Name, likes: Person_Data_Likes} = Person_Data;
console.log("\nPerson Data Name:", Person_Data_Name, "\nPerson Data Likes:", Person_Data_Likes);

// You can set a standard value if the content's not there yet;
const {height: H = 1.65, weight: W = 52} = Person_Data;
console.log("\nHeight:", H, "\nWeight:", W);

// To acess a attribute inside another Object attribute you need to;
const {likes: {food: F, play: P, animal: A = "Cat"}} = Person_Data;
console.log("\nFood:", F, "\nPlay:", P, "\nAnimal:", A);