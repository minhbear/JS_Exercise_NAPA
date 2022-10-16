const controller = (req, res) => {
    const array = Array.from((Array(1000000).keys()))
    array.forEach(item => {
        console.log(item)
    })
    res.status(200).end();
}

/**
 * Giả sử
 *  - array có 1 triệu phần tử, cần lặp qua các phần tử này để làm các task vụ 
 *    nào đó
 *  - Có 3 request dồng thời gọi vào controller
 * yêu cầu:
 *  - viết 1 func để lặp qua array thay thế cho forEach để các request nó thực hiện
 * đồng thời, không đợi lẫn nhau, thời gian phản hồi của 3 request gần bằng nhau
 */
//-------------------------------------------------------------------------------
/**
 * Giả sử cả 3 request này lấy 1 element trong array để thực hiện tác vụ nào đó, chúng ta sẽ sử dụng cơ chế
 * của event loop để phản hồi của 3 request này là như nhau, ý tưởng là mỗi lần lặp mình console.log phần tử đó ra, gặp phần
 * tử mà req cần mình sẽ sử dụng settimeout và đưa element đó vào call back, call back đó sẽ được đưa vào web api để sử lý là sau 
 * thời gian đợi sẽ đưa vào task queue, sau khi xử lý đồng bộ xong thì javascript runtime sử dụng eveent loop để đưa callback đã được add vào
 * task queue vào stack và thực hiện function từ đó ta sẽ có respone của 3 request sẽ phản hồi với thời gian gần bằng nhau
 * 
 * code:
 */

const fetchData = (array, req) => {
    for(let i = 0 ; i<=array.length ; i++){
        console.log(i);
        if(req.elementGet == i){
            setTimeout(() => { 
                // handle task with element had find
            }, 500);
        }
    }
}

const controller_1 = (req, res) => {
    const array = Array.from((Array(1000000).keys()))
    fetchData(array, req);
    res.status(200).end();
}



