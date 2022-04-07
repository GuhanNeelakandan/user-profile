import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import swal from 'sweetalert'
function Profile() {
  let params = useParams()
  const [profiles, setProfile] = useState([]);
  useEffect(async () => {
    let profiles = await axios.get("https://624abad6852fe6ebf88a5ec2.mockapi.io/user")
    setProfile(profiles.data)
  }, []);
  const deleteProfile = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Student Details!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          axios.delete(`https://624abad6852fe6ebf88a5ec2.mockapi.io/user/${id}`)
            .then(() => {
              getData();
            })
          swal("Sucessfully deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
  };
  const getData = () => {
    axios
      .get("https://624abad6852fe6ebf88a5ec2.mockapi.io/user")
      .then((getData) => {
        setProfile(getData.data);
      });
  };


  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Profile List</h1>
        <Link to={"/profile-create"} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
          class="fas fa-download fa-sm text-white-50"></i> Create Profile <i class="fa fa-plus" aria-hidden="true"></i></Link>
      </div>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Place</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {profiles.map((profile) => {
                  return <tr>
                    <td>{profile.id}</td>
                    <td>{profile.name}</td>
                    <td>{profile.age}</td>
                    <td>{profile.place}</td>
                    <td><Link to={`/profile-view/${profile.id}`} class="btn btn-outline-warning btn-sm" data-toggle="tooltip" data-placement="bottom" title="view"><i class="fa fa-eye" aria-hidden="true"></i></Link>
                      <Link to={`/profile-edit/${profile.id}`} class="btn btn-outline-primary btn-sm" data-toggle="tooltip" data-placement="bottom" title="edit"><i class="fa as fa-edit"></i></Link>
                      <button onClick={() => deleteProfile(profile.id)} class="btn btn-outline-danger btn-sm" data-toggle="tooltip" data-placement="bottom" title="delete"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
                  </tr>
                })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  );
}

export default Profile;