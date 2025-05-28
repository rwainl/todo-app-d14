import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Pengaturan() {
  return (
    <div className='p-4'>
        <h1 className='text-2xl font-bold mb-4'>Pengaturan</h1>
        <nav className='space-x-4 mb-4'>
            <Link to="profil">Profil</Link>
            <Link to="tema">Tema</Link>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Pengaturan