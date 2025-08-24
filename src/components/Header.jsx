import React from 'react'

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <h1 className="text-xl font-bold">My Website</h1>
      <nav className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </nav>
    </header>
  )
}

export default Header