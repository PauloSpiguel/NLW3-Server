import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json())

app.get("/users", (request, response)=>{
  response.json({message: "Hello World"})
})


app.listen(3333, ()=>{
  console.log("🚀 Server running!");
});