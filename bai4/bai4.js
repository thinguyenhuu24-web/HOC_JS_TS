
//===VÒNG LẶP WHILE
//bao gồm 3 phần: điểm xuất phát, điều kiện, giá trị cập nhật

//let biendieukien
//while (dieukien){
//    khoi lenh thuc thi
//    giá trị cập nhật để làm thay đổi biến điều kiện
//}


let giaGame = 1000000
let soTienTietKiem = 0
let soTuan = 0

while(soTienTietKiem < giaGame){
    console.log(`Tuan ${soTuan + 1}. Dang co ${soTienTietKiem}`);
    soTienTietKiem += 150000 // soTienTietKiem = soTienTietKiem + 15000
    soTuan++
    console.log('Bo vao tiet kiem 150k');
        
}

// console.log(`Sau ${soTuan} thi da tiet kiem duoc ${soTienTietKiem} va du de mua game`);

let giaGame1 = 1000000
let soTienTietKiem1 = 0

while(soTienTietKiem1 < giaGame1){
    console.log('tiet kiem tien');
}    


//===VÒNG LẶP FOR    

//for (1.điểm xuất phát; 2. điều kiện dùng; 3.bước tiếp theo){
//    Khỏi lệnh thực thi
// }

for (let i = 0; i < 5; i++){
  console.log(`dang thuc hien vong long thu ${i}`);
}

for (let i = 0; i <= 5; i++){
    if(i === 3){
      console.log('bo qua so 3');
      continue 
    }
    console.log(`so hien tai la ${i}`);
}

for (let i = 0; i <= 5; i++){
    if(i === 3){
      console.log('bo qua so 3');
      break  
    }
    console.log(`so hien tai la ${i}`);
}

//Ứng dụng vòng lặp For
//index sẽ đếm từ 0 -> 
const products = ['apple', 'orange', 'grape']
// console.log(`so phan tu ${products.length}`);
// console.log(`phan tu dau tien la ${products.length[0]}`)
// console.log(`phan tu dau tien la ${products.length[1]}`)
// console.log(`phan tu dau tien la ${products.length[2]}`)

for (let i = 0; i < products.length; i ++){
    if (products[i] === 'orange'){
      console.log (`da tim thay qua cam`);
      break


    }
    console.log(`dang thuc hien vong lap voi qua: ${products[i]}`)

}

const browser = ['chorme', 'firefox', 'edge']
const errorLog = []
// //index từ 0, muốn lấy phần tử trong mảng -> mang[index]
console.log(browser[0]);
// //nếu lấy browser[3] -> trả về undefined


//===PHƯƠNG THỨC VỀ MẢNG
//thêm phần tử vào mảng
const testCase = ['login', 'logout']
testCase.push('add to cart')
console.log(`mang bay gio se la ${testCase} va length cua mang la ${testCase.length}`)
//xóa phần tử ở mảng
const tasks = ['task A', 'task B', 'task C']
const newTasks= tasks.pop()
console.log(`mang moi la ${tasks}`);
console.log(`gia tri da xoa la ${newTasks}`);



// //VÒNG LẶP FOR...OF: tìm ra các phần tử trong mảng và break để lấy ra phần tử cần lấy

const possibleBanners = ['#promo-popup', '.cookie-banner', '[data-ad="true"']

const visibleBanner = '.cookie-banner'

// //cu phap for (const item of array)

for (const selector of possibleBanners ){
    console.log(`dang kiem tra selector: ${selector}`);
    if (selector === visibleBanner){
        console.log('da tim thay banner');
        break
    }
    
}



// // forEach

// //return:
// // -> 1, trả về 1 giá trị
// // -> 2, kết thúc hàm ngay lập tức

// // function tinhTong(a, b){
// //     const result = a + b
// //     return
// // }
// // const sum = tinhTong(3,5)
// // console.log(sum)

// // function checkAccess(age){
// //     if(age < 18){
// //         console.log('chua du tuoi. moi ra ngoai')
// //         return
// //     }
// //     console.log('Du tuoi vao. moi ban vao');
// // }

// // //checkAccess(15)
// // const msg = checkAccess(15)
// // console.log(msg);

// // const tickets = ['Thường', 'Thường', 'VIP', 'Thường', 'VIP']

// // for(const ticket of tickets){
// //     console.log(`Dang kiem tra ve: ${ticket}`);
    
// //     if(ticket === 'VIP'){
// //         console.log('Mời bạn vào');
// //         break;
// //     }
// // }

// // //forEach ko có break
// // //forEach(function(item){})

// // let foundVip = false;

// // tickets.forEach(function(item){
// //   if(foundVip){
// //     console.log(`Da tim thay VIP, nhung van liec qua ve: ${item}`);
// //     return
// //   }
// //   console.log(`Dang kiem tra ve ${item}`);
// //   if(item === 'VIP'){
// //       console.log('=> DA TIM THAY VE VIP MOI VAO');
// //       foundVip = true
// //   }
  
