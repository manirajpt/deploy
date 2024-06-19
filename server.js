const express=require("express")
const app=express()
const PORT=4000
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hii")
})
app.listen(process.env.PORT || PORT, () => {
    console.log("Server is Up and Running");
  });