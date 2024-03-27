const app=require("./app");
const dotevn=require("dotenv")
const PORT=process.env.PORT || 3000
const connectDatabase=require("./config/dbConnection")

//config

dotevn.config({path:"backend/config/config.env"});//^now you can use its variable
connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`)
})