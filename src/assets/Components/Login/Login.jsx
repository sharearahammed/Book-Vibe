import { useContext } from "react";
import { Link , useNavigate } from "react-router-dom";
import { AuthContext } from "../Authconfiguration/AuthConfiguration";

const Login = () => {
    const {signUpUser} = useContext(AuthContext);
    const navigate = useNavigate()
    
    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)

        // Login user 
        signUpUser(email,password)
        .then(result =>{
            console.log(result.user)
            navigate('/')
        })
        .catch(error =>{
            console.error(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Please Login now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>Do not have an account? Please <Link to={'/register'} className="hover:underline text-blue-600 font-semibold">SignIn</Link></p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;