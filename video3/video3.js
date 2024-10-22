console.log('Hello word form AA')

// //key: value
// let obj = {
//     name: 'Quang anh', address: 'Thai Binh'
// };

// console.log('check data obj: ', obj)
// console.log('what is your name?', `My name is:`, obj.name)
// // console.log('what is your name?', 'My name is:', obj['name'])

// let arrTop4 = ['Ha Noi', 'HCM', 'DN1', 'TB2']
// // // for (let i = 0; i < arrTop4.length; i++) {
// // //     console.log('Top: ', i + 1, arrTop4[i])
// // // }
// // // for (let i = 0; i < 10; i++) {
// // //     console.log('check validate i=', i)
// // // }

// // // let i = 0
// // // while (i < arrTop4.length) {
// // //     console.log('Top: ', i + 1, arrTop4[i]); i++;
// // // }

// // // let flag = false;
// // // while (!flag) {
// // //     console.log('Top: ', i); i++;
// // //     if (i === 10) flag = true;
// // // }

// let i = 0;
// while (i < arrTop4.length) {
//     i++;
//     if (arrTop4[i] === 'HCM') {
//         console.log('Top:', i + 1, arrTop4[i]);
//         continue
//     }
// }
// let citiesTop4 = ['Ha Noi', 'HCM3', 'DN1', 'TB2'];

// for (let i = 0; i < citiesTop4.length; i++) {
//     const city = citiesTop4[i];
//     const cityLength = city.length;

//     if (cityLength === 2 || cityLength === 4) {
//         console.log('Top:', i + 1, city);
//     } else {
//         console.log('Top:', i + 1, 'No data');
//     }
// }    

// let sum = (a, b) => {
//     return a + b;
// }

// console.log('check sum: 9 + 6 =', sum(9, 6))

// let obj = {
//     name: 'Quang',
//     address: 'TB',
//     getName: function () {
//         return this.name;
//     }
// }

// console.log('>>> get name obj: ', obj.getName())

//No23
// let sum = (a, b, callback) => {

//     let tong = a + b;
//     callback(tong)
// }


// let printsum = (message) => {
//     console.log('>> check sum; 6 + 9 =', message)
// }
// sum(6, 9, printsum)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//No26
// let arr = [
//     { name: 'eric', age: 35 },
//     { name: '123', age: 55 },
//     { name: '456', age: 25 },
//     { name: '789', age: 25 },
// ]

// //filter, find

// let filter = arr.find((item, index) => {
//     console.log('check filter: item:', item, 'index:', index)
//     return item && item.age === 25;
// }); console.log(filter)

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < arr.length; i++) {
    console.log('check value i:', arr[i])
}

let mapArr = arr.map((item, index) => {

})