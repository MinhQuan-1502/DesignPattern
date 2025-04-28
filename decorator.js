// Component gốc
function Car() {
    this.cost = function() {
        return 20000;
    };
}
function withNavigation(car) {
    const baseCost = car.cost();
    car.cost = function() {
        return baseCost + 1500;
    };
    return car;
}
function withSportsPackage(car) {
    const baseCost = car.cost();
    car.cost = function() {
        return baseCost + 3000;
    };
    return car;
}
// Sử dụng
let myCar = new Car();
myCar = withNavigation(myCar);     // Bọc thêm Navigation
myCar = withSportsPackage(myCar);  // Bọc thêm Sports Package
console.log(myCar.cost()); // 20000 + 1500 + 3000 = 24500
