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
    router.post('/post-crud', homeController.postCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);


     //url cho trang about
    return app.use("/", router); //url mặc định
}

module.exports = initWebRoutes;