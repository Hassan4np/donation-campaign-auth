import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import swal from 'sweetalert';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { UserSignup } = useContext(AuthContext);
    const navigate = useNavigate();

    const hendleSignup = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pawwword = e.target.password.value;
        e.target.reset()
        if(pawwword.length<6){
          return swal("Hello world!")
        }

        UserSignup(email,pawwword)
        .then((result)=>{
            console.log(result.user);
            navigate('/login')
            return swal("Successfully Register")
        })
        .catch(error=>{
            console.log(error)
        }
            )
    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={hendleSignup}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"  >Full Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Full name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image Url</span>
                                    </label>
                                    <input type="text" name='img' placeholder="image url" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6 p-0">
                                    <input type="submit" className='btn btn-primary' value="Register" />
                                </div>
                                <label className="label">
                                    Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                                </label>
                                <SocialLogin />
                            </div>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
          
        </>
    );
};

export default Register;