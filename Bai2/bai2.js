//mat khau ko duoc <8 và ko duoc lon hon 16

const matKhauKhongHopLe = '12345'

const viPhamDodai = (matKhauKhongHopLe.length < 8 || matKhauKhongHopLe.length > 16)

if(viPhamDodai){
    console.log('Loi mat khau khong du dai');
    
}
console.log(`Do dai cua mat khau la: ${matKhauKhongHopLe.length}`)

//Chuyển chuỗi về dạng chữ thường/hoa Lowercase/uppercase
const tuKhoaTimKiem = 'iphone 17'
const tieuDeSanPhamUI = 'Apple Iphone 17 Pro Max' 
// apple iphone 17

const tuKhoaTimKiemLowerCase = tuKhoaTimKiem.toLowerCase()
const tieuDeSanPhamUILowerCase = tieuDeSanPhamUI.toLowerCase ()
console.log(`tu khoa tim kiem: ${tuKhoaTimKiemLowerCase}, tieude: ${tieuDeSanPhamUILowerCase}`)

const coChuaTuKhoa = tieuDeSanPhamUI.toLowerCase().includes(tuKhoaTimKiem.toLowerCase())
console.log(tieuDeSanPhamUI.toLowerCase());

console.log(coChuaTuKhoa);

//trim
const tenNguoiDungUI = ' Nguyen Van A '
const tenNguoiDUngMongDoi ='Nguyen Van A'
const tenDaTrim = tenNguoiDungUI.trim()
console.log(`ten da trim: ${tenDaTrim}`);
console.log(tenNguoiDUngMongDoi.toLowerCase().includes(tenDaTrim.toLowerCase()))

//replace
const giaTienThucTeUI ='Gia niem yet: 1.250.99 USD'
//1250.99 <- expteced
const chuoiDaLamSachPhanGiaNiemYet = giaTienThucTeUI.replace('Gia niem yet: ',"")
const chuoiDaLamSachPhanUSD = chuoiDaLamSachPhanGiaNiemYet.replace(' USD',"")
const chuoiDaLamSachDauPhay = chuoiDaLamSachPhanUSD.replace(',', "")
console.log(chuoiDaLamSachPhanGiaNiemYet)
console.log(chuoiDaLamSachPhanUSD)
console.log(chuoiDaLamSachDauPhay)
//Ngày tháng
const dateString = '2025-12-25'

//format date la dang 2025/12/25
console.log(dateString.replaceAll('-','/'))

//Split: tách chuỗi thành danh sách
const breadCrumbText = 'Trang chu > Dien Thoai > Apple'
const breadCrumbArray = breadCrumbText.split (' > ')
console.log('ARRAY BREADCRUMB ', breadCrumbArray);
console.log(breadCrumbArray.length)

//IndexOf() trả ra vị trí của 1 ký tự/chuỗi cần tìm
//trong JS tất cả vị trí sẽ bắt đầu từ 0. Nếu tìm từ ko có thì sẽ hiển thị vị trí là -1
const tieuDe = 'Automation Testing that la thu vi'
const viTri = tieuDe.indexOf('Testing')
console.log(`Tu Testing bat dau o vi tri: ${viTri}`);

const urlHienTai = 'https://example.com/login?status=success'
const ketQuaTimKiem = urlHienTai.indexOf('error')
console.log(`Ket qua cua indexOf ${ketQuaTimKiem}`);

if (ketQuaTimKiem === -1){
    console.log('URL KO CHUA THAM SO LOI, DANG NHAP THANH CONG');
}
    console.log('DANG NHAP THAT BAI');


//Slice -> nhận 2 đối số (vị trí bắt đầu, vị trí kết thúc)
const urlTrangThanhCong = 'https://example.com/order-sucess?id=SPX-987654-2025&status=paid'

const viTriBatDau = urlTrangThanhCong.indexOf('id=') + 3
// const viTriBatDau = urlTrangThanhCong.indexOf('ORD')

