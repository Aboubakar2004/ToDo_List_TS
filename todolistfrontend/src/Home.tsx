import axios from 'axios';
import React, { useState ,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';


interface tasks {
  id: number;
  // title: string;
  // description: string;
  // completed: boolean;

  name:string,
  email:string,
  phone:string,
}

function Home() {

  const [data, setData] = useState<tasks[]>([]);
  
  const navigate = useNavigate();

  useEffect(() => {
      axios.get<tasks[]>("http://localhost:3001/tasks")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);


  const handleDelete = (id:number)=>{
    const confirm = window.confirm('Voulez vous supprimer?')
    if (confirm) {
      axios.delete("http://localhost:3001/tasks/"+id)
        .then(res => {
          // Remove the deleted item from the state
          setData(data.filter(item => item.id !== id));
        })
        .catch((err) => console.log(err));
    }

  }
  return (
    <div>
  <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
    <h1 className="">List of Users</h1>

    <div className="w-75 rounded bg-white border shadow p-4">

      <div className="d-flex justify-content-end">
        <Link to={"/create"} className='btn btn-success'> Add +</Link>
       </div>

      <table className="table table-stripend">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
          <tr key={i}>
            <td>{d.id}</td>
            <td>{d.name}</td>
            <td>{d.email}</td>
            <td>{d.phone}</td>
            <td>
              <Link to={`/read/${d.id}`} className="btn btn-sm btn-info me-2" >Read</Link>
              <Link to={`/update/${d.id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
              <button onClick={e=> handleDelete(d.id)} className="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  </div>
  )
}

export default Home
