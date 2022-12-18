import Image from 'next/image';
import Link from 'next/link';
import { HiUsers } from 'react-icons/hi';
import { ImBooks } from 'react-icons/im';
import { MdDashboard } from 'react-icons/md';
import { RiArrowDropDownLine, RiExchangeFill, RiFileUserFill } from 'react-icons/ri';

export default function Sidebar() {

  const dropdown = (ddf) => {
    let dd = document.querySelector(`div[data-dropdown="${ddf}"]`);

    if(dd.style.maxHeight === "0px" || !dd.style.maxHeight ){
      return dd.style.maxHeight = "10000px";
    }

    dd.style.maxHeight = "0px";
  }

  return (
    <div className='print:hidden sticky top-0 col-span-1 py-6 px-4 rounded-xll bg-app-primary space-y-6 shadow-2xl z-10 min-h-screen'>
      <div className='relative w-full h-6'>
        <Image style={{objectFit: "contain"}} src="/img/logo.png" fill alt=''/>
      </div>

      <div className='space-y-2'>
        <Link className="flex gap-3 items-center p-3 text-sm text-white font-bold hover:bg-white hover:text-app-primary rounded-md" href="/dashboard">
          <MdDashboard />
          <span className=''>Dashboard</span>
        </Link>
        
        <div className='space-y-1'>
          <div onClick={() => dropdown("books")} data-dropdown-for="books" className="flex gap-3 items-center p-3 text-sm text-white font-bold hover:bg-white hover:text-app-primary rounded-md" href="#">
            <ImBooks />
            <span className=''>Books</span>
            <RiArrowDropDownLine className='ml-auto' />
          </div>

          <div className='max-h-0 overflow-hidden space-y-1' data-dropdown="books">
            <Link className="flex gap-3 items-center p-3 text-sm bg-app-light text-white hover:bg-white hover:text-app-primary rounded-md" href="/books/">
              <MdDashboard className='invisible' />
              <span className=''>Overview</span>
            </Link>
            <Link className="flex gap-3 items-center p-3 text-sm bg-app-light text-white hover:bg-white hover:text-app-primary rounded-md" href="/books/new">
              <MdDashboard className='invisible' />
              <span className=''>Add New Book</span>
            </Link>
          </div>
        </div>

        <div className='space-y-1'>
          <div onClick={() => dropdown("users")} data-dropdown-for="users" className="flex gap-3 items-center p-3 text-sm text-white font-bold hover:bg-white hover:text-app-primary rounded-md" href="#">
            <HiUsers />
            <span className=''>Users</span>
            <RiArrowDropDownLine className='ml-auto' />
          </div>

          <div className='max-h-0 overflow-hidden space-y-1' data-dropdown="users">
            <Link className="flex gap-3 items-center p-3 text-sm bg-app-light text-white hover:bg-white hover:text-app-primary rounded-md" href="/users/">
              <MdDashboard className='invisible' />
              <span className=''>Overview</span>
            </Link>
            <Link className="flex gap-3 items-center p-3 text-sm bg-app-light text-white hover:bg-white hover:text-app-primary rounded-md" href="/users/new">
              <MdDashboard className='invisible' />
              <span className=''>Add New User</span>
            </Link>
          </div>
        </div>
        
        {/* <div className='space-y-1'>
          <Link onClick={dropdown} data-dropdown-for="authors" className="flex gap-3 items-center p-3 text-sm text-white font-bold hover:bg-white hover:text-app-primary rounded-md" href="#">
            <RiFileUserFill />
            <span className=''>Authors</span>
            <RiArrowDropDownLine className='ml-auto' />
          </Link>

          <div className='max-h-0 overflow-hidden space-y-1' data-dropdown="authors">
            <Link className="flex gap-3 items-center p-3 bg-app-light text-sm text-white hover:bg-white hover:text-app-primary rounded-md" href="#">
              <MdDashboard className='invisible' />
              <span className=''>Overview</span>
            </Link>
            <Link className="flex gap-3 items-center p-3 bg-app-light text-sm text-white hover:bg-white hover:text-app-primary rounded-md" href="#">
              <MdDashboard className='invisible' />
              <span className=''>Add New Author</span>
            </Link>
          </div>
        </div> */}
        
        <div className='space-y-1'>
          <div onClick={() => dropdown("loan")} data-dropdown-for="loan" className="flex gap-3 items-center p-3 text-sm text-white font-bold hover:bg-white hover:text-app-primary rounded-md" href="#">
            <RiExchangeFill />
            <span className=''>Loan Books</span>
            <RiArrowDropDownLine className='ml-auto' />
          </div>

          <div className='max-h-0 overflow-hidden space-y-1' data-dropdown="loan">
            <Link className="flex gap-3 items-center p-3 bg-app-light text-sm text-white hover:bg-white hover:text-app-primary rounded-md" href="/loans">
              <MdDashboard className='invisible' />
              <span className=''>All Loans</span>
            </Link>
            {/* <Link className="flex gap-3 items-center p-3 bg-app-light text-sm text-white hover:bg-white hover:text-app-primary rounded-md" href="/loans/pending">
              <MdDashboard className='invisible' />
              <span className=''>Pending Loan Request</span>
            </Link>
            <Link className="flex gap-3 items-center p-3 bg-app-light text-sm text-white hover:bg-white hover:text-app-primary rounded-md" href="/loans/returned">
              <MdDashboard className='invisible' />
              <span className=''>Returned Books</span>
            </Link> */}
            <Link className="flex gap-3 items-center p-3 bg-app-light text-sm text-white hover:bg-white hover:text-app-primary rounded-md" href="/loans/new">
              <MdDashboard className='invisible' />
              <span className=''>New Loan</span>
            </Link>
            <Link className="flex gap-3 items-center p-3 bg-app-light text-sm text-white hover:bg-white hover:text-app-primary rounded-md" href="/loans/resolve">
              <MdDashboard className='invisible' />
              <span className=''>Resolve Loans</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
