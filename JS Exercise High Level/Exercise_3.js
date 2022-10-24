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
 * Với controller như trên khi request đầu tiên gọi vào sẽ mất thời gian là hơn 30s để có thể nhận được request
 * bởi vì 3 request gọi đến sẽ thực hiện funcA trong 10s mỗi request là mất 30s sau đó request đầu tiên ms xử lý funcB và mất hơn 30s để nhận
 * 
 * Để request đầu tiên nhận respone trong khoảng 11s thì ta cần thực hiện cả hàm funcA và funcB đều là bất đồng bộ sử dụng promise
 * 
 * controller trên sẽ được sửa thành
 */
const controller = async (req, res) => {
    new Promise( async (resolve, _) => {
        resolve(doA());
    });
    await dob()
    res.status(200).end();
}

