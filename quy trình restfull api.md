# 1 : khởi tạo dự án : 
 1 : npm init

 2 : tạo file index.js

 3 : cài đặt expressJs : npm i express  (vào trang chủ express js mà đọc doc)

 4 : tạo thư mục src chứa source code

# 2 : cài đặt node mon để lắng nghe sự thay đổi của file(không có cài này mỗi lần thay code thì npm start lại) (cài global rồi khỏi cài lại, nếu mà chưa cài thì :) : npm install -g nodemon (cài global)
1 nên cài tại devDe :  npm install --save-dev nodemon
2 cấu hình lại package.json: 
"scripts": {
"start" :"nodemon ./index.js localhost 3000",
"test": "echo \"Error: no test specified\" && exit 1"
},

# 3 : thêm vào github : 

thêm file .gitignore để chặn những thư mục bên trong đẩy lên git
nội dung:
.vscode

node_modules/
