// context/AppContext.js
import { GAME_DEFAULT_POSITION, GOTIES, specialPoints } from '@/utils/constants';
import React, { createContext, useState } from 'react';

const { gotiStartingPoint, checkPoints } = specialPoints;
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [value, setValue] = useState("Hello from Context!");
    const [players, setPlayers] = useState({
        red: [0, 0, 0, 0],
        blue: [0, 0, 0, 0],
        green: [0, 0, 0, 0],
        yellow: [0, 0, 0, 0],
    });

    const [gamePosition, setGamePosition] = useState(GAME_DEFAULT_POSITION)
    const [currentTurn, setCurrentTurn] = useState("yellow");
    const [diceValue, setDiceValue] = useState(0);
    const [gotiPositions, setGotipositions] = useState({});

    const rollDice = () => {
        const value = Math.floor(Math.random() * 6) + 1;
        setDiceValue(value);

        // check if user is allowed to move any goti or not.
        // check 1: if all the goties are at home and the dice value is not 6. means just pass to the next player.
        // check 2: if some goties are at home and other is in winning path but number is not movable
        // check 3: if user has passed the time after rolling the dice and did not moved goti for 10 secs.
        // others...

        // if all the goties are at home and dice value is 6 then next turn
        const allGoties = GOTIES[currentTurn];
        if (value!==6 && allGoties.every(g => gamePosition[g]['isHome'])) {
            nextTurn();
        }

        return value;
    };

    const movePiece = (goti) => {

        // if this goti is at home which has been clicked then there are two conditions
        // if(diceValue is 6 then this goti can be started) otherwise 
        if (goti.isHome) {
            if (diceValue === 6) {
                startGoti(goti);
            }else{
                return;
            }
            nextTurn();
        } else {
            const currentGotiPosition = goti.position;
            let newGotiPosition = Number(currentGotiPosition) + Number(diceValue);
            if(newGotiPosition > 52){
                newGotiPosition = newGotiPosition - 52;
            }
            setGamePosition(prevGamePosition => {
                const updatedGamePosition = { ...prevGamePosition };
                updatedGamePosition[goti.id] = {
                    ...updatedGamePosition[goti.id],
                    position: newGotiPosition,
                };
                return updatedGamePosition;
            });
            handleGotiPositionupdate(goti, newGotiPosition);
        }
        
    };

    const handleGotiPositionupdate = (goti,movedPosition) => {
        console.log(goti,gotiPositions,movedPosition);
        let shouldGiveExtraTurn = false;
        let currentPosition = {...gotiPositions};
        let newGotiPos = {...goti};
        newGotiPos.position = movedPosition;
        newGotiPos.isHome = false;

        // remove the previous object of this goti from the gotiPositions
        if(currentPosition[goti.position]){
            const updatedBoxPosition = currentPosition[goti.position].filter(g => g.id !== goti.id)
            if(updatedBoxPosition.length === 0) {
                delete currentPosition[goti.position];
            }
            else{
                currentPosition[goti.position] = updatedBoxPosition;
            }
        }
        const currentBoxValue = currentPosition[movedPosition]; 
        if(currentBoxValue){
            if(checkPoints.includes(movedPosition) || currentBoxValue[0]?.color === newGotiPos?.color){
                currentPosition[movedPosition] = [...currentBoxValue, {...newGotiPos}];
            }else{
                const gotiesAtThisBox = currentBoxValue;
                currentPosition[movedPosition] = [newGotiPos];
                fallBackToHome(gotiesAtThisBox);
                shouldGiveExtraTurn = true;
            }
            
        }else{
            currentPosition[movedPosition] = [newGotiPos];
        }
        setGotipositions(currentPosition);
        !shouldGiveExtraTurn && nextTurn();
    }

    const fallBackToHome = (goties) => {
        goties.forEach(goti => {
            setGamePosition(prevGamePosition => {
                const updatedGamePosition = {...prevGamePosition };
                updatedGamePosition[goti.id] = {
                   ...updatedGamePosition[goti.id],
                    isHome: true,
                    position: goti.id,
                };
                return updatedGamePosition;
            });
            handleGotiPositionupdate(goti, gotiStartingPoint[goti.color]);
        });
        
    }

    const startGoti = (goti) => {
        
        // check if this goti is at home and dice value is 6 then start it
        const newGotiPosition = gotiStartingPoint[goti.color];
        setGamePosition(prevGamePosition => {
            const updatedGamePosition = {...prevGamePosition };
            updatedGamePosition[goti.id] = {
               ...updatedGamePosition[goti.id],
                isHome: false,
                position: newGotiPosition,
            };
            return updatedGamePosition;
        });
        handleGotiPositionupdate(goti, newGotiPosition);
    };

    const nextTurn = () => {
        const colors = ["red", "green", "blue", "yellow"];
        const nextMove = diceValue === 6 ? 0 : 1;
        const nextIndex = (colors.indexOf(currentTurn) + nextMove) % colors.length;
        
        setTimeout(()=>{
            setDiceValue(0);
            setCurrentTurn(colors[nextIndex]);
        },500)
    };

    return (
        <AppContext.Provider value={{
            value, setValue,
            players, setPlayers,
            currentTurn, setCurrentTurn,
            diceValue, setDiceValue,
            rollDice,
            movePiece,
            nextTurn,
            gamePosition,
            gotiPositions,
        }}>
            {children}
        </AppContext.Provider>
    );
};
