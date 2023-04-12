import React ,{useState}from "react";
import SignIn from "./Login/Login_form";
import SignUp from "./SignUp/Sign_up_form";

import Home from "./Home";


function App() {
    const [view,setView]=useState(1);
    const [user,setUser]=useState({});
    var display=<Home setView={setView} user={user}/>
    if(view===0){
        display=<SignUp setView={setView} setUser={setUser}/>
    }else if(view===1){
        display=<SignIn setView={setView} setUser={setUser}/>
    }

    return (
        <>
           {display}
           {/* <Graph /> */}
        </>
    );
}

export default App;