const p1 = new Promise((resolve,reject) => {
    setTimeout(() => resolve('P1 Success'),5000);
});

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => reject('P2 Failure'),1000);
});

const p3 = new Promise((resolve,reject) => {
    setTimeout(() => resolve('P3 Success'),3000);
});

Promise.all([p1,p2,p3]).then((res) => {
    console.log('all '+ res);
}).catch((err) => {
    console.log('all '+err);
})

Promise.allSettled([p1,p2,p3]).then((res) => {
    console.log('setteled ');
    console.log(res);
}).catch((err) => {
    console.log('setteled '+err);
})

Promise.race([p1,p2,p3]).then((res) => {
    console.log('race '+res);
}).catch((err) => {
    console.log('race '+err);
})

Promise.any([p1,p2,p3]).then((res) => {
    console.log('any ' +res);
}).catch((err) => {
    console.log('any ' +err);
})