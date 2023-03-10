import Head from 'next/head';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import genRandomString from '../../hooks/genRandomString';
import { useRouter } from 'next/router';

export default function UserNew() {
  
  const [formData, setFormData] = useState({userid: `BU${genRandomString(4)}`, createdAt: new Date().toDateString()});
  const router = useRouter();
  const { id } = router.query;

  
  useEffect(() => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.find(user => {
      if(user.userid === id) return setFormData(user);
    })
  },[id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users = users.map(user => {
      if(user.userid === id) return formData;
      return user;
    });

    localStorage.setItem('users', JSON.stringify(users));

    toast('✅ User updated Successfully');

    setTimeout(() => {
      router.push('/users');
    }, 1000)
  }

  const deleteUser = () => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users = users.filter(user => user.userid !== id);

    localStorage.setItem('users', JSON.stringify(users));
    toast('✅ User deleted Successfully');

    setTimeout(() => {
      router.push('/users');
    }, 1000)
  }

  return (
    <div className='w-screen h-screen bg-neutral-100'>
      <Head>
        <title>Edit User</title>
      </Head>

      <main className="grid grid-cols-5">

        <Sidebar />

        <div className='col-span-4 space-y-8 p-8'>

          <Navbar page="Edit User" />

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

              <div className='flex justify-end'>
                <p onClick={deleteUser} className='cursor-pointer inline-block text-sm px-4 py-2 rounded-full font-bold text-white bg-red-700'>Delete</p>
              </div>

              <div className='space-y-2'>
                <label className='block font-bold text-xs' htmlFor='username'>Name:</label>
                <input
                  name="name"
                  className='block w-full p-3 rounded-md border-2 border-neutral-300 hover:border-app-primary'
                  placeholder='Enter Fullname'
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  value={formData.name || ""}
                  required
                />
              </div>

              <div className='space-y-2'>
                <label className='block font-bold text-xs' htmlFor='username'>Email:</label>
                <input
                  name="emil"
                  className='block w-full p-3 rounded-md border-2 border-neutral-300 hover:border-app-primary'
                  placeholder='Enter Email'
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  value={formData.email || ""}
                  required
                />
              </div>

              <div className='space-y-2'>
                <label className='block font-bold text-xs' htmlFor='username'>Phone:</label>
                <input
                  name="phone"
                  type="number"
                  className='block w-full p-3 rounded-md border-2 border-neutral-300 hover:border-app-primary'
                  placeholder='Enter Phone Number'
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  value={formData.phone || ""}
                  required
                />
              </div>

              <div className='space-y-2'>
                <label className='block font-bold text-xs' htmlFor='username'>Address:</label>
                <textarea
                  name='address'
                  className='block w-full p-3 rounded-md border-2 border-neutral-300 hover:border-app-primary'
                  placeholder='Enter user address'
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  value={formData.address || ""}
                  required
                  rows="5"
                ></textarea>
              </div>

              <div className='space-y-2'>
                <input
                  name="submit"
                  type="submit"
                  className='block w-full p-3 rounded-md font-bold bg-app-primary text-center text-white border-2 border-app-primary cursor-pointer'
                  value="Update"
                  onClick={handleSubmit}
                />
              </div>

            </form>

          </div>

        </div>

      </main>

    </div>
  )
}
