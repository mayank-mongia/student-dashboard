const express=require("express");
const cors=require("cors");
const  {CreateUser,Login}=require("./src/db/sqlconn");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(cors({
        origin:["http://localhost:3000"]
    })
);


app.get('/', (req,res) => {
    res.send("Connected");
});


app.post("/user/signup", (req,res) => {
    const body=req.body;
    console.log(body);
    CreateUser(body).then(r => {
        res.send(r);
    }).catch(e => {
        console.log(e);
        res.status(500).send(e);
    });
});


app.post("/user/signin", (req,res) => {
    const body=req.body;
    Login(body).then(r => {
        res.send(r);
    }).catch(e => {
        res.status(500).send(e);
    });
});


app.listen(4000, () => {
    console.log("Server UP");
});