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
 * của request đầu tiên tại controller1 là 10s còn controller2 sẽ hơn 10s. Bởi vì function waitNonBlocking
 * thực thi code không theo tuần tự và áp dụng job queue khi sử sựng promise thì hàm resolve sẽ chạy ngay sau khi hết 10s đợi
 * tuy nhiên với function waitBlocking thực thi code theo trình tự tuần tự lệnh này phải đợi lệnh kia nên thời gian thực thi sẽ hơn 10s 
 * (câu lệnh so sánh new Date().getTime() < startTime + milisecond sẽ phải chạy tuần tự đến khi gắp new Date > starttime + milisencode )
 *
 * Để có thể cải thiện performance cho controller 2 thì mình nên dùng cơ chế nonblocking để chạy
 * thay vì sử dụng vòng while để kết thúc thời gian  > starttime + milisecnode thì mình dùng setTimeout() vời thời gian wait là 10s và sử dụng 
 * async/await tại controller 2 để lấy được data khi dùng hàm waitBlocking() và resopne cho request đến controller 
 */