const viTriKetThuc = urlTrangThanhCong.indexOf('&')

const maDonHang = urlTrangThanhCong.slice(viTriBatDau, viTriKetThuc)

console.log(`Ma don hang nhan duoc la ${maDonHang}`);

//Number
console.log(Math.floor(4.99));
console.log(Math.floor(4.01));
//Math.ceil
console.log(Math.ceil(4.99))
//nếu phần thập phân >=5
//làm tròn theo quy tắc thông thường
console.log(Math.round(4.7))

//random -> trả về số thập phân ngẫu nhiên từ 0 <= số ngẫu nhiên < 1
console.log(Math.random())
//CT1: tạo số nguyên 0 > max
//Math.floor(Math.random() * (max + 1))
//Tạo số ngẫu nhiên từ 0 > 100
const soNgauNhien = Math.floor(Math.random() * 101)
console.log(`so Ngau Nhien ${soNgauNhien}`);

//CT2: tạo số nguyên từ min -> max
//VD: Tạo số nguyên giới hạn từ 50 -> 100
//Math.floor(Math.random()* (max - min + 1) + min)
const min1 = 50
const max1 = 100
const soNgauNhien1 = Math.floor(Math.random() * (max1 - min1 +1) + min1)
console.log(soNgauNhien1);
//BÀI TẬP VD
const tamTinhTextUI = 'Tam tinh: 1,250,500.75 VND'
const tongCongTextUI = 'Tong cong (da giam): 1,125,450.75 VND'

//YC1: so che 2 chuoi tren thanh 1250500.75 va 112545075

let tamTinh = tamTinhTextUI.replaceAll(',', '').replace(' VND', '').replace('Tam tinh : ', '')
let tongCong = tongCongTextUI.replaceAll(',', '').replace(' VND', '').replace('Tong cong (da giam): ', '')

console.log(tamTinh) 
console.log(tongCong)
//YC2 dung Math.random de tao user ngau nhien dang tester_ + 4 chu so ngau nhien (vi du tester_8212)

const min = 1000
const max = 9999
const soNgauNhientester = Math.floor(Math.random() * (9999 - 1000 +1) + 1000)
console.log(`tester_${soNgauNhientester}`)

//---CÁC PHÉP TOÁN CƠ BẢN
//các phép toán cơ bản ( + - * / %)

//---CONCAT
// Trong JavaScript, concat là một hàm để nối (kết hợp) chuỗi hoặc mảng lại với nhau.

// Với chuỗi (string): nối thêm chuỗi khác vào sau.

// Với mảng (array): nối 2 mảng thành một mảng mới.

const str1= 'Xin'
const str2 = 'Chao'
const greeting = str1.concat("-",str2)
console.log(greeting)

// Phép + -> nối chuỗi
const soLuongKeo =5
const soLuongBanh =5
console.log(`Tong so: ${soLuongBanh + soLuongKeo}, typeof: ${typeof(soLuongBanh + soLuongKeo)}`)

const donGiaText ="25000"
const phiShip ="10000"
//console.log(`Tong tien: ${donGiaText + phiShip}, typeof: ${typeof(donGiaText + phiShip)}`) //nối chuỗi string, nếu ko đồng nhất thì sẽ hiển thị là string
// Phep nhân 
console.log(`Tong tien: ${donGiaText * phiShip}, typeof: ${typeof(donGiaText * phiShip)}`)

const chieuRongText = "350px"
chieuRongText.replace("px", "")


//---Ép kiểu dữ liệu
//parenInt() -> lấy số nguyên từ đầu chuỗi, có thể lấy dấu " " đầu tiên
const soLuongText ="14 30san 30 pham"
console.log(parseInt(soLuongText))

//parseFloat() -> lấy số thập phân từ đầu chuỗi
const giaTienText ='$29.99 USD'
console.log(Number(giaTienText));
const giaTien = giaTienText.replace('$','')
console.log(parseFloat(giaTien));
//Number -> nghiêm ngặt, chuỗi phải sạch
const tongTienText = 'Tong thanh toan: 2,540,000.50 VND'

