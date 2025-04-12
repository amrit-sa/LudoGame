// context/AppContext.js
import { GAME_DEFAULT_POSITION, GOTIES, specialPoints } from '@/utils/constants';
import React, { createContext, useEffect, useState } from 'react';

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

    const rollDice = async () => {
        const value = Math.floor(Math.random() * 6) + 1;
        setDiceValue(value);

        // check if user is allowed to move any goti or not.
        // check 1: if all the goties are at home and the dice value is not 6. means just pass to the next player.
        // check 2: if some goties are at home and other is in winning path but number is not movable
        // check 3: if user has passed the time after rolling the dice and did not moved goti for 10 secs.
        // others...

        // await new Promise((resolve) => setTimeout(resolve, 100));

        // // if all the goties are at home and dice value is 6 then next turn
        // const allGoties = GOTIES[currentTurn];
        // const startedGoties = allGoties.map(g => gamePosition[g]).filter(goti => goti.isHome === false);
        // // const startedGoties = allGoties.filter(g => g.isHome === false);
        // console.log(startedGoties,'startedGoties',allGoties,'allGoties')
        // if(value !== 6 && startedGoties.length === 1){
        //     console.log('here 38')
        //     debugger
        //     movePiece(startedGoties[0])
        // }else if (value !== 6 && startedGoties.length === 0) {
        //     console.log('here 41')
        //     nextTurn();
        // }

        return value;
    };

    useEffect(() => {
        if (diceValue === 0) return;
    
        const allGoties = GOTIES[currentTurn];
        const startedGoties = allGoties
            .map((g) => gamePosition[g])
            .filter((goti) => goti.isHome === false);
    
        if (diceValue !== 6 && startedGoties.length === 1) {
            console.log('Only one started goti, moving it automatically...');
            setTimeout(() => movePiece(startedGoties[0]),150);
        } else if (diceValue !== 6 && startedGoties.length === 0) {
            console.log('No valid moves, passing the turn...');
            nextTurn();
        }
    }, [diceValue]);

    const movePiece = (goti) => {

        // if this goti is at home which has been clicked then there are two conditions
        // if(diceValue is 6 then this goti can be started) otherwise 
        if (goti.isHome) {
            if (diceValue === 6) {
                startGoti(goti);
            } else {
                return;
            }
            nextTurn();
        } else {
            const currentGotiPosition = goti.position;
            let newGotiPosition = Number(currentGotiPosition) + Number(diceValue);
            if (newGotiPosition > 52) {
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
            // handleGotiPositionupdate(goti, newGotiPosition);
            moveGoti(goti, newGotiPosition)
        }

    };


    const startGoti = (goti) => {

        // check if this goti is at home and dice value is 6 then start it
        const newGotiPosition = gotiStartingPoint[goti.color];
        const updatedGoti = { ...goti, isHome: false, position: newGotiPosition };
        setGamePosition(prevGamePosition => {
            const updatedGamePosition = { ...prevGamePosition };
            updatedGamePosition[goti.id] = {
                ...updatedGoti
            };
            return updatedGamePosition;
        });

        setGotipositions((prevPositions) => {
            const updatedPositions = { ...prevPositions };
            updatedPositions[newGotiPosition] = [...(updatedPositions[newGotiPosition] || []), updatedGoti];
            return updatedPositions;
        });
        // pushGotiToBox(updatedGoti, newGotiPosition);
        // handleGotiPositionupdate(goti, newGotiPosition);
    };

    const endGoti = (goti) => {
        console.log(goti, 'ending goti')
        
        const newGotiPosition = goti.id;
        const updatedGoti = { ...goti, isHome: true, position: newGotiPosition };
        setGamePosition(prevGamePosition => {
            const updatedGamePosition = { ...prevGamePosition };
            updatedGamePosition[goti.id] = {
                ...updatedGoti
            };
            return updatedGamePosition;
        });

        setGotipositions((prevPositions) => {
            const updatedPositions = { ...prevPositions };
            const gotiesAtThisStartBox = updatedPositions[gotiStartingPoint[goti.color]];
            console.log(gotiesAtThisStartBox)
            if (gotiesAtThisStartBox && gotiesAtThisStartBox?.length > 1){
                // remove this goti from the array
                gotiesAtThisStartBox.splice(gotiesAtThisStartBox.indexOf(goti), 1);
                updatedPositions[gotiStartingPoint[goti.color]] = gotiesAtThisStartBox;
            }else{
                delete updatedPositions[gotiStartingPoint[goti.color]];
            }
            return updatedPositions;
        });
        // pushGotiToBox(updatedGoti, newGotiPosition);
        // handleGotiPositionupdate(goti, newGotiPosition);
    };

    const moveGoti = async (goti, newPosition) => {
        let currentPosition = goti.position;
        let shouldGiveExtraTurn = false;
        let gamePositions = {};
        console.log(goti, diceValue , 'here 136'
        )
        for (let i = 1; i <= diceValue; i++) {
            // Calculate the next position
            let nextPosition = currentPosition + 1;
            if (nextPosition > 52) {
                nextPosition = nextPosition - 52;
            }

            // Create a deep copy of the current positions
            setGotipositions((prevPositions) => {
                gamePositions = { ...prevPositions };

                // Remove the piece from the current position
                if (gamePositions[currentPosition]) {
                    gamePositions[currentPosition] = gamePositions[currentPosition].filter(
                        (g) => g.id !== goti.id
                    );

                    // If no pieces are left in the current position, delete the key
                    if (gamePositions[currentPosition].length === 0) {
                        delete gamePositions[currentPosition];
                    }
                }

                // Add the piece to the next position
                if (!gamePositions[nextPosition]) {
                    gamePositions[nextPosition] = [];
                }
                gamePositions[nextPosition].push({ ...goti, position: nextPosition });
                // if(i===diceValue){
                //     debugger
                //     shouldGiveExtraTurn = checkForGotiCut({...gamePositions}, nextPosition, { ...goti, position: nextPosition })
                // }
                // console.log(gamePositions, shouldGiveExtraTurn)

                return gamePositions;
            });

            // Wait for a small delay to create the animation effect
            await new Promise((resolve) => setTimeout(resolve, 250));



            // Update the current position for the next iteration
            currentPosition = nextPosition;
        }

        // check if goti cuts the other goti
  
        const currentBoxValue = gamePositions?.[currentPosition];
        console.log(currentPosition, gamePositions, currentBoxValue, goti);
        if (currentBoxValue && currentBoxValue.length > 1) {
        //     console.log(!checkPoints.includes(currentPosition), currentBoxValue[0]?.color !== goti?.color)
            if (!checkPoints.includes(currentPosition) && currentBoxValue[0]?.color !== goti?.color) {
                const gotiesAtThisBox = [...currentBoxValue]
                // seperate last index of array currentBoxValue from other
                const killerGoti = gotiesAtThisBox.pop();
                const killedGoties = gotiesAtThisBox; 
                // all the remaining gotis are left in currentBoxValue so need to send them home.
                fallBackToHome(killedGoties);
                shouldGiveExtraTurn = true;
                setDiceValue(0);
            }
        }
        !shouldGiveExtraTurn && nextTurn();
    }


    const fallBackToHome = (goties) => {
        console.log(goties,'goties to be removed',gotiPositions);
        goties.forEach(async (goti) => {
            let currentPosition = goti.position;
            let gamePositions = {};
            for (let i = currentPosition; i > gotiStartingPoint[goti.color] ; i--) {
                // Calculate the next position
                let nextPosition = currentPosition - 1;
                if (nextPosition < 1) {
                    nextPosition = 52;
                }

                // Create a deep copy of the current positions
                setGotipositions((prevPositions) => {
                    gamePositions = { ...prevPositions };

                    // Remove the piece from the current position
                    if (gamePositions[currentPosition]) {
                        gamePositions[currentPosition] = gamePositions[currentPosition].filter(
                            (g) => g.id !== goti.id
                        );

                        // If no pieces are left in the current position, delete the key
                        if (gamePositions[currentPosition].length === 0) {
                            delete gamePositions[currentPosition];
                        }
                    }

                    // Add the piece to the next position
                    if (!gamePositions[nextPosition]) {
                        gamePositions[nextPosition] = [];
                    }
                    gamePositions[nextPosition].push({ ...goti, position: nextPosition });

                    return gamePositions;
                });

                // Wait for a small delay to create the animation effect
                await new Promise((resolve) => setTimeout(resolve, 140));

                // Update the current position for the next iteration
                currentPosition = nextPosition;
            }

            setTimeout(endGoti(goti),150);

        })
    }

    const nextTurn = () => {
        const colors = ["red", "green", "blue", "yellow"];
        const nextMove = diceValue === 6 ? 0 : 1;
        const nextIndex = (colors.indexOf(currentTurn) + nextMove) % colors.length;

        setTimeout(() => {
            setDiceValue(0);
            setCurrentTurn(colors[nextIndex]);
        }, 500)
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
