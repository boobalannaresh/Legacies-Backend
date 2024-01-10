import express from "express";
import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config()
const app = express()
const PORT = 4000;
const url =process.env.MONGO_URL;
const client = new MongoClient(url)
await client.connect()
console.log("MongoDB Connected")

app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000"
}))

app.get("/", function(req, res){

})
app.post("/note", async function(req, res){
    const getPostman = req.body;
    const postMethod = await client.db("legacies").collection("notification").insertOne(getPostman);
    res.status(200).send(postMethod)
})

app.get("/note", async function(req, res){
    const getMethod = await client.db("legacies").collection("notification").find({}).toArray()
    res.status(200).send(getMethod)
})

app.post("/activi", async function(req, res){
    const getPostman = req.body;
    const postMethod = await client.db("legacies").collection("activi").insertOne(getPostman);
    res.status(200).send(postMethod)
})

app.get("/activi", async function(req, res){
    const getMethod = await client.db("legacies").collection("activi").find({}).toArray()
    res.status(200).send(getMethod)
})

app.post("/contact", async function(req, res){
    const getPostman = req.body;
    const postMethod = await client.db("legacies").collection("contact").insertOne(getPostman);
    res.status(200).send(postMethod)
})

app.get("/contact", async function(req, res){
    const getMethod = await client.db("legacies").collection("contact").find({}).toArray()
    res.status(200).send(getMethod)
})




app.listen(PORT, ()=> {
    console.log(`Server Connected ${PORT}`)
})