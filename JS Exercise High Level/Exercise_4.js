const waitBlocking = (milisecond) => {
    const startTime = new Date().getTime();
    while(new Date().getTime() < startTime + milisecond);
}

const waitNonBlocking = (milisecond) => {
    return new Promise(resolve => setTimeout(() => resolve()), milisecond);
}

const controller1 = async (req, res) => {
    await waitNonBlocking(10000);
    res.status(200).end();
}

const controller2 = (req, res) => {
    waitBlocking(10000)
    res.status(200).end();
}

//Giả sử có 3 request đồng thời gọi vào controller1 và controller2 thì thời 
//gian để nhận được respone tại controller1 và controller2 của request cuối cùng
// là bao lâu
//Đề xuất cải thiện performance cho controller2

//--------------------------------------------------------------------------
/**
 * request cuối cùng nhận được controller1 hơn 10s và controller2 hơn 30s
 * Khi cả 3 request gọi đồng thời đến 2 controller, controller1 sự dụng cơ chế non blocking và thực hiện hàm setTimeout trong 
 * với một biến Timer được đặt sắn để keep track thời gian của hàm nonBlocking, tương tự với nonBlocking của 2 request còn lại gọi đến và đều có 
 * một biến Timer keep track thời gian wait và sau khi wait xong add cả 3 vào taskQueue theo thứ tự từ request 1 đến request cuối
 * 
 * Với controller2 thì dùng cơ chế blocking mà node js chỉ có một theared để xử lý các request cho nên request cuối cùng phải đợi 2 request đầu tiên
 * nhận được respone rồi mới được thực hiện hàm waitBlocking nên thời gian mất là hơn 30s
 */

//Cải tiến controller 2
/**
 * Với controller 2 ta nên chuyển cơ chế của hàm waitBlocking sang non Blocking bằng cách dùng setTimeout
 */

 const waitBlocking = (milisecond) => {
    setTimeout(() => {
        //do something
    }, milisecond);
}
