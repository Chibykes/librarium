import Head from 'next/head';
import { ImBooks } from 'react-icons/im';
import { RiExchangeFill, RiFileUserFill } from 'react-icons/ri';

import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export default function Dashboard() {

  const [books, setBooks] = useState([ ]);
  const [loans, setLoans] = useState([ ]);

  useEffect(() => {
    setBooks(JSON.parse(localStorage.getItem('books')) || []);
    setLoans(JSON.parse(localStorage.getItem('loans')) || []);
  }, []);

  return (
    <div className='w-screen h-screen bg-neutral-100'>
      <Head>
        <title>Dashboard</title>
      </Head>

      <main className="grid grid-cols-5">

        <Sidebar />

        <div className='col-span-4 space-y-8 p-8'>

          <Navbar page="Dashboard" />

          <div className='space-y-8 max-w-4xl mx-auto'>
            <div className='grid grid-cols-3 gap-4'>
              <div className='relative p-6 space-y-1 bg-app-primary text-white rounded-xl'>
                <p className='text-6xl'>30</p>
                <p className='font-bold text-sm'>Total Books</p>
                <ImBooks className='absolute top-6 right-4 text-6xl text-white opacity-40' />
              </div>
              <div className='relative p-6 space-y-1 bg-white rounded-xl'>
                <p className='text-6xl'>21</p>
                <p className='font-bold text-sm'>Total Authors</p>
                <RiFileUserFill className='text-app-primary absolute top-6 right-4 text-6xl text-white opacity-40' />
              </div>
              <div className='relative p-6 space-y-1 bg-white rounded-xl'>
                <p className='text-6xl'>12</p>
                <p className='font-bold text-sm'>Currently Loaned Out</p>
                <RiExchangeFill className='text-app-primary absolute top-6 right-4 text-6xl text-white opacity-40' />
              </div>
            </div>

            <div className='space-y-3'>
              <div className='flex items-center px-3 py-4 rounded-xl bg-app-primary text-white'>
                <p className='text-sm font-bold'>Books</p>
              </div>

              <div className='grid grid-cols-12 rounded-xl text-app-primary bg-white'>
                <p className='col-span-1 text-sm p-3 py-4 font-bold'>S/N</p>
                <p className='col-span-5 text-sm p-3 py-4 font-bold'>Book</p>
                <p className='col-span-2 text-sm p-3 py-4 font-bold'>Times Lent</p>
                <p className='col-span-2 text-sm p-3 py-4 font-bold'>Status</p>
                <p className='col-span-2 text-sm p-3 py-4 font-bold'>Added</p>
              </div>

              {books?.map(({ bookid, title, createdAt }, index) => (
                <div key={bookid} className='grid grid-cols-12 rounded-xl bg-white text-black'>
                  <p className='col-span-1 text-sm p-3 py-4'>{index+1}</p>
                  <p className='col-span-5 text-sm p-3 py-4'>{title}</p>
                  <p className='col-span-2 text-sm p-3 py-4'>{loans.filter(b => b.bookid === bookid)?.length}</p>
                  {loans.reverse().find(b => b.bookid === bookid)?.status === "loaned" ? 
                    <p className='col-span-2 font-bold text-xs p-3 py-4 text-yellow-400'>Loaned out</p> :
                    <p className='col-span-2 font-bold text-xs p-3 py-4 text-emerald-600'>Available</p>
                  }
                  <p className='col-span-2 text-sm p-3 py-4'>{createdAt}</p>
                </div>
              ))}

            </div>
          </div>

        </div>

      </main>

    </div>
  )
}
