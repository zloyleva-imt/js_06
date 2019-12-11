console.log('App was loaded');

// function firstFunc(){
//     console.log('I\'m first function!!');
// }

// firstFunc()

// cl('One');
// console.log('Print me!!!');

function cl(text){
    console.log(text);
}

// printFewTime('String', 6)

//'String'
//'String'
//'String'
//'String'
//'String'
//'String'

// Function Declaration
// function printFewTime(text, count=1){
//     for(let i=0; i<count; i++){
//         cl(text);
//     }
// }

// Function Expression
// const printFewTime = function (text, count=1){
//     for(let i=0; i<count; i++){
//         cl(text + i);
//     }
// }

// Arrow Function
// const printFewTime = (text, clb) => {

//     return (count=1) => {
//         let res = '';
//         for(let i=0; i<count; i++){
//             res += clb(text,i);//`${text}\t:\t${i + 1}\n`
//         }
//         return res;
//     }
// }

// const clb = (t,i) => `${t}\t:\t${i + 1}\n`;

// let textHandler = printFewTime('Text', clb);
// let string = printFewTime('String');
// debugger
// let x = printFewTime('String', 6)
// x += printFewTime('Text', 6)

const getArrayOfRandomNumbers = (arr_size=1) => {
    let res = [];
    for(let i=0;i<arr_size;i++){
        res.push(Math.round(Math.random()*100));
    }
    return res;
}

// getArrayOfRandomNumbers(10).sort((a,b)=>{return a-b});

// const x = getArrayOfRandomNumbers(100);
// for(let i=0;i<x.length;i++){
//     for(let j=0;j<x.length;j++){
//        if(x[i] < x[j]) {
//         let temp = x[j];
//         x[j] = x[i];
//         x[i] = temp;
//        }
//     }
// }
// cl(x);

// ((arr_size=1) => {
//     let res = [];
//     for(let i=0;i<arr_size;i++){
//         res.push(Math.round(Math.random()*100));
//     }
//     cl(res);
// })(10)

// ((t)=>{})('text')

const arr = getArrayOfRandomNumbers(10)
cl(arr)

arr.forEach((item,i, ar)=>cl(`${item} : ${i} : ${ar[i]}`))
const ret = arr.map((item,i, ar)=>`${item} : ${i} : ${ar[i]}`)

// 1 Part
getArrayOfRandomObjects(10);

[
    {fullName:'Oleh Lev', salary:1000},
]

// 2 Part

sortStuffBySalary([], 'asc|desc')