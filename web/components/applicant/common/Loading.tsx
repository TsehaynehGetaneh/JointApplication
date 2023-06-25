import React from 'react'

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen w-full  ">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" />
            <div className="w-3 h-3 bg-red-400 rounded-full animate-bounce" />
          </div>
        </div>
  )
}

export default Loading