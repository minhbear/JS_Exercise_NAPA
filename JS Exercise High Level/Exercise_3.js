/**
 * Có controller như sau
 * 
 * const controller = async (req, res) => {
 *    +) func doA là đồng bộ, thời gian thực thi 10s
 *    doA();
 * 
 *    +)func doB là bất đồng bộ, thời gian thực thi là 1s
 *    +) là một lời gọi IO, chẳng hạn như truy vấn database
 *    await doB();
 *    res.status(200).end();
 * }
 * 
 * Giả sử có 3 request đồng thời gọi vào controller thì thời gian để nhận
 * được phần hồi từ request đầu tiên là bao lâu, request cuối cùng phản hồi
 * là bao lâu, trung bình thời gian phản hồi của 3 request
 * 
 * Làm thế nào để request đầu tiên phản hồi trong khoảng 11s
 */

//----------------------------------------------------------------------------
/**
 * Với controller như trên khi request đầu tiên gọi vào sẽ mất thời gian là hơn 11s để có thể nhận được request
 * bởi vì việc xử lý các hàm sync và async của javascript runtime. Đầu tiên javascript sẽ sử dụng call back và thực hiện funcA trong 10s
 * ngay sau đó gặp hàm funcB là một hàm bất động bộ sẽ đưa vào task queue và lại gọi hàm funcB ra xử lý với thời gian 1s cộng thêm thời gian 
 * chuyển qua từ taskqueue qua call stack nên thời gian sẽ hơn 11s. Request cuối cùng phản hồi cũng gần với request đầu tiên và trung bình cả
 * 3 request sẽ mất thời gian là hơn 11s
 * 
 * Để request đầu tiên thực thi trong khoảng 11s thì chũng ta sẽ sử dụng job queue với promise. Promise.resolve sẽ thực hiện ngay khi funcA kết thúc
 * chúng ta không cần phải đợi khoảng thời gian chuyển qua chuyển lại khi áp dụng event loop
 * 
 * controller trên sẽ được sửa thành
 */
const controller = (req, res) => {
    doA();
    new Promise( async (resolve, _) => {
        resolve(await doB());
    });
    res.status(200).end();
}

