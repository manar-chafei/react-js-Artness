import React from 'react';
import * as Loader from "react-loader-spinner";

function Spinner({ message }) {
    
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Loader.Hearts
        color="#E074C1"
        height={50}
        width={200}
        className="m-5"
      />

      <p style={{color:"#E074C1"}} className="text-lg text-center ">{message}</p>
    </div>
  );
}

export default Spinner;