const chuoiDaLamsach = tongTienText.replace('Tong thanh toan: ', '').replace(' VND', '').replaceAll(',',"")

console.log(chuoiDaLamsach);
const chuoiNumber = Number(chuoiDaLamsach)
console.log(`Ta co chuoi: ${chuoiNumber}, ${typeof(chuoiNumber)} `); 

//----QUY TRÌNH VIẾT CODE AUTOMATION----
// B1: Lấy dữ liệu thô từ UI (luôn 100% là dạng string)
// B2: Sơ chế dữ liệu bằng phương thức chuỗi()
// B3: Ép kiểu bằng công cụ phù hợp
// B4: Thực hiện tính toán từ B3


// /// ----Kiểm tra NAN---- 
// //NAN: trả về khi kết quả thất bại
// let ketQua1 = parseInt("hello")
// console.log(ketQua1);

// //thực hiện phép toán bất khả thi, vô nghĩa -> NAN
// let ketQua2 = 100 * "ao"
// console.log(ketQua2)

//Number.isNaN() => trả về true nếu param truyền vào là NAN
// let ketQuaTinhToan = parseInt("abcd")
// console.log(Number.isNaN(ketQuaTinhToan));
// console.log(Number.isNaN('hello'))

// const tonKhoText1 = 'Ton kho: 25'
// const tonKhiText2= 'Ton kho: het hang'

// function kiemTraVaHanhDong(inputText){
//     console.log(`Đang xử lý chuỗi ${inputText}`);
// //b2,b3: sơ chế và ép kiểu 
//     const chuoiSo = inputText.replace('Ton kho','')
//     const soLuong = parseInt('chuoiSo')
//     //b4:
//     if(Number.isNaN(soLuong)){
//         console.log('san pham het hang, bo qua hanh dong them vao gio');
//     }else{
//         console.log(`so luong con la ${soLuong}`);
//         if(soLuong >0){
//             console.log('thuc hien hanh dong them vao gio hang');
//         }
//     }    
//     }
// // console.log('Kich ban1: con hang');
// // kiemTraVaHanhDong(tonKhoText1)

// // console.log('Kich ban2: het hang');
// // kiemTraVaHanhDong(tonKhoText2)

//-----Toán tử gán
// x = 10 
//+=   -> x += 5 -> x = x + 5
//-=   -> x -= 5 -> x = x - 5
//*=   -> x *= 2 -> x = x * 2
// let soTestCaseFail = 0
// //lan dau test 1 login that bai
// soTestCaseFail *=2
// //soTestCaseFail = soTestCaseFail + 1
// console.log(soTestCaseFail);

//===TOÁN TỬ TĂNG GIẢM
// hậu tố: xx++ -> trả về gía trị cũ, rồi mới tăng
//làm 2 việc: việc đầu tiên: lấy giá trị hiện tại của biến và trả về giá trị đó để sử dụng trong biểu thức
//b2 -> tăng giá x
// //tờ vé xem phim y = x++
// let thuTuVeXemPhim = 10
// let veHienTai = toVeXemPhim++
// console.log(`vé hiện tại bây giờ đang là số: ${veHienTaie} `);
// console.log(`thứ tự bây giờ là: ${thuTuVeXemPhim}`);
// //Tiền tố: ++x -> làm 2 bước: b1 tăng giá trị biến x lên 1 ngay lập tức, trả về giá trị đó trong biểu thức
// let thuTuVeXemPhim = 10
// let veHienTai = ++toVeXemPhim
// console.log(`vé hiện tại bây giờ đang là số: ${veHienTaie} `);
// console.log(`thứ tự bây giờ là: ${thuTuVeXemPhim}`);
// console.log(`tổng số vé đã phát hành: ${thuTuVeXemPhim}`);

let attemts = 0
const MAX_ATTEMPTS = 3;
//Check việc click vài button Retry sau 3 lần. nếu 3 lần ko thành công thì trả ra False và dừng lại.

