/* Javascript Program List */

// 1. String Programs
console.log(" ");
console.log("<<<===>>> 1. String Programs <<<===>>>");
console.log(" ");


// Que 1. 
console.log("<<<==== 1. Find the length of a string ====>>>");

{
    let str = "Hello javascript"

    console.log(str.length);
}

// Que 2. 
console.log("<<<==== 2. Get character at a given index ====>>>");

{
    let str = "Javascript";

    console.log(str.charAt(0));
}

// Que 3. 
console.log("<<<==== 3. Search for a substring and check its position ====>>>");

{
    let str = "Hello Students";

    console.log(str.indexOf("S"));
}

// Que 4. 
console.log("<<<==== 4. Check if a string contains a specific word ====>>>");

{
    let str = "I Love javascript";

    console.log(str.includes("Love"));
}

// Que 5. 
console.log("<<<==== 5. Extract a portion of a string using slice/substring ====>>>");

{
    let str = "javascript";

    console.log(str.slice(0, 4));

    let str1 = "javascript";

    console.log(str1.substring(4, 10));
}

// Que 6. 
console.log("<<<==== 6. Convert a string to uppercase and lowercase ====>>>");

{
    let str = "Javascript";

    console.log(str.toUpperCase());

    console.log(str.toLowerCase());
}

// Que 7. 
console.log("<<<==== 7. Remove extra spaces from a string ====>>>");

{
    let str = "    Hello Javascript   ";

    console.log(str.trim());
}

// Que 8. 
console.log("<<<==== 8. Split a sentence into an array of words ====>>>");

{
    let str = "HTML CSS Bootstrap Javascript";

    console.log(str.split(" "));
}

// Que 9. 
console.log("<<<==== 9. Replace a word in a string (single and all occurrences) ====>>>");

{
    let str = "I love Javascript. Javascript is scripting language";

    console.log(str.replace("Javascript", "Java"));

    let str1 = "I love Javascript. Javascript is scripting language";

    console.log(str1.replaceAll("Javascript", "Java"));
}

// Que 10. 
console.log("<<<==== 10.Repeat a string a given number of times ====>>>");

{
    let str = "Hello ";

    console.log(str.repeat(5));
}

// Que 11. 
console.log("<<<==== 11. Pad a number with leading zeros ====>>>");

{
    let num = "25";

    console.log(num.padStart(7, "0"));
}

// Que 12. 
console.log("<<<==== 12. Join multiple strings together ====>>>");

{
    let firstName = "Yug";

    let lastName = "Patel";

    let fullName = firstName.concat(" ", lastName);

    console.log(fullName);
}

// Que 13. 
console.log("<<<==== 13. Check if a string starts/ends with a specific word ====>>>");

{
    let str = "Javascript is Awesome";

    console.log(str.startsWith("Javascript"));

    console.log(str.endsWith("Awesome"));
}


// 2. Array Programs
console.log(" ");
console.log("<<<===>>> 2. Array Programs <<<===>>>");
console.log(" ");


// Que 1.
console.log("<<<==== 1. Add and remove elements from the end of an array ====>>>");

{
    let foods = ["Pizza", "Burger", "Frenki"];

    foods.push("Chips")
    console.log(foods);

    foods.pop()
    console.log(foods);
}

// Que 2.
console.log("<<<==== 2. Add and remove elements from the beginning of an array ====>>>");

{
    let movies = ["Dhurandhar", "Animal"];

    movies.unshift("Toxic")
    console.log(movies);

    movies.shift()
    console.log(movies);
}

// Que 3.
console.log("<<<==== 3. Double every number in an array using map ====>>>");

{
    let num = [1, 2, 3, 4, 5, 6];

    let result = num.map(num => num * 2);

    console.log(result);
}

// Que 4.
console.log("<<<==== 4. Filter numbers greater than a given value ====>>>");

{
    let num = [10, 20, 30, 40, 50, 60];

    let result = num.filter(num => num > 30);

    console.log(result);
}

// Que 5.
console.log("<<<==== 5. Find the sum of all array elements using reduce ====>>>");

{
    let num = [10, 20, 30, 40, 50, 60];

    let result = num.reduce(function (total, num) {
        return total + num;
    });

    console.log(result);
}

// Que 6.
console.log("<<<==== 6. Print each element using forEach ====>>>");

{
    let animal = ["Panda", "Tiger", "Lion"];

    animal.forEach((animal) => {
        console.log(animal);
    });
}

