import express from "express";
const app = express();
import {getData, getDataUsingId, createRecord}  from './database.js'

app.use((err,req,res,next) => {
    console.log(err);
    res.status(500).send("Somthing Broke");
})


app.get('/data',async (req,res) => {
    const data = getData();
    res.send(data);
})

app.get('/data/:id',async (req,res) => {
    const data = getDataUsingId(req.params.id);
    res.send(data);
})

app.listen(8080, () => {
    console.log("Server running on http://localhost:8080");
})