import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

interface tasks {
  id: number;
  // title: string;
  // description: string;
  // completed: boolean;

  name:string,
  email:string,
  phone:string,
}

function Read() {

  const [data, setData] = useState<tasks>();
  const { id } = useParams()
  useEffect(() => {
      axios.get<tasks>("http://localhost:3001/tasks/"+id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white  shadow px-5 pt-3 pb-5 rounded">
        <h3>Detail of User</h3>
        <div className="mb-3">
          <strong>Name: {data?.name}</strong>
        </div>
        <div className="mb-3">
          <strong>Email: {data?.email}</strong>
        </div>
        <div className="mb-3">
          <strong>Phone:{data?.phone}</strong>
        </div>

        <Link to={`/update/${id}`} className="btn btn-success">
          Edit
        </Link>
        <Link to={"/"} className="btn btn-primary ms-3">
          Back
        </Link>
      </div>
    </div>
  );
}

export default Read
