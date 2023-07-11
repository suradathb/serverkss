const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
// create express app
const app = express();
app.use(cors());
// Setup server port
const port = process.env.PORT || 5000;
var storage = multer.diskStorage(
  {
    destination:'./build',
    filename:function(req,file,cb){
      cb(null,file.originalname);
    }
  }
);
const upload = multer({ storage: storage } )
app.use(express.json());
// serving front end build files
app.use(express.static(__dirname + "/../build"));
// route for file upload
app.post("/api/uploadfile", upload.single('myFile'), (req, res, next) => {
  // console.log(req);
  // console.log(req.file.originalname + " file successfully uploaded !!");
  res.sendStatus(200);
});
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});
app.get('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
});
// Require employee routes
const employeeRoutes = require('./src/routers/employee.routes')
// using as middleware
app.use('/api/v1/employees', employeeRoutes)

// Require Product routes
const products = require('./src/routers/product.routes')
// using as middleware
app.use('/api/v1/products', products)
// Require Product order routes
const productOrders = require('./src/routers/productorder.routes')
// using as middleware
app.use('/api/v1/productorders', productOrders)
// Require User routes
const Users = require('./src/routers/user.routes')
// Require User routes
const Reservation = require('./src/routers/reservation.routes')
// using as middleware
app.use('/api/v1/reservation', Reservation)
// Require User routes
const ReservationSetting = require('./src/routers/reservationsetting.routes')
// using as middleware
app.use('/api/v1/resersetting', ReservationSetting)
// Require Trans order routes
const TransOrder = require('./src/routers/transorder.routes')
// using as middleware
app.use('/api/v1/transorder', TransOrder)
// Require Trans order routes
const ImageFile = require('./src/routers/imagefile.routes')
// using as middleware
app.use('/api/v1/imagefile', ImageFile)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});