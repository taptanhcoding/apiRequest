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

câu lệnh git:
git init
git remote add origin https://github.com/taptanhcoding/apiRequest.git
git branch -M main
git commit -m "first commit"
git push -u origin main

# 4 Install Morgan: phần mềm trung gian log ra khi request http:
cài đặt : npm i morgan --save-dev
sử dụng: const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

console.log(app);

app.use(morgan('combined'))

app.get('/', (req, res) => {
res.send('Hello World! ae f8')
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

# 5 cài đặt express-handlebars(cái này để component hóa file thôi, nói chung là cũng cần nếu làm ui, còn restfull api thì chắc thôi, nói chung tcuws thêm các bước vào là ok)

cài đặt : npm i express-handlebars
thêm vào index:(đọc doc để xem cách dùng)
const path = require('path') => hàm hỗ trợ thêm url
const handlebars = require('express-handlebars')

//Template engine
app.engine('hbs',handlebars.engine({extname: 'hbs'}) )
giải thích:
app.engine('handlebars', handlebars.engine());=> muốn định nghĩa phần đuôi mở rộng(default: .handlebars) ta sửa
handlebars.engine({extname: 'hbs'}) => thì phần đuôi fiel home, news .. sẽ sửa thành home.hbs
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resource','views'));;=> đặt lại url cho thằng views vì template engine luôn vào views(mặc định url ../blog/views => ta định nghĩa lại thành ../vị trí hiện tại của file index/resource/views)
console.log(__dirname)

app.get('/', (req, res) => {
res.render('home');  => dẫ vào thư mục 
});

# component hóa thành phần của web : header, footer

tạo thêm một thư mực mới trong file views : partials > header.hbs(chứa header) và footer.hbs(chứa footer)
để thêm vào layout {{>header}} và {{>footer}} (nếu trong partials nó còn nằm trong file nhỏ nữa thì {{> tên file nhỏ/header}})
cấu trúc file :
src
├── index.js
└── views
    ├── home.handlebars
    └── layouts
        └── main.handlebars
    |--partials
        |--header.hbs
        |--footer.hbs

cấu hình lại package.json => "start": "nodemon --inspect ./src/index.js localhost 3000",

# Static file & SCSS : cấu hình và sử dụng những file tĩnh(css, img) cấu hình sử dụng scss

- tạo link cho file tĩnh: app.use(express.static(path.join(__dirname,'public/'))) //=>(ảnh nằm trong src(chứa file index.js)/public/img/ảnh.gì đó) => khi chạy link http://localhost:3000/img/icon.png thì nó hiểu http://localhost:3000/ là đẫ truy vào src/public/ rồi

thêm css vào main.hbs => link từ public: /css/file.css
- cài đặt sass : npm i node-sass -D
  - trong public tạo folder css
  - cấu hình thêm "script" trong package.json
    "watch" : "node-sass src/resource/scss/app.scss src/public/css/app.css",("watch" là cái mình đặt, value của nó là lệnh convert từ scss thành css)
  - chạy : npm run watch
    => mỗi lần chỉnh css trong file scss là mỗi lần chạy cmd trên
- giải pháp : "watch" : "node-sass --watch src/resource/scss/app.scss src/public/css/app.css"
  => chạy lệnh cmd 1 lần , khi file scss thay dổi tự convert sang css luôn
  vấn đề mới là nó chỉ lắng nghe sự thay đổi của file scss mình cài đặt còn cái mà mình import vào file scss đó thì nó không nghe
- giải pháp: tại folder root tạo file nodemon.json ; nội dung : { "ext" : "js mjs json scss"}
  sửa lại "script" :{ "watch" : "node-sass --watch src/resource/scss/ -o src/public/css/",}

# use Boostrap 4(nói chung cũng cần cấy ni để tạo giao diện quản lý thôi)

vào main.hbs thêm cdn của boostrap vào là được

# tạm xong phần cấu hình cơ bản ( phát hiện lỗi khởi tạo thất bại định nghĩa lại .handlebars => .hbs : app.engine('hbs',handlebars.engine({extname: 'hbs'})) )

# Xây dựng mô hình mvc(với restfull api thì khỏi cần views)
# 1 trong src tạo folder routes(chứa định nghĩa các route từ route chính '/')

# 2 trong src tạo app/controllers(chứa các xử lý khi truy cập vào các path)

# 3  định nghĩa ra func controller: 


class MyController {
  // [GET] /news    
    index(req,res) {
        res.render('news');
    }

    //[GET] /news/:detail
    detail(req,res) {
        res.send('news detail')
    }
}

module.exports = new NewController

# 4 định nghĩa tuyến đường: routes/index.js:
const newsRoute = require('./news') =>
const siteRoute = require('./site') => trong các file này trả về các xử lý 


function route(app) {
    app.use('/news', newsRoute) => khi trình duyệt có địa chỉ local/news thì nó trỏ vào newsRoute được định nghĩa trong file news.js
    app.use('/',siteRoute); =>

}

module.exports = route

trog news.js : 
const express = require('express')
const router = express.Router() => gọi hàm router trong express

const newsController = require('../app/controllers/NewController')

router.get('/:detail', newsController.detail)
router.get('/', newsController.index) => /news thì trả về hàm được trả về trong object newsController


module.exports = router


=> trong index gọi router và truyền vào app = require('express') là ok
route(app);

# 4 Install MongoDB; tải về rồi cài đặt application là xong

# 5 Prettier - Code formatter ; cài thư viện tại môi trường dev : npm i prettier lint-staged husky --save-dev
   
cấu hình thêm trong script : "beautiful" : "prettier --single-quote --trailing-comma all --tab-width 4 --write src/**/*.{js,scss,json}",,
=> npm run beautiful

+ cấu hình thư viện lint-staged: chỉnh lại cho đẹp tất cả các file đã add vào git
sửa trong script : "beautiful" : "lint-staged"
tại cấp 1 của package.json thêm : "lint-staged" : {
      "src/*/*.{js,scss,json}": "prettier --single-quote --trailing-comma all --tab-width 4 --write"
    }
+ cấu hình thư viện husky : tự động hóa việc format
 "husky" : {
    "hooks" : {
      "pre-commit" : "lint-staged"
    }
  },
  => tại cấp 1 của package.json

# Model [MVC]

# tạo db monggo :
# 1 install mongoose : mongoose github => quản lý mô hình hóa cái bảng để tránh trường hợp 1 object trả về mà nhiều loại key
ví dụ {
    data: [
        {
        id : 1,
        name: 'chuyen'
        },
        {
            curId: 2,
            list: none
        }
    ]
}
=> nói đwon giản là đồng nhất

cài đặt : npm install mongoose

# 2 đồng bộ mongodb:
1. trong src tạo : config/db/index.js :

const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_eduction_dev');
        console.log('connect successfully');
    }
    catch (error) {
        console.log('connect failure');

    }
}

