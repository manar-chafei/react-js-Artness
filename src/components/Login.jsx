import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import {useNavigate} from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import {client} from '../client';
import jwt_decode  from "jwt-decode";

import {FcGoogle} from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';

const Login = () => {
    const navigate = useNavigate();
    const credentialResponse = (response) => {
     
        console.log(response);
        var profileObj = jwt_decode(response.credential);
        console.log(profileObj);
        createOrGetUser(response).then((decode) => {
            const { name, picture, sub } = decode;
            localStorage.setItem("user", JSON.stringify(decode));
            const doc = {
              _id: sub,
              _type: "user",
              userName: name,
              image: picture,
            };
            client.createIfNotExists(doc).then(() => {
              navigate("/", { replace: true });
            });
              });
            };
              const createOrGetUser = async (response) => {
                const decode = jwt_decode(response.credential);
                return decode;
    } ;
  
    
        return (
            <div className='flex justify-start items-center flex-col h-screen'>
                <div className='relative w-full h-full'>
                    <video
                    src={shareVideo}
                    type="video/mp4"
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className='w-full h-full object-cover'
                    />

                    <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
                        <div className='p-5'>
                            <img src={logo} width='200px' alt='logo'/>
                        </div>

                        <div className='shadow-2x1'>
                            
                        <GoogleLogin
                       onSuccess={credentialResponse}
                             onError={() => {
                          console.log('Login Failed');
                                  }}
                                />;
                            
                        </div>

                    </div>

                </div>
            </div>
        );
    }
 
export default Login;


/*<GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
  useOneTap
/>;*/

