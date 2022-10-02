import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img src="/logo.jpg" alt="logo" width={60}/>
          
          <h1 className="font-bold">Fintract Global</h1>
        </a>
        <p class="mt-2 text-sm text-gray-500">71-75, Sheldon Street,</p><p class="mt-2 text-sm text-gray-500">Convent Garden London,</p><p class="mt-2 text-sm text-gray-500"> WC2h 9JQ</p>
        <br/>
        <p class="mt-2 text-sm text-gray-500">+44-2037373227</p>
        <p class="mt-2 text-sm text-gray-500">contact.fintract.co.uk</p>
      </div>
      <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font  text-gray-900 tracking-widest text-sm mb-3 font-bold">Services</h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800">Works</a>
            </li>
           <br/>
            <li>
              <a class="text-gray-600 hover:text-gray-800">About Us</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font  text-gray-900 tracking-widest text-sm mb-3 font-bold">Blogs</h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800">Career</a>
            </li>
           <br/>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Contact</a>
            </li>
          </nav>
        </div>

        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font  text-gray-900 tracking-widest text-sm mb-3 font-bold">Our Channels</h2>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"> 
           <a class="text-gray-500 cursor-pointer">
           <img src="/LinkedIn.png" alt="LinkenIn" width={57}/>
          </a>
          <a class="ml-3 text-gray-500 cursor-pointer">
          <img src="/Twitter.png" alt="twitter" width={57}/>
          </a>
          <a class="ml-3 text-gray-500 cursor-pointer">
          <img src="/Gmail.png" alt="gmail" width={57}/>
          </a>
          <a class="ml-3 text-gray-500 cursor-pointer">
          <img src="/Facebook.png" alt="fb" width={57}/>
          </a>  

          </span>
        </div>
      </div>
    </div>
    <div class="bg-gray-100">
      <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p class="text-gray-500 text-sm text-center sm:text-left">copyright©2021 All rights reserved 
        </p>
         <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"> 
           <a class="text-gray-500 cursor-pointer">
           <p>Privacy Policy</p>
          </a>
          <a class="ml-3 text-gray-500 cursor-pointer">
          <p>Terms of Use</p>
          </a>
          <a class="ml-3 text-gray-500 cursor-pointer">
          <p>Cookie Policy</p>
          </a> 
          </span>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer