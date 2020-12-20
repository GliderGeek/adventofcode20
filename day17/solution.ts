function print4DSlice(grid, z, w){
    for(let y=0; y < grid[0].length; y++){
        let xvals = ""
        for (let x=0; x< grid.length; x++){

            let val = grid[x][y][z][w]
            if (val == 0){
                xvals += "."
            } else { //val == 1
                xvals += "#"
            }
        }
        console.log(xvals)
    }
    console.log("")
}

function printGrid(grid){
    for (let z = 0; z < grid[0][0].length; z++) {
        for(let y=0; y < grid[0].length; y++){
            let xvals = ""
            for (let x=0; x< grid.length; x++){

                let val = grid[x][y][z]
                if (val == 0){
                    xvals += "."
                } else { //val == 1
                    xvals += "#"
                }
            }
            console.log(xvals)
        }
        console.log("")
    }
}

function generateCombinations(optionSets): number[][]{
    //generateCombinations([[1,2], [3,4], [5]])
    //-> [1,3,5], [1,4,5], [2,3,5], [2,4,5]

    //generateCombinations([[3,4], [5, 6]])
    //-> [3,6], [3,5], [4,5], [4,6]

    let combinations = []

    if (optionSets.length == 1){
        combinations = []
        optionSets[0].forEach(number => {
            combinations.push([number])
        })
    } else {
        let prevCombinations = generateCombinations(optionSets.slice(1, optionSets.length))
        optionSets[0].forEach(number => {
            prevCombinations.forEach(prevCombination => {
                let newCombination = [...prevCombination]
                newCombination.push(number)
                combinations.push(newCombination)
            })
        })
    }

    return combinations
}

function getNeighbours(x, y, z, lengthx, lengthy, lenghtz){
    let xvals = [x]
    if (x-1 >= 0){xvals.push(x-1)}
    if (x+1 < lengthx){xvals.push(x+1)}

    let yvals = [y]
    if (y-1 >= 0){yvals.push(y-1)}
    if (y+1 < lengthy){yvals.push(y+1)}

    let zvals = [z]
    if (z-1 >= 0){zvals.push(z-1)}
    if (z+1 < lenghtz){zvals.push(z+1)}

    let neighbours = []
    generateCombinations([xvals, yvals, zvals]).forEach(neighbour => {
        if (!(neighbour[2] == x && neighbour[1] == y && neighbour[0] == z)){
            neighbours.push([neighbour[2], neighbour[1], neighbour[0]])  //switched around
        }
    })

    return neighbours
}

function getNeighbours4(x, y, z, w, lengthx, lengthy, lenghtz, lenghtw){
    let xvals = [x]
    if (x-1 >= 0){xvals.push(x-1)}
    if (x+1 < lengthx){xvals.push(x+1)}

    let yvals = [y]
    if (y-1 >= 0){yvals.push(y-1)}
    if (y+1 < lengthy){yvals.push(y+1)}

    let zvals = [z]
    if (z-1 >= 0){zvals.push(z-1)}
    if (z+1 < lenghtz){zvals.push(z+1)}

    let wvals = [w]
    if (w-1 >= 0){wvals.push(w-1)}
    if (w+1 < lenghtw){wvals.push(w+1)}

    let neighbours = []
    generateCombinations([xvals, yvals, zvals, wvals]).forEach(neighbour => {
        if (!(neighbour[3] == x && neighbour[2] == y && neighbour[1] == z && neighbour[0] == w)){
            neighbours.push([neighbour[3], neighbour[2], neighbour[1], neighbour[0]])  //switched around
        }
    })

    return neighbours
}

function getNeighboursGrid(grid){
    //return for each coordinate the list of indices of it's neighbours
    //neighboursGrid[x][y][z] -> [[x+1,y,z], [x,y+1,z],...

    let lengthx = grid.length
    let lengthy = grid[0].length
    let lengthz = grid[0][0].length

    let newGrid = []
    for (let x = 0; x < lengthx; x++) {
        let yvals = []
        for (let y = 0; y < lengthy; y++) {
            let zvals = []
            for (let z = 0; z < lengthz; z++) {
                let neighbours = getNeighbours(x, y, z, lengthx, lengthy, lengthz)
                zvals.push(neighbours)
            }
            yvals.push(zvals)
        }
        newGrid.push(yvals)     
    }
    return newGrid
}

