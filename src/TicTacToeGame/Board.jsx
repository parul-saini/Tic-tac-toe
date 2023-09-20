import React, { useState } from 'react'

// comp import
import Square from './Square'

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setisXTurn] = useState(true);

    const checkWinner = () => {
       console.log(state);
        const winnerIndexes = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ]
        for (let logic of winnerIndexes) {
            let [a, b, c] = logic;
        if (state[a] !== null && (state[a] === state[b]) && (state[c] === state[b]) &&
         (state[c] === state[a])) {
                return true;
            }

        }
        return false;
    }

    const isWinner = checkWinner();

    const handleClick = (ind) => {
        if(state[ind]!== null) return ;
        const copyState = [...state];
        copyState[ind] = isXTurn ? 'X' : 'O';
        setState(copyState);
        setisXTurn(!isXTurn);
    }
    const handlePlayAgain = () => {
        setState(Array(9).fill(null));
    }


    return (
        <>
            <div className='board-container'>
                {
                    isWinner ? <>
                    <h1 style={{ margin: "auto" }}>✨{isXTurn ? 'O' : 'X'} Won the Game✨</h1>
                    <button onClick={()=>handlePlayAgain()} className='btn'>Play Again
                    </button> </> 
                    :
                    <>
                    <h1 style={{ margin: "10px" }}>Next Player : {isXTurn ? 'X' : 'O'}</h1>

                    <div className="board-row">
                        <Square onClick={() => handleClick(0)} value={state[0]} />
                        <Square onClick={() => handleClick(1)} value={state[1]} />
                        <Square onClick={() => handleClick(2)} value={state[2]} />
                    </div>
                    <div className="board-row">
                        <Square onClick={() => handleClick(3)} value={state[3]} />
                        <Square onClick={() => handleClick(4)} value={state[4]} />
                        <Square onClick={() => handleClick(5)} value={state[5]} />
                    </div>
                    <div className="board-row">
                        <Square onClick={() => handleClick(6)} value={state[6]} />
                        <Square onClick={() => handleClick(7)} value={state[7]} />
                        <Square onClick={() => handleClick(8)} value={state[8]} />
                    </div>
                    <button onClick={()=>handlePlayAgain()} className='btn'>Play Again
                    </button>
                    </>
                }

            </div>
        </>
    )
}

export default Board
