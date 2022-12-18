import Head from 'next/head';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {

  const [formData, setFormData] = useState({});
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.username || !formData.password){
      return toast('❌ Fill all field');
    }
    
    if(formData.username === "admin" && formData.password === "admin"){
      toast('✅ Login Successfull');
      return router.push(`/dashboard`)
    }

    return toast('❌ Wrong credentials');
  }

  return (
    <div className='bg-app-primary bg-cover bg-center w-screen h-screen'>
      <Head>
        <title>Homepage</title>
      </Head>

      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

      <main className="grid grid-cols-2 justify-center items-center min-h-screen">

        

        <div className='flex justify-center p-4'>
          <div className='relative w-52 h-16'>
            <Image style={{objectFit: "contain"}} src="/img/logo.png" fill alt=''/>
          </div>
        </div>

        <div className='p-4'>

          <form className='p-4 lg:p-16 bg-white lg:w-2/3 mx-auto rounded-lg shadow-2xl space-y-4' onSubmit={handleSubmit}>

            <div className='space-y-2'>
              <label className='block font-bold text-xs' htmlFor='username'>Admin ID:</label>
              <input
                className='block w-full p-3 rounded-md border-2 border-neutral-400 hover:border-app-primary'
                placeholder='Enter Admin ID'
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                value={formData.username}
              />
            </div>

            <div className='space-y-2'>
              <label className='block font-bold text-xs' htmlFor='password'>Password:</label>
              <input
                type="password"
                className='block w-full p-3 rounded-md border-2 border-neutral-400 hover:border-app-primary'
                placeholder='Enter Password'
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                value={formData.password}
              />
            </div>

            <div className='space-y-2'>
              <input
                type="submit"
                className='block w-full p-3 rounded-md font-bold bg-app-primary text-center text-white border-2 border-app-primary cursor-pointer'
                value="Login"
              />
            </div>

          </form>

        </div>

      </main>

    </div>
  )
}
