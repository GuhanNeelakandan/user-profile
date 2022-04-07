import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function UserView() {
    const navigate = useNavigate()
    let params = useParams()
    const [userData, setUserData] = useState([]);
    useEffect(async () => {
        let viewData = await axios.get(`https://624abad6852fe6ebf88a5ec2.mockapi.io/user/${params.id}`)
        setUserData(viewData.data)
    }, [])
    return (
        <div class="card w-50">
            <div class="card-body">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h3 class="card-title">User Details</h3>
                            <p class="card-text">ID       : {userData.id}</p>
                            <p class="card-text">Name     :{userData.name}</p>
                            <p class="card-text">Age    : {userData.age}</p>
                            <p class="card-text">Place :{userData.place}</p>
                            <div className="col-lg-6 mt-3">
                                <input
                                    type={"submit"}
                                    value="Close"
                                    onClick={() => navigate("/users", { replace: true })}
                                    className="btn btn-primary"
                                />
                            </div>
                        </div>
                        <div className="col-6"> <img src={userData.image} class="card-img" alt="..." />
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default UserView;