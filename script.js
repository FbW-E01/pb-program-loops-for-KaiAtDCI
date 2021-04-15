// 1
let result = 0;
for (let n = 1; n <= 20; n++) {
    result = result + n;
}
console.log(result);

// 2

for (let i = 1; i <= 5; i++) {
    let verb = i === 1 ? 'is' : 'are';
    let noun = i === 1 ? 'bottle' : 'bottles';
    let number;

    switch (i) {
        case 1 : number = 'one'; break;
        case 2 : number = 'two'; break;
        case 3 : number = 'three'; break;
        case 4 : number = 'four'; break;
        case 5 : number = 'five'; break;
    }
    console.log(`There ${verb} ${number} ${noun} of beer on the wall.`);
}

//3
let message = '';
for (let i = 0; i <= 20; i++) {
    (i % 2 === 0) ? message = i + ' is even.' : message = i + ' is odd';
    console.log(message);
}

// 4
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// 5

for (let i = 1; i <= 100; i++) {

    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log('FizzBuzz');
    }

    if (i % 3 === 0) {
        console.log('Fizz at ' + i);
        continue;
    }
    if (i % 5 === 0) {
        console.log('Buzz at ' + i);
        continue;
    }
    console.log(i);
}

// 6
let res = 0;
for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        res += i;
        console.log(`added ${i}, new result = ${res}`);
    }
}
console.log (`Total result ${res}`);

