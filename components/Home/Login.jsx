
import React from 'react'
import svg from '@/assets/svg/allSvg'
const Login = () => {
  //importing svg files
  const emailSvg=svg.find(i=>i.email)?.email
  const passwordSvg=svg.find(i=>i.password)?.password
  const handSvg=svg.find(i=>i.hand)?.hand

  return (
    <div className="grid md:grid-cols-2 ">
      <div className=" w-[300px] mx-auto some-ele">
        <div className="flex flex-col  min-h-screen  items-center justify-center">
          <div className="flex">
            <h3 className="font-bold text-4xl">Welcome Back</h3>
            <img src={handSvg} alt="" className="w-10 h-10" />
          </div>
          <h3 className="mt-7">Please enter your details.</h3>
          {/* <h3 className='flex bg-red-200 rounded-full'>
  <img src="" alt="logo" />
  <h3>login with apple</h3>
</h3> */}
          <div className="flex justify-between items-center px-2  w-full">
            {/* <h3 className='w-14 h-1 mt-5 bg-red-200'></h3>
  <h3 className='mt-5'> or</h3>
  <h3 className='w-14 h-1 mt-5 bg-red-200'></h3> */}
          </div>
          <div className="flex relative mt-10">
            <input
              className=" rounded-full border border-gray-300 w-[250px] px-2 pt-1 pb-1"
              type="email"
              placeholder="Email"
            />
            <img
              className="absolute right-2 mt-3 w-3 h-3"
              src={emailSvg}
              alt="dw"
              srcset=""
            />
          </div>
          <div className="flex relative mt-5">
            <input
              className=" rounded-full border border-gray-300 w-[250px] px-2 pt-1 pb-1"
              type="password"
              placeholder="Password"
            />
            <img
              className="absolute right-2 mt-3 w-3 h-3"
              src={passwordSvg}
              alt="dw"
              srcset=""
            />
          </div>
          <div className="flex w-full justify-around mt-5">
            <div className="flex justify-center items-center">
              <input type="checkbox" name="" id="" />
              <h3 className="text-[12px]">Remember for 30 days </h3>
            </div>
            <div>
              <h3 className="text-[12px] ">Forgot password ?</h3>
            </div>
          </div>
          <div>
            <h3 className="bg-red-200 mt-10 w-[180px] p-2 text-center text-sm rounded-full">
              Log In
            </h3>
          </div>
          <h3 className="mt-10">
            Don't have an account? <strong>Sign Up</strong>
          </h3>
        </div>
      </div>

      <div className="hidden md:flex">
        <img
          src="https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1704698730/LYMDATALABS/Pages/webp/login_jngsdf.webp"
          className=" w-[550px] h-screen md:p-3  rounded-3xl"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
}

export default Login