// Que 7.
console.log("<<<==== 7. Find the first element/index matching a condition ====>>>");

{
    let num = [10, 20, 30, 40, 50, 60];

    let value = num.find(function (num) {
        return num > 20;
    });

    console.log(value);

    let index = num.findIndex(function (num) {
        return num > 20;
    });

    console.log(index);
}

// Que 8.
console.log("<<<==== 8. Check if an array contains a specific value ====>>>");

{
    let citys = ["Surat", "Ahemdabad", "Rajkot", "Bhavnagar"];

    console.log(citys.includes("Rajkot"));
}

// Que 9.
console.log("<<<==== 9. Sort an array of numbers in ascending order ====>>>");

{
    let num = [30, 50, 40, 70, 10, 80];

    num.sort(function (a, b) {
        return a - b;
    });

    console.log(num);
}

// Que 10.
console.log("<<<==== 10.Reverse an array ====>>>");

{
    let num = [10, 20, 30, 40, 50];

    console.log(num.reverse());
}

// Que 11.
console.log("<<<==== 11. Extract a portion of an array ====>>>");

{
    let fruits = ["Apple", "Banana", "Mango", "Cherry", "pineapple"];

    let result = fruits.slice(1, 4);

    console.log(result);
}

// Que 12.
console.log("<<<==== 12. Insert/remove elements at a specific index ====>>>");

{
    let countrys = ["India", "Chanda", "UK", "USA"];

    countrys.splice(1, 0, "China");

    console.log(countrys);

    countrys.splice(1, 1);

    console.log(countrys);
}

// Que 13.
console.log("<<<==== 13. Merge two arrays ====>>>");

{
    let apps = ["YouTube", "SnapChat", "Twitter"];

    let apps2 = ["Instagram", "Facebook", "Github"];

    let merge = apps.concat(apps2);

    console.log(merge);
}

// Que 14.
console.log("<<<==== 14.Convert an array into a string ====>>>");

{
    let games = ["FreeFire", "BGMI", "Call of Duty"];

    let result = games.toString();

    console.log(result);
}

// Que 15.
console.log("<<<==== 15. Flatten a nested array ====>>>");

{
    let num = [1, 2, [3, 4], [5, 6]];

    console.log(num.flat());
}

// Que 16.
console.log("<<<==== 16. Check whether a variable is an array ====>>>");

{
    let fruits = ["Apple", "Banana"];

    console.log(Array.isArray(fruits));
}

// 3. Object Programs
console.log(" ");
console.log("<<<===>>> 3. Object Programs <<<===>>>");
console.log(" ");


// Que 1.
console.log("<<<==== 1. Get all keys of an object ====>>>");

{
    let student = {
        name: "Yug",
        age: 18,
        city: "Surat"
    };

    console.log(Object.keys(student));
}

// Que 2.
console.log("<<<==== 2. Get all values of an object ====>>>");

{
    let student = {
        name: "Yug",
        age: 18,
        city: "Surat"
    };

    console.log(Object.values(student));
}

// Que 3.
console.log("<<<==== 3. Get key-value pairs as an array ====>>>");

{
    let student = {
        name: "Yug",
        age: 18,
        city: "Surat"
    };

    console.log(Object.entries(student));
}

// Que 4.
console.log("<<<==== 4. Merge two objects into one ====>>>");

{
    let student = {
        name: "yug",
        age: 18
    }

    let student1 = {
        course: "FSD",
        grid: 10278
    }

    console.log(Object.assign(student, student1));

}

// Que 5.
console.log("<<<==== 5. Freeze an object and try modifying it ====>>>");

{
    let student = {
        name: "Yug",
        age: 18
    }

    Object.freeze(student);

    student.age = 21;

    console.log(student);
}

// Que 6.
console.log("<<<==== 6. Check if an object is frozen ====>>>");

{
    let student = {
        name: "Yug",
        age: 18
    }

    Object.freeze(student)

    console.log(Object.isFrozen(student));
}

// Que 7.
console.log("<<<==== 7. Convert an array of pairs into an object ====>>>");

{
    let student = [
        ["name", "Yug"],
        ["age", 18],
        ["city", "Surat"]
    ];

    let result = Object.fromEntries(student);

    console.log(result);
}

// Que 8.
console.log("<<<==== 8. Check if an object has a specific property ====>>>");

{
    let student = {
        name: "Yug",
        age: 19
    };

    console.log(student.hasOwnProperty("age"));
}

// Que 9.
console.log("<<<==== 9. Create an object with a custom prototype ====>>>");

