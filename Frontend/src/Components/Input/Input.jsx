import React from 'react';

const Input = ({ placeholder, ...props }) => {
  return (
    <input 
      type="text" 
      placeholder={placeholder} 
      className="w-full p-3 my-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"  
      {...props}  
    />
  );
};

export default Input;
