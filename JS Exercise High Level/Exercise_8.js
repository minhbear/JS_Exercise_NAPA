//Phân biệt setImmediate vs process.nextTick

const a = () => { console.log('a') }
const b = () => { console.log('b') }

const main = () => {
    setImmediate(b);
    process.nextTick(a)
}

main()
//a
//b
//vì sao a lại gọi trước b

//------------------------------------------
/**
 * Khi một chương trình javascript chạy thì event loop sẽ được khởi tạo
 * event loop sẽ được thực hiện như một hàng đợi queue và làm việc theo trình tự
 * timers–>pending callbacks–>idle,prepare–>connections(poll,data,etc)–>check–>close callbacks
 * 
 * process.nextTick() là method để add callback function vào lúc bắt đầu của queue
 * nghĩa là ngay khi chương trình start thì process.nextTick() sẽ được gọi đầu tiên trước 
 * event loop 
 * 
 * setImmdeiate() method đặt callback function của nó vào mục check của event loop. Nghĩa là
 * setImmdeiate() được gọi ở connections(poll) phase và call backfunction được invoke ở phần check
 * 
 * Vì thế khi chạy chương trình trên process.nextTick(a) sẽ chạy đầu tiên trước event loop và in ra a trước
 * sau đó vào event loop đến phase poll thì setImmediate được gọi và callback function sẽ được thực hiện ở check phase
 * do đó b được in sau a
 */