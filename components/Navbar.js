import Link from 'next/link';
import { useState } from 'react';
import { BiQrScan } from 'react-icons/bi';
import { BsFillBellFill } from 'react-icons/bs';
import { HiUserCircle } from 'react-icons/hi';
import Scan from './Scan';

export default function Navbar({ page }) {

  const [loadCamera, setLoadCamera] = useState(false);

  return (
    <div className='print:hidden flex items-center justify-end p-6 gap-6 bg-white rounded-3xl border-none border-neutral-200'>
      <p className='mr-auto font-bold text-2xl'>{page}</p>

      <Link className="flex flex-col items-center gap-1 text-app-primary" onClick={() => setLoadCamera(!loadCamera)} href="#">
        <BiQrScan className='text-xl' />
        {/* <span className='text-xs font-bold'>Scan</span> */}
      </Link>
      <Link className="flex flex-col items-center gap-1 text-app-primary" href="#">
        <BsFillBellFill className='text-xl' />
        {/* <span className='text-xs font-bold'>Notifications</span> */}
      </Link>
      <Link className="flex flex-col items-center gap-1 text-app-primary" href="#">
        <HiUserCircle className='text-xl' />
        {/* <span className='text-xs font-bold'>Profile</span> */}
      </Link>

      {loadCamera && 
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#0003] z-[9999]' onClick={() => setLoadCamera(!loadCamera)}>
          <div className='w-1/3 bg-white p-6 rounded-lg'>
            <Scan />
          </div>
        </div>
      }
    </div>
  )
}
