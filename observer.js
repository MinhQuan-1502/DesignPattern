// Subject
class Subject {
    constructor() {
        this.observers = []; // Danh sách Observer
    }

    subscribe(observer) {
        this.observers.push(observer); // Đăng ký
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer); // Hủy đăng ký
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data)); // Gửi thông báo
    }
}
// Observer
class Observer {
    constructor(name) {
        this.name = name;
    }

    update(data) {
        console.log(`${this.name} nhận được thông báo: ${data}`);
    }
}

const subject = new Subject();
const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify("Sự kiện vừa xảy ra!"); 

