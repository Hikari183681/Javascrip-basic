console.log('Hello word form AA')

// //key: value
// let obj = {
//     name: 'Quang anh', address: 'Thai Binh'
// };

// console.log('check data obj: ', obj)
// console.log('what is your name?', `My name is:`, obj.name)
// // console.log('what is your name?', 'My name is:', obj['name'])

let arrTop4 = ['Ha Noi', 'HCM', 'DN1', 'TB2']
// // for (let i = 0; i < arrTop4.length; i++) {
// //     console.log('Top: ', i + 1, arrTop4[i])
// // }
// // for (let i = 0; i < 10; i++) {
// //     console.log('check validate i=', i)
// // }

// // let i = 0
// // while (i < arrTop4.length) {
// //     console.log('Top: ', i + 1, arrTop4[i]); i++;
// // }

// // let flag = false;
// // while (!flag) {
// //     console.log('Top: ', i); i++;
// //     if (i === 10) flag = true;
// // }

let i = 0;
while (i < arrTop4.length) {
    i++;
    if (arrTop4[i] === 'HCM') {
        console.log('Top:', i + 1, arrTop4[i]);
        continue
    }
}
// let citiesTop4 = ['Ha Noi', 'HCM3', 'DN1', 'TB2'];

// for (let i = 0; i < citiesTop4.length; i++) {
//     const city = citiesTop4[i];
//     const cityLength = city.length;

//     if (cityLength === 2 || cityLength === 4) {
//         console.log('Top:', i + 1, city);
//     } else {
//         console.log('Top:', i + 1, 'No data');
//     }
// 12323123 12312}    