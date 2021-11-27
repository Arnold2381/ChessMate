import React from 'react';
import chessLogo from '../assets/chessLogo.svg';
import Board from '../components/Board';
import purple from '../assets/purple.png';
import green from '../assets/green.png';
import Match from '../components/Match';
import Chat from '../components/Chat';
import Notation from '../components/Notation';

const Game = () => {
  return (
    <div className='h-screen py-24 flex justify-center items-center bg-bgBlack w-screen relative'>
      <img
        src={purple}
        draggable={false}
        className='absolute top-0 left-0 z-0'
        alt=''
      />
      <img
        src={green}
        draggable={false}
        className='absolute h-screen bottom-0 right-0 z-0'
        alt=''
      />
      {/* Nav */}
      <div className='absolute z-40 top-8 left-8'>
        <img src={chessLogo} className='h-7 cursor-pointer' alt='chessMate' />
      </div>
      <div className='h-full relative flex  w-full mx-32'>
        {/* leftbar */}
        <div className='h-full w-2/4 flex flex-col rounded-xl gap-8'>
          <Match />
          <Chat />
        </div>
        {/* leftbar */}

        {/* Chessboard */}
        <div className='h-full flex justify-center items-center w-full'>
          <div className='bg-white border-8 border-white rounded-lg'>
            <Board />
          </div>
        </div>
        {/* Chessboard */}

        {/* rightbar */}
        <div className='h-full w-2/4 flex flex-col rounded-xl gap-8'>
          <div className='bg-lightWhite flex border-2 border-active justify-center items-center rounded-lg w-full h-48'>
            <p className='text-active font-medium text-5xl'>5:00</p>
          </div>

          <Notation />

          <div className='bg-lightWhite flex justify-center items-center rounded-lg w-full h-48'>
            <p className='text-white font-medium text-5xl'>5:00</p>
          </div>
        </div>
        {/* rightbar */}
      </div>
    </div>
  );
};

export default Game;
