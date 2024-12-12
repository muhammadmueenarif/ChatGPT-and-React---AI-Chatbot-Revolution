import React from 'react'

const Chat = () => {
  return (
    <div className='h-screen w-screen bg-[gray]'>
      <div className='w-[20%] h-screen bg-[black] text-white p-4'>
        <div>
            <button className='w-full h-[50px] border rounded'>+ New Chat</button>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className='w-[80%]'></div>
    </div>
  )
}

export default Chat
