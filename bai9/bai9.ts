// let diemHienTai: string = '10'
// let bonus: number = 50
//cộng chuỗi với số -> string
// let totalScore: number = Number(diemHienTai) + bonus
// console.log(totalScore)

//syntax
//tên biến: kieu_du_lieu = gia_tri
//kiểu dữ liệu nguyên thuỷ
//string
// let customerName: string ='Nguyen van A'

//any: loại bỏ ts trackking kiểu dữ liệu
// let userName: any = 'Nguyen Van Teo'
//1 dòng code nào đó trong logic làm thay đổi
// userName = 123
// console.log(userName.toUpperCase())

//void: thường được sử dụng trong func để return ra giá trị
// function printRecepit(orderID: number): void{
//     console.log('In hoa đon ${orderID}')
// }
// printRecepit(1)


// function tinhTong(a:number, b:number): number{
//     return a + b
// }
// const result = tinhTong(3, 5)
// console.log(result)

//Array
// kieu_du_lieu[]
// let menu: string[] = ['3', 'cappuchino']

//Object
//dạng cho object
// let coffeOrder : {
//     orderId: number;
//     customerName: string;
//     isPaid: boolean;
//     itemCount: number
// }

// coffeOrder = {
//     orderId: 101,
//     customerName: 'anh An',
//     isPaid: true,
//     itemCount: 2
// }

// console.log('coffeeOrder', coffeOrder);
// //===
// let specialOrder: {
//     orderId: number;\,
//     items: string[],
//     specialInstruction?: string
// }
// specialOrder = {
//     orderId: 10,
//     items: ['espresso'],
//     specialInstruction: 'ok'
// }

// const customerOrder1: {
//     items: any
//     orderId: number;
//     status: string
// } = {
//     orderId: 123,
//     status: 'success'
// }


const storeMenu: {
    id: number;
    name: string;
    price: number
}[] = [
        { id: 1, name: 'Ca phe den', price: 25000 },
        { id: 2, name: 'Latte', price: 45000 },
        { id: 3, name: 'Banh gato', price: 3000 }
    ]
const customerOrder: {
    orderId: number;
    customerName: string;
    items: { name: string, price: number }[];
    status: string;
    note?: string
} = {
    orderId: 20250927,
    customerName: 'Teo',
    items: [],
    status: 'Pending',
    note: 'It da, nhieu ca phe'
}

//====

function calculateOrderTotal(order: { items: { price:number }[] }):number{
        let total = 0
        for (const item of order.items){
            total += item.price
        }
        return total;
};
function processPayment(totalAmount: number, method: string, amountGiven: number): string {
    if (method === 'card') {
        return `Thanh toan thanh cong ${totalAmount} bang the`
    } else if (method === 'cash') {
        const change = amountGiven - totalAmount
        if (change < 0) {
            return `Khach dua thieu ${Math.abs(change)}`
        }
        return `Thanh toan thanh cong. voi so tien ${change} `
    }
    return 'Phuong thuc thanh toan khong hop le'

};

customerOrder.items.push({
    name: storeMenu[1]!.name,
     price: storeMenu[1]!.price
    });
    //push: thêm phần tử vào mảng


customerOrder.items.push({
    name: storeMenu[2]!.name, 
    price: storeMenu[2]!.price});

const totalAmount = calculateOrderTotal(customerOrder);
console.log(totalAmount);

const paymentResult = processPayment(totalAmount, 'card', 0)
console.log(paymentResult);




// const selectedItem1 = storeMenu[1];
// const selectedItem2 = storeMenu[2];
// if(selectedItem1){
//     customerOrder.items.push({name: selectedItem1.name, price: selectedItem1.price})
// }
    
// if(selectedItem2){
//     customerOrder.items.push({name: selectedItem2.name, price: selectedItem2.price});
// }

