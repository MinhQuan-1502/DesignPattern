class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance; // Trả về instance cũ nếu đã tồn tại
    }
    Singleton.instance = this;    // Gán instance nếu chưa có
    this.value = Math.random();   // Giả sử nó chứa giá trị random
  }
}

const a = new Singleton();
const b = new Singleton();

console.log(a === b); // true (cùng một đối tượng)
console.log(a.value); // ví dụ: 0.123456
console.log(b.value); // cũng là 0.123456


