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
//gian để nhận được respone tại controller1 và controller2 của request đầu
//tiên là bao lâu
//Đề xuất cải thiện performance cho controller2

//--------------------------------------------------------------------------
/**
 * Với 3 request đồng thời gọi vào controller1 và controller2 thì thời gian nhận được respone
 * của request cuối cùng tại controller2 là hơn 30s còn controller1 sẽ hơn 60s. 
 *
 * Để cải thiện controller 2 thì nên chuyển cơ chế sang non blocking, thay vì dùng while để chời 10s thì mình dùng
 * setTimeout như thế cả 2 controller sẽ thực thi dưới dạng non blocking và respone của các controller về với các request là như nhau
 * mà không phải chờ waitblocking chạy xong rồi mới chạy non blocking
 */

//FIX waitBlocking
const controller2_FIX = (req, res) => {
    setTimeout(waitBlocking(0), 10000);
    res.status(200).end();
}