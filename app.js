function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

console.log('Pradedam');

// 1

const tagH1 = document.querySelector('h1');
const tagH2 = document.querySelector('h2');
const tagH3 = document.querySelector('h3');
const tagH4 = document.querySelector('h4');

tagH1.innerText = '1';
tagH2.innerText = '2';
tagH3.innerText = '3';
tagH4.innerText = '4';

// 2

const div1 = document.querySelector('div:nth-of-type(1)');
const div2 = document.querySelector('div:nth-of-type(2)');

div1.style.backgroundColor = 'blue';
div1.style.width = '100px';
div1.style.height = '100px';

div2.style.backgroundColor = 'red';
div2.style.width = '100px';
div2.style.height = '100px';
div2.style.borderRadius = '50%';

// 3

const span1 = document.querySelector('#go3 span:nth-of-type(1)');
const span2 = document.querySelector('#go3 span:nth-of-type(2)');
const span3 = document.querySelector('#go3 span:nth-of-type(3)');
var A = rand(0, 4);
var B = rand(0, 4);

console.log('A:', A, 'B:', B);

if (A > B && B != 0) {
    span1.innerText = A;
    span2.innerText = B;
    var C = A / B;
    span3.innerText = C;
} else if (B > A && A != 0) {
    span1.innerText = B;
    span2.innerText = A;
    var C = B / A;
    span3.innerText = C;
} else if (A == B) {
    span1.innerText = '';
    span2.innerText = '';
    span3.innerText = 'Abu skaičiai lygūs';
} else if (A > B && B == 0) {
    span1.innerText = A;
    span2.innerText = B;
    span3.innerText = 'Iš nulio dalyba negalima';
} else {
    span1.innerText = B;
    span2.innerText = A;
    span3.innerText = 'Iš nulio dalyba negalima';
}

// 4

const div1_4 = document.querySelector('#go4 div:nth-of-type(1)');
const div2_4 = document.querySelector('#go4 div:nth-of-type(2)');
const div3_4 = document.querySelector('#go4 div:nth-of-type(3)');
const section_4 = document.querySelector('section#go4');

section_4.style.display = 'flex';
div1_4.style.backgroundColor = 'green';
div2_4.style.backgroundColor = 'green';
div3_4.style.backgroundColor = 'green';
div1_4.style.borderRadius = '50%';
div2_4.style.borderRadius = '50%';
div3_4.style.borderRadius = '50%';
var A = rand(50, 200);
var B = rand(50, 200);
var C = rand(50, 200);

console.log('A:', A, 'B:', B, 'C:', C)

if (A >= B && A >= C) {
    if (B >= C) {
        div1_4.style.width = C + 'px';
        div1_4.style.height = C + 'px';
        div2_4.style.width = B + 'px';
        div2_4.style.height = B + 'px';
        div3_4.style.width = A + 'px';
        div3_4.style.height = A + 'px';
    } else {
        div1_4.style.width = B + 'px';
        div1_4.style.height = B + 'px';
        div2_4.style.width = C + 'px';
        div2_4.style.height = C + 'px';
        div3_4.style.width = A + 'px';
        div3_4.style.height = A + 'px';
    }
} else if (B >= A && B >= C) {
    if (A >= C) {
        div1_4.style.width = C + 'px';
        div1_4.style.height = C + 'px';
        div2_4.style.width = A + 'px';
        div2_4.style.height = A + 'px';
        div3_4.style.width = B + 'px';
        div3_4.style.height = B + 'px';
    } else {
        div1_4.style.width = A + 'px';
        div1_4.style.height = A + 'px';
        div2_4.style.width = C + 'px';
        div2_4.style.height = C + 'px';
        div3_4.style.width = B + 'px';
        div3_4.style.height = B + 'px';
    }
} else if (C >= A && C >= B) {
    if (A >= B) {
        div1_4.style.width = B + 'px';
        div1_4.style.height = B + 'px';
        div2_4.style.width = A + 'px';
        div2_4.style.height = A + 'px';
        div3_4.style.width = C + 'px';
        div3_4.style.height = C + 'px';
    } else {
        div1_4.style.width = A + 'px';
        div1_4.style.height = A + 'px';
        div2_4.style.width = B + 'px';
        div2_4.style.height = B + 'px';
        div3_4.style.width = C + 'px';
        div3_4.style.height = C + 'px';
    }
}

// 5

const span1_5 = document.querySelector('#go5 span:nth-of-type(1)');
const span2_5 = document.querySelector('#go5 span:nth-of-type(2)');
const span3_5 = document.querySelector('#go5 span:nth-of-type(3)');
var A = rand(-10, 10);
var B = rand(-10, 10);
var C = rand(-10, 10);

