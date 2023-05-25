import React, { useState } from "react";

function Hesapsil() {
  const [selectedOption, setSelectedOption] = useState("");

  const submit = () => {
    // delete account logic
  };

  const confirmationDialog = () => {
    // confirmation dialog logic
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 bg-red-100 rounded-full flex flex-shrink-0 justify-center items-center text-red-500 text-2xl font-mono relative">
                <span className="text-black">#</span>
                <span className="circle"></span>
              </div>
              <div className="block pl-2 font-semibold text-xl self-start text-black">
                <h2 className="leading-relaxed">Hesabınızı silmek istediğinizden emin misiniz?</h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">
                  Bu işlem geri alınamaz.
                </p>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <form>
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <button
                        type="button"
                        className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        onClick={confirmationDialog}
                      >
                        Evet
                      </button>
                    </div>
                    <div className="flex flex-col">
                      <div className="bg-white border border-gray-300 rounded-md p-3">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            className="form-radio"
                            name="options"
                            value="hayir"
                            checked={selectedOption === "hayir"}
                            onChange={handleOptionChange}
                          />
                          <span className="ml-2 text-black">Evet</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
        .circle {
          position: absolute;
          top: -10px;
          right: -10px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #1DB954;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .circle::before {
          content: "";
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: white;
        }
        `}
      </style>
    </div>
  );
}

export default Hesapsil;