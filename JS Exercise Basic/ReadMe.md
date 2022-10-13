---------------------------JS Exercise Basic----------------------------

1. Phân biệt settimeout vs setinterval
    
    +) settimeout
        setTimeout(fucntion, milliseconds)
        Thực hiện function sau thời gian đợi nhất định. 
    
    +) setInterval
        setInterval(function, milliseconds)
        Thực hiện function với thời gian lắp lại.

2. Phân biệt callback, promise, async await
    
    +) callback: 
        - Là một function được truyền như một argument đến một function khác.
        - Kỹ thuật này cho phép function có thể gọi một function khác.
        - Callback function chạy ngay sau khi function khác kết thúc.
    
    +) promise  
        - Là một cơ chế bất động bộ, sẽ đưa ra kết quả (success hoặc failure) sau khi thực hiện một đoạn code nào đó trong một khoảng thời gian và sẽ chạy kết quả được đưa ra.
    
    +) async - await
        - Tương tự như promise, async-await là một cơ chế bất động sẽ chạy kết quả sau khoảng thời gian thực hiện một đoạn code nào đó, nó giúp progammer viết promise một cách dễ dàng hơn
        - async: làm cho function trả về một Promise
        - await: làm cho function đợi một Promise 
        - await keyword chỉ có thể dụng bên trong một function được gán là async

3. Callback hell là gì?
    
    +) Callback hell là gọi lại các function lồng nhau được sắp xếp theo cấu trúc kim tử tháp. Mỗi lần gọi function thì phải chờ function trước đó thực hiện, điều này tạo ra cấu trúc kim tử tháp ảnh hưởng đến khả năng đọc cũng như maintain code.

4. Promise hell là gì?
    
    +) Không giống như callback hell, Promise hell là từ nó gây ra, bản chất của promise là sẽ thực hiện kết quả sau một đoạn code và nếu những promise được đặt lồng nhau thì promise này sẽ phụ thuộc vào promise trước đó và từ đó chính nó tự tạo hell cho mình. 

5. Phân biết let và const? trường hợp object thì như thế nào 
    
    +) let 
    
        - là khai báo cho phép chúng ta cập nhật lại giá trị của biến chứ không cho phép chúng ta khai báo lại biết đó.
        - Biến let được khai báo sẽ có scope là block scoped tức là khi khai báo biến tróng scope nào đó với let thì biến đó chỉ có giá trị trong scope đó còn ra ngoài scope thì chúng ta không thể sử dụng biến đó nữa.
    
    +) const 
        
        - Là khai báo không cho phép chúng ta cập nhật lại giá trị của biến, với biến thuộc kiểu dữ liệu là primitive (include: string, number, boolean, null, undefined).
        - Đối với biến là kiểu reference(object, function) chúng ta có thể cập nhật giá trị cho từng attribute của nó. 
        - Tương tự với biến let thì biến const khi được khai báo có scope là block scoped.

6. Sự khác nhau giữa forEach, filter, map, every, some, reduce, for
    
    +) forEach
        
        - Phương thức forEach() gọi một function thực hiện với từng element trong 1 array.
    
    +) filter
        
        - Phương thức filter() tạo một array mới với những elements đã pass qua test được cung cấp bởi một function.
        
        - filter() không thay đổi array ban đầu.
   
    +) map
   
        - Phương thức map() tạo một array mới từ việc gọi function cho tất cả element trong array.
        - map() gọi function 1 lần cho mỗi element trong array và không thay đổi với array ban đầu.
    
    +) every
    
        - Phương thức every() thực hiện 1 function cho mỗi phần từ trong array, phương thức trả về true nếu function trả về true cho tất cả phần từ trong array, ngược  lại phương thức trả về false nếu có một phần từ trong array mà function trả về false.

    +) some
        
        - Tương tự với every(), some() trả về true nếu có một phần tử trong array mà function trả về true, ngược lại some() trả về false nếu tất cả phần tử trong array mà function trả về false.
    
    +) reduce
    
        - Phương thức reduce() thực hiện với các phần từ trong array, phương thức trả về single value là kết quả tích lũy thông qua function được gọi và reudce() không làm thay đổi array ban đầu.
    
    +) for
    
        - chạy một đoạn code trong một khoảng nhất định
        - Với tất cả phương thức trên thì dùng với array, còn for thì có thể dùng để duyệt các phần tử trong array hoặc chạy một đoạn code nhất định nào đó và lặp đi lặp lại trong khoảng nhất định.

7. Các phương thức clone object
    
    Để clone Object có 4 cách chính và được chia thành 2 nhóm chính là Shallow Copy và Deep Clone gồm:
    
        +) Spread
        +) Object.assign()
        +) Phương thức JSON
        +) Sử dụng thư viện - Lodash

    1) Spread (Shallow Copy)
        
        const obj_1 = { 
            username: "Minh Bear",
            age: 21
        }
        
        const obj_2 = {...obj_1}
       
        ---------------------------------------------------------
        
        ** Tuy nhiên phương thức này vẫn có những hạn chế của nó 
        
        const  obj_1 = { 
            username: "Minh Bear",
            infor: {
                address: "Nghe An"
            }
        }

        const obj_2 = {...obj_1}
        
        obj_1.infor.address = "Not Found"
        
        console.log(obj_2.infor.address) => // "Not Found"
    
        --> Spread không thể thực hiện deep clone
    
    2) Object.assign() (Shallow Copy)
    
        const obj_1 = { 
            username: "Minh Bear",
            age: 21
        }
        
        const obj_2 = Object.assign({}, obj_1);

        ** Tuy nhiên giống như phương thức Spread, Object.assign() không thể thực hiện deep clone
   
    3) JSON (Deep Clone)
    
       - Khi sử dụng JSON để clone object, chúng ta cần sử dụng 2 phương thức là parse() và stringify()
       
            + parse() được sử dụng để biến một String có format là JSON thành Object.
            + stringify() được sử dụng để chuyển một Object sang dạng JSON.
        
        const obj_1 = { 
            username: "Minh Bear",
            age: 21
        }
        
        const obj_2 = JSON.parse(JSON.stringify(obj_1));

        ==> Phương thức này lại không clone method được 
        
        ** Tuy nhiên phương thức này có thể thực hiện deep clone 
    
    4) Sử dụng thư viên Lodash (Deep Clone)
    
        - Với việc sử dụng Lodash thì chúng ta có thể thực hiện Deep Clone và Shallow Clone

