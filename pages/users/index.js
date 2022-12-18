import Head from 'next/head';
import { useEffect, useState } from 'react';
import { ImBooks } from 'react-icons/im';
import { RiExchangeFill, RiFileUserFill } from 'react-icons/ri';

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

export default function BooksOverview() {

  const [users, setUsers] = useState([ ]);
  const [loans, setLoans] = useState([ ]);

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem('users')) || []);
    setLoans(JSON.parse(localStorage.getItem('loans')) || []);
  }, []);

  return (
    <div className='w-screen h-screen bg-neutral-100'>
      <Head>
        <title>Library Users Overview</title>
      </Head>

      <main className="grid grid-cols-5">

        <Sidebar />

        <div className='col-span-4 space-y-8 p-8'>

          <Navbar page="Library Users Overview" />

          <div className='space-y-8 max-w-4xl mx-auto'>

            <div className='space-y-3'>
              <div className='flex items-center px-3 py-2 rounded-xl bg-app-primary text-white'>
                <p className='text-sm font-bold'>Library Users</p>

                <div className='ml-auto'>
                  <input 
                    className='block border-2 p-2 border-white bg-transparent rounded-lg placeholder:text-white'
                    placeholder='Search for users'
                  />
                </div>
              </div>

              <div className='grid grid-cols-12 rounded-xl text-app-primary bg-white'>
                <p className='col-span-1 text-sm p-3 py-4 font-bold'>S/N</p>
                <p className='col-span-4 text-sm p-3 py-4 font-bold'>Name</p>
                <p className='col-span-3 text-sm p-3 py-4 font-bold'>Phone</p>
                <p className='col-span-2 text-sm p-3 py-4 font-bold'>Books Lent</p>
                <p className='col-span-2 text-sm p-3 py-4 font-bold'>Added</p>
              </div>

              {users?.map(({ userid, phone, name, createdAt }, index) => (
                <div key={userid} className='grid grid-cols-12 rounded-xl bg-white text-black'>
                  <p className='col-span-1 text-sm p-3 py-4'>{index+1}</p>
                  <p className='col-span-4 text-sm p-3 py-4'>{name}</p>
                  <p className='col-span-3 text-sm p-3 py-4'>{phone}</p>
                  <p className='col-span-2 text-sm p-3 py-4'>{loans.filter(b => b.userid === userid)?.length}</p>
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
