// import React  from "react";
// import { Link ,useNavigate} from "react-router-dom";
// import Validation from "./SignupValidation";
// import { useState } from "react";
// import axios from "axios"

// function Signup() {
//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const [errors, setErrors] = useState({});

//   const handleInput = (event) => {
//     setValues((prev) => ({
//       ...prev,
//       [event.target.name]: [event.target.value],
//     }));
//   };

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   setErrors(Validation(values));
//   //   if (errors.name === '' && errors.email === '' && errors.password === '') {
//   //     axios.post('http://localhost:8081/signup',values)
//   //     .then(res=>{ 
        
//   //       navigate('/');
//   //       }
//   //       )
//   //     .catch(err => console.log(err))
//   //   }
//   // };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setErrors(Validation(values));
    
//     if (errors.name === '' && errors.email === '' && errors.password === '') {
//         fetch('http://localhost:8081/signup', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(values)
//         })
//         .then(res => {
//             if (res.ok) {
//                 navigate('/');
//             } else {
//                 throw new Error('Une erreur s\'est produite.');
//             }
//         })
//         .catch(err => console.log(err));
//     }
// };




//   return (
//     <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
//       <div className="bg-white p-3 rounded w-25">
//         <h2>Sign-Up</h2>
//         <form action="" onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="name">
//               <strong>Name</strong>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Name"
//               name="name"
//               onChange={handleInput}
//               className="form-control rounded-0"/>
//               {errors.name && <span className="text-danger">{errors.name}</span>}
            
//           </div>
//           <div className="mb-3">
//             <label htmlFor="email">
//               <strong>Email</strong>
//             </label>
//             <input
//               type="email"
//               placeholder="Enter Email"
//               name="email"
//               onChange={handleInput}
//               className="form-control rounded-0"/>
//               {errors.email && <span className="text-danger">{errors.email}</span>}
            
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password">
//               <strong>Password</strong>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               name="password"
//               onChange={handleInput}
//               className="form-control rounded-0" />
//               {errors.password && <span className="text-danger">{errors.password}</span>}
           
//           </div>
//           <button type="submit" className="btn btn-success w-100 rounded-0">
//             <strong>Sign up</strong>
//           </button>
//           <p>You are agree to our terms and policies</p>
//           <Link
//             to="/"
//             className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
//           >
//             Login
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;






///////////////////////////



import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
// import  ValidationSignup, {ErrorMessages}  from "./SignupValidation";


import ValidationSignup from "./SignupValidation"


interface ErrorMessages {
  name?: string;
  email?: string;
  password?: string;
}


interface FormValues {
  name: string;
  email: string;
  password: string;
}

function Signup() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState<ErrorMessages>({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(ValidationSignup(values));

    if (errors.name === "" && errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:3001/signup", values)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
<<<<<<< HEAD
    // <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
    //   <div className="bg-white p-3 rounded w-25">
    //     <h2>ign-Up</h2>
    //     <form action="" onSubmit={handleSubmit}>
    //       <div className="mb-3">
    //         <label htmlFor="name">
    //           <strong>Name</strong>
    //         </label>
    //         <input
    //           type="text"
    //           placeholder="Enter Name"
    //           name="name"
    //           value={values.name}
    //           onChange={handleInput}
    //           className="form-control rounded-0"
    //         />
    //         {errors.name && (
    //           <span className="text-danger">{errors.name}</span>
    //         )}
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="email">
    //           <strong>Email</strong>
    //         </label>
    //         <input
    //           type="email"
    //           placeholder="Enter Email"
    //           name="email"
    //           value={values.email}
    //           onChange={handleInput}
    //           className="form-control rounded-0"
    //         />
    //         {errors.email && (
    //           <span className="text-danger">{errors.email}</span>
    //         )}
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="password">
    //           <strong>Password</strong>
    //         </label>
    //         <input
    //           type="password"
    //           placeholder="Enter Password"
    //           name="password"
    //           value={values.password}
    //           onChange={handleInput}
    //           className="form-control rounded-0"
    //         /> 
    //         {errors.password && (
    //           <span className="text-danger">{errors.password}</span>
    //         )}
    //       </div>
    //       <button
    //         type="submit"
    //         className="btn btn-success w-100 rounded-0"
    //       >
    //         <strong>Sign up</strong>
    //       </button>
    //       <p>You agree to our terms and policies</p>
    //       <Link
    //         to="/"
    //         className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
    //       >
    //         Login
    //       </Link>
    //     </form>
    //   </div>
    // </div>

    <div className="flex justify-content-center align-items-center bg-slate-950 vh-100">
    <div className="bg-white p-3 rounded w-50">
      <h2 className="text-center">Sign-Up</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">
            <strong>Name</strong>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            onChange={handleInput}
            className="form-control rounded-0"/>
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          
        </div>
        <div className="mb-3">
          <label htmlFor="email">
            <strong>Email</strong>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={handleInput}
            className="form-control rounded-0"/>
            {errors.email && <span className="text-red-500">{errors.email}</span>}
          
        </div>
        <div className="mb-3">
          <label htmlFor="password">
            <strong>Password</strong>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={handleInput}
            className="form-control rounded-0" />
            {errors.password && <span className="text-red-500">{errors.password}</span>}
         
        </div>

        <div className="flex justify-center ">
        <button type="submit" className="bg-blue-600 w-40 h-20 rounded-md text-center mb-3   hover:bg-blue-800">
          <strong className="text-white">Sign up</strong>
        </button>
        </div>
        <p className="text-center">You are agree to our terms and policies</p>
        <Link
          to="/"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Login
        </Link>
      </form>
    </div>
  </div>
=======
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign-Up</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={values.name}
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.name && (
              <span className="text-danger">{errors.name}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={values.email}
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={values.password}
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-success w-100 rounded-0"
          >
            <strong>Sign up</strong>
          </button>
          <p>You agree to our terms and policies</p>
          <Link
            to="/"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
>>>>>>> 9315b5481933fd9a31882d9c7aee99ad26904585
  );
}

export default Signup;
