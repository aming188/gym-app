import logo from '../../../images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
export default function TopBar() {
    return (
      <div className="bg-green-500 p-4 flex items-center font-serif">
        <Link href='/'>
          <Image
            src = {logo}
            width = {100}
            height = {100}
            alt = "Fitness Logo"
          />
        </Link>
        <h1 className='text-2xl'>Fitness Tracker App</h1>
      </div>
    );
  }