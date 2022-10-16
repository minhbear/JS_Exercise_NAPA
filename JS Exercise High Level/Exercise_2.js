/**
 * Có 20 sự kiện bất đồng bộ không biết trước thời gian hoàn thành, tại mỗi
 * thời điểm chỉ được thực hiện không quá 5 sự kiện bất đồng bộ
 * 
 * Hãy implement sao cho thời gian thực thi thành công 20 sự kiện bất đồng bộ trên là nhanh nhất
 * (tận dụng tối đa thời gian chờ của CPU, không nên chọn giải pháp chia thành 4 cụm và chạy tuần tự
 * từng cụm)
 */

/**
 * Mình sẽ áp dụng cơ chế job queue ứng dụng promise để chạy 20 sự kiện bất đồng bộ này
 * khi sử dụng promise thì hàm resolve của promise sẽ được thực thi ngay sau khi hàm hiện tại kết thúc
 * nghĩa là sau khi 5 sự kiện bất đồng bộ đầu tiên chạy xong thì mình sẽ chạy tiếp 5 sự kiện bất đồng bộ tiếp theo
 * mà không phải đợi event loop gọi các sự kiện bất đồng bộ ra để chạy
 * 
 * Với mỗi lần chạy thì sử dụng Promise.all để chạy cùng lúc 5 sự kiện bất đồng bộ kia (giả sử các sự kiện bất đồng bộ
 * đều thực hiện thành công) còn nếu như có trường hợp một sự kiện rejected thì mình sử dụng promise.allSettled để chạy toàn 
 * bộ 5 sự kiện mà không bị dừng khi gặp một sự kiện bị rejected
 */