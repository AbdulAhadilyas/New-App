import React from 'react'

export default function Navbar(props) {
  return (
    <div>
     <header class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0" href='/'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">Tailblocks</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-white" href='/'>First Link</a>
      <a class="mr-5 hover:text-white" href='/'>Second Link</a>
      <a class="mr-5 hover:text-white" href='/'>Third Link</a>
      <a class="mr-5 hover:text-white" href='/'>Fourth Link</a>
    </nav>
  
      
  </div>
</header>
    </div>
  )
}