span1_5.innerText = A;
span2_5.innerText = B;
span3_5.innerText = C;

if (A > 0) {
    span1_5.style.color = 'blue';
} else if (A < 0) {
    span1_5.style.color = 'red';
} else {
    span1_5.style.color = 'green';
}

if (B > 0) {
    span2_5.style.color = 'blue';
} else if (B < 0) {
    span2_5.style.color = 'red';
} else {
    span2_5.style.color = 'green';
}

if (C > 0) {
    span3_5.style.color = 'blue';
} else if (C < 0) {
    span3_5.style.color = 'red';
} else {
    span3_5.style.color = 'green';
}

// 6

const span1_6 = document.querySelector('section#go6 [data-amount] span');
const span2_6 = document.querySelector('section#go6 [data-subtotal] span');
const span3_6 = document.querySelector('section#go6 [data-discount] span');
const span4_6 = document.querySelector('section#go6 [data-total] span');

var zvakes = rand(5, 3000);
var suma;

span1_6.innerText = zvakes;
span2_6.innerText = zvakes;

if (zvakes > 1000) {
    span3_6.innerText = 3;
    suma = zvakes * 0.97;
    span4_6.innerText = parseFloat(suma).toFixed(2);
} else if (zvakes > 2000) {
    span3_6.innerText = 4;
    suma = zvakes * 0.96;
    span4_6.innerText = parseFloat(suma).toFixed(2);
} else {
    span3_6.innerText = 0;
    suma = zvakes;
    span4_6.innerText = parseFloat(suma).toFixed(2);
}

// 7

const div1_7 = document.querySelector('#go7 div');
var A = rand(1, 3);

if (A == 1) {
    div1_7.style.width = '100px';
    div1_7.style.height = '100px';
    div1_7.style.backgroundColor = 'black'
} else if (A == 2) {
    div1_7.style.width = '100px';
    div1_7.style.height = '100px';
    div1_7.style.borderRadius = '50%';
    div1_7.style.backgroundColor = 'black'
} else {
    div1_7.style.width = '0px';
    div1_7.style.height = '0px';
    div1_7.style.borderLeft = '100px solid transparent';
    div1_7.style.borderRight = '100px solid transparent';
    div1_7.style.borderBottom = '100px solid black';
}

// 8

// const divs8 = document.querySelectorAll('#go8 div');

// const spanGreen = document.querySelector('section#go8 [data-result] [data-green] span');
// const spanRed = document.querySelector('section#go8 [data-result] [data-red] span');
// const spanBlue = document.querySelector('section#go8 [data-result] [data-blue] span');

// var zal = 0, raud = 0, mel = 0;

// divs8.forEach((div) => {
//     if (div.style.backgroundColor == 'green') {
//         zal++;
//     } else if (div.style.backgroundColor == 'red') {
//         raud++;
//     } else if (div.style.backgroundColor == 'blue') {
//         mel++;
//     }
// });

// spanGreen.innerText = zal;
// spanRed.innerText = raud;
// spanBlue.innerText = mel;

const circ1 = document.querySelector("#go8 div:nth-of-type(1)");
const circ2 = document.querySelector("#go8 div:nth-of-type(2)");
const circ3 = document.querySelector("#go8 div:nth-of-type(3)");
const circ4 = document.querySelector("#go8 div:nth-of-type(4)");
const circ5 = document.querySelector("#go8 div:nth-of-type(5)");
const circ6 = document.querySelector("#go8 div:nth-of-type(6)");
 
let raudoni = 0;
let zali = 0;
let melyni = 0;
 
if (circ1.style.backgroundColor == 'red') {
  raudoni++;
} else if (circ1.style.backgroundColor == 'green') {
  zali++;
} else {
  melyni++;
}
if (circ2.style.backgroundColor == 'red') {
  raudoni++;
} else if (circ2.style.backgroundColor == 'green') {
  zali++;
} else {
  melyni++;
}
if (circ3.style.backgroundColor == 'red') {
  raudoni++;
} else if (circ3.style.backgroundColor == 'green') {
  zali++;
} else {
  melyni++;
}
if (circ4.style.backgroundColor == 'red') {
  raudoni++;
} else if (circ4.style.backgroundColor == 'green') {
  zali++;
} else {
  melyni++;
}
if (circ5.style.backgroundColor == 'red') {
  raudoni++;
} else if (circ5.style.backgroundColor == 'green') {
  zali++;
} else {
  melyni++;
}
if (circ6.style.backgroundColor == 'red') { 
  raudoni++;
} else if (circ6.style.backgroundColor == 'green') {
  zali++;
} else {
  melyni++;
}
 
 
const blue = document.querySelector("section#go8 [data-blue] span");
const raudona = document.querySelector("section#go8 [data-red] span");
const zalia = document.querySelector("section#go8 [data-green] span");
 
