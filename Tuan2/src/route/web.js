import express from "express"; //gọi Express
import homeController from "../controller/homeController"; //gọi controller

let router = express.Router();  //khởi tạo Route

let initWebRoutes = (app) => {
    //cách 1:
    router.get('/', (req,res) => {
        return res.send('Tran Anh Thu');
    });
    //cách 2: gọi hàm trong controller
    router.get('/home', homeController.getHomePage); //url cho trang chủ
    router.get('/about', homeController.getAboutPage); //url cho trang about
    router.get('/crud', homeController.getCRUD);
    router.get('/get-crud', homeController.getFindAllCrud);


     //url cho trang about
    return app.use("/", router); //url mặc định
}

module.exports = initWebRoutes;