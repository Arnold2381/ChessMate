import React from 'react';
import { MdSend } from 'react-icons/md';

const Chat = () => {
  return (
    <div className='bg-lightWhite flex justify-between flex-col rounded-lg w-full h-full p-6'>
      <div className='flex flex-col gap-3'>
        <p className='text-messageBlue mr-16'>Hello</p>
        <p className='text-white text-right ml-16 opacity-30'>
          How are you doing
        </p>
      </div>
      <div className='bg-input items-center flex w-full rounded-lg'>
        <input
          className='bg w-full bg-transparent px-4 py-3 border-none outline-none text-sm text-white'
          type='text'
          placeholder='Enter your message'
        />
        <span className='text-2xl cursor-pointer text-active mr-3'>
          <MdSend />
        </span>
      </div>
    </div>
  );
};

export default Chat;
