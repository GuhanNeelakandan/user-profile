import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import swal from 'sweetalert'
function Users() {
  let params = useParams()
  const [user, setUser] = useState([]);
  useEffect(async () => {
    let user = await axios.get("https://624abad6852fe6ebf88a5ec2.mockapi.io/user")
    setUser(user.data)
  }, []);
  const deleteUser = (id) => {
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
        setUser(getData.data);
      });
  };


  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">User List</h1>
        <Link to={"/user-create"} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
          class="fas fa-download fa-sm text-white-50"></i> Create User <i class="fa fa-plus" aria-hidden="true"></i></Link>
      </div>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
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
                {user.map((users) => {
                  return <tr>
                    <td>{users.id}</td>
                    <td>{users.name}</td>
                    <td>{users.age}</td>
                    <td>{users.place}</td>
                    <td><Link to={`/user-view/${users.id}`} class="btn btn-outline-warning btn-sm" data-toggle="tooltip" data-placement="bottom" title="view"><i class="fa fa-eye" aria-hidden="true"></i></Link>
                      <Link to={`/user-edit/${users.id}`} class="btn btn-outline-primary btn-sm" data-toggle="tooltip" data-placement="bottom" title="edit"><i class="fa as fa-edit"></i></Link>
                      <button onClick={() => deleteUser(users.id)} class="btn btn-outline-danger btn-sm" data-toggle="tooltip" data-placement="bottom" title="delete"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
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

export default Users;