function getNeighboursGrid4(grid){

    let lengthx = grid.length
    let lengthy = grid[0].length
    let lengthz = grid[0][0].length
    let lengthw = grid[0][0][0].length

    let newGrid = []
    for (let x = 0; x < lengthx; x++) {
        let yvals = []
        for (let y = 0; y < lengthy; y++) {
            let zvals = []
            for (let z = 0; z < lengthz; z++) {
                let wvals = []
                for (let w=0; w < lengthw; w++){
                    let neighbours = getNeighbours4(x, y, z, w, lengthx, lengthy, lengthz, lengthw)
                    wvals.push(neighbours)
                }
                zvals.push(wvals)
            }
            yvals.push(zvals)
        }
        newGrid.push(yvals)     
    }
    return newGrid
}

function countActiveNeigbours(grid, neighbours, stopCountingFrom){
    let activeNeighbours = 0
    for (let i = 0; i < neighbours.length; i++) {
        const neighbour = neighbours[i];
        if (grid[neighbour[0]][neighbour[1]][neighbour[2]] == 1){
            activeNeighbours++
            if (activeNeighbours >= stopCountingFrom){
                break
            }
        }
    }
    return activeNeighbours
}

function countActiveNeigbours4(grid, neighbours, stopCountingFrom){
    let activeNeighbours = 0
    for (let i = 0; i < neighbours.length; i++) {
        const neighbour = neighbours[i];
        if (grid[neighbour[0]][neighbour[1]][neighbour[2]][neighbour[3]] == 1){
            activeNeighbours++
            if (activeNeighbours >= stopCountingFrom){
                break
            }
        }
    }
    return activeNeighbours
}

function advanceGrid(grid, neighboursGrid){
    let lengthx = grid.length
    let lengthy = grid[0].length
    let lengthz = grid[0][0].length

    let updates = [] // [[x,y,z,newVal], [x,y,z,newVal]]

    
    for (let x = 0; x < lengthx; x++) {
        for (let y = 0; y < lengthy; y++) {
            for (let z = 0; z < lengthz; z++) {

                const val = grid[x][y][z]      
                let neighbours = neighboursGrid[x][y][z]

                if (val == 1) {
                    let activeNeighbours = countActiveNeigbours(grid, neighbours, 4)
                    if (!(activeNeighbours == 2 || activeNeighbours == 3)){
                        updates.push([x,y,z,0])
                    }

                } else { //val == 0
                    let activeNeigbours = countActiveNeigbours(grid, neighbours, 4)

                    if (activeNeigbours == 3){
                        updates.push([x,y,z,1])
                    }
                }
            }    
        }
    }

    for (let i = 0; i < updates.length; i++) {
        const update = updates[i];
        grid[update[0]][update[1]][update[2]] = update[3]
    }

    return grid
}

function advanceGrid4(grid, neighboursGrid){
    let lengthx = grid.length
    let lengthy = grid[0].length
    let lengthz = grid[0][0].length
    let lengthw = grid[0][0][0].length

    let updates = [] // [[x,y,z,newVal], [x,y,z,newVal]]

    for (let x = 0; x < lengthx; x++) {
        for (let y = 0; y < lengthy; y++) {
            for (let z = 0; z < lengthz; z++) {
                for (let w = 0; w < lengthw; w++){
                    const val = grid[x][y][z][w]    
                    let neighbours = neighboursGrid[x][y][z][w]

                    if (val == 1) {
                        let activeNeighbours = countActiveNeigbours4(grid, neighbours, 4)
                        if (!(activeNeighbours == 2 || activeNeighbours == 3)){
                            updates.push([x,y,z,w,0])
                        }

                    } else { //val == 0
                        let activeNeigbours = countActiveNeigbours4(grid, neighbours, 4)

                        if (activeNeigbours == 3){
                            updates.push([x,y,z,w,1])
                        }
                    }
                }
            }    
        }
    }

    for (let i = 0; i < updates.length; i++) {
        const update = updates[i];
        grid[update[0]][update[1]][update[2]][update[3]] = update[4]
    }

    return grid
}

