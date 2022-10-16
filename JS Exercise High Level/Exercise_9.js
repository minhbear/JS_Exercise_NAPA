/**
 * promise.all chỉ trả về khi tất cả đều thành công, chỉ cần 1 sự kiện
 * thất bại sẽ kết thúc luôn, nếu có 1 sự kiện thất bài còn các sự kiện 
 * khác thành công như muốn nhận đầy đủ kết quả thì làm thế nào?
 * 
 * Có 3 sự kiện bất đồng bộ không biết thời gian hoàn thành
 * giả sử có 2 sự kiện thành công, 1 sự kiện thất bại
 * 
 * làm thế nào để thực thi 3 sự kiện này cùng 1 lúc, kết quả nhận được sẽ trả
 * về array chứa 3 kết qua thành công và thất bại
 */

//---------------------------------------------------------------------------
/**
 * Trong trường hợp này thay vì sử dụng Promise.all thì ta sẽ sử dụng Promise.allSettled
 * Promise.allSettled sẽ trả về một array chứa toàn bộ thông tin thực hiện mỗi promise được đặt trong mảng, kể cả 
 * khi nó rejected vì thế với 3 sự kiện bất đồng bộ, có 2 sự kiện fullfiled và 1 sự kiện rejected thì ta vẫn có được 
 * kết quả trả về và lý do promise bị reject hoặc value của promise fullfiled
 * 
 * Code demo
 */

const promiseOne = () => new Promise((resolve, reject) => setTimeout(() => {
    resolve("Promise One fullfiled");
}, 500));

const promiseTwo = () => new Promise((resolve, reject) => setTimeout(() => {
    reject("Promise Two rejected");
}, 600));

const promiseThree = () => new Promise((resolve, reject) => setTimeout(() => {
    resolve("Promise Three fullfiled");
}, 800));

const fetchData = async () => {
    const respone = await Promise.allSettled([promiseOne(), promiseTwo(), promiseThree()]);
    console.log(respone);
}

fetchData()
// [
//    { status: 'fulfilled', value: 'Promise One fullfiled' },
//    { status: 'rejected', reason: 'Promise Two rejected' },
//    { status: 'fulfilled', value: 'Promise Three fullfiled' }
//  ]