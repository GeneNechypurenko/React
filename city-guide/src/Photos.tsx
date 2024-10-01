import React from "react";

const Photos: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Photos of Odessa</h1>
      <div className="grid grid-cols-2 gap-4">
        <img
          src="/public/1280px-Odesa_National_scientific_library-03.jpg"
          className="w-[800px] h-[600px] rounded object-cover"
        />
        <img
          src="/public/Odesa_Olgivska-4_0-1.jpg"
          className="w-[800px] h-[600px] rounded object-cover"
        />
        <img
          src="/public/Operniy-5.jpg"
          className="w-[800px] h-[600px] rounded object-cover"
        />
        <img
          src="/public/Odessa_Promenade.JPG"
          className="w-[800px] h-[600px]  rounded object-cover"
        />
      </div>
    </div>
  );
};

export default Photos;
