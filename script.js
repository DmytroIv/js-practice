/* 
// for in 
const person = {
    name: 'Mosh',
    age: 23,
    car: "Ford"
}

for (let key in person) {
    console.log(key, ":", person[key]);
}

// const colors = ['red', 'green', 'blue'];
// for (let index in colors) {
    // console.log(index, ":", colors[index]);
// } 


// for of
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
    console.log(color);
}

// 
let i = 0;
while (i <= 10) {
    // if (i === 5) break;
    // console.log(i);

    if (i % 2 === 0) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}
 */



/*
const output = fizzBuzz(17);
console.log(output);

function fizzBuzz(input) {
    if (!isNumeric(input))
        return "Not a number"

    if ((input % 3 + input % 5) === 0) {
        return 'FizzBuzz';
    }

    if (input % 3 === 0) {
        return 'Fizz';
    }

    if (input % 5 === 0) {
        return 'Buzz';
    }

    return input;
} 
*/
/* 
var currentSpeed = checkSpeed(125);
console.log(currentSpeed);

function checkSpeed(speed) {

    if (!isNumeric(speed)) return "Speed is not a number";

    const speedLinit = 70;
    const kmPerPoint = 5;

    if (speed < speedLinit + kmPerPoint) {
        return 'Ok';
    }

    const points = Math.floor((speed - speedLinit) / kmPerPoint);
    if (points >= 12) {
        return 'License suspended';
    } else {
        return points == 1 ? points + ' point' : points + ' points';
    }

}
*/
/* 
showNumbers(10);
function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        let x = i % 2 === 0 ? i + ' EVEN' : i + ' ODD';
        console.log(x);
    }
}
*/
/* 
const arr = [1, 2, 3, '', undefined, NaN, null, 'tew', false, 0, ];
contryTruthy(arr)

function contryTruthy(array) {
    let counter = 0;

    for (let item of array) {
        if (item) counter++;
    }
    console.log(counter);
    return;
}
 */
/* 
const obj = {
    title: 'str title',
    relaseYear: 1990,
    rating: 5.5,
    direcror: "Spilberg"
}
showProperties(obj);

function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            console.log(key, ":", obj[key]);
        }
    }
}
*/
/*
sumOfThreeFive(10); 
function sumOfThreeFive(limit) {
    let sum = 0;

    for (let i = 1; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    console.log(sum);
    return;
}
*/
/* 
const marks = [80, 80, 50];
console.log(calculateGrade(marks));

function calculateGrade(marks) {
    average = calculateAverage(marks);

    let grade = '';
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

function calculateAverage(arr) {
    let sum = 0;
    for (let item of arr) {
        sum += item;
    }
    return sum / arr.length;
}
*/
/* 
showStars(7);

function showStars(rows) {
    let row = '';
    for (let i = 0; i < rows; i++) {
        let star = '*';
        console.log(row += star);
    }
}
*/
/* 
showPrime(21);
function showPrime(limit) {
    outer: for (let i = 2; i <= limit; i++) {

        for (let j = 2; j < limit; j++) {
            if (i % j === 0 && i !== j) {
                continue outer;
            }
        }
        console.log(i);
    }
}
*/

// helpers 
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}