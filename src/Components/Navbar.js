import React from "react";
function Navbar() {
    const lorem_ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    const lorem_ipsum_short = "lorem ipsum"
    return (
        <>
            <div className='flex flex-col'>
                <nav className='bg-white-800 flex items-center p-4 shadow-lg mb-4'>
                    <div className='container mx-auto flex item-center justify-between'>
                        <div>
                            <img className='h-8 ' src={require('../images/citiyanode_logo.jpg')} alt="Logo" />
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
                                src={require('../images/1.jpg')}
                                alt="image 1"
                                className="w-full h-full object-cover rounded-lg transition group-hover:blur-custom"
                            />
                        </div>

                        {/* Image 2 */}
                        <div className="flex-shrink-0 group">
                            <img
                                src={require('../images/2.jpg')}
                                // alt="image 2" 
                                className="w-full h-full object-cover rounded-lg transition group-hover:blur-custom"
                            />
                        </div>

                        {/* Image 3 */}
                        <div className="flex-shrink-0 group">
                            <img
                                src={require('../images/3.jpg')}
                                //alt="image 3" 
                                className="w-full h-full object-cover rounded-lg transition group-hover:blur-custom"
                            />
                        </div>

                        {/* Image 4 */}
                        <div className="flex-shrink-0 group">
                            <img
                                src={require('../images/4.jpg')}
                                // alt="image 4" 
                                className="w-full h-full object-cover rounded-lg transition group-hover:blur-custom"
                            />
                        </div>

                    </div>
                </div>
                <div className="flex  my-20 w-screen h-[20%] justify-center items-center">
                    {/* Content goes here */}
                    <div className=' flex flex-col w-[30%] mx-10'>
                        <div className="relative w-full h-full group">
                            <img
                                src={require('../images/1.jpg')}
                                alt="image 1"
                                className="w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105 group-hover:blur-custom"
                            />
                            <button className="absolute inset-0 m-auto w-32 h-12 bg-none border-2 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Read more
                            </button>
                        </div>
                        <div className='text-lg font-regular'>Lorem Ipsum</div>
                        <div className='text-lg font-semibold'>LOREM IPSUM DOLAR SIT AMET</div>
                        <div className="w-full border-t border-gray-500 my-2"></div>
                        <div className='text-lg font-regular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <button className='w-[35%] bg-gray-500 border-2 rounded-lg hover:bg-blue-500'>
                            <span className='text-white mx-1'>Find out more</span>
                            <span className='text-white mx-1'>&#8594;</span>
                        </button>



                    </div>
                    <div className='flex flex-col w-[30%] mx-10'>
                        <div className="relative w-full h-full group">
                            <img
                                src={require('../images/2.jpg')}
                                alt="image 2"
                                className="w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105 group-hover:blur-custom"
                            />
                            <button className="absolute inset-0 m-auto w-32 h-12 bg-none border-2 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Read more
                            </button>
                        </div>
                        <div className='text-lg font-regular'>Lorem Ipsum</div>
                        <div className='text-lg font-semibold'>LOREM IPSUM DOLAR SIT AMET</div>
                        <div className="w-full border-t border-gray-500 my-2"></div>
                        <div className='text-lg font-regular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <button className='w-[35%] bg-gray-500 border-2 rounded-lg hover:bg-blue-500'>
                            <span className='text-white mx-1'>Find out more</span>
                            <span className='text-white mx-1'>&#8594;</span>
                        </button>
                    </div>
                    <div className='flex flex-col w-[30%] mx-10'>
                        <div className="relative w-full h-full group">
                            <img
                                src={require('../images/4.jpg')}
                                alt="image 3"
                                className="w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105 group-hover:blur-custom"
                            />
                            <button className="absolute inset-0 m-auto w-32 h-12 bg-none border-2 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Read more
                            </button>
                        </div>
                        <div className='text-lg font-regular'>Lorem Ipsum</div>
                        <div className='text-lg font-semibold'>LOREM IPSUM DOLAR SIT AMET</div>
                        <div className="w-full border-t border-gray-500 my-2"></div>
                        <div className='text-lg font-regular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <button className='w-[35%] bg-gray-500 border-2 rounded-lg hover:bg-blue-500'>
                            <span className='text-white mx-1'>Find out more</span>
                            <span className='text-white mx-1'>&#8594;</span>
                        </button>
                    </div>
                </div>
                <div className="aboutheading">

                    <div className='flex'>
                        <div className='relative w-[42%] mx-20 border-t border-gray-500 my-4 bg-white py-2'></div>
                        <span className="absolute left-1/2 transform -translate-x-1/2 bg-white px-4 text-lg text-black">
                            About Us
                        </span>
                        <div className='relative w-[42%] ml-auto mx-20 border-t border-gray-500 my-4 bg-white py-2'></div>
                    </div>
                </div>

                <div className='flex relative w-full max-w-screen-xl mx-auto justify-center items-center border-2 border-white-400 px-2'>
                    <div className='flex flex-col w-[60%]'>
                        <div className='text-lg font-semibold'>{lorem_ipsum_short}</div>
                        <div className='text-lg font-regular'>{lorem_ipsum}</div>
                        <button className='w-[20%] bg-gray-500 border-2 rounded-lg hover:bg-blue-500 my-5'>
                            <span className='text-white mx-1'>Find out more</span>
                            <span className='text-white mx-1'>&#8594;</span>
                        </button>
                    </div>
                    <div className="relative w-[30%] h-full ml-auto">
                        <img
                            src={require('../images/2.jpg')}
                            alt="image 2"
                            className="w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105 group-hover:blur-custom"
                        />
                    </div>
                </div>
                {/* <div className="aboutheading flex justify-end">

                    <div className='flex'>
                        <div className='relative w-[10%] mx-20 border-t border-gray-500 my-4 bg-white py-2'></div>
                        <span className=" bg-white px-2 text-lg text-black">
                            lorem ipsum    </span>
                        <div className='relative w-[10%] mx-10 mr-10 border-t border-gray-500 my-4 bg-white py-2'></div>
                    </div>
                </div> */}
                <div className="aboutheading">
                    <div className="flex justify-end">
                        <div className="relative w-[8%] mx-20 mr-10 border-t border-gray-500 my-4 bg-white py-2"></div>
                        <span className="bg-white px-2 text-lg text-black">
                            lorem ipsum
                        </span>
                        <div className="relative w-[8%] mx-10 mr-10 border-t border-gray-500 my-4 bg-white py-2"></div>
                    </div>
                </div>

                <div className='flex relative w-full max-w-screen-xl mx-auto justify-center items-center border-2 border-white-400 px-2'>
                    <div className='flex flex-col w-[60%]'>
                        <div className='text-lg font-semibold'>{lorem_ipsum_short}</div>
                        <div className='text-lg font-regular'>{lorem_ipsum}</div>
                        <button className='w-[20%] bg-gray-500 border-2 rounded-lg hover:bg-blue-500 my-5'>
                            <span className='text-white mx-1'>Find out more</span>
                            <span className='text-white mx-1'>&#8594;</span>
                        </button>
                    </div>
                    <div className="relative w-[30%] h-full ml-auto">
                        <img
                            src={require('../images/2.jpg')}
                            alt="image 2"
                            className="w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105 group-hover:blur-custom"
                        />
                    </div>
                </div>


            </div>

        </>
    );
}

export default Navbar;