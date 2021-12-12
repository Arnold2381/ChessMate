import React from 'react';
import Chessboard from 'chessboardjsx';
import blackK from '../assets/pieces/blackK.svg';
import blackN from '../assets/pieces/blackN.svg';
import blackR from '../assets/pieces/blackR.svg';
import blackB from '../assets/pieces/blackB.svg';
import blackQ from '../assets/pieces/blackQ.svg';
import blackP from '../assets/pieces/blackP.svg';
import whiteK from '../assets/pieces/whiteK.svg';
import whiteN from '../assets/pieces/whiteN.svg';
import whiteR from '../assets/pieces/whiteR.svg';
import whiteB from '../assets/pieces/whiteB.svg';
import whiteQ from '../assets/pieces/whiteQ.svg';
import whiteP from '../assets/pieces/whiteP.svg';

const Board = (props: any) => {
  return (
    <Chessboard
      width={530}
      onDrop={props.move}
      darkSquareStyle={{
        backgroundColor: '#B7C0D8',
        position: 'relative',
      }}
      lightSquareStyle={{ backgroundColor: '#E8EDF9' }}
      dropSquareStyle={{ backgroundColor: '#B1A6FC' }}
      boardStyle={{
        borderRadius: '5px',
        overflow: 'hidden',
      }}
      pieces={{
        bK: ({ squareWidth, isDragging }) => (
          <img
            src={blackK}
            alt={'king'}
            style={{
              width: isDragging ? '60px' : '55px',
              height: isDragging ? '60px' : '55px',
              margin: '5px auto',
            }}
          />
        ),
        bP: ({ squareWidth, isDragging }) => (
          <img
            style={{
              width: isDragging ? '60px' : '55px',
              height: isDragging ? '60px' : '55px',
              margin: '5px auto',
            }}
            src={blackP}
            alt={'pawn'}
          />
        ),
        bR: ({ squareWidth, isDragging }) => (
          <img
            src={blackR}
            alt={'king'}
            style={{
              width: isDragging ? '60px' : '55px',
              height: isDragging ? '60px' : '55px',
              margin: '5px auto',
            }}
          />
        ),
        bQ: ({ squareWidth, isDragging }) => (
          <img
            src={blackQ}
            alt={'king'}
            style={{
              width: isDragging ? '60px' : '55px',
              height: isDragging ? '60px' : '55px',
              margin: '5px auto',
            }}
          />
        ),
        bB: ({ squareWidth, isDragging }) => (
          <img
            src={blackB}
            alt={'king'}
            style={{
              width: isDragging ? '60px' : '55px',
              height: isDragging ? '60px' : '55px',
              margin: '5px auto',
            }}
          />
        ),
        bN: ({ squareWidth, isDragging }) => (
          <img
            src={blackN}
            alt={'king'}
            style={{
              width: isDragging ? '60px' : '55px',
              height: isDragging ? '60px' : '55px',
              margin: '5px auto',
            }}
          />
        ),
        wK: ({ squareWidth, isDragging }) => (
          <img
            src={whiteK}
            alt={'king'}
            style={{
              width: isDragging ? '60px' : '55px',
              height: isDragging ? '60px' : '55px',
              margin: '5px auto',
            }}
          />
        ),
        wP: ({ squareWidth, isDragging }) => (
          <img
            style={{
              width: isDragging ? '60px' : '55px',
              height: isDragging ? '60px' : '55px',
              margin: '5px auto',
            }}
            src={whiteP}
            alt={'pawn'}
          />
        ),
        wR: ({ squareWidth, isDragging }) => (
          <img
            src={whiteR}
            alt={'king'}
            style={{
              width: isDragging ? '60px' : '55px',
              height: isDragging ? '60px' : '55px',
              margin: '5px auto',
            }}
          />
        ),
        wQ: ({ squareWidth, isDragging }) => (
          <img
            src={whiteQ}
            alt={'king'}
            style={{
              width: isDragging ? '60px' : '55px',
              height: isDragging ? '60px' : '55px',
              margin: '5px auto',
            }}
          />
        ),
        wB: ({ squareWidth, isDragging }) => (
          <img
            src={whiteB}
            alt={'king'}
            style={{
              width: isDragging ? '60px' : '55px',
              height: isDragging ? '60px' : '55px',
              margin: '5px auto',
            }}
          />
        ),
        wN: ({ squareWidth, isDragging }) => (
          <img
            src={whiteN}
            alt={'king'}
            style={{
              width: isDragging ? '60px' : '55px',
              height: isDragging ? '60px' : '55px',
              margin: '5px auto',
            }}
          />
        ),
      }}
      position={props.fen}
    />
  );
};

export default Board;
