const mysql=require("mysql2");

const connection = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"MM@7892",
  database:"studentdb"
});


const SELECT_QUERY="select * from student";
const Std={
  count: 0,
}

connection.connect(() => {
  console.log("Db connected");
  connection.query(SELECT_QUERY, (err,res) => {
    if(err) {
      console.log(err);
    }

    Std.count=res.length;
    console.log(res);
  });
});


function CreateUser(student) {
   return new Promise((resolve,reject) => {
    const {email,sname,grp,gender,age,pno,password} = student;
    const rollno = 2010990000 + Std.count + 1;
    connection.query(`insert into student values('${email}','${sname}',${rollno}, ${grp}, ${gender}, ${age}, ${pno},'${password}')`, (err, res) => {
      if(err) {
        reject(err);
        return;
      }

      SetMarks(email);
      SetAttendance(email);
      resolve(res);
    });
  });
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


function SetMarks(email){
  const [adi,nalr,bee,sd,fnd] = [getRandomInt(40,60),getRandomInt(40,60),getRandomInt(40,60),getRandomInt(40,60),getRandomInt(40,60)];
  connection.query(`insert into Marks values('${email}',${adi},${nalr},${bee}, ${sd}, ${fnd})`, (err, res) => {
    if(err) {
      console.log(err);
      return;
    } 
  });
}


function GetMarks(email){
  return new Promise((resolve,reject) => {
  connection.query(`SELECT * FROM Marks WHERE email='${email}'`, (err, res) => {
    if(err) {
      console.log(err);
      reject(err);
      return;
    }
    
    resolve(res);
  });
 });
}


function SetAttendance(email){
  const [adi,nalr,bee,sd,fnd] = [getRandomInt(75, 100), getRandomInt(75, 100), getRandomInt(75, 100), getRandomInt(75, 100), getRandomInt(75, 100)];
  connection.query(`insert into Attendance values('${email}',${adi},${nalr},${bee}, ${sd}, ${fnd})`, (err, res) => {
    if(err) {
      console.log(err);
      return;
    }
  });
}


function GetAttendance(email){
  return new Promise((resolve,reject) => {
    connection.query(`SELECT * FROM Attendance WHERE email='${email}'`, (err, res) => {
      if(err) {
        reject(err);
        return;
      }

      resolve(res);
    });
  });
}


function Login(student) {
  return new Promise((resolve,reject) => {
    connection.query(`select * from Student where email='${student.email}'`, async (err,res) => {
      if(err){
        console.log(err);
        reject({status:false,   message:err.message});
        return;
      }

      console.log("res ", res);
      if(res.length===0){
        reject({status:false, message:"Invalid Details"});
        return;
      }
      const {password} = res[0];
       
      if(student.password===password) {
        try {
          const marks = await GetMarks(student.email);
          const attd = await GetAttendance(student.email);
          resolve({status:true, data:{student:res[0], marks:marks[0], attd:attd[0]}});
        }catch(err) {
          reject({status:true, data:{student:res, marks:null, attd:null}});
        }
        
        resolve({status:true, message:res});
      }
      else {
        reject({status:false, message:"Invalid Details"});
      }
    });
  });
}


module.exports={CreateUser,Login};