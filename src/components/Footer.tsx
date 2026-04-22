export const Footer = () => {
    return (
      <>
        <div className="border-t border-white border-opacity-30 bg-black">
     
          <div className="flex flex-wrap items-center justify-between px-4 py-6 lg:px-8">
            
            <div className="flex flex-col items-center lg:items-start">
              <div className="h-48 w-48 flex justify-center items-center">
                <h1 className="font-primary tracking-tighter text-4xl font-black  bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent">sanityAI</h1>
              </div>
            </div>
  
            <footer className="w-full lg:w-3/4">
  <div className="grid grid-cols-2 gap-8 px-4 lg:px-0 lg:grid-cols-4">
    <div>
      <h2 className="mb-6 text-sm font-semibold uppercase font-primary tracking-tighter text-white">Company</h2>
      <ul className="text-gray-500 font-medium font-primary tracking-tighter">
        <li className="mb-4">
          <span className="hover:text-blue-500 cursor-pointer">About</span>
        </li>
        <li className="mb-4">
          <span className="hover:text-blue-500 cursor-pointer">Careers</span>
        </li>
        <li className="mb-4">
          <span className="hover:text-blue-500 cursor-pointer">Brand Center</span>
        </li>
        <li className="mb-4">
          <span className="hover:text-blue-500 cursor-pointer">Blog</span>
        </li>
      </ul>
    </div>

    <div>
      <h2 className="mb-6 text-sm font-semibold uppercase font-primary tracking-tighter text-white">Help Center</h2>
      <ul className="text-gray-500 font-medium font-primary tracking-tighter">
        <li className="mb-4">
          <span className="hover:text-blue-500 cursor-pointer">Discord Server</span>
        </li>
        <li className="mb-4">
          <span className="hover:text-blue-500 cursor-pointer">Twitter</span>
        </li>
        <li className="mb-4">
          <span className="hover:text-blue-500 cursor-pointer">Facebook</span>
        </li>
        <li className="mb-4">
          <span className="hover:text-blue-500 cursor-pointer">Contact Us</span>
        </li>
      </ul>
    </div>

    <div>
      <h2 className="mb-6 text-sm font-semibold uppercase font-primary tracking-tighter text-white">Legal</h2>
      <ul className="text-gray-500 font-medium font-primary tracking-tighter">
        <li className="mb-4">
          <span className="hover:text-blue-500 cursor-pointer">Privacy Policy</span>
        </li>
        <li className="mb-4">
          <span className="hover:text-blue-500 cursor-pointer">Licensing</span>
        </li>
        <li className="mb-4">
          <span className="hover:text-blue-500 cursor-pointer">Terms &amp; Conditions</span>
        </li>
      </ul>
    </div>

    <div>
      <h2 className="mb-6 text-sm font-semibold uppercase font-primary tracking-tighter text-white">Download</h2>
      <ul className="text-gray-500 font-medium font-primary tracking-tighter">
        <li className="mb-4">
          <span className="hover:text-blue-500 cursor-pointer">iOS</span>
        </li>
        <li className="mb-4">
          <span className="hover:text-blue-500 cursor-pointer">Android</span>
        </li>
        <li className="mb-4">
          <span className="hover:text-blue-500 cursor-pointer">Windows</span>
        </li>
        <li className="mb-4">
          <span className="hover:text-blue-500 cursor-pointer">MacOS</span>
        </li>
      </ul>
    </div>
  </div>
</footer>


          </div>
        </div>
  
        
        {/* <div className="flex justify-center items-center py-4 bg-backgroundColor">
          <h1 className="text-lg font-satoshi tracking-tighter font-black text-white">
            Made with <span className="text-red-500">&#x1F9E1;</span> by Piyush
          </h1>
        </div> */}
      </>
    );
  };
  