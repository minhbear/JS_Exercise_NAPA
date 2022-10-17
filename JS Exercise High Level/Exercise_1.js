setTimeout(() => {
    console.log('hello event loop');
}, 0);

function runFirst () {
    const startTime = new Date().getTime();
    while(new Date().getTime() < startTime + 5000);
}

runFirst();