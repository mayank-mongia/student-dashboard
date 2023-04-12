import React, {useState} from "react";
import {Bar} from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./graph.css"


function Graph({attd}) {
    const{adi,bee,nalr,sd,fnd}=attd;
    return(
        <div className="attd">
            <h1>ATTENDANCE</h1>
            <div style={{"height" : "500px", "width" : "50vw"}}>
                <Bar 
                    data = {{
                        labels: ["ADI", "BEE", "NALR", "SD", "FND"],
                        datasets: [
                            {
                                label: "ATTENDANCE",
                                data: [adi,bee,nalr,sd,fnd],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.8)',
                                    'rgba(255, 159, 64, 0.8)',
                                    'rgba(255, 205, 86, 0.8)',
                                    'rgba(75, 192, 192, 0.8)',
                                    'rgba(54, 162, 235, 0.8)',
                                ],
                                borderColor: [
                                    'rgb(255, 99, 132)',
                                    'rgb(255, 159, 64)',
                                    'rgb(255, 205, 86)',
                                    'rgb(75, 192, 192)',
                                    'rgb(54, 162, 235)',
                                ],
                                borderWidth: 4
                            },
                        ],

                    }}
                    options = {{
                        maintiainAspectRation: true,
                        responsive: true,
                        plugins: {
                            legend: {
                                display: false
                            },
                            labels: {
                                font: {
                                    size: 20
                                }
                            }
                        }
                    }}
                />
            </div>
        </div>
    )
}


export default Graph