{
    let Age = {
        age: 19
    };

    let student = Object.create(Age);

    student.name = "Yug";

    console.log("Name = ", student.name);

    console.log("Age = ", student.age);
}

// 4. Map Programs
console.log(" ");
console.log("<<<===>>> 4. Map Programs <<<===>>>");
console.log(" ");


// Que 1.
console.log("<<<==== 1. Create a map of countries and their capitals ====>>>");

{
    let countries = new Map();

    countries.set("India", "New Delhi");
    countries.set("Japan", "Tokyo");

    console.log(countries);
}

// Que 2.
console.log("<<<==== 2. Get a value from a map using its key ====>>>");

{
    let countries = new Map();

    countries.set("India", "New Delhi");

    console.log(countries.get("India"));
}

// Que 3.
console.log("<<<==== 3. Check if a key exists in a map ====>>>");

{

    let countries = new Map();

    countries.set("UK");

    console.log(countries.has("UK"));
}

// Que 4.
console.log("<<<==== 4. Find the total number of entries in a map ====>>>");

{
    let countries = new Map();

    countries.set("India", "New Delhi");
    countries.set("Japan", "Tokyo");
    countries.set("USA", "Washigton");

    console.log(countries.size);
}

// Que 5.
console.log("<<<==== 5. Loop through all entries of a map ====>>>");

{
    let countries = new Map();

    countries.set("India", "New Delhi");
    countries.set("USA", "Washington");

    countries.forEach(function (value, key) {
        console.log(key, ":", value);
    });
}

// Que 6.
console.log("<<<==== 6. Get all keys/values from a map separately ====>>>");

{
    let countries = new Map();

    countries.set("India", "New Delhi");
    countries.set("USA", "Washington");

    console.log(countries.keys());

    console.log(countries.values());
}

// Que 7.
console.log("<<<==== 7. Delete an entry from a map ====>>>");

{
    let countries = new Map();

    countries.set("India", "New Delhi");
    countries.set("USA", "Washington");

    countries.delete("USA");

    console.log(countries);
}


// 5. Set Programs
console.log(" ");
console.log("<<<===>>> 5. Set Programs <<<===>>>");
console.log(" ");


// Que 1.
console.log("<<<==== 1. Create a set and add values to it ====>>>");

{
    let num = new Set();

    num.add(10);
    num.add(20);
    num.add(30);
    num.add(40);
    num.add(50);

    console.log(num);
}

// Que 2.
console.log("<<<==== 2. Check if a value exists in a set ====>>>");

{
    let num = new Set([10, 20, 30, 40, 50]);

    console.log(num.has(20));
}

// Que 3.
console.log("<<<==== 3. Remove a value from a se ====>>>");

{
    let num = new Set([10, 20, 30, 40, 50]);

    num.delete(20)

    console.log(num);
}

// Que 4.
console.log("<<<==== 4. Find the size of a set ====>>>");

{
    let num = new Set([10, 20, 30, 40, 50, 60, 70, 80]);

    console.log(num.size);
}

// Que 5.
console.log("<<<==== 5. Loop through all values in a set ====>>>");

{
    let num = new Set([10, 20, 30]);

    num.forEach(function (value) {
        console.log(value);
    });
}

// Que 6.
console.log("<<<==== 6. Remove duplicate values from an array using a set ====>>>");

{
    let num = [10, 20, 20, 30, 30, 40];

    let result = [...new Set(num)];

    console.log(result);
}

// 6. Date Programs
console.log(" ");
console.log("<<<===>>> 6. Date Programs <<<===>>>");
console.log(" ");


// Que 1.
console.log("<<<==== 1. Get the current date and time ====>>>");

{
    let today = new Date();

    console.log("Today :- ", today);
}

// Que 2.
console.log("<<<==== 2. Extract year, month, and day from a date ====>>>");

{
    let today = new Date();

    console.log("Year :- ", today.getFullYear());
    console.log("Month :- ", today.getMonth() + 1);
    console.log("Day :- ", today.getDay());
}

// Que 3.
console.log("<<<==== 3. Find the current day of the week ====>>>");

{
    let today = new Date();

    console.log("Get Day :- ", today.getDay());
}

// Que 4.
console.log("<<<==== 4. Get the timestamp of the current date ====>>>");

{
    let today = new Date();

    console.log("Get Time :- ", today.getTime());
}

// Que 5.
console.log("<<<==== 5. Convert a date to ISO format ====>>>");

