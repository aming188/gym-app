import logo from '../../../images/logo.png'
import Image from 'next/image'
export default function TopBar() {
    return (
      <div className="bg-green-500 p-4 flex items-center font-serif">
        <Image
          src = {logo}
          width = {100}
          height = {100}
          alt = "Spotify Logo"
        />
        <h1 className='text-2xl'>Spotify Wrapped</h1>
      </div>
    );
  }