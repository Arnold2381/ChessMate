import React, { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiClipboard } from 'react-icons/hi';
import Firebase from '../config';

const Modal = (props: any) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(props.id);
  };
  const [gameid, setGameid] = React.useState('');
  const handleChange = (event: any) => {
    setGameid(event.target.value);
  };
  const joinGame = () => {
    let ref = Firebase.database().ref('Games/' + gameid);
    ref.on('value', (snapshot: any) => {
      const state = snapshot.val();
      if (state != null && state.count < 2) {
        Firebase.database()
          .ref('Games/' + gameid)
          .set({
            count: 2,
          })
          .catch(alert);
      }
    });
  };
  return (
    <div className='h-screen z-50 w-screen bg-blur bg-cover backdrop-blur-md background-opacity-30 fixed top-0 left-0 flex items-center justify-center'>
      <div className=' w-6/12 relative bg-black rounded-xl py-12 px-24'>
        <div
          onClick={() => props.setModal(false)}
          className='absolute text-white text-2xl cursor-pointer top-8 right-8'
        >
          <AiOutlineClose />
        </div>
        <p className='text-3xl font-semibold text-white text-center'>
          Rookie Match
        </p>
        {props.modalType === 'join' && (
          <>
            <div className='rounded-xl overflow-hidden mt-12 gap-5 flex'>
              <input
                className='bg-backDrop p-5 text-white rounded-xl w-full outline-none'
                type='text'
                placeholder='Enter opponent ID'
                onChange={handleChange}
              />
              <span
                className='text-white cursor-pointer flex items-center justify-center w-36 bg-blue-500 rounded-xl'
                onClick={joinGame}
              >
                Play Now
              </span>
            </div>
            <p className='mt-12 text-xl text-white text-center'>
              or
              <span
                onClick={() => props.setModalType('create')}
                className='text-blue-500 cursor-pointer'
              >
                {' '}
                create a game
              </span>
            </p>
          </>
        )}

        {props.modalType === 'create' && (
          <>
            <div className='rounded-xl overflow-hidden mt-12 gap-5 flex'>
              <p className='bg-backDrop p-5 text-white rounded-xl w-full outline-none'>
                {props.id}
              </p>
              <span
                onClick={() => handleCopy()}
                className='text-white cursor-pointer flex items-center justify-center w-16 bg-blue-500 rounded-xl'
              >
                <span className='text-white text-2xl'>
                  <HiClipboard />
                </span>
              </span>
            </div>
            <p className='mt-12 text-xl text-white text-center'>
              or
              <span
                onClick={() => props.setModalType('join')}
                className='text-blue-500 cursor-pointer'
              >
                {' '}
                join a game
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