{
    let today = new Date();

    console.log(today.toISOString());
}

// Que 6.
console.log("<<<==== 6. Create a custom date (specific year/month/day) ====>>>");

{
    let birthday = new Date(2007, 10, 12);

    console.log("Date of birthday :- ", birthday);
}

// Que 7.
console.log("<<<==== 7. Change the year of an existing date ====>>>");

{
    let today = new Date();

    today.setFullYear(2028);

    console.log("Change the year :- ", today);
}

// Que 8.
console.log("<<<==== 8. Get the current timestamp using Date.now() ====>>>");

{
    console.log(Date.now());
}

// 7. Number Programs
console.log(" ");
console.log("<<<===>>> 7. Number Programs <<<===>>>");
console.log(" ");


// Que 1.
console.log("<<<==== 1. Round a decimal number to 2 places ====>>>");

{
    let num = 12.6453;

    console.log(num.toFixed(2));
}

// Que 2.
console.log("<<<==== 2. Format a number to a given number of significant digits ====>>>");

{
    let num = 1253.3543;

    console.log(num.toPrecision(6));
}

// Que 3.
console.log("<<<==== 3. Convert a number to binary/other base ====>>>");

{
    let num = 12;

    console.log(num.toString(2));
}

// Que 4.
console.log("<<<==== 4. Check if a number is an integer ====>>>");

{
    let num = 12;

    console.log(Number.isInteger(num));
}

// Que 5.
console.log("<<<==== 5. Check if a number is finite ====>>>");

{
    console.log(Number.isFinite(100));
}

// Que 6.
console.log("<<<==== 6. Check if a value is NaN ====>>>");

{
    let num = NaN;

    console.log(Number.isNaN(num));
}

// Que 7.
console.log("<<<==== 7. Parse a string into a floating-point/integer number ====>>>");

{
    let num1 = "12";
    let num2 = "12.11";

    console.log(parseInt(num1));

    console.log(parseFloat(num2));
}

// Que 8.
console.log("<<<==== 8. Print the maximum safe integer value ====>>>");

{
    console.log(Number.MAX_SAFE_INTEGER);
}


// 8. Math Programs
console.log(" ");
console.log("<<<===>>> 8. Math Programs <<<===>>>");
console.log(" ");


// Que 1.
console.log("<<<==== 1. Round a number up/down/nearest ====>>>");

{
    let num = 12.8;

    console.log("Up value :- ", Math.ceil(num));

    console.log("Down value :- ", Math.floor(num));

    console.log("Nearest value :- ", Math.round(num));
}

// Que 2.
console.log("<<<==== 2. Find the absolute value of a negative number ====>>>");

{
    console.log("absolute value of a negative number :-", Math.abs(-20));
}

// Que 3.
console.log("<<<==== 3. Find the maximum/minimum among given numbers ====>>>");

{
    console.log("Max value :- ", Math.max(14, 520, 343, 63, 345, 635));

    console.log("Min value :- ", Math.min(14, 23, 24, 4, 67, 34));
}

// Que 4.
console.log("<<<==== 4. Calculate the power of a number ====>>>");

{
    console.log("Power Of 7 :- ", Math.pow(7, 3));

    console.log("Power Of 4 :- ", Math.pow(4, 3));
}

// Que 5.
console.log("<<<==== 5. Find the square root of a number ====>>>");

{
    let num = 25;

    console.log(num, "Squre :- ", Math.sqrt(num));

    let num1 = 625;

    console.log(num1, "Squre :- ", Math.sqrt(num1));
}

// Que 6.
console.log("<<<==== 6. Generate a random number between 0 and 1 ====>>>");

{
    console.log("This is the any random value :- ", Math.random());
}

// Que 7.
console.log("<<<==== 7. Generate a random integer within a range ====>>>");

{
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    console.log(getRandomInt(1, 10));
}

// Que 8.
console.log("<<<==== 8. Truncate the decimal part of a number ====>>>");

{
    console.log(Math.trunc(12.64));

    console.log(Math.trunc(0));

    console.log(Math.trunc(12.11));

    console.log(Math.trunc(-12.64));
}

// Que 9.
console.log("<<<==== 9. Check the sign of a number ====>>>");

{
    console.log(Math.sign(12));

    console.log(Math.sign(0));

    console.log(Math.sign(-12));
}

// Que 10.
console.log("<<<==== 10.Print the value of PI ====>>>");

{
    console.log("This is the PI value :- ", Math.PI);
}
