import { Sequelize } from "sequelize";
const sequelize =new Sequelize('database_development','root','thupro098',{
    host :'localhost',
    dialect: 'mysql',
    logging: false
});
let connectDB= async()=>{
    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    
    }catch(error){
        console.log('unable to connection to the database', error);
    }
}
module.exports=connectDB;