function intializeGrid(input: string[], steps){
    let sizex = input[0].length
    let sizey = input.length
    let sizez = 1

    let newSizeX = sizex + 2*steps
    let newSizeY = sizey + 2*steps
    let newSizeZ = sizez + 2*steps

    let grid = []
    let zVals = []
    let yVals = []
    for (let x = 0; x < newSizeX; x++) {
        let xrel = x - steps
        yVals = []
        for (let y =0; y < newSizeY; y++){
            zVals = []
            let yrel = y - steps
            for (let z=0; z < newSizeZ; z++){

                if (z == steps && yrel >= 0 &&  yrel < sizey &&  xrel >= 0 &&  xrel < sizex){
                    let element = input[yrel][xrel]
                    if (element == "."){
                        zVals.push(0)
                    } else { // element == "#"
                        zVals.push(1)
                    }
                } else {
                    zVals.push(0)
                }
            }
            yVals.push(zVals)
        }
        grid.push(yVals)
    }
    return grid
}

function intializeGrid4(input: string[], steps){
    let sizex = input[0].length
    let sizey = input.length
    let sizez = 1
    let sizew = 1

    let newSizeX = sizex + 2*steps
    let newSizeY = sizey + 2*steps
    let newSizeZ = sizez + 2*steps
    let newSizeW = sizew + 2*steps

    let grid = []
    let zVals = []
    let yVals = []
    let wVals = []
    for (let x = 0; x < newSizeX; x++) {
        let xrel = x - steps
        yVals = []
        for (let y =0; y < newSizeY; y++){
            zVals = []
            let yrel = y - steps
            for (let z=0; z < newSizeZ; z++){
                wVals = []
                for (let w = 0; w < newSizeW; w++) {
                    if (w == steps && z == steps && yrel >= 0 &&  yrel < sizey &&  xrel >= 0 &&  xrel < sizex){
                        let element = input[yrel][xrel]
                        if (element == "."){
                            wVals.push(0)
                        } else { // element == "#"
                            wVals.push(1)
                        }
                    } else {
                        wVals.push(0)
                    }
                }
                zVals.push(wVals)
            }
            yVals.push(zVals)
        }
        grid.push(yVals)
    }
    return grid
}


let example = [
    ".#.",
    "..#",
    "###",
]

let input = [
    "..#..#.#",
    "##.#..#.",
    "#....#..",
    ".#..####",
    ".....#..",
    "...##...",
    ".#.##..#",
    ".#.#.#.#",
]

function part1(input: string[]){
    let steps = 6

    let grid = intializeGrid(input, steps)
    let neighboursGrid = getNeighboursGrid(grid)

    let step = 1
    while (step <= steps){
        grid = advanceGrid(grid, neighboursGrid)
        step++
    }

    let total = 0
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[0].length; y++) {
            for (let z = 0; z < grid[0][0].length; z++) {
                if (grid[x][y][z] == 1){
                    total++
                }
            }
        }
    }

    return total
}

function part2(input: string[]){
    let steps = 6

    let grid = intializeGrid4(input, steps)
    let neighboursGrid = getNeighboursGrid4(grid)

    let step = 1
    while (step <= steps){
        grid = advanceGrid4(grid, neighboursGrid)
        step++
    }

    let total = 0
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[0].length; y++) {
            for (let z = 0; z < grid[0][0].length; z++) {
                for (let w = 0; w < grid[0][0][0].length; w++) {
                    if (grid[x][y][z][w] == 1){
                        total++
                    }
                }
            }
        }
    }

    return total
}

console.log("part 1:", part1(input))
console.log("part 2:", part2(input))
