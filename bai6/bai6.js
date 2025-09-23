// //Git sẽ quản lý source code của mình qua các lớp từ local -> staging -> repo (quản lý cuối cùng trên git)
// //commit -> xác nhận sự thay đổi của code -> staging -> push code lên repo
// PS C:\Users\PC> pwd -> hiển thị path
// PS C:\Users\PC> clear 
// PS C:\Users\PC> ls -> show các thư mục
// PS C:\Users\PC> cd . nhân tab -> show folder cần mở
// PS C:\Users\PC\Desktop> mkdir tên_thư_mục -> tạo 1 thư mục con
// Có 2 cách đẩy code lên git hub. Dùng terminal  hoặc dùng githubdesktop
// PS C:\Users\PC\Desktop\REPO_JS_TS_BASIC\GitHub\HOC_JS_TS> git status -> show ra thư mụcclone đã được liên kết với thư mục trên github hay chưa?
// PS C:\Users\PC\Desktop\REPO_JS_TS_BASIC\GitHub\HOC_JS_TS> git log -> xem được commmit vừa đẩy lên repo

// Git add ten file thay doi
// Git commit -m “ten commit”
// Git push
// .gitignore
// PS C:\Users\PC\Desktop\REPO_JS_TS_BASIC\GitHub\HOC_JS_TS> git config --global --list -> xem thông git cài đặt trên github: git config --global --list

Bạn có 3 file modified là:

bai4/bai4.js

bai6/bai6.js

bai6/index.html

Nếu chỉ muốn add riêng 3 file này, bạn viết lệnh:

git add bai4/bai4.js bai6/bai6.js bai6/index.html

Một số cách khác tiện hơn:

Add toàn bộ file đã sửa (không tính file mới):

git add -u


Add tất cả (bao gồm cả file mới chưa track, như bai7/):

git add .