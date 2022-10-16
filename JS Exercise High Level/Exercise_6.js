//Liệt kê các phương pháp clone object, phân biện shallow clone và deepclone
//có phải trường hợp nào cũng nên dùng deep clone không và vì sao

/**
 * về clone object sẽ có 4 phương pháp được chia thành 2 nhóm là shallow clone và deep clone
 *  shallow clone:
 *      +) Object.assign()
 *      +) '...' operator
 *  deep clone;
 *      +) JSON
 *      +) thư viện lodash
 * 
 *  shallow clone và deep clone đều là 2 chủ đề chính về clone object tuy nhiên 
 * shallow clone không thể clone sâu một object nghĩa là object ban đầu thay đổi giá trị
 * sẽ ảnh hưởng đến object được clone, còn deep clone thì clone object và object ban đầu sẽ không ảnh hưởng đến object được clone
 * 
 * Tuy nhiên không phải khi nào mình cũng nên dùng deep clone, thứ nhất vì nó phức tạp và object mình clone chỉ cần
 * chuyển đến một nơi khác, ngoài ra sử dụng shallow clone có thể giúp đọc dể hiểu và dễ hình dung là đang làm gì với đoạn code của mình hơn
 */