import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import UserContext from './UserContext';


function CreateProfile() {
    const navigate=useNavigate();
    let userContext=useContext(UserContext)
    let formik = useFormik({
        initialValues: {
            id:0,
            name: "",
            age: 0,
            place:"",
        },
        validate: (values) => {
            const errors = {}
            if (!values.name) {
                errors.name = "Requried";
            } else if (values.name.length > 15) {
                errors.name = "must be 15 characters or less"
            }
            return errors;
        },
        onSubmit: values => {
            try {
                axios.post("https://624abad6852fe6ebf88a5ec2.mockapi.io/user",values)
                userContext.setUsers([...userContext.users, values])
            } catch (error) {
                console.log(error)
            }
            navigate("/profile", { replace: true });
        }
    })
    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                <div className="col-lg-6">
                        <label>ID</label>
                        <input
                            type={'number'}
                            name="id"
                            onChange={formik.handleChange}
                            value={formik.values.id}
                            className="form-control" />
                    </div>
                    <div className="col-lg-6">
                        <label>Name<span style={{ color: "red" }}>*{formik.errors.name}</span></label>
                        <input
                            type={'text'}
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            className="form-control" />
                    </div>
                    <div className="col-lg-6">
                        <label>Age</label>
                        <input
                            type={'number'}
                            name="age"
                            onChange={formik.handleChange}
                            value={formik.values.age}
                            className="form-control" />
                    </div>
                    <div className="col-lg-6">
                        <label>Place</label>
                        <input type={'text'}
                            name="place"
                            onChange={formik.handleChange}
                            value={formik.values.place}
                            className="form-control" />
                    </div>
                    
                </div>
                <div className="col-lg-6 mt-3">
                        <input disabled={Object.keys(formik.errors).length!==0} type={'submit'}
                         className="btn btn-primary" />
                    </div>
            </form>
        </div>
    )
}
export default CreateProfile;