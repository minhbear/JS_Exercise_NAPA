//Ngoài việc khác nhau về mặt cú pháp thì for thường và forEach còn có sự
//khác nhau gì? code minh họa

//1. for() thường cho phép truy cập vào index của mảng chứ không 
//phải là phần tử thực tế nên cần arr[i] để lấy giá trị
//Với forEach() có thể truy cập đến giá trị của phần tử
//Ex:
const arr_1 = ['a', 'b', 'c'];
for(let i=0; i<arr.length; i++){
    console.log(arr_1[i]);
}

arr_1.forEach((v, i) => console.log(v));

//2. Empty Elements
//Javascript array cho phép chứa các phần tử rỗng
//forEach() bỏ qua các phần tử rỗng, for() thường thì không
//EX:
const arr_2 = ['a',, 'c'];
for (let i = 0; i < arr.length; ++i) {
    console.log(arr_2[i]);
}
//Prints "a, undefined, c"
arr_2.forEach(v => console.log(v))
//Prints "a, c"

//3. Function Context
//Scope của this bên trong for() thường chính là scope bên ngoài của cấu trúc lặp này
//forEach() thì không như vậy trừ khi dùng arrow function
//EX:

'use strict'
const arr_3 = ['a'];

// Prints "undefined"
arr_3.forEach(function() {
    console.log(this);
});

//4. Async/Await và Generators
//Vấn đề khi sử dụng Async/Await và Generators là của forEach còn đối với for() thường thì không có vấn đề gì
//forEach() không hoạt động tốt với Async/Await hoặc generators. Không thể sử dụng await bên trong forEach call back
async function run() {
    const arr_4 = ['a', 'b', 'c'];
    arr_4.forEach(el => {
      // SyntaxError
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(el);
    });
  }