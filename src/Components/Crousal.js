import React from 'react'

function Crousal() {
  return (
    <>
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
    </>
  )
}

export default Crousal
