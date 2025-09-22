//if else
// if(dieukien){
//     hanh dong A  
// }else{
//     hanh dong B 
// }

// //else if
// if(dieukien1){
//     hanh Dong A 
// }else if(dieukien2){
//     hanh dong B 
// }else if(dieukien3){
//     hanh dong c 
// }else{
//     hanh dong mac dinh 
// }

////=====TOÁN TỬ 3 NGÔI
//điều kiện ? giá trị nếu đúng: giá trị nếu sai 
//VD1
const isLoggedIn = false

let message;
if(isLoggedIn){
    message = 'User is currently loggged in'
}else{
    message = 'User is logged out'
}
//VD2
console.log(message);

const message2 = isLoggedIn ? 'User is currently loggged in' : 'User is logged out'
console.log(message2);

const orderStatus = 'Pending'
let iconColour;
if(orderStatus === 'Success'){
    iconColour = 'Green'
}else if(orderStatus == 'Pending'){
    iconColour ='orange'
}else{
    iconColour ='red'
}
console.log(`mau icon la: ${iconColour}`);

//==TOÁN TỬ 3 NGÔI
const iconColour2 = orderStatus === 'Success' ? 'Green': //if
                    orderStatus === 'Pending' ? 'Orange': //else if
                    'red' //else
                        
console.log(iconColour2);      
//VD 3
const userRole = 'mode'

let canDeletePost2;
if(userRole === 'admin' || userRole === 'mode'){
    canDeletePost2 = true
}else{
    canDeletePost2 = false
}
console.log(canDeletePost2);

//----Switch case....: check biến trong dấu ngăn kép. sử dụng để kiểm tra biến duy nhất với nhiều giá trị khả thi (so sánh 1 biến với 1 giá trị nào đó mong muốn dựa trên biến đó cần so sánh)
//VD
const enviroment = 'dev'
let baseURL;
let userName;
let password;
switch(enviroment){
    case 'dev':
        baseURL = 'dev.example.com'
        userName = 'dev-user'
        password = 'dev-pass'
        break;
    case 'staging':
        baseURL = 'stg.example.com'
        userName = 'stg-user'
        password = 'stg-pass'
        break;
    default:
        console.log('Loi moi truong ko tim thay');    

}           
console.log(`cau hinh duoc thiet lap voi URL: ${baseURL}, ${userName}, ${password}`);          


//Truthy và falsy
//toán tử logic có 2 toán tử || &&
let userName1 = null;
const userToDisplay = userName1 || 'Guest'
console.log(userToDisplay);
let userNameInput =''
const userNameInputDisplay = userNameInput || 'Default'
console.log(userNameInput);
//VD
if(userNameInput !== '' && userNameInput !== null && userNameInput !==undefined){
    console.log(`user ko nhap du gia tri`);
}
// viết theo cách falsy,truthy
if(userNameInput){
    console.log(`user ko nhap du gai tri`);
}else{
    console.log(`user da nhap chuoi rong`)
}

// 6 giá trị mà js coi là falsy ->
// 1. false
// 2. 0
// 3. ''
// 4. null
// 5. undefined
// 6. NaN
//Check trong đk  if {}, || , && là dựa trên falsy hoặc truthy
// neu là falsy -> false
// neu là truthy -> true



