import axios from "axios";
import { useFormik } from 'formik'
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProfileEdit() {
    let params = useParams();
    const navigate = useNavigate();
    useEffect(async () => {
        try {
            let editData = await axios.get(`https://624abad6852fe6ebf88a5ec2.mockapi.io/details/${params.id}`)
            formik.setValues(editData.data)
        }
        catch (error) {
            console.log(error)
        }

    }, [])
    let formik = useFormik({
        initialValues: {
            id: 0,
            name: "",
            age: 0,
            place: "",
            image: "",
        },
        validate: (values) => {
            const errors = {}
            if (!values.name) {
                errors.name = "Requried";
            } else if (values.name.length > 15) {
                errors.name = "must be 15 characters or less"
            }
            if (!values.id) {
                errors.id = "Should not  be blank";
            }
            return errors;
        },
        onSubmit: async (values) => {
            await axios.put(`https://624abad6852fe6ebf88a5ec2.mockapi.io/user/${params.id}`, values)
            navigate("/profile", { replace: true });
        }
    })
    return (
        <div className="container">
            <div>
                <h1>Edit-Profile Details</h1>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <label>ID</label>
                            <input
                                type={'number'}
                                name="id"
                                onChange={formik.handleChange}
                                value={formik.values.id}
                                className="form-control" />
                        </div>
                        <div>
                            <label>Name<span style={{ color: "red" }}>*{formik.errors.name}</span></label>
                            <input
                                type={'text'}
                                name="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                className="form-control" />
                        </div>
                        <div>
                            <label>Age</label>
                            <input
                                type={'text'}
                                name="age"
                                onChange={formik.handleChange}
                                value={formik.values.age}
                                className="form-control" />
                        </div>
                        <div>
                            <label>Place</label>
                            <input
                                type={'text'}
                                name="place"
                                onChange={formik.handleChange}
                                value={formik.values.place}
                                className="form-control" />
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div class="form-group">
                            <label for="exampleFormControlFile1">Change Profile Pic</label>
                            <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mt-3">
                    <input disabled={Object.keys(formik.errors).length !== 0} type={'submit'}
                        className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}
export default ProfileEdit;