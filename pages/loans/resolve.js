import Head from 'next/head';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import genRandomString from '../../hooks/genRandomString';
import { BiQrScan } from 'react-icons/bi';
import Scan from '../../components/Scan';
import { useRouter } from 'next/router';

export default function UserNew() {

  const [formData, setFormData] = useState({userid: `BK${genRandomString(4)}`, createdAt: new Date().toDateString()});
  const [loadCamera, setLoadCamera] = useState(false);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/loans/${formData.loanid}`)
  }

  return (
    <div className='w-screen h-screen bg-neutral-100'>
      <Head>
        <title>Resolve Loan</title>
      </Head>

      <main className="grid grid-cols-5">

        <Sidebar />

        <div className='col-span-4 space-y-8 p-8'>

          <Navbar page="New Book" />


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

          <div className='p-4'>

            <form className='p-4 lg:p-16 bg-white lg:w-2/3 mx-auto rounded-lg shadow-2xl space-y-4' 
              onSubmit={handleSubmit}
            >

              {!loadCamera && <div className='flex justify-center items-center gap-2 w-full p-2 rounded-md border-2 border-neutral-300 hover:border-app-primary'>
                <input
                  name="name"
                  className='block w-full border-none p-2'
                  placeholder='Enter Loan ID or Scan'
                  onChange={(e) => setFormData({...formData, loanid: e.target.value})}
                  value={formData.loanid || ""}
                  required
                />

                <div className='bg-app-primary p-3 text-white rounded-md cursor-pointer relative'>
                  <div className='absolute w-full h-full' onClick={() => setLoadCamera(true)}></div>
                  <BiQrScan className='text-xl' />
                </div>

              </div>}

              {loadCamera && <Scan />}

              {/* <div className='space-y-2'>
                <input
                  name="submit"
                  type="submit"
                  className='block w-full p-3 rounded-md font-bold bg-app-primary text-center text-white border-2 border-app-primary cursor-pointer'
                  value="Submit"
                  onClick={handleSubmit}
                />
              </div> */}

            </form>

          </div>

        </div>

      </main>

    </div>
  )
}
