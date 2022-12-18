import Head from 'next/head';
import Link from 'next/link';
import { MdModeEditOutline } from 'react-icons/md';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

export default function Dashboard() {

  return (
    <div className='w-screen h-screen bg-neutral-100'>
      <Head>
        <title>Loan Overview</title>
      </Head>

      <main className="grid grid-cols-5">

        <Sidebar />

        <div className='col-span-4 space-y-8 p-8'>

          <Navbar page="Loan Overview" />

          <div className='space-y-8 max-w-4xl mx-auto'>

            <div className='space-y-3'>
              <div className='flex items-center px-3 py-2 rounded-xl bg-app-primary text-white'>
                <p className='text-sm font-bold'>Returned Books</p>

                <div className='ml-auto'>
                  <input 
                    className='block border-2 p-2 border-white bg-transparent rounded-lg placeholder:text-white'
                    placeholder='Search for books'
                  />
                </div>
              </div>

              <div className='grid grid-cols-12 rounded-xl text-app-primary bg-white'>
                <p className='col-span-1 text-sm p-3 py-4 font-bold'>S/N</p>
                <p className='col-span-3 text-sm p-3 py-4 font-bold'>Book</p>
                <p className='col-span-2 text-sm p-3 py-4 font-bold'>Loaned By</p>
                <p className='col-span-1 text-sm p-3 py-4 font-bold'>Duration</p>
                <p className='col-span-2 text-sm p-3 py-4 font-bold'>Status</p>
                <p className='col-span-2 text-sm p-3 py-4 font-bold'>Date</p>
                <p className='col-span-1 text-sm p-3 py-4 font-bold'></p>
              </div>

              <div className='grid grid-cols-12 rounded-xl bg-white text-black'>
                <p className='col-span-1 text-sm p-3 py-4'>1</p>
                <p className='col-span-3 text-sm p-3 py-4'>How to feel again</p>
                <p className='col-span-2 text-sm p-3 py-4'>Augustus Fisher</p>
                <p className='col-span-1 text-sm p-3 py-4'>3 days</p>
                <p className='col-span-2 text-sm p-3 py-4 text-emerald-500'>Returned</p>
                <p className='col-span-2 text-sm p-3 py-4'>12-03-2022</p>
                <p className='col-span-1 text-sm p-3 py-4'>
                  <Link className="text-app-primary" href="/1">
                    <MdModeEditOutline />
                  </Link>
                </p>
              </div>

            </div>
          </div>

        </div>

      </main>

    </div>
  )
}
