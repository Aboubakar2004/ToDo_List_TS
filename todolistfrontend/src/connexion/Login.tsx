// import React, { useState } from "react";
// import { Link , useNavigate} from "react-router-dom";
// import Validation from "./LoginValidation";
// import axios from "axios"

// function Login() {
//   const [values, setValues] = useState({
//     email: "",
//     password: "",
//   });

// const navigate = useNavigate();

//   const [errors,setErrors]= useState({})

//   const handleInput = (event)=>{
//     setValues(prev =>({...prev,[event.target.name]:[event.target.value]}))
//   }



//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setErrors(Validation(values));
  
//     if (errors.email === '' && errors.password === '') {
//       try {
//         const response = await fetch('http://localhost:8081/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(values)
//         });
  
//         if (response.ok) {
//           const data = await response.json();
//           if (data === "Success") {
//             navigate('/home');
//           } else {
//             alert('No record existed');
//           }
//         } else {
//           throw new Error('Network response was not ok.');
//         }
//       } catch (error) {
//         console.error('Error during fetch:', error);
//       }
//     }
//   };
  



//   return (
//     <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
//       <div className="bg-white p-3 rounded w-25">
//         <h2>Sign in</h2>
//         <form action="" onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="email">
//               <strong>Email</strong>
//             </label>
//             <input
//               type="email"
//               placeholder="Enter Email"
//               name="email"
//               onChange={handleInput}
//               className="form-control rounded-0"
          
//             />   
//             {errors.email && <span className="text-danger">{errors.email}</span>}
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
//               className="form-control rounded-0"
//             />
//             {errors.password && <span className="text-danger">{errors.password}</span>}
//           </div>
//           <button type="submit" className="btn btn-success w-100 rounded-0">
//             <strong>Log in</strong>
//           </button>
//           <p>You are agree to our terms and policies</p>
//           <Link
//             to="/signup"
//             className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
//           >
//             Create Account
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;













///////////////////////////


import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import Validation from "./LoginValidation";
import axios from "axios";

interface FormValues {
  email: string;
  password: string;
}

function Login(): JSX.Element {
  const [values, setValues] = useState<FormValues>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState<{email?: string; password?: string;}>({});

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValues(prev => ({...prev, [event.target.name]: event.target.value}));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setErrors(Validation(values));
  
    if (!errors.email && !errors.password) {
      try {
        const response = await fetch('http://localhost:3001', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        });
  
        if (response.ok) {
          const data = await response.json();
          if (data === "Success") {
            navigate('/home');
          } else {
            alert('No record existed');
          }
        } else {
          throw new Error('Network response was not ok.');
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    }
  };
  
  return (
<<<<<<< HEAD
    // <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
    //   <div className="bg-white p-3 rounded w-25">
    //     <h2>Sign in</h2>
    //     <form onSubmit={handleSubmit}>
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
    //         {errors.email && <span className="text-danger">{errors.email}</span>}
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
    //         {errors.password && <span className="text-danger">{errors.password}</span>}
    //       </div>
    //       <button type="submit" className="btn btn-success w-100 rounded-0">
    //         <strong>Log in</strong>
    //       </button>
    //       <p>You agree to our terms and policies</p>
    //       <Link
    //         to="/signup"
    //         className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
    //       >
    //         Create Account
    //       </Link>
    //     </form>
    //   </div>
    // </div>

    <div className="flex justify-content-center align-items-center bg-slate-950 vh-100 ">
    <div className="bg-white p-3 rounded w-50">
      <h2 className="text-center">Sign in</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email">
            <strong>Email</strong>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={handleInput}
            className="form-control rounded-0"
        
          />   
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
            className="form-control rounded-0"
          />
          {errors.password && <span className="text-red-500">{errors.password}</span>}
        </div>

        <div className="flex justify-center ">
        <button type="submit" className="bg-blue-600 w-40 h-20 rounded-md text-center mb-3   hover:bg-blue-800">
          <strong className="text-white">Log in</strong>
        </button> 
        
        </div>
        <p className="text-center">You are agree to our terms and policies</p>

       
        <Link
          to="/signup"
          className="btn btn-default border w-100 bg-light rounded-md text-decoration-none"
        >
          Create Account
        </Link>
      </form>
    </div>
  </div>
=======
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit}>
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
            {errors.email && <span className="text-danger">{errors.email}</span>}
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
            {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            <strong>Log in</strong>
          </button>
          <p>You agree to our terms and policies</p>
          <Link
            to="/signup"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
>>>>>>> 9315b5481933fd9a31882d9c7aee99ad26904585
  );
}

export default Login;











