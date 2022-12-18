import Head from 'next/head';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import genRandomString from '../../hooks/genRandomString';

export default function BookNew() {

  const [formData, setFormData] = useState({bookid: `BK${genRandomString(4)}`, createdAt: new Date().toDateString()});

  const handleSubmit = (e) => {
    e.preventDefault();
    let books = JSON.parse(localStorage.getItem('books')) || [];
    books = [...books, formData];
    localStorage.setItem('books', JSON.stringify(books));

    toast('✅ Book Added Successfully');
    setFormData({bookid: `BK${genRandomString(4)}`, createdAt: new Date().toDateString()});
  }

  return (
    <div className='w-screen h-screen bg-neutral-100'>
      <Head>
        <title>New Book</title>
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

              {/* <div className='space-y-2'>
                <label className='block font-bold text-xs' htmlFor='username'>Image:</label>
                <input
                  className='block w-full p-3 rounded-md border-2 border-neutral-300 hover:border-app-primary'
                  placeholder='Enter Admin ID'
                  onInput={(e) => console.log(e)}
                  value={formData.title || ""}
                  type="file"
                  accept='image/*'
                />
              </div> */}

              <div className='space-y-2'>
                <label className='block font-bold text-xs' htmlFor='username'>Title:</label>
                <input
                  name="title"
                  className='block w-full p-3 rounded-md border-2 border-neutral-300 hover:border-app-primary'
                  placeholder='Book Title'
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  value={formData.title || ""}
                  required
                />
              </div>

              <div className='space-y-2'>
                <label className='block font-bold text-xs' htmlFor='username'>Description:</label>
                <textarea
                  name='description'
                  className='block w-full p-3 rounded-md border-2 border-neutral-300 hover:border-app-primary'
                  placeholder='Short descriotion about book'
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  value={formData.description || ""}
                  required
                  rows="8"
                ></textarea>
              </div>

              <div className='space-y-2'>
                <label className='block font-bold text-xs' htmlFor='username'>Author:</label>
                <input
                  name="author"
                  className='block w-full p-3 rounded-md border-2 border-neutral-300 hover:border-app-primary'
                  placeholder='Book Author name'
                  onChange={(e) => setFormData({...formData, author: e.target.value})}
                  value={formData.author || ""}
                  required
                />
              </div>

              <div className='space-y-2'>
                <label className='block font-bold text-xs' htmlFor='username'>Date Published:</label>
                <input
                  name="date"
                  className='block w-full p-3 rounded-md border-2 border-neutral-300 hover:border-app-primary'
                  placeholder=''
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  value={formData.date || ""}
                  required
                  type="date"
                />
              </div>

              <div className='space-y-2'>
                <label className='block font-bold text-xs' htmlFor='username'>ISBN No:</label>
                <input
                  name="isbn"
                  className='block w-full p-3 rounded-md border-2 border-neutral-300 hover:border-app-primary'
                  placeholder='Book ISBN Number'
                  onChange={(e) => setFormData({...formData, isbn: e.target.value})}
                  value={formData.isbn || ""}
                  required
                />
              </div>

              <div className='space-y-2'>
                <label className='block font-bold text-xs' htmlFor='username'>Price:</label>
                <input
                  name="price"
                  className='block w-full p-3 rounded-md border-2 border-neutral-300 hover:border-app-primary'
                  placeholder='Price of Book'
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  value={formData.price || ""}
                  required
                />
              </div>

              <div className='space-y-2'>
                <label className='block font-bold text-xs' htmlFor='username'>Loan Duration:</label>
                <div className='flex items-center gap-4'>
                  <input
                    name="duration"
                    className='block w-full p-3 rounded-md border-2 border-neutral-300 hover:border-app-primary'
                    placeholder='How long can the book be borrowed for'
                    onChange={(e) => setFormData({...formData, duration: e.target.value})}
                    value={formData.duration || ""}
                    required
                    type="number"
                  />
                  <span className='font-bold'>Days</span>
                </div>
              </div>

              <div className='space-y-2'>
                <input
                  name="submit"
                  type="submit"
                  className='block w-full p-3 rounded-md font-bold bg-app-primary text-center text-white border-2 border-app-primary cursor-pointer'
                  value="Submit"
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
