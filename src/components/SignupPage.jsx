import React from 'react';
import axios  from 'axios';
// Function to handle form submission
const handleSignUp = async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const language = document.getElementById('language').value;
  const country = document.getElementById('country').value;

  const userData = {
    email,
    password,
    language,
    country,
  };

  try {
    const response = await axios.post('/api/signup', userData);

    if (response.status === 201) {
     
      console.log('Registration successful'); 
    } else {
    
      console.error('Registration failed with status code: ', response.status);
    }
  } catch (error) {
   
    console.error('Registration error: ', error.message);
    
  }

};
function SignupPage() {
  const countries = [
    "Select your country",
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "India",
    "Germany",
    "France",
    "Spain",
    "Italy",
    "Brazil",
    "Japan",
    "South Korea",
    "China",
    "Mexico",
    "Argentina",
    "Russia",
    "South Africa",
    "Egypt",
    "Netherlands",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "New Zealand",
    "Singapore",
    "Malaysia",
    "Thailand",
    "Philippines",
    "Indonesia",
    "Vietnam",
    "Turkey",
  ];

  const languages = [
    "Select your language",
    "English",
    "Spanish",
    "French",
    "German",
    "Italian",
    "Portuguese",
    "Japanese",
    "Korean",
    "Chinese",
    "Russian",
    "Arabic",
    "Dutch",
    "Swedish",
    "Norwegian",
    "Danish",
    "Finnish",
    "Greek",
    "Hindi",
    "Bengali",
    "Tamil",
    "Telugu",
    "Marathi",
    "Kannada",
    "Punjabi",
    "Gujarati",
    "Oriya",
    "Urdu",
    "Malayalam",
    "Thai",
    "Vietnamese",
  ];

  return (
    <div className="bg-gradient-to-r from-purple-400 to-indigo-500 min-h-screen flex items-center justify-center">
      {/* SVG background pattern */}
      <div className="absolute w-full h-full">
        <img
          src="your-svg-pattern-url.svg" 
          alt="Background Pattern"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md w-96 transform hover:scale-105 transition-transform relative z-10">
        <h2 className="text-3xl font-semibold text-center text-indigo-700 mb-6">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-indigo-500"
              placeholder="Email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-indigo-500"
              placeholder="Password"
            />
          </div>

          <div>
            <label htmlFor="language" className="block text-gray-600">Language</label>
            <select
              id="language"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-indigo-500"
            >
              {languages.map((language, index) => (
                <option key={index} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="country" className="block text-gray-600">Country</label>
            <select
              id="country"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-indigo-500"
            >
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          
          <button
            type="submit"
            className="w-full bg-indigo-700 hover:bg-indigo-800 text-white py-2 rounded-md font-semibold transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-gray-600 text-center">
          Already have an account? <a href="/login" className="text-indigo-700 hover:underline transition-colors duration-300">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
