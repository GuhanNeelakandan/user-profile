import React from "react";
import DashboardCard from "./Dashboardcard";
function Dashboard() {
    let cards=[
        {
            name:"Earnings (Monthly)",
            price:"$40000",
            icon1:true,
            colour1:true,
            
        },
        {
            name:"Earnings (Annual)",
            price:"$250000",
            icon2:true,
            colour2:true,
            
        },
        {
            name:"Task",
            price:"50%",
            icon3:true,
            colour3:true,
            percentage:true,
        },
        {
            name:"Pending Request",
            price:"18",
            icon4:true,
            colour4:true,
        }
    ]
    return (
        <>
        {/* title */}
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>
            <div class="row">
                {
                    cards.map((card)=>{
                        return <DashboardCard card={card}/>
                    })
                }
            </div>
        </>
            )
}
export default Dashboard;