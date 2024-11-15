import React from 'react';
import './App.css';
function App() {
  return (
    <>
      <div className='flex flex-col'>
        <nav className='bg-white-800 flex items-center p-4 shadow-lg mb-4'>
          <div className='container mx-auto flex item-center justify-between'>
            <div>
              <img className='h-8 ' src={require('./images/citiyanode_logo.jpg')} alt="Logo" />
            </div>
            <ul className='flex space-x-6 my-auto item-center justify-center flex-1'>
              <li className='font-semibold hover:text-blue-500'>Home</li>
              <li className='font-semibold hover:text-blue-500'>About</li>
              <li className='font-semibold hover:text-blue-500'>Products</li>
              <li className='font-semibold hover:text-blue-500'>Blogs</li>

            </ul>
            <button className=' w-[10%] h-[10%] bg-white border-gray-500 hover:border-blue-500 border-2 ml-auto font-semibold px-6 py-2 rounded-full hover:bg-blue-500 sm:item-center focus:outline-none focus:ring-2 focus:ring-gray-500'>Login

            </button>


          </div>

        </nav>
        <div className="relative w-screen ml-auto item-center border-2 border-gray-400 bg-gray-300">
          <div className="w-[50%] h-[80%] bg-gray-400 ml-auto grid grid-cols-2 grid-rows-2 gap-2 transition-transform duration-500 ease-in-out">

            {/* Image 1 */}
            <div className="flex-shrink-0 group">
              <img
                src={require('./images/1.jpg')}
                alt="image 1"
                className="w-full h-full object-cover rounded-lg transition group-hover:blur-custom"
              />
            </div>

            {/* Image 2 */}
            <div className="flex-shrink-0 group">
              <img
                src={require('./images/2.jpg')}
                // alt="image 2" 
                className="w-full h-full object-cover rounded-lg transition group-hover:blur-custom"
              />
            </div>

            {/* Image 3 */}
            <div className="flex-shrink-0 group">
              <img
                src={require('./images/3.jpg')}
                //alt="image 3" 
                className="w-full h-full object-cover rounded-lg transition group-hover:blur-custom"
              />
            </div>

            {/* Image 4 */}
            <div className="flex-shrink-0 group">
              <img
                src={require('./images/4.jpg')}
                // alt="image 4" 
                className="w-full h-full object-cover rounded-lg transition group-hover:blur-custom"
              />
            </div>

          </div>
        </div>
        <div className="flex space-x-6 w-screen h-[20%] bg-orange-300">
  {/* Content goes here */}
  <div>Hey</div>
  <div>Hey</div>
  <div>Hey</div>
</div>


      </div>



    </>

  );
}

export default App;
