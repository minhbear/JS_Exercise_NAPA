setTimeout(() => {
    new Promise((resolve, reject) => {
        resolve(() => console.log('Hello event loop'))
    })
}, 5000);