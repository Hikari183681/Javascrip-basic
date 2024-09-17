console.log('Hello word form AA')

// //key: value
// let obj = {
//     name: 'Quang anh', address: 'Thai Binh'
// };

// console.log('check data obj: ', obj)
// console.log('what is your name?', `My name is:`, obj.name)
// // console.log('what is your name?', 'My name is:', obj['name'])

let arrTop4 = ['Ha Noi', 'HCM', 'DN', 'TB']
// for (let i = 0; i < arrTop4.length; i++) {
//     console.log('Top: ', i + 1, arrTop4[i])
// }
// for (let i = 0; i < 10; i++) {
//     console.log('check validate i=', i)
// }

let i = 0
while (i < arrTop4.length) {
    console.log('Top: ', i + 1, arrTop4[i]); i++;
}

let flag = false;
while (!flag) {
    console.log('Top: ', i); i++;
    if (i === 10) flag = true;
}