import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ImBooks } from 'react-icons/im';
import { RiExchangeFill, RiFileUserFill } from 'react-icons/ri';

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

export default function BooksOverview() {

  const [books, setBooks] = useState([ ]);
  const [loans, setLoans] = useState([ ]);

  useEffect(() => {
    setBooks(JSON.parse(localStorage.getItem('books')) || []);
    setLoans(JSON.parse(localStorage.getItem('loans')) || []);
  }, []);

  return (
    <div className='w-screen h-screen bg-neutral-100'>
      <Head>
        <title>Books Overview</title>
      </Head>

      <main className="grid grid-cols-5">

        <Sidebar />

        <div className='col-span-4 space-y-8 p-8'>

          <Navbar page="Books Overview" />

          <div className='space-y-8 max-w-4xl mx-auto'>

            <div className='space-y-3'>
              <div className='flex items-center px-3 py-2 rounded-xl bg-app-primary text-white'>
                <p className='text-sm font-bold'>Books</p>

                <div className='ml-auto'>
                  <input 
                    className='block border-2 p-2 border-white bg-transparent rounded-lg placeholder:text-white'
                    placeholder='Search for books'
                  />
                </div>
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
                  <p className='col-span-5 text-sm p-3 py-4 text-app-light'>
                    <Link href={`/books/${bookid}`} >
                      {title}
                    </Link>
                  </p>
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
