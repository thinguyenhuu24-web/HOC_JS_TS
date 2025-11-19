//CLASS trong JS -> là bảng thiết kế để tạo ra nhiều đối tượng dựa trên class đó
//người khai báo class hay sử dụng class gọi là instance -> giống như người sử dụng
class TenClass{
    //1. khai báo thuộc tính mặc định - class fields (có thể có hoặc ko)
    tenThuocTinhMacDinh = 'gia tri'
    //2.Hàm khởi tạo (constructor)
    //Khởi tạo các giá trị 
    constructor(thamso1){
        this.thuocTinh1 = thamso1
    }

    //3. Method (phương thức - hành vi của hàm)

    tenPhuongThuc(){

    }


}
//VD1

class Car {
    //1 class field
    isEngineOn = false;
    //2. constructor nhận các thông tin riêng của từng chiếc xe
    constructor(brand, color){
        this.brand = brand
        this.color = color
}

    //3 phương thức
    startEngine = ()=>{
        this.isEngineOn = true
        console.log(`dong co xe ${this.brand} da duoc khoi dong`);
    }
    displayInfo = ()=>{
        
        console.log(`day la chiec xe ${this.brand} mau ${this.color}`);
    }



}
//Sử dung
const car1 = new Car('Toyota', 'Den')

console.log(`car1 có thuoc tinh ${car1.isEngineOn}`)
car1.displayInfo()
//VD2
class NguoiDung {
    constructor(email, tenHienThi = 'Khach', vaiTro = 'user'){
        this.email = email
        this.tenHienThi = tenHienThi
        this.vaiTro = vaiTro
    }
    gioiThieu(){
        console.log('this o day la', this)
        console.log(`Ten ${this.tenHienThi}, Email: ${this.email}, Vaitro:${this.vaiTro}`);
        
    }
}
const user1 = new NguoiDung('user1@gmail.com')
user1.gioiThieu()
const user2 = new NguoiDung('user2@gmail.com', 'User2')
user2.gioiThieu()


//4 thuộc tính quan trọng của class
//1. tính đóng gói
//vien thuốc con nhông. Vỏ thuốc (class), bao bọc thành phần bên trong (private)
//nguyen tac khi code => moi ham nen lam 1 cong viec chinh no
class BankAccount {
    #balance = 0;
    deposit(amount){
        if(amount > 0){
            this.#balance += amount
            console.log(`Nap thanh cong ${amount}`);
            
        }
        
    }
    getBalance(){
        return this.#balance
    }

}
const myAccount = new BankAccount()
myAccount.deposit(100)
console.log(myAccount.getBalance());
// console.log(myAccount.#balance);
//2. tính trìu tượng
class CoffeeMachine {
    #cleanmachine(){
        console.log('Ve sinh may');
        
    }
    makeCoffe(){
        this.#cleanmachine()
        console.log('ca phe da san sang!');
        
    }
}
const machine = new CoffeeMachine()
machine.makeCoffe()
//nguoi dung chi can biet goi ham nay

//3. tính kế thừa
// phép class con kế thừa từ class cha
//dùng từ khóa extend 
class Animal {
    constructor(name){
        this.name = name
    }
    eat(){
        console.log(`${this.name} dang an`);

    }
}

class Dog extends Animal {
    constructor(name, color){
        super(name) // goi constructor cua lop cha animal
        this.color = color
    }

    bark(){
        console.log('Go go');

    }
    eat(){
        console.log('Day la tu class con');

    }
}

const myDog = new Dog('Kitty', 'Vang')
myDog.eat()

myDog.bark()





//4, tính đa hình
class Shape{
    draw(){
        console.log('ve hinh dang chung');
        
    }
}
class Circle extends Shape {
    draw(){
        console.log('ve 1 hinh tron');
        
    }
}

class Square extends Shape {
    draw(){
        console.log(' ve 1 hinh vuong');
        
    }
}
const shapes = [new Circle(), new Square(), new Shape()
    
]
shapes.forEach(shape => shape.draw())

//VD: xây dựng 1 project automation theo page Object 
//page-Object
//-- BasePage.js -> class cha chứa các hàng động Chung 
//-- LoginPage.js -> class cho trang dăng nhập
//-- Homepage.js -> class cho trang chủ
//tests 
//login.test.js //kịch bản test

//export => import
//File basePage.js
//playwright => se co 1 gia tri chinh la page (driver o trong selenium)
class BasePage {
    constructor(page, url) {
        this.page = page
        this.url = url
    }

    async navigateTo() {
        // this.page.navigateTo()
        console.log(`ACTION: dang dieu huong toi trang ${this.url}`);
    }
}
//File LoginPage.js
class Loginpage extends BasePage {
    //locator( vi tri cac element o tren UI)
    userNameInput = '#username'
    passwordInput = '#password'
    loginButton = '#login-button'
    constructor(page) {
        super(page, '/login')
    }
    async enterUsername(username) {
        console.log(`ACTION: Nhap username ${username} vao o ${this.userNameInput}`);
    }
    async enterPassword(password) {
        console.log(`ACTION: Nhap username ${password} vao o ${this.passwordInput}`);
    }
    async clickLoginButton() {
        console.log(`ACTION: Click vao nut ${this.loginButton}`);
    }
    async login(username, password){
        console.log(`WORKFLOW - THU HIEN DANG NHAP VOI USER ${username}`);
        await this.enterUsername(username)
        await this.enterPassword(password)
        await this.clickLoginButton()
        
    }
}
class HomePage extends BasePage {
    welComemessage = '#welcome-message'
    constructor(page){
        super(page, '/home')
    }
    async getWelcomeMessage(){
        console.log(`ACTION:Lay noi dung tu ${this.welComemessage}`);
        return 'Chao mung ban quay tro lai'
        
    }
}
//file login.test.js
//test case 2. -> const loginPage = new LoginPage(page)=> 
async function runLoginTest() {
    console.log('BAT DAU KICH BAN - DANG NHAP THANH CONG');
    //gia lap doi tuong 'page' 
    const fakePage = {name: 'Fake page'}
    const loginPage = new Loginpage(fakePage)
    const homePage = new HomePage(fakePage)
    //1. Dieu huong toi trang dang nhap
    await loginPage.navigateTo()
    //2 thuc hien hanh dong dang nhap\
    await loginPage.login('Hoang', '1234567')
    //3 chuyen sang trang chu va lay ket qua
    await homePage.navigateTo()
    const message = await homePage.getWelcomeMessage()
    if(message.includes('Chao mung ban quay tro lai')){
        console.log('TES PASSSED');
        
    }else{
        console.log('TEST FAILED');
        
    }
    
}

runLoginTest()


class BankAccount {
    #balance
    constructor(soDuBandau){
        if(soDuBandau> 0){
            this.#balance = soDuBandau
        }else{
            this.#balance = 0
        }
    }
    get balance(){
       console.log('-> getter duoc goi: lay so du');
       return this.#balance
        
    }
    set balance(soTien){
        console.log('-> setter duoc goi');
        this.#balance = soTien
        
    }
    rutTien(soTien){
        if(soTien > this.#balance){
            console.error('loi ko du so du')
            
        }
        this.#balance -= soTien
    }
}
const taiKhoanBank = new BankAccount(50000)
console.log(taiKhoanBank.balance);
taiKhoanBank.balance = -20000
console.log(taiKhoanBank.balance);
