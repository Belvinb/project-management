import React from 'react'
import {Triangle} from 'react-loader-spinner'


const Loader = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
     
      <Triangle
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
        
      />
    </div>
  );
}

export default Loader