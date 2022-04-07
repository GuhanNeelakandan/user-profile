import React from "react"
function DashboardCard(props) {
    return (

        <div class="col-xl-3 col-md-6 mb-4">
            {/* card left colour if condition */}
            <div className={props.card.colour1 ? "card border-left-primary shadow h-100 py-2"
                : props.card.colour2 ? "card border-left-success shadow h-100 py-2"
                    : props.card.colour3 ? "card border-left-info shadow h-100 py-2"
                        : props.card.colour4 ? "card border-left-warning shadow h-100 py-2"
                            : ""}>
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            {/* font colour */}
                            <div className={props.card.colour1 ? "text-xs font-weight-bold text-primary text-uppercase mb-1"
                                : props.card.colour2 ? "text-xs font-weight-bold text-success text-uppercase mb-1"
                                    : props.card.colour3 ? "text-xs font-weight-bold text-info text-uppercase mb-1"
                                        : props.card.colour4 ? "text-xs font-weight-bold text-warning text-uppercase mb-1"
                                            : ""}>{props.card.name}</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{props.card.price}
                                {/* progress design in if condition */}
                                {props.card.percentage ?
                                    <div class="col">
                                        <div class="progress progress-sm mr-2">
                                            <div class="progress-bar bg-info" role="progressbar"
                                                style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                    </div> : ""}
                            </div>
                        </div>
                        {/* icon design (if condition)*/}
                        <div class="col-auto">
                            {props.card.icon1 ?
                                <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                : props.card.icon2 ? <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                    : props.card.icon3 ? <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                        : props.card.icon4 ? <i class="fas fa-comments fa-2x text-gray-300"></i>
                                            : ""}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default DashboardCard;