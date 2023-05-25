import React from 'react';

function Profileduzenle() {
	return (
	  <div className="flex flex-col items-center justify-center min-h-screen ">
		<form className="w-full max-w-lg p-6 rounded-lg shadow-md">
		  <div className="mb-4">
			<label className="block mb-2 font-bold text-gray-900 " htmlFor="email">
			  E-posta
			</label>
			<input
			  className="w-full px-3 py-2 leading-tight text-gray-900  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
			  id="email"
			  type="email"
			  placeholder="Email"
			/>
		  </div>
		  <div className="mb-4">
			<label className="block mb-2 font-bold text-gray-900 " htmlFor="password">
			  Parola
			</label>
			<input
			  className="w-full px-3 py-2 leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
			  id="password"
			  type="password"
			  placeholder="Password"
			/>
		  </div>
		  <div className="mb-4">
			<label className="block mb-2 font-bold text-gray-900" htmlFor="gender">
			  Cinsiyet
			</label>
			<select
			  className="w-full px-3 py-2 leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
			  id="gender"
			>
			  <option value="">Select your gender</option>
			  <option value="male">Male</option>
			  <option value="female">Female</option>
			  <option value="other">Other</option>
			</select>
		  </div>
		  <div className="mb-4">
			<label className="block mb-2 font-bold text-gray-900" htmlFor="birthdate">
			  Doğum tarihi
			</label>
			<input
			  className="w-full px-3 py-2 leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
			  id="birthdate"
			  type="date"
			  placeholder="Birth Date"
			/>
		  </div>
		  <div className="mb-4">
			<label className="block mb-2 font-bold text-gray-900" htmlFor="country">
			  Ülke veya bölge
			</label>
			<input
			  className="w-full px-3 py-2 leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
			  id="country"
			  type="text"
			  placeholder="Country or Region"
			/>
		  </div>
		  <button
			className="w-full px-4 py-2 font-bold bg-blue-700 rounded hover:bg-blue-900 focus:outline-none focus:shadow-outline-blue"
			type="button"
		  >
			Kaydet
		  </button>
		</form>
	  </div>
	);
  }
  
  export default Profileduzenle;