module.exports = {connect}

ra index gọi :

const db = require('./config/db')

//Connect db

db.connect()

# 3 tạo model : trong app tạo models/Course.js:

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
<!-- const ObjectId = Schema.ObjectId; --> => cái này để đẻ ra id tự động=> nói chung là éo cần

const Course = new Schema({
  name: { type: String, maxLenght: 255 },
  description: { type: String, maxLenght: 600 },
  iamge : {type: String},
  createAt : { type: Date, default: Date.now},
  updateAt : { type: Date, default: Date.now},
});
=> khai báo cấu trúc của bảng gồm những key gì và nhận về dữ liệu kiểu gì

module.exports = mongoose.model('Course', Course); => export thế này để mongoose nó đọc và convert nó sang , suy ra table chúng 
tạo ra trên database có tên courses

=> tạo xong model để chọc vào database
=> cơ bản là thế, nâng cao tạo id tăng dần:
# Autoincrement _id field: custom id: sử dụng phương pháp tăng id theo id cuối + 1 sẽ xảy ra lỗi trùng id nếu có nhiều người dùng cùng nhập 1 lúc=> sử dụng thư viện : mongodb sequence github
=> thư viện hỗ trợ việc tạo ra các trường tự tăng  \
cài đặt npm i mongoose-sequence
thêm vào models :
const AutoIncrement = require('mongoose-sequence')(mongoose);
  Course.plugin(AutoIncrement); để thế này nó tự hiểu là trường _id
  trường khác : Course.plugin(AutoIncrement, {inc_field: 'id'});
  const Course = new Schema(
  {
    _id: {type:Number},
    name: { type: String,required:true},
    description: { type: String},
    image : {type: String},
    slug: { type: String, slug: "name",unique: true },
    videoId : {type: String,required:true},
    level: {type: String}
  },
  {
    _id:false,//=> để nó không khởi tạo trường _id tự dộng
    timestamps:true //=> thêm vào ngày tạo ngày sửa
  }
  );

#  xử lý lại cấu trúc Data: thêm thư viện slug, tùy chỉnh date data:
        + thêm thư viện: npm install mongoose-slug-generator => chuyển 1 property thành slug
        const mongoose = require('mongoose');
        const Schema = mongoose.Schema;
        const slug = require('mongoose-slug-generator') => sử dụng
        mongoose.plugin(slug)

        // const ObjectId = Schema.ObjectId;

        const Course = new Schema({
        name: { type: String,required:true},
        description: { type: String},
        image : {type: String},
        slug: { type: String, slug: "name",unique: true }, => chuyển name thành slug nhưng không cho trùng bằng thuộc tính unique
        videoId : {type: String,required:true},
        level: {type: String}
        },{timestamps:true});=> khi thêm course tạo thêm ngày thêm và ngày cập nhật

        module.exports = mongoose.model('Course', Course);


# file model cho video có nội dung (gần cuối, còn thêm thuật toán xóa mềm nữa, sẽ thêm lúc xử lý controller):
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const Video = new Schema({
    _id: {type:Number},
    channelId:{type:Number},
    name: { type: String,required:true},
    slug: { type: String, slug: "name",unique: true },
    description: { type: String, maxLenght: 600 },
    view:{type:Number},
    like:{type:Number},
    dislike:{type:Number},
    videoId : {type: String,required:true},
    image : {type: String,slug:'videoId'}
},{
    _id:false,
    timestamps:true
});

Video.plugin(AutoIncrement);

# 4 chọc vào db : 
# dùng model chọc vào db :
 trong siteController.js
    1. import Course vào : const Course = require('../models/Course') => cái này chính là chọc vào form
    2. giả sử tại home muốn nó tương tác db(lấy dữ liệu về) :  
    index(req, res) {
        Course.find({}, function (err, courses) { ///=> find({} => lấy tất,callback => hàm xử lý dwux liệu trả về)
            if(!err) {
                res.json(courses)
            }
            else {
                res.status(400).json({error: 'Error'})
            }
          });
        // res.render('home');
    }
npm start thì trang chủ sẽ trả về dữ liệu như api

# + POST method : Xử lý dữ liệu truyền qua form qua phương thức khác get


app.use(express.urlencoded({
extended: true
})) 
=> xử lý middleware khi gửi bằng form
app.use(express.json()) => xử lý middleware khi gửi bằng axios,fetch
=> đây là thư viện body-parser => một thư viện được tích hợp tư express 4.16 trỏ lên
với bản thấp hơn lên mạng tìm body parser npm rồi tự cài

# kết nối Cotroller và models
trong controller: 
 import Course vào : const Course = require('../models/Course')