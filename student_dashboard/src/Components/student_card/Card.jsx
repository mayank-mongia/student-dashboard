import React from "react";
import "./card.css"


function Card(props) {
    const {sname,rollno,age,gender,pno,grp}=props.user.student;
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4 image-card">
                    <img src={gender ===1? "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZ8PEnVJDlw7ulGKS3k2tTjE7zTvtgdodZg&usqp=CAU"} className="img-fluid" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body text-end">
                        <h4 className="card-title">{sname}</h4>
                        <p className="card-text">{rollno}</p>
                        <p className="card-text">{age}, {gender===1 ? "Male" : "Female"}</p>
                        <p className="card-text">{pno}</p>  
                    </div>

                    <div className="card-body text-end">
                        <h4 className="card-title course">Course Details</h4>
                        <p className="card-text">Group - G{grp}</p>
                        <p className="card-text">B.E. CSE</p>
                        <p className="card-text">5th Semester</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Card;