// // })


// // Kịch bản: Phân tích Log Server
// // Mục tiêu: Bạn có một mảng các chuỗi log từ server. Bạn cần tìm dòng log đầu tiên ghi nhận một lượt đăng nhập thất bại (status=FAIL) của dịch vụ xác thực người dùng (service=USER_AUTH).

// // Quy trình xử lý:

// // Tìm dòng log phù hợp đầu tiên.

// // Từ dòng log đó, dùng các kỹ thuật xử lý chuỗi để trích xuất ra mã người dùng (uid) và mã lỗi (err_code).

// // Ngay sau khi trích xuất thành công, dừng lại và không xử lý các dòng log còn lại.
// const logEntries = [
//   't=1m service=PAYMENT status=OK uid=101',
//   't=2m service=USER_AUTH status=FAIL uid=205 err_code=401', 
//   't=3m service=INVENTORY status=OK uid=302',
//   't=4m service=USER_AUTH status=OK uid=205',
//   't=5m service=USER_AUTH status=FAIL uid=404 err_code=404', 
// ];

// ///
// let failedLoginInfo = null

// for(const log of logEntries){

//   if(log.includes('service=USER_AUTH') && log.includes('status=FAIL')){
//     console.log(`-> Tim thay dong log tiem nang: ${log}`);

//     const parts = log.split(' ')
//     // console.log('sau khi tach chuoi thanh mang',parts);
//     let uid = null
//     let errCode = null
//     for (const part of parts){
//       if(part.startsWith('uid=')){
//         uid = part.replace('uid=','')
//       }
//       if(part.startsWith('err_code=')){
//         errCode = part.slice("err_code=".length)
//       }
//     }

//     failedLoginInfo = {uuId: uid, errCode: errCode}
//     console.log('Da tim thay log thich hop');
//     break

//   }

// }

// //MẢNG map()
// const number = [1,2,3,4,5,6]
// const doubleNumber = number.map(function(number){
//     return number *2
// })
// console.log('mang ban dau', number)
// console.log('mang sau khi bien doi',doubleNumber)
// ///
// const dailySales = [50, 65, 60, 80, 75]

// const saleTrend = dailySales.map(function(currentItem, index, array){
//   if(index === 0){
//     return `Ngay 1: ${currentItem} {Bat dau}`
//   }
//   const previousSale =array[index - 1]
//   const change = currentItem - previousSale

//   return `Ngay ${index + 1}: ${currentItem} Thay doi ${+change}`

// })

// console.log(saleTrend)

// // filter -> trả ra giá trị true
// const soChan = number.filter(function(item){
//     return item % 2 === 0 
// })

// console.log('mang ban dau', number);
// console.log('mang so chan', soChan);

// //find()

// const numbers = [1,2,3,4,5,6]

// const soLonHon3 = numbers.find(function(item){
//   return item > 3
// })

// console.log('so lon hon 3 la', soLonHon3);

// //Object: 
// const userArray = ['hoang', 'hoang@gmai.com',30, 'admin']

// //object 
// // { key :value}
// const userArrayObject = {
//   name: 'Hoang',
//   email: 'hoang@gmail.com',
//   age: 30,
//   role: 'admin'
// }
// //truy cập thông tin object thì 
// //dùng dấu chấm
// console.log(userArrayObject.name)
// //ngoặc vuông
// console.log(userArrayObject['name']);

// const apiResponse = {
// userId: 123,
// userName: 'testUser',
// email: '123@mgail.com'
// }

// console.log(`Cac key o trong object la: ${Object.keys(apiResponse)}`);
// console.log(`Cac key o trong object la: ${Object.values(apiResponse)}`);

// //tìm sản phẩm category = Electronics', instock = true, => trả về final price giảm 10% <1200
// const products = [
//   {name: 'Laptop', category: 'Electronics', price: 1200, inStock: true},
//   {name: 'T-Shirt', category: 'Cotton', price: 25, inStock: true},
//   {name: 'Mouse', category: 'Electronics', price: 105, inStock: false},

// ]
// const products = [
//   {name: 'Laptop', category: 'Electronics', price: 1200, inStock: true},
//   {name: 'T-Shirt', category: 'Cotton', price: 25, inStock: true},
//   {name: 'Mouse', category: 'Electronics', price: 105, inStock: false},

// ]
// const sanPhamCanTim = products.filter(function(product){
//   return product.category === 'Electronics' && product.inStock
// }).map(function(product){
//   return {
//     name: product.name,
//     finalPrice: product.price * 0.9
//   }
// }).find(function(product){
//   return product.finalPrice < 1200
// })

// console.log(sanPhamCanTim)