8. Phân biệt giá trị và địa chỉ của biến 
    
    - Khi khai báo một biến thì biến sẽ được lưu trữ trong phần RAM mà trình duyệt đang sử dụng, đó là địa chỉ của biến, địa chỉ của biến sẽ lưu thông tin của biến (giá trị) và khi muốn thay đổi giá trị của biến thì ta phải truy cập đến đúng địa chỉ của biến đó để thay đổi

9. Javascript có bao nhiêu kiểu dữ liệu 
    
    Javascript có 8 kiểu dữ liệu trong đó có 7 kiểu dữ liệu primitive 
    
        + boolean 
        + null 
        + undefined
        + number
        + BigInt
        + String
        + Symbol
    
    và 1 kiểu dữ liệu dạng tham chiếu - Object

10. Làm thể nào để kiểm tra Object có empty hay không 
    
    - Trong ES6 có thể sử dụng phương thức Object.keys() để kiểm tra một object có empty hay không
    
    - Nếu kết quả trả về là mảng rỗng ==> object đó empty

11. Các phương pháp để nối 2 mảng
    
    Để ghép 2 mảng lại với nhau thì chúng ta có 3 phương thức
        
        +) concat()
        +) push()
        +) ba chám (...)

    1) concat()
        
        Phương thức concat() gộp nhiều mảng lại với nhau và trả về một mảng khác mà không thay đổi các mảng ban đầu
    
    2) push()
        
        - Phương thức push thêm phần tử vào mảng, kết hợp với toán tử '...' chúng ta có thể lấy các phần tử của một mảng khác và push vào mảng chúng ta cần nối
         
        let arr1 = [1, 3, 5];
        
        let arr2 = [2, 4, 6];

        arr1.push(...arr2);

        console.log(arr1);
        // [ 1, 3, 5, 2, 4, 6 ]

        - Nếu không dùng toán tử '...' thì chúng ta cần phải dùng các method khác để duyệt các phần tử trong array như forEach hoặc map
    
    3) ...
    
        Để nối 2 mảng với nhau (hoặc nhiều mảng) bằng cách dùng toán tử '...' thì chúng ta có thể làm như sau
        
        let arr1 = [1, 3, 5];
        
        let arr2 = [2, 4, 6];

        let newArr = [...arr1, ...arr2];


12. Arrow function là gì? so sánh arrow function và express function

    - Arrow function là một tính năng của ES6, thừa hưởng cách viết ngắn gọn của cú pháp ES6.
    
    - Arrow function và express function
    
        +) Khách nhau về cú pháp
        
            Arrow function sử dụng kí tự => 
                hello = () => {
                    console.log('hello')
                }
                // hello()
            Function thông thường
                function hello(){
                    console.log('hello')
                }
                // hello()
        
        +) Khác nhau về context 
        
            -) Với function thông thường thì việc dùng this trong context nhất định sẽ ảnh hưởng đến việc thi hành code, function thông thường có thể dùng bind để trói context của một object làm cho this sẽ trỏ vào object cần gọi
            -) Còn với arrow function thì không có bind thế nên nó sẽ trỏ vào context gần nhất với nó. 
        
        => Vì thế nên việc khai bao method trong object người ta sẽ dùng function thông thường để tránh việc không định nghĩa được this.


13. Spread operator dùng để làm gì ?

    - Spread opertor được dùng để nối mảng, copy mảng, clone object, gộp object 

14. Con trỏ this là gì? phân biệt call, bind, apply 

    - this trong javascript dùng để dại diện cho một object, một ngữ cảnh, hoặc chủ thể của code đang chạy 
    
    - call, apply 
    
        call và apply là 2 method có chức năng giống nhau tuy nhiên khác nhau ở syntax 
        
        +) call: func.call([thisArg[, arg1, arg2, ...argN]])
        
        +) apply: func.apply(thisArg [, argsArray])
           
           | thisArg: context để gán this vào                          |
           | arg1, arg2, .. : các argument riêng biệt được truyền vào  |
           | argArray: mảng các argument                               |

    - bind
        
        Khi gọi sử dụng this thì ta cần quan tâm đến ngữ cảnh để gọi this, tuy nhiên khi sử dụng this thông qua một callback function thì this sẽ không trỏ đến object được truyền vào vì thế chúng ta cần sử dụng bind để trói buộc this vào object được chỉ định 

15. nodejs là single thread hay multiple thread ?
    
    - Nodejs vừa là single thread và multiple thread. 
    
    - Node.js chạy mã JavaScript trong một luồng duy nhất, điều đó có nghĩa là mã của bạn chỉ có thể thực hiện một tác vụ tại một thời điểm. Tuy nhiên, bản thân Node.js là đa luồng và cung cấp các luồng ẩn thông qua thư viện libuv, xử lý các hoạt động I/O như đọc các tệp từ đĩa hoặc yêu cầu mạng

        





