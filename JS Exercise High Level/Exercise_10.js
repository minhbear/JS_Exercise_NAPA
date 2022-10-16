async function waitAndMaybeReject() {
    await new Promise((r) => {
        setTimeout(r, 1000)
    });
    throw Error("This is error");
}

async function test1() {
    try {
        return await waitAndMaybeReject();
    } catch (error) {
        return "Oh no!";
    }
}

async function test2() {
    try {
        return await waitAndMaybeReject();
    } catch (error) {
        throw error;
    }
}

async function test3() {
    return await waitAndMaybeReject();
}

function test4() {
    return waitAndMaybeReject();
}

const main = async () => {
    const value = await test4();
    console.log('value', value);
}

main();

//Trong 4 function test trên thì những cách nào đúng, những cách nào sai hoặc dư thừa, giải thích lý do
//--------------------------------------------------------------------------------------------------
/**
 * Cả 4 function trên đều có lỗi sai và dư thừa
 *
 * Ở function waitAndMaybeReject() tạo ra một object Promise và thực hiện hàm resolve sau 1s (ở đây resolve chỉ là anonymous function) và 
 * luôn luôn trả về object Error với chuỗi string là "This is Error". Vậy nên các function test ở dưới khi return sẽ trả về là Error("This is error")
 * 
 * Ở function test1 return await là không cần thiết lúc này vì bản chất của function waitAndMaybeReject() là một async function và nó sẽ đợi thực hiện Promise xong mới 
 * throw Error nên việc để key word await ở đây là dư thừa, việc catch lỗi ở đây return "Oh No" là dư thừa thay vào đó mình nên return error để mình biết lỗi khi thực hiệnh
 * hàm là gì
 * 
 * Ở function test2 tương tự với test1 việc dư thừa keyword await lúc gọi function waitAndMaybeReject() và việc throw Error ở hàm catch là không đúng mình nên return error 
 * để biến value ở hàm main nhận được và log ra xác định được lỗi sai ở đâu
 * 
 * function test3 cũng thừa keyword await khi gọi waitAndMaybeReject() và việc không dùng try catch để bắt lỗi khi hàm thực thi sẽ dẫn đến việc xác định lỗi gặp khó khăn khi chạy
 * 
 * function test4 thiếu trycatch để bắt lỗi khi thực hiện hàm
 */
