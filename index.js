import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
app.use(express.static("public"))
const dirName = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(dirName + "/public/index.html");
})

app.listen(port,()=>{
    console.log("Server running in 3000");
})