blue.innerText = melyni;
raudona.innerText = red;
zalia.innerText = green;
 


// 9

const rows9 = document.querySelectorAll('#go9 div');

for (let i = 0; i < rows9.length; i++) {
    const row = rows9[i];
    const spans = row.querySelectorAll('span');
    
    const num1 = spans[0].textContent;
    const num2 = spans[1].textContent;
    
    const result = num1 * num2;
    
    spans[2].textContent = result;
}

// 10

const squares = document.querySelectorAll('#go10 div');

for (let i = 0; i < squares.length; i++) {
    const square = squares[i];
    const width = parseInt(square.style.width);
    const height = parseInt(square.style.height);
    
    const plot = width * height;
    
    if (plot > 10000) {
        square.style.backgroundColor = 'red';
    }
    
    console.log('Plotas: ', plot, 'px ');
}




// const width1 = parseInt(uzd10Div1.style.width);
// const height1 = parseInt(uzd10Div1.style.height);
// const plot1 = width1 * height1;
// if (plot1 > 10000) {
//     uzd10Div1.style.backgroundColor = 'red';
// }

// const width2 = parseInt(uzd10Div2.style.width);
// const height2 = parseInt(uzd10Div2.style.height);
// const plot2 = width2 * height2;
// if (plot2 > 10000) {
//     uzd10Div2.style.backgroundColor = 'red';
// }

// const width3 = parseInt(uzd10Div3.style.width);
// const height3 = parseInt(uzd10Div3.style.height);
// const plot3 = width3 * height3;
// if (plot3 > 10000) {
//     uzd10Div3.style.backgroundColor = 'red';
// }

// const width4 = parseInt(uzd10Div4.style.width);
// const height4 = parseInt(uzd10Div4.style.height);
// const plot4 = width4 * height4;
// if (plot4 > 10000) {
//     uzd10Div4.style.backgroundColor = 'red';
// }

// const width5 = parseInt(uzd10Div1.style.width);
// const height5 = parseInt(uzd10Div1.style.height);
// const plot5 = width5 * height5;
// if (plot5 > 10000) {
//     uzd10Div5.style.backgroundColor = 'red';
// }

// const uzd10Div1 = document.querySelector('#go10 div:nth-child(1)');
// const uzd10Div2 = document.querySelector('#go10 div:nth-child(2)');
// const uzd10Div3 = document.querySelector('#go10 div:nth-child(3)');
// const uzd10Div4 = document.querySelector('#go10 div:nth-child(4)');
// const uzd10Div5 = document.querySelector('#go10 div:nth-child(5)');

// if (uzd10Div1) {
//     const width = parseInt(uzd10Div1.style.width);
//     const height = parseInt(uzd10Div1.style.height);
    
//     const plot = width * height;
    
//     if (plot > 10000) {
//         uzd10Div1.style.backgroundColor = 'red';
//     }
//     console.log('Plotas: ', plot, 'px ');
// }

// if (uzd10Div2) {
//     const width = parseInt(uzd10Div2.style.width);
//     const height = parseInt(uzd10Div2.style.height);
    
//     const plot = width * height;
    
//     if (plot > 10000) {
//         uzd10Div2.style.backgroundColor = 'red';
//     }
//     console.log('Plotas: ', plot, 'px ');
// }

// if (uzd10Div3) {
//     const width = parseInt(uzd10Div3.style.width);
//     const height = parseInt(uzd10Div3.style.height);
    
//     const plot = width * height;
    
//     if (plot > 10000) {
//         uzd10Div3.style.backgroundColor = 'red';
//     }
//     console.log('Plotas: ', plot, 'px ');
// }

// if (uzd10Div4) {
//     const width = parseInt(uzd10Div4.style.width);
//     const height = parseInt(uzd10Div4.style.height);
    
//     const plot = width * height;
    
//     if (plot > 10000) {
//         uzd10Div4.style.backgroundColor = 'red';
//     }
//     console.log('Plotas: ', plot, 'px ');
// }

// if (uzd10Div5) {
//     const width = parseInt(uzd10Div5.style.width);
//     const height = parseInt(uzd10Div5.style.height);
    
//     const plot = width * height;
    
//     if (plot > 10000) {
//         uzd10Div5.style.backgroundColor = 'red';
//     }
//     console.log('Plotas: ', plot, 'px ');
// }