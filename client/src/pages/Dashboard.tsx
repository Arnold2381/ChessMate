import React, { useEffect } from 'react';
import Logo from '../logos/logo_home.svg';
import knight from '../assets/knight.svg';
import Modal from '../components/Modal';
import Web3 from 'web3';
import Firebase from '../config';
import { useStateValue } from '../store/stateProvidet';
import { useHistory } from 'react-router-dom';
const Dashboard = () => {
  const [modal, setModal] = React.useState(false);
  const [modalType, setModalType] = React.useState('join');
  const [{ id, balance }, dispatch] = useStateValue();

  const [players, setPlayers] = React.useState(0);

  const history = useHistory();

  const handleAdd = () => {
    Firebase.database()
      .ref('Games/' + id)
      .set({
        count: 1,
        color: 'white',
      })
      .catch(alert);
  };

  useEffect(() => {
    if (players === 2) {
      history.push({ pathname: '/game', state: { id: id } });
    }
  }, [players]);

  const handleFetch = () => {
    let ref = Firebase.database().ref('Games/' + id);
    ref.on('value', (snapshot: any) => {
      const state = snapshot.val();
      if (state != null) {
        console.log(state.count);
        setPlayers(state.count);
      }
    });
  };

  useEffect(() => {
    handleFetch();
  }, []);
  // const getUserData = () => {
  //   let ref = firebase.database().ref('/');
  //   ref.on('value', (snapshot: any) => {
  //     const state = snapshot.val();
  //     console.log(state);
  //   });
  // };

  return (
    <>
      {console.log(id, balance)}
      {modal && (
        <Modal
          setModal={setModal}
          modalType={modalType}
          setModalType={setModalType}
          id={id}
        />
      )}
      <div className=''>
        <img src={Logo} className='logo cursor-pointer' alt='' />

        <div className='bg-dashBg bg-cover relative text-white px-16 py-14 rounded-xl w-9/12 mt-44 mx-auto'>
          <h1 className='text-2xl font-semibold'>Hi,{id}</h1>
          <p className='text-xl mt-2'>Glad to have you back here!</p>
          <img
            src={knight}
            className='absolute top-14 w-48 right-12 transform -translate-y-1/2'
            alt=''
          />
        </div>

        {/* Matches */}
        <div className='w-9/12 mx-auto'>
          <h1 className='text-3xl mt-36 text-white font-semibold'>Play Now</h1>
          <p className='text-xl mt-3 text-white'>
            Planning for some cool victories today?
          </p>

          <div className='cards flex gap-32 py-16'>
            <div
              onClick={() => {
                handleAdd();
                setModal(true);
              }}
              className='w-full p-8 cursor-pointer bg-rookie bg-cover h-60 rounded-xl'
            >
              <div className='h-full flex flex-col justify-between'>
                <h1 className='text-white opacity-40 font-bold text-5xl'>
                  Rookie
                </h1>
                <p className='text-3xl font-bold opacity-30'>1 Ether</p>
              </div>
            </div>
            <div className='w-full cursor-pointer p-8 bg-amateur bg-cover h-60 rounded-xl'>
              <div className='h-full flex flex-col justify-between'>
                <h1 className='text-white opacity-40 font-bold text-5xl'>
                  Amateur
                </h1>
                <p className='text-3xl font-bold opacity-30'>2 Ether</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
