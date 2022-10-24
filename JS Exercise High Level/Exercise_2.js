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
 * 
 * Để có thể tối ưu thời gian chạy khi sử dụng Promise.all ta sẽ sử dụng logic là mỗi promise chạy xong trong array được đưa vào
 * Promise.all thì ta sẽ chèn thêm một promise khác để chạy, từ đó ta ko cần phải đợi promise chó thời gian chạy lâu nhất xong để 
 * Promise.all() thực hiện resolve và tiếp tục thực thi các promise.all khác
 */

//khởi tạo promise để xử lý các sự kiện bất đồng bộ
const eventPromise = async (time) => {
    try {
        const event = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Event' + time)
            }, time)
        })

        return event;
    } catch (error) {
        console.log(error);
    }
}

//khởi tạo mảng mỗi mảng chứa tất cả các sự kiện bất đồng b
const arrPromise = [];
for(let i=0; i<20; i++){
    arrPromise.push(eventPromise(Math.floor(Math.random() * 3000) + 1000))
}

//Sử dụng logic khi các promise được xử lý ít hơn 5 thì chèn promise khác vào để xử lý

async function optimzeParallelPromises() {
    const concurrencyLimit = 5;
    const argsCopy = arrPromise.slice();
    const result = new Array(arrPromise.length);
    const promises = new Array(concurrencyLimit).fill(Promise.resolve());
    function chainNext(p) {
        if(argsCopy.length){
            const arg = argsCopy.shift();
            return p.then(() => {
                //lưu kết quả vào array khi promise chạy xong
                const operationPromise = arg.then(r => {result.push(r)})
                return chainNext(operationPromise);
            });
        }

        return p;
    }

    await Promise.all(promises.map(chainNext))
}





