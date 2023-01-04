import express, { Express } from "express";
import dotnev from "dotenv";
import bodyParser from "body-parser"
import cors from "cors"

dotnev.config();

const app: Express = express();
const PORT = process.env.PORT
const sequelize = require("./services/db");

app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE,PATCH",
    credentials:true
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

import categoryRouter from "./routers/categoryRouter";
import companyRouter from "./routers/companyRouter";

app.use(categoryRouter);
app.use(companyRouter);

app.listen(PORT, (err: Error | void) => {
    if(err){
        console.log(err)
    }else{
        console.log(`Back end is up in port ${PORT}`)
    }
})

