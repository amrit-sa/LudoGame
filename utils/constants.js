
export const specialPoints = {

    startingPoints : [34,47,9,22],
    maxPossibleMoves: 55,
    greenSafeZone:[52,53,54,55,56],
    blueSafeZone:[57,58,59,60,61],
    yellowSafeZone:[62,63,64,65,66],
    redSafeZone:[67,68,69,70,71],
    // safeZones: [5,9,18,22,31,34,43,47,...this.greenSafeZone,...this.blueSafeZone,...this.yellowSafeZone,...this.redSafeZone],
    otherSafeZones: [5,9,18,22,31,34,43,47],
    greenStartPoint:9,
    blueStartPoint:22,
    yellowStartPoint:34,
    redStartPoint:47,
    gotiStartingPoint: {
        red: 47,
        blue: 22,
        yellow: 34,
        green: 9
    }
};


export const playerColors = ["red", "blue", "yellow", "green"];

export const GOTIES = {
    red: ['R-A','R-B','R-C','R-D'],
    blue: ['B-A','B-B','B-C','B-D'],
    yellow: ['Y-A','Y-B','Y-C','Y-D'],
    green: ['G-A','G-B','G-C','G-D'],
};

export const GAME_DEFAULT_POSITION = {
    'R-A': { color: 'red', id: 'R-A', position: 'R-A', isHome:true},
    'R-B': { color: 'red', id: 'R-B', position: 'R-B', isHome:true},
    'R-C': { color: 'red', id: 'R-C', position: 'R-C', isHome:true},
    'R-D': { color: 'red', id: 'R-D', position: 'R-D', isHome:true},
    'B-A': { color: 'blue', id: 'B-A', position: 'B-A', isHome:true},
    'B-B': { color: 'blue', id: 'B-B', position: 'B-B', isHome:true},
    'B-C': { color: 'blue', id: 'B-C', position: 'B-C', isHome:true},
    'B-D': { color: 'blue', id: 'B-D', position: 'B-D', isHome:true},
    'Y-A': { color: 'yellow', id: 'Y-A', position: 'Y-A', isHome:true},
    'Y-B': { color: 'yellow', id: 'Y-B', position: 'Y-B', isHome:true},
    'Y-C': { color: 'yellow', id: 'Y-C', position: 'Y-C', isHome:true},
    'Y-D': { color: 'yellow', id: 'Y-D', position: 'Y-D', isHome:true},
    'G-A': { color: 'green', id: 'G-A', position: 'G-A', isHome:true},
    'G-B': { color: 'green', id: 'G-B', position: 'G-B', isHome:true},
    'G-C': { color: 'green', id: 'G-C', position: 'G-C', isHome:true},
    'G-D': { color: 'green', id: 'G-D', position: 'G-D', isHome:true},
};