function perfomrClickWithRetry(){
    attemts++ //-> hoặc ko có thì ở if(attemts >= MAX_ATTEMPTS) -> if(++attemts >= MAX_ATTEMPTS)
    console.log(`Bat dau thu hien click, lan thu: ${attemts}`);

    const isSuccess = false;

    if(!isSuccess){
        if(attemts >= MAX_ATTEMPTS){
            console.error(`Da thu ${attemts} va van that bai. Dung lai`)
        }else{
            console.log(`-> click that bai, so lan da thu ${attemts}`);
            
        }     
    }

    
}

perfomrClickWithRetry()

perfomrClickWithRetry()

perfomrClickWithRetry()



// //------Toán tử so sánh
// console.log(`so sanh ${3>4}`);
// //==: so sánh kiểu lỏng lẻo -> !=
// //===: so sánh nghiêm ngặt -> !==
// const giaTriTuUI= '10'
// const giaTriTuDb= 10
// const soSanhGiaTriLongLeo = giaTriTuUI == giaTriTuDb
// console.log(soSanhGiaTriLongLeo);

// const soSanhGiaTriStrict = giaTriTuUI === giaTriTuDb
// console.log(soSanhGiaTriStrict);


// const responseAPI ={
//     product: "Laptop",
//     quantity: false //lỗi, đáng lẽ phải = 0
// }
// const soLuongMongDoi = 0;
// if(responseAPI.quantity == soLuongMongDoi){
//     console.log('PASSED');
// }else{
//     console.log('FAILED');

// }
// //Ghi chú: so sanh == -> convert false ->0 và '' -> 0

// const giaTriInput = ''
// const giaTriMongMuon = 0
// if(giaTriInput == giaTriMongMuon){
//     console.log('PASSED')
// }

// //-----TOÁN TỬ LOGIC
// /// & AND - và
// const nutDangNhapIsVisible = true
// const nutDangNhapIsEnable = true
// const coTheClickDangNhap = nutDangNhapIsEnable && nutDangNhapIsVisible
// if(coTheClickDangNhap){
//     console.log('PASS DIEU KIEN');

// }else{
//     console.log('FAIL DIEU KIEN');
// }
// /// || OR - hoặc
// const thongBaoThucTeUI= 'Cam on ban da mua hang'
// const laThongHopLe = (thongBaoThucTeUI)==='Cam on ban da mua hang' || (thongBaoThucTeUI)==='Dat hang thanh cong'
// if(laThongHopLe){

//     console.log('TEST PASED');
    
// }else{

//     console.log('TEST FAIL');
    
// }

// /// ! - NOT - Phủ định
// let spinnerIsVisile = false
// //thang spinner = true -> co nghia la no visible la bien mat o tren web
// // thang spinner = fase => co nghia la no dang o tren web 
// //cac action tiep theo de chac chan hoac cap nhat lai bien spinnerIsVisile

// if(!spinnerIsVisile){
//     console.log('SPINNER DA BIEN MAT. CO THE THUC HIEN BUOC TIEP THEO');
//     ///page.fill('')
// }else{
//     console.log('Van CON SPINNER');
// }    
// //----THỨ TỰ ƯU TIÊN CÁC TOÁN TỬ
// const tongTienDonHang = 60000
// const laThanhVienVip = true
// const coMaGiamGiaDacBiet = false

// // let duocGiamGia = laThanhVienVip && tongTienDonHang > 50000 || coMaGiamGiaDacBiet

// // // b1. phep so sanh quan he
// // //tong don hang > 50000 -> 60000 > 50000 -> true
// // //b2
// // //laThanhVienVip && true  => true 
//  console.log('CO DUOC GIAM GIA HAY KHONG', duocGiamGia);
// //group
// let duocGiamGia = (laThanhVienVip && tongTienDonHang > 50000) || coMaGiamGiaDacBiet
// console.log(duocGiamGia);