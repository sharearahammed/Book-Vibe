import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authconfiguration/AuthConfiguration";
import { sendEmailVerification, updateProfile } from "firebase/auth";

const Register = () => {
    const {createUser,logOut} = useContext(AuthContext)
    const [success , setSuccess] = useState('');
    const [error , setError] = useState('');

    const handleLogout = () =>{
      logOut()
      .then()
    .catch(error=>{
      console.log(error.message)
    })
    }

    const handleSignup = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const cpassword = e.target.cpassword.value;
        const accepcted = e.target.terms.checked;
        const upload = e.target.upload.value;
        console.log(name,email,password,cpassword,upload,accepcted)

        // reset error
        setError('')
        // reset success
        setSuccess('')

        // validation
        if(password.length < 6){
            setError('Password should be 6 charecters or longer')
            return;
        }
        if(password !== cpassword){
            setError('Passwords do not match')
            return;
        }
        else if(!accepcted){
            setError('Please accepct our terms and conditions!')
            return;
        }

        // Create user
        createUser(email,password)
        .then(result =>{
            console.log(result.user)
            setSuccess('User Created Successfully')
            // Update profile
            updateProfile(result.user,{
              displayName: name,
              photoURL: upload
          })
          .then(()=> console.log('profile updated'))
          .catch()

          // send verification email:
          sendEmailVerification(result.user)
          .then(()=>{
              alert('Please check your email and verify your account')
          })
        })
        .catch(error=>{
            console.error(error.meggase)
            setError(error.meggase)
        })
    }

    return (
        <div className="flex flex-col justify-center font-[sans-serif] text-[#333] sm:h-screen p-4">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-md p-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold">Please Signin</h1>
        </div>
        <form onSubmit={handleSignup}>
          <div className="space-y-6">
            <div>
              <label className="text-sm mb-2 block">Name</label>
              <input name="name" type="text" className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter name" />
            </div>
            <div>
              <label className="text-sm mb-2 block">Email</label>
              <input name="email" type="text" className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
            </div>
            <div>
              <label className="text-sm mb-2 block">Password</label>
              <input name="password" type="password" className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter password" />
            </div>
            <div>
              <label className="text-sm mb-2 block">Confirm Password</label>
              <input name="cpassword" type="password" className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter confirm password" />
            </div>
            <div>
              <label className="text-sm mb-2 block">Upload your Photo</label>
              <input name="upload" type="file" className="bg-white w-full text-sm px-4 py-3 rounded-md outline-blue-500" />
            </div>
            <div className="flex items-center">
              <input id="remember-me" name="terms" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label className="ml-3 block text-sm">
                I accept the <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
              </label>
            </div>
          </div>
          <div className="!mt-10">
            <button className="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none">
              Create an account
            </button>
          </div>
        </form>
        <p className="text-sm mt-6 text-center">Already have an account? <Link to={'/login'}><a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">Signin here</a></Link></p>
        {
            success && <p className="text-4xl text-green-600">{success}</p>
        }
        {
            error && <p className="text-red-600">{error}</p>
        }
      </div>
    </div>
    );
};

export default Register;