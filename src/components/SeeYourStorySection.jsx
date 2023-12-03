import React from 'react';

function SeeYourStorySection() {
    return (
        <section className="py-20 px-4 bg-gradient-to-r from-[#EF060F]  to-[#b60cf2]">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-8 animate-fade-in">
                    See Your Story
                </h2>
                <div className="flex justify-center items-center space-x-10 mb-12">
                    {/* Icon 1 */}
                    <div className="flex flex-col items-center space-y-4 transform hover:scale-105 transition-transform duration-300">
                        <div className="bg-white p-8 rounded-full shadow-lg hover:shadow-xl">
                            {/* icon */}
                            <svg
                                className="w-20 h-20 text-indigo-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {/* Icon SVG content */}
                            </svg>
                        </div>
                        <p className="mt-4 text-lg font-medium text-white">Icon 1 Text</p>
                        <button className="mt-2 text-white hover:text-black font-semibold hover:underline transition-colors duration-300">
                            Start Reading
                        </button>
                    </div>

                   
                    {/* Icon 3 */}
                    <div className="flex flex-col items-center space-y-4 transform hover:scale-105 transition-transform duration-300">
                        <div className="bg-white p-8 rounded-full shadow-lg hover:shadow-xl">
                            {/* icon */}
                            <svg
                                className="w-20 h-20 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {/* Icon SVG content */}
                            </svg>
                        </div>
                        <p className="mt-4 text-lg font-medium text-white">Icon 3 Text</p>
                        <button className="mt-2 text-white hover:text-black font-semibold hover:underline transition-colors duration-300">
                            Start Writing
                        </button>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-center space-x-6 animate-fade-in-up">
                    <button className="bg-transparent border border- text-white hover:bg-indigo-600 hover:text-white py-2 px-6 rounded-full font-semibold transition duration-300 ease-in-out transform hover:scale-105">
                        Start Reading
                    </button>
                    <button className="bg-transparent border border- text-white hover:bg-indigo-600 hover:text-white py-2 px-6 rounded-full font-semibold transition duration-300 ease-in-out transform hover:scale-105">
                        Start Reading
                    </button>
                   
                </div>
            </div>
        </section>
    );
}

export default SeeYourStorySection;
