import "./marks.css";
import React from "react";
import {PolarArea} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";


function Marks({marks}) {
    const {adi, bee, nalr, sd, fnd} = marks;
    return (
        <>
            <div className="marks">
                <h1>Marks</h1>
                <ul>
                    <li>ADI - {adi}</li>
                    <li>BEE - {bee}</li>
                    <li>NALR - {nalr}</li>
                    <li>SD - {sd}</li>
                    <li>FND - {fnd}</li>
                </ul>
                <div style={{height: "60%", width: "80%"}}>
                <PolarArea 
                    data = {{
                        labels: ["ADI", "BEE", "NALR", "SD", "FND"],
                        datasets: [
                            {
                                label: "Marks",
                                data: [adi, bee, nalr, sd, fnd],
                                backgroundColor: [
                                    'rgba(255, 99, 132)',
                                    'rgba(255, 159, 64)',
                                    'rgba(255, 205, 86)',
                                    'rgba(75, 192, 192)',
                                    'rgba(54, 162, 235)',
                                ],
                                borderColor: [
                                    'white',
                                    'white',
                                    'white',
                                    'white',
                                    'white'
                                ],
                                borderWidth: 4
                            },
                        ],
                    }}
                    options = {{
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false,
                            },
                            labels: {
                                display: false,
                            }
                        }
                    }}
                />
                </div>
            </div>
        </>
    )
}

export default Marks;