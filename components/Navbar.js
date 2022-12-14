import React from 'react'

const Navbar = () => {
  return (
    <div>
        <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src="/logo.jpg" alt="logo" width={60}/>
        <span class="ml-3 text-xl">Fintract Global</span>
      </a>
      <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
        <a class="mr-5 hover:text-gray-900">Home</a>
        <a class="mr-5 hover:text-gray-900">About Us</a>
        <a class="mr-5 hover:text-gray-900">Our Products</a>
        <a class="mr-5 hover:text-gray-900">More</a>
      </nav>
      <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:text-indigo-500 rounded-2xl text-base mt-4 md:mt-0 border-blue-600">Contact Us
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
    </div>
  )
}

export default Navbar