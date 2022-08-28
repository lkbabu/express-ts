import express,{Request,Response} from 'express'
import sequelize from './utils/database'

const app=express()
app.use(express.json())



app.get("/",(req:Request,res:Response)=>{
    return res.send("express typescript server")
})


const port =process.env.Port || 3000
app.listen(port,()=>{
    console.log("server running")
})


// sequelize.authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//         app.listen(process.env.PORT, () => {
//             console.log(`The server is running on port ${process.env.PORT} in ${process.env.STAGE} mode`);
//         });
//     })
//     .catch(err => {
//         console.error(`Unable to connect to the database in ${process.env.STAGE} mode:`, err);
//     });