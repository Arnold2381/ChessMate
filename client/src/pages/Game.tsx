import React, { useState } from 'react';
import chessLogo from '../assets/chessLogo.svg';
import Board from '../components/Board';
import purple from '../assets/purple.png';
import green from '../assets/green.png';
import Match from '../components/Match';
import Chat from '../components/Chat';
import Notation from '../components/Notation';
import io from 'socket.io-client';
import { ChessInstance } from 'chess.js';
import { useLocation } from 'react-router-dom';
import { useStateValue } from '../store/stateProvidet';
import Firebase from '../config';
import Web3 from 'web3';
import abi from '../contracts/ChessMate.json';

const Chess = require('chess.js');

const Game = () => {
  const [{ id, balance }, dispatch] = useStateValue();
  const [color, setUserColor] = useState('white');
  const [active, setActive] = useState('w');
  const [chess] = useState<ChessInstance>(
    new Chess('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')
  );
  const location = useLocation() as any;

  const [fen, setFen] = useState(chess.fen());
  const [whiteTimer, setWhiteTimer] = useState(60);
  const [blackTimer, setBlackTimer] = useState(60);

  const showTime = (timer: number, timeSetter: any) => {
    timeSetter(timer - 1);
  };

  var socket = io('http://localhost:5000/', { transports: ['websocket'] });
  const [roomid, setRoomid] = useState('play');
  React.useEffect(() => {
    setRoomid(location.state.id);
    let ref = Firebase.database().ref('Games/' + id);
    ref.on('value', (snapshot: any) => {
      const state = snapshot.val();
      setUserColor(state.color);
    });

    //LoadBlockchainData();
  }, []);

  var handleMove = function (mov: any) {
    var move = chess.move({ from: mov.from, to: mov.to });

    if (move === null) return 'snapback';

    setFen(chess.fen());

    console.log(fen);
    socket.emit('move', { move: move, roomid: roomid });
    if (chess.game_over()) {
      alert('Game Over');
    }
  };

  // Timer
  // timer end

  // ether
  // const [showOwner, setshowOwner] = useState(false);
  // const [Candidates, setCandidates] = useState([]);
  // const [Owner, setOwner] = useState();
  // const [Contract, setContract] = useState() as any;
  // const [VoterAddress, setVoterAddress] = useState('');
  // const [CandidateName, setCandidateName] = useState('');
  // const [CandidateID, setCandidateID] = useState();
  // const [CurrentAccount, setCurrentAccount] = useState();
  // const [HowTo, setHowTo] = useState(false);
  // const [Winner, setWinner] = useState();
  // const [showWinner, setshowWinner] = useState(false);
  // const [showTable, setshowTable] = useState(false);

  // const LoadBlockchainData = async () => {
  //   const web3 = (window as any).web3 as any;

  //   setCurrentAccount(id);
  //   console.log(web3.eth?.net);
  //   const networkID = (await web3.eth?.net.getId()) as any;
  //   const networkData = (abi as any).networks[networkID];
  //   console.log(networkID, networkData);

  //   if (networkData) {
  //     const contract = new web3.eth.Contract(abi.abi, networkData.address);
  //     window.alert('Contract Loaded correctly');
  //     setContract(contract);
  //     setOwner(await contract.methods.contractOwner().call());

  //     var x = await contract.methods.Cand_id().call();
  //     var arr = [] as any;

  //     for (var i = 0; i < x; i++) {
  //       var a = await contract.methods.candidates(i).call();
  //       arr = [...arr, { id: i + 1, name: a.name }];
  //     }
  //     setCandidates(arr);
  //   } else {
  //     window.alert('Contract Not loaded');
  //   }
  // };
  //  async function getBalance()
  //  {
  //    try{
  //      await Contract.methods.get_balance(id).then();
  //    }
  //  }
  const move = (move: any) => {
    if (fen.includes('w')) {
      setActive('b');
    } else {
      setActive('w');
    }

    if (
      (fen.includes('w') && color === 'black') ||
      (!fen.includes('w') && color === 'white')
    ) {
      handleMove({
        from: move.sourceSquare,
        to: move.targetSquare,
        promotion: 'q',
      });
      // showTime(whiteTimer, setWhiteTimer);
    }
  };

  socket.on('move', function (msg: any) {
    console.log(msg.roomid);
    if (msg.roomid === roomid) {
      chess.move(msg.move);
      setFen(chess.fen);
    }
  });

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
            <Board move={move} fen={fen} />
          </div>
        </div>
        {/* Chessboard */}

        {/* rightbar */}
        <div className='h-full w-2/4 flex flex-col rounded-xl gap-8'>
          <div className='bg-lightWhite flex border-2 border-active justify-center items-center rounded-lg w-full h-48'>
            <p className='text-active font-medium text-5xl'>{blackTimer}</p>
          </div>

          <Notation />

          <div className='bg-lightWhite flex justify-center items-center rounded-lg w-full h-48'>
            <p className='text-white font-medium text-5xl'>{whiteTimer}</p>
          </div>
        </div>
        {/* rightbar */}
      </div>
    </div>
  );
};

export default Game;
