process.nextTick(() => {
    console.log('nextTick')     //微任务
})
Promise.resolve()
.then(() => {
    console.log('then')  //微任务
})
setImmediate(() => {
    console.log('setImmediate')  //宏任务
})
console.log('end')      //主线程