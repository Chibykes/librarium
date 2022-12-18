import Head from 'next/head';
import { ImBooks } from 'react-icons/im';
import { RiExchangeFill, RiFileUserFill } from 'react-icons/ri';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import QRCode from 'react-qr-code';
import { useRouter } from 'next/router';

export default function LoanedBook() {

  const router = useRouter(); 

  const [book, setBook] = useState({});
  const [loan, setLoan] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    setLoan(JSON.parse(localStorage.getItem('loans'))?.find(l => l.loanid === router.query.id) || {});
  }, [router]);
  
  useEffect(() => {
    setBook(JSON.parse(localStorage.getItem('books'))?.find(b => b.bookid === loan?.bookid) || {});
    setUser(JSON.parse(localStorage.getItem('users'))?.find(u => u.userid === loan?.userid) || {});
  }, [loan]);

  const handleReturn = () => {
    setLoan({ ...loan, status: "returned" });
    let updatedLoans = JSON.parse(localStorage.getItem('loans')).map(t => {
      if(t.loanid === loan.loanid){
        t.status = "returned";
        t.updatedAt = new Date().toDateString();
      }

      return t;
    })

    localStorage.setItem('loans', JSON.stringify(updatedLoans));

    toast('✅ Loan status successfully updated');
  }

  return (
    <div className='w-screen h-screen bg-neutral-100'>
      <Head>
        <title>New Loan Request</title>
      </Head>

      <main className="grid grid-cols-5">

        <Sidebar />

        <div className='col-span-4 space-y-8 p-8'>

          <Navbar page="New Loan Request" />

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

            <div className='p-4 lg:p-16 bg-white lg:w-1/2 mx-auto rounded-lg'>

              <div className='space-y-2'>
                  <QRCode className="mx-auto" size={96} value={loan?.loanid || "null"} />
                  <p className='text-app-primary block font-bold text-2xl text-center'>{loan?.loanid}</p>
              </div>

              <div className='space-y-2 border-b py-3'>
                <p className='text-app-primary block font-bold text-xs'>Book Title:</p>
                <p className='block text-2xl'>{book?.title}</p>
              </div>

              <div className='space-y-2 border-b py-3'>
                <p className='text-app-primary block font-bold text-xs'>By:</p>
                <p className='block text-2xl'>{book?.author}</p>
              </div>

              <div className='space-y-2 border-b py-3'>
                <p className='text-app-primary block font-bold text-xs'>Edition:</p>
                <p className='block text-2xl'>1st Edition (2004)</p>
              </div>

              <div className='space-y-2 py-3'>
                <p className='text-app-primary block font-bold text-xs'>Borrower Name:</p>
                <p className='block text-2xl'>{user?.name}</p>
              </div>

              <div className='space-y-2 py-3'>
                <p className='text-app-primary block font-bold text-xs'>Borrower Phone:</p>
                <p className='block text-2xl'>{user?.phone}</p>
              </div>

              <div className='space-y-2 py-3'>
                <p className='text-app-primary block font-bold text-xs'>Status:</p>
                {loan?.status !== "loaned" ?
                  <p className='block text-2xl text-emerald-700'>Returned</p>:
                  <div className='flex items-center'>
                    <p className='block text-2xl text-yellow-400'>Loaned Out</p>
                    <p onClick={handleReturn} className='cursor-pointer ml-auto iniline-block text-xs bg-green-700 px-4 py-1 rounded-full text-white font-bold'>Book Returned?</p>
                  </div>
                }
              </div>

              <div className='flex justify-center space-y-2'>
                <input
                  className='inline w-1/3 p-2 text-sm rounded-md font-bold bg-app-primary text-center text-white border-2 border-app-primary cursor-pointer'
                  value="Print"
                  onClick={() => window.print()}
                />
              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  )
}
