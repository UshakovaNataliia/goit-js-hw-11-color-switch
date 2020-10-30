//! Вебинар с Валерой(27.10.20)
//! Promise API 

// Купят ли телефон 

// let phone;
// let behavior = Math.round(Math.random());

// let promis1 = new Promise((resolve, reject)=>{
//     phone = {
//         name: 'Nokia',
//         model: 1100,
//         lighter: true,
//         color: ['grey', 'white']
//     };

//     document.body.innerHTML = `<h2 class="loadBar">loading...</h2>`;

//     setTimeout(() => {
//         phone && behavior ? resolve(phone) : reject(new Error('you were bad boy:('));
//     }, 1500);
// });

// promis1
// .then(data=> document.body.innerHTML = `<h2 class="resp">${data.name}</h2>`) // Nokia
// .catch(error=> document.body.innerHTML = `<h2 class="err">${error}</h2>`)
// .finally(()=> {
//     console.log('promise')
// })








// Сделай дороги, если выбрали Кличко

// let major;
// let candidates = ['Klichko', 'Prytula', 'Popov']

// const roads = new Promise((res, rej)=>{
//     setTimeout(() => {
//         major = candidates[Math.round(Math.random()*candidates.length-1)];
//         // res(major);
//         major ? res({major, budget: 5000000}) : rej('Trymaites, ')
//     }, 1000);
// });

// // console.log(roads);

// const otkat = function(budget) {
//     return budget/2;
// }

// roads
// .then(elections=>{
//     console.log(`Выборы прошли, мер - ${elections.major}`);
//     return elections.budget})
// .then(otkat)
// .then(otkat)
// .then(otkat)
// .then(info=> console.log(`Осталось ${info}`))
// .catch(error=> alert(error + 'brattya'))
// // .finally(console.log(`Выборы прошли, мер -'${major}`))



// document.body.textContent = 'Loading';

// let promise = new Promise((res, rej)=>{
//     // rej('error')

//     setTimeout(() => {
//         res('resolved');        
//     }, 2000);
// })
// .then(data=> alert(data))
// // .catch(err=> console.log(err)) // error
// .finally(document.body.textContent = 'Final') // DONKEY

// // console.dir(Promise.finally);




// const loading = function(t) {
//     document.body.innerHTML = `<h1>LOADING...</h1>`;
//     return new Promise((res, rej)=>{
//         setTimeout(() => {
//             res(`resolved after ${t}ms`);
//             document.body.innerHTML = `<h2>Finished after ${t}ms</h2>`
//         }, t);
//     })
// }

// // console.log(loading(1000));

// loading(1000)
// .then(data=>console.log(data))
// // .finally(document.body.innerHTML = `<h2>Finish</h2>`);







// new Promise((res, rej)=>{
//     res(1);
// })
// // .then(n=> n+2)
// // .then(n=> n*4)
// // .then(n=> alert(n)); // 12
// .then(
//     null,
//     err=> console.log(err)
//     )





// //! Promise.all() 
// let lambo = new Promise((res, rej)=>{
//     setTimeout(() => {
//         res('lambo')
//     }, 500);
// });
// let ferrari = new Promise((res, rej)=>{
//     setTimeout(() => {
//         res('ferrari')
//     }, 1000);
// });
// let bmw = new Promise((res, rej)=>{
//     setTimeout(() => {
//         res('bmw')
//     }, 3000);
// });

// const result = Promise.all([lambo, ferrari, bmw]); //! возвращает всегда промис, если все промисы успешно выполнены
// console.log(result);

// result
// .then(data=> console.log(data)) // ["lambo", "ferrari", "bmw"]
// // .catch(err => console.log(err))
// //! Если есть ошибка, вернется тот, который был выполнен с ошибкой (напр., rej('bmw'))





// //! Promise.race() 
// let lambo = new Promise((res, rej)=>{
//     setTimeout(() => {
//         res('lambo')
//     }, 400);
// });

// let ferrari = new Promise((res, rej)=>{
//     setTimeout(() => {
//         res('ferrari')
//     }, 399);
// });

// let bmw = new Promise((res, rej)=>{
//     setTimeout(() => {
//         rej('bmw')
//     }, 1000);
// });

// const result = Promise.race([lambo, ferrari, bmw]); //! возвращает всегда промис первого, если хотя бы один успешно выполнен
// console.log(result);

// result
// .then(data=> console.log(data)) // "ferrari"
// .catch(err => console.log(err))




//! Promise.resolve(), Promise.reject(), Promise.finally()
// const a = new Promise((res, rej)=>{
//     res(1)
// })

// const b = Promise.resolve(1);
// console.log(a, b);

const a = new Promise((res, rej)=>{
    res(1)
})

const b = a.finally(1);
console.log(b);
