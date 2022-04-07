import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function ProfileView() {
    const navigate = useNavigate()
    let params = useParams()
    const [profileData, setProfileData] = useState([]);
    useEffect(async () => {
        let viewData = await axios.get(`https://624abad6852fe6ebf88a5ec2.mockapi.io/user/${params.id}`)
        setProfileData(viewData.data)
    }, [])
    return (
        <div class="card w-50">
            <div class="card-body">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h3 class="card-title">Profile Details</h3>
                            <p class="card-text">ID       : {profileData.id}</p>
                            <p class="card-text">Name     :{profileData.name}</p>
                            <p class="card-text">Age    : {profileData.age}</p>
                            <p class="card-text">Place :{profileData.place}</p>
                            <div className="col-lg-6 mt-3">
                                <input
                                    type={"submit"}
                                    value="Close"
                                    onClick={() => navigate("/profile", { replace: true })}
                                    className="btn btn-primary"
                                />
                            </div>
                        </div>
                        <div className="col-6"> <img src={profileData.image} class="card-img" alt="..." />
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default ProfileView;