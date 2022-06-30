import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import img from '../../img/google img.png'
import auth from '../../firebase.init';


const GoogleSignin = () => {
     const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
     const navigate = useNavigate()

     
     const location = useLocation();
      let from = location.state?.from?.pathname || "/";

      if (user) {
        navigate(from, { replace: true });
      }
     
     useEffect(() => {
          if (error) {
            toast(error?.message);
          }
        }, [error]);
     return (
       <div className="grid sm:grid-cols-1 gap-10 justify-center items-center">
         <div class="hero min-h-screen bg-base-200">
           <div class="hero-content flex-col lg:flex-row-reverse">
             <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
               <div class="card-body">
                 <div class="form-control">
                   <label class="label">
                     <span class="label-text">Email</span>
                   </label>
                   <input
                     type="text"
                     placeholder="email"
                     class="input input-bordered"
                   />
                 </div>
                 <div class="form-control">
                   <label class="label">
                     <span class="label-text">Password</span>
                   </label>
                   <input
                     type="text"
                     placeholder="password"
                     class="input input-bordered"
                   />
                   <label class="label">
                     <a href="#" class="label-text-alt link link-hover">
                       Forgot password?
                     </a>
                   </label>
                 </div>
                 <div class="form-control mt-6">
                   <button class="btn btn-primary">Login</button>
                 </div>
                 <button
                   onClick={() => signInWithGoogle()}
                   className="btn btn-outline btn-accent"
                 >
                   Continue with Google
                 </button>
               </div>
             </div>
           </div>
         </div>
       </div>
     );
};

export default GoogleSignin;



