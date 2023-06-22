import React from 'react'

function Lodding() {
  return (
    <div className="flex justify-center items-center h-screen">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce" />
            <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce" />
            <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce" />
          </div>
        </div>
  )
}

export default Lodding