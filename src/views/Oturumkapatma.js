import React from "react";

function Oturumkapatma() {
  const handleLogout = () => {

  };

  return (
    <div className="flex h-screen">
      <div className="bg-black text-white w-64">
        {/* Sol menü */}
      </div>
      <div className="flex-grow bg-gray-100">
        {/* İçerik */}
        <div className="h-screen flex justify-center items-center">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 hover:text-white"
            style={{ backgroundColor: "#1DB954" }}
            onClick={handleLogout}
          >
            Oturumu Kapat
          </button>
        </div>
      </div>
    </div>
  );
}

export default Oturumkapatma;