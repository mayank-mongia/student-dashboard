import React,{useState} from "react";
import Card from "./student_card/Card";
import Graph from "./Graph/Graph";
import Marks from "./Marks/Marks";
import Logo from "./Logo/Logo.jsx";
import "./home.css"



const Home=({setView,user})=>{

    return (
        <div className="Main">
            <div className="top">
            <Logo/>
            <Card setView={setView} user={user} />
            </div>
            <div className="bottom">
            <Graph attd={user.attd} /> 
            <Marks marks={user.marks} />
            </div>
        </div>
    )

}
export default Home;