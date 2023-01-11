import Head from 'next/head';
import { ImBooks } from 'react-icons/im';
import { RiExchangeFill, RiFileUserFill } from 'react-icons/ri';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import SelectInput from '../../components/SelectInput';
import genRandomString from '../../hooks/genRandomString';
import { useRouter } from 'next/router';

export default function Dashboard() {

  const router = useRouter();
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setBooks(JSON.parse(localStorage.getItem('books')) || []);
    setUsers(JSON.parse(localStorage.getItem('users')) || []);
  }, []);

  const [formData, setFormData] = useState({
    loanid: `LB${genRandomString(4)}`,
    status: "loaned",
    createdAt: new Date().toDateString()
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!formData.bookid || !formData.loanid){
      return toast('❌ Fields are empty');
    }

    let loans = JSON.parse(localStorage.getItem('loans')) || [];
    let loanedBook = loans.filter(l => (l.bookid === formData.bookid) && (l.status === "loaned"));
    if(loanedBook.length > 0) return toast('❌ Book Already Loaned Out');

    loans = [...loans, formData];
    localStorage.setItem('loans', JSON.stringify(loans));
    toast('✅ Book Loaned Out Successful');

    setTimeout(() => {
      router.push(`/loans/${formData.loanid}`);
    }, 1000);
    
    setFormData({
      loanid: `LB${genRandomString(4)}`,
      createdAt: new Date().toDateString()
    });
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

            <form className='p-4 lg:p-16 bg-white lg:w-1/2 mx-auto rounded-lg shadow-2xl space-y-4' onSubmit={handleSubmit}>

              <div className='space-y-2'>
                <label className='block font-bold text-xs' htmlFor='username'>Choose Book:</label>
                <SelectInput 
                  className='block w-full p-3 rounded-md border-2 border-neutral-300 hover:border-app-primary'
                  placeholder='Choose Book'
                  onChange={({value, label}) => setFormData({...formData, bookid: value, book: label})}
                  required
                  options={books.map((b) => ({value: b.bookid, label: b.title}))}
                />
              </div>

              <div className='space-y-2'>
                <label className='block font-bold text-xs' htmlFor='username'>Borrower Name:</label>
                <SelectInput 
                  className='block w-full p-3 rounded-md border-2 border-neutral-300 hover:border-app-primary'
                  placeholder='Choose Registered User'
                  onChange={({value, label}) => setFormData({...formData, userid: value, user: label})}
                  required
                  options={users.map((b) => ({value: b.userid, label: b.name}))}
                />
              </div>

              <div className='space-y-2'>
                <input
                  onClick={handleSubmit}
                  type="submit"
                  className='block w-full p-3 rounded-md font-bold bg-app-primary text-center text-white border-2 border-app-primary cursor-pointer'
                  value="Borrow Book"
                />
              </div>

            </form>

          </div>

        </div>

      </main>

    </div>
  )
}
