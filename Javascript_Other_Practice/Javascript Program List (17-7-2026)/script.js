/* Javascript Program List */

// String Programs
console.log("<<<===>>> String Programs <<<===>>>");

// Que 1. 
console.log("<<<==== Que 1. ====>>>");

{
    let str = "Hello javascript"

    console.log(str.length);
}

// Que 2. 
console.log("<<<==== Que 2. ====>>>");

{
    let str = "Javascript";

    console.log(str.charAt(0));
}

// Que 3. 
console.log("<<<==== Que 3. ====>>>");

{
    let str = "Hello Students";

    console.log(str.indexOf("S"));
}

// Que 4. 
console.log("<<<==== Que 4. ====>>>");

{
    let str = "I Love javascript";

    console.log(str.includes("Love"));
}

// Que 5. 
console.log("<<<==== Que 5. ====>>>");

{
    let str = "javascript";

    console.log(str.slice(0, 4));

    let str1 = "javascript";

    console.log(str1.substring(4, 10));
}

// Que 6. 
console.log("<<<==== Que 6. ====>>>");

{
    let str = "Javascript";

    // toUpperCase()
    console.log(str.toUpperCase());

    // toLowerCase()
    console.log(str.toLowerCase());
}

// Que 7. 
console.log("<<<==== Que 7. ====>>>");

{
    let str = "    Hello Javascript   ";

    console.log(str.trim());
}

// Que 8. 
console.log("<<<==== Que 8. ====>>>");

{
    let str = "HTML CSS Bootstrap Javascript";

    console.log(str.split(" "));
}

// Que 9. 
console.log("<<<==== Que 9. ====>>>");

{
    // replace()
    let str = "I love Javascript. Javascript is scripting language";

    console.log(str.replace("Javascript", "Java"));

    // replaceAll()
    let str1 = "I love Javascript. Javascript is scripting language";

    console.log(str1.replaceAll("Javascript", "Java"));
}

// Que 10. 
console.log("<<<==== Que 10. ====>>>");

{
    let str = "Hello ";

    console.log(str.repeat(5));
}

// Que 11. 
console.log("<<<==== Que 11. ====>>>");

{
    let num = "25";

    console.log(num.padStart(7, "0"));
}

// Que 12. 
console.log("<<<==== Que 12. ====>>>");

{
    let firstName = "Yug";

    let lastName = "Patel";

    let fullName = firstName.concat(" ", lastName);

    console.log(fullName);
}

// Que 13. 
console.log("<<<==== Que 13. ====>>>");

{
    let str = "Javascript is Awesome";

    // startsWith()
    console.log(str.startsWith("Javascript"));

    // endsWith()
    console.log(str.endsWith("Awesome"));
}


// Array Programs
console.log("<<<===>>> Array Programs <<<===>>>");

// Que 1.
console.log("<<<==== Que 1. ====>>>");

{
    let foods = ["Pizza", "Burger", "Frenki"];

    // push()
    foods.push("Chips")
    console.log(foods);

    // pop()
    foods.pop()
    console.log(foods);
}

// Que 2.
console.log("<<<==== Que 2. ====>>>");

{
    let movies = ["Dhurandhar", "Animal"];

    // unshift()
    movies.unshift("Toxic")
    console.log(movies);

    // shift()
    movies.shift()
    console.log(movies);
}

// Que 3.
console.log("<<<==== Que 3. ====>>>");

{
    let num = [1, 2, 3, 4, 5, 6];

    let result = num.map(num => num * 2);

    console.log(result);
}

// Que 4.
console.log("<<<==== Que 4. ====>>>");

{
    let num = [10, 20, 30, 40, 50, 60];

    let result = num.filter(num => num > 30);

    console.log(result);
}

// Que 5.
console.log("<<<==== Que 5. ====>>>");

{
    let num = [10, 20, 30, 40, 50, 60];

    let result = num.reduce(function (total, num) {
        return total + num;
    });

    console.log(result);
}

// Que 6.
console.log("<<<==== Que 6. ====>>>");

{
    let animal = ["Panda", "Tiger", "Lion"];

    animal.forEach((animal) => {
        console.log(animal);
    });
}

// Que 7.
console.log("<<<==== Que 7. ====>>>");

{
    let num = [10, 20, 30, 40, 50, 60];

    // find()
    let value = num.find(function (num) {
        return num > 20;
    });

    console.log(value);

    // findIndex()
    let index = num.findIndex(function (num) {
        return num > 20;
    });

    console.log(index);
}

// Que 8.
console.log("<<<==== Que 8. ====>>>");

{
    let citys = ["Surat", "Ahemdabad", "Rajkot", "Bhavnagar"];

    console.log(citys.includes("Rajkot"));
}

// Que 9.
console.log("<<<==== Que 9. ====>>>");

{
    let num = [30, 50, 40, 70, 10, 80];

    num.sort(function (a, b) {
        return a - b;
    });

    console.log(num);
}

// Que 10.
console.log("<<<==== Que 10. ====>>>");

{
    let num = [10, 20, 30, 40, 50];

    console.log(num.reverse());
}

// Que 11.
console.log("<<<==== Que 11. ====>>>");

{
    let fruits = ["Apple", "Banana", "Mango", "Cherry", "pineapple"];

    let result = fruits.slice(1, 4);

    console.log(result);
}

// Que 12.
console.log("<<<==== Que 12. ====>>>");

{
    let countrys = ["India", "Chanda", "UK", "USA"];

    // Add element
    countrys.splice(1, 0, "China");

    console.log(countrys);

    // Remove element
    countrys.splice(1, 1);

    console.log(countrys);
}

// Que 13.
console.log("<<<==== Que 13. ====>>>");

{

}

// Que 14.
console.log("<<<==== Que 14. ====>>>");

{

}

// Que 15.
console.log("<<<==== Que 15. ====>>>");

{

}

// Que 16.
console.log("<<<==== Que 16. ====>>>");

{

}
