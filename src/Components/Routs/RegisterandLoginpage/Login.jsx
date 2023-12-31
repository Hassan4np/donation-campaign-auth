import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Result } from 'postcss';

const Login = () => {
    const { UserLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const HendleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pawwword = e.target.password.value;
        e.target.reset()
        UserLogin(email,pawwword)
        .then((result)=>{
            console.log(result.user)
            navigate('/')

        })
        .then(error=>{
            console.log(error)
        })


    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={HendleLogin}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6 p-0">
                                    <input className='btn btn-success' type="submit" value="Login" />
                                </div>
                                <label className="label">
                                    New here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                                </label>
                                <SocialLogin />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;