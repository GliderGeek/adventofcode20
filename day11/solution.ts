function translateToMatrix(input: string[]): number[][]{
    //0 = floor
    //1 = empty
    //2 = occupied

    let matrix = []
    input.forEach(entry => {
        let row = []
        for (let i = 0; i < entry.length; i++) {
            const element = entry[i];

            switch (element) {
                case ".":
                    row.push(0)
                    break;
                case "L":
                    row.push(1)
                    break;
                case "#":
                    row.push(2)
                    break;
            }
        }

        matrix.push(row)
    })

    return matrix
}

var example: string[];
example = [
    "L.LL.LL.LL",
    "LLLLLLL.LL",
    "L.L.L..L..",
    "LLLL.LL.LL",
    "L.LL.LL.LL",
    "L.LLLLL.LL",
    "..L.L.....",
    "LLLLLLLLLL",
    "L.LLLLLL.L",
    "L.LLLLL.LL",
]

var input: string[];
input = [
    "LLLLLLLLLL.LLLLL.LLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLL",
    "LLLLLLLLLL.LLLLL.LLLLLLLLLLL.LLLLLL.LLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLL.L",
    "LLLLLLLL.L.LLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLL.LLLLL..LLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLL",
    "LLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLL.L.LLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLL.",
    "L.LLLLLLLLLLLLLL.LLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLL",
    "LLLLLLLLLLLLLLLL.LLLL.LLLLLL.LLLLLL.LLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLL",
    "L..LL......LL.L..LL...L.........L.......LLL........L...L....L...LL.L....L.....LL....L..LL...L..",
    "LL.LLLLLLLLLLLLLLLLLL.LLLL.L.LLLLLL.LLLLLL.L.LLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL",
    "LLLLLLLLLL.LLLLL.LLLL.LLLLLLLLLLLLL.LLLLLLLL.LLLL.LL.LLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLL.L",
    "LLLLLLLLLL.LLLLLLLLLL.LLLLLL.LL.LLL.LLLLLLLL.L.LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLL.L",
    "L.LLLLLLLL.LL.LL.LLLL..LLLLLLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL",
    "...L.L.........LL..L.L.....L....L....L...L...L.LL...LLLLL....L...L......L..LLL..LL.....L..LL..L",
    "LLLLLLLLLL.LLLLL.LLLL.LLLLLL..LLLLL.LLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLL.LLL.",
    "LLLLLLLLLL.LL.LL.LLLL.LLLLLLLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLL.LL.LLLLLLLLLLLLLLLL.LLLLL.LLLLLLLL",
    "LLLLLLLLLL.LLLLL.LLLL.LL.LLL..LLLLL.LLLLLLLL.LLLL.LL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
    "LLLLLLLLLL.LLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL",
    "LLLLLLLLLLLLLLLLL.LLL.LLLLLL.LLLLLL.LLLLL.LL.LLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLL",
    "LLLLLLLLLL.LLL.L.LLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLL",
    "...L....LL....L.L....L.L.LL.L.LL.L..LL....LL.LL.........L..LL........L.LL..L....LL...L.......LL",
    "LLLLLLLLLL.LLLLL.LLLL.LLLLLL.LLLLLL.LLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL",
    "L.LLLLLLLL.LLLLL.LLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LL.LLLLLL.LLLLL.LLLL.LLL",
    "LLLLLLLLLL.LLLLL.LLLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLL",
    "LLLLLLLLLL.LLLLL..LLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLL",
    "LL.LLLLLLL.LLLLL.LLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLL.LLLL.LL.LLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLL",
    "..L.....L........LLL.......LL.LL....LL........L..L.L.LLLL.....L..LL....LL.L.L........LL.L.....L",
    "LLLLLLLLLL.LLLLL.L.LL.LLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LL.LL.LLLLL.LL",
    "LLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLL..LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL",
    "LLLLLLLLL..LLLLL.LLLLLLLLLLLLLLL.LL.LLLLLLLL.LLLLLLL..LLLLLL.LLLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLL",
    "LLLLLLLLLL.LLLLL.LLLL.LLLLLL.LLLLLL.LLLLLLLL.LLLLLLL.LLL.LLL.LLLL.LLLL.LLLLLLLLL.LLLLLLLLLL.LLL",
    "LLLLLL.LLLLLLLLL.LL.L.LLLLLL.LLLLLL.LLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLL",
    "LLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLL.LL.LLLLL",
    "L....L..LL..LL..LL......L..LL..LL.LL...L.....L.....L.L...L.LL.....L.......L..LL.........LLLL...",
    "LLLLLLLLLL.LLLLL.LLLLLLLLLLL.LLLLLLLLLLLLLLL.LL.LLLL.LLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLL.L.LLLLLL",
    "LLLLLLLLLL.LLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLL",
    "LLLLLLLLL..LLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLL.L.LLLLL.L.LLLLL.LLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLL",
    "LLLLLLLLLLLLLLLL.LLLL.LLLLLL.LLLLLL.LLL.LLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.L.LLL.LLLLLLLL",
    "L..L.L...LL.......L...............L..L....L.LLLL...L.L..L..LL.L...L...L...L.....L...L.....LLL..",
    "LLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLL",
    "LLLLLLLLLL.LLLLL.LLLL.L.LLLL.LLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL",
    "LLLLLLLLLL.LLLLL.LLLL.LLLLLL.LLLLLL.LLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLL",
    "LLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLL.LL.LLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.L.LL.LLL",
    "L.LLLLLLLLLLLLLLLLLLL.LL.LLL.LLLLLL.LLLLLLLL.LLLLLLL.LLLLLLL.LLLL.LLLL.L.LLLLLLLLLLLLL.LLLLLLLL",
    "LLLLLLLLLL.LLLLL..LLLLLLLL.L.LLLLLL.LLLLLLLL.LLLLLLLLLLLLL...LLLLLLLLL.LLLLLLLLL..LLLLLLLLLLLLL",
    "LLLLLLLLLL.LLLLLLLLLL.LLLLLL.LLLLLL.LLLLLL.LLLLLLLLL.L.LLLLLLLLLLLLLLL.LL.LLLLLL.LLLLL.LLLLLLLL",
    "LLLLLLLLLL.LL.LL.LLLLLLLLLLL.LLLLLL.LLLL.LLLLLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLL",
    "..L.L....L.L......L..L.....L..L.LLLLL..L...............LLL.LLL.....L.L..L...L.LL.....L...L.....",
    ".LLL.LLL.LLLLLLL.LLLL.LLLLLL.LL.LLL.LLLLLLLLLLLLLLLL.LL.LLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
    "LLLLLLLLLL..LLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLL.LLLLLLLLLLLL.LL.LLLLLLLLLLLLLLLLL.L.LLLLL.LLLLLLLL",
    "LLLLLLLLLL.LLLLL.LLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLL",
    "LLLLLLLLLL..LLLL.LLLL.LLLLLL.LLL.LL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLL..LLLLLLL",
    "LLLLLLLLLL.LLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLL",
    "LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLL..LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLL",
    "....LLL........L......L.LL.......LL.LL.LL.L.L..LL.L.....L.LLL.....L........LL......L..L.......L",
    "LLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LL.LLLL.LLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLL.L",
    "LLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLL",
    "LLLLLLLLLL.LLLLL.LLLL.L.LLLL.LLL.LL.LLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLL..LLLLLLL",
    "LLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLL..LLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLL",
    "...............L.L...L...L....L..L..L......L.......L..L......LL.LL.LL.L.......L....L......L...L",
    "LLLLL.LLLL.LLLLL.LLLLLLLLLLL.LLLLLL.LLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLL",
    "LLLLLLLLLLLLLLLL.L.LL.LL.LLL.LLLLLL.LLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLL.LLLL",
    "LLLLLLLLLLLLLLLL.LLLLLLLLLLL.LLLLLL.LLLLLL.L.LLLLLLLLLLLLLLL.LLLLLLLL..LLLLLLLLL.LLLLLLLLLLLLLL",
    "LLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLL",
    "LLLLL.LLLLLLLLLL.LL.LLLLLLLLLLLLLLL.LLL.LLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLL",
    "....LLL...LL.L....LL.L..L..L.........L.L...L.LLL..L...L..L..L.......L..L.LL.L..LL....LL.L..LLLL",
    "LLLLLLLLLL.LLLLL.LLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LL.LL.LLLLLLLL",
    "LLLLLLLLLL.LLLLLLLLLL.LLLLLL.LLL.LLLLLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.L.LLLLLL",
    "LLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLL..LLLLLLLL.LLLLLLL.LLLLLLLLLLLLLL.LL.LLLLLLLLLLLLLL.LL.LLLLLL",
    "LLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLL.LLL.LLLLL.LLLLLLLLLLLLLLL.LLLLLLLL",
    "LLLLLLLLLL.LLLLL.LLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLL.L.LLLLLLL.L.LLLLLLLLLLLLLLL.LLLLLLLL",
    ".LLLLL.LLL.LLLLL.LLLL.LL.LLLLLLLLLL.LLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLL",
    "LLLL.LLLLLLLLLLL.LLLLLLLL.L..LLLLLLLLLLLLLLL.LLLL..LLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLLLLL.LL",
    "LLLLLLLL.L.LLLLL.LLLLLLLLLLLLLLLLLL.LLLLL.LL.LLLLLLL.LLLLLLL.LLLLLLLLL.LLLL.LLLLLLLLLL.LLLLLLLL",
    "LLLLLLLLLL.LLLLL.LLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LL.LLLLLLLLLLL",
    "L......L...LL...L.L.L...LL.L...L......L......LL......LL.L.L....LL.LL.......LL...L..LLL...LL...L",
    "LLLLLLLLLLLLLLLL.LLLLLLLLLLL.LLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLLLLL.LLL..LLLLLLLLLLLLLL.LLL.LLLL",
    "LLLLLLLLLL.LLLLL.LLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLLLLL.LLLL.LLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLL",
    "LLLLLLLL.LL.LLLL.LLLL.LLLLLLLLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLL",
    "LLLLLLLLLL.L.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL..LLLLLLLLLLL.LLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLL",
    "LLLLLLLLLL.LLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL",
    "LLLLLLLLLL.LLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLL",
    "LLLLLLLLLL.LLLLL.LLLL.LLLLLL.LLLLLLLLLLLLL..LL.LLLLL.LLLLLLL.LLLLLLLLL.L.LLLLLLL.LLLLL.LLLLLLLL",
    "...L.L.L.....L........LLL.....LL.L.L.LL.....L...LL..L.LLL.....LL.L....L.L...LLL....L...LLLL...L",
    "LLLLLLLLLL.LLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLL..LLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLL",
    "LLLLLLLLLL.LLLLL.LLL..LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.L.LL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
    "LLLLLLLLL..LLLLL.LLLL..LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLL",
    "LLLLLLLLLL.LLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLLLLL.LLLLLLL.LLL.LLLLLLLLLLLLLLLLLL.LL.LLLLLLL.",
    "LLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLL",
    "LLLLLLLLLL.LLLLL.LLLLLL.LLLLLLLLLLL...LLLLLLLLLLLLLL.L.L.LLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLL",
    "LLLLLLLLLL.LLLLL.LL.LLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLL",
    ".LLLLLLLL..LLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLLLL.LLLLLL.LLLLL.LLLLL.LL",
    "LLLLLLLLLL.LLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLL.LLLL..LLL.LLLLLLLLL.LLLLLLLLLLLLLL",
    "LLLLLLLLLLLLLLLLLLL.L.LL.L.L.LLLLLL.LLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLL",
]

function advanceMatrixPart1(matr): any[]{

    let operations = []  //[[row, col, newValue]]
    for (let i = 0; i < matr.length; i++) {
        for (let j = 0; j < matr[i].length; j++) {

            let adjacents = []
            if (j-1>=0){
                adjacents.push([i, j-1])
            }
            if (j + 1 < matr[i].length){
                adjacents.push([i, j+1])
            }
            if (i-1 >= 0){
                adjacents.push([i-1, j])
                if (j-1>=0){
                    adjacents.push([i-1, j-1])
                }
                if (j + 1 < matr[i].length){
                    adjacents.push([i-1, j+1])
                }
            }
            if (i + 1 < matr.length){

                adjacents.push([i+1, j])
                if (j-1>=0){
                    adjacents.push([i+1, j-1])
                }
                if (j+1 < matr[i].length){
                    adjacents.push([i+1, j+1])
                }
            }

            let occupiedNeighbours = 0
            adjacents.forEach(adjacent => {
                if (matr[adjacent[0]][adjacent[1]] == 2){
                    occupiedNeighbours++
                }
            })

            if (matr[i][j] == 1 && occupiedNeighbours == 0){
                operations.push([i, j, 2])
            } else if (matr[i][j] == 2 && occupiedNeighbours >= 4){
                operations.push([i, j, 1])
            }
        }        
    }

    operations.forEach(operation => {
        matr[operation[0]][operation[1]] = operation[2]
    })

    return [matr, operations.length]
}

function advanceMatrixPart2(matr): any[]{

    let operations = []  //[[row, col, newValue]]
    for (let i = 0; i < matr.length; i++) {
        for (let j = 0; j < matr[i].length; j++) {

            let occupiedNeighbours = 0

            let dx = 1
            
            let unitDirections = [
                [-1, -1], //left up
                [0, -1], // left
                [1, -1], // left down
                [1, 0], // down
                [1, 1], // right down
                [0, 1], // right
                [-1, 1], // right up
                [-1, 0], // up
            ]

            unitDirections.forEach(direction => {
                let steps = 1
                while (true){
                    let newI = i + steps * direction[0]
                    let newJ = j + steps * direction[1]
                    if (newI < 0 || newJ < 0 || newI >= matr.length || newJ >= matr[i].length){
                        break;
                    }

                    if (matr[newI][newJ] == 1){
                        break;
                    }  else if (matr[newI][newJ] == 2){
                        occupiedNeighbours++
                        break;
                    }
                    steps++
                }
            })

            if (matr[i][j] == 1 && occupiedNeighbours == 0){
                operations.push([i, j, 2])
            } else if (matr[i][j] == 2 && occupiedNeighbours >= 5){
                operations.push([i, j, 1])
            }
        }        
    }

    operations.forEach(operation => {
        matr[operation[0]][operation[1]] = operation[2]
    })

    return [matr, operations.length]
}

function printMatrix(matr){
    matr.forEach(row => {
        let line = ""
        row.forEach(item => {
            if (item == 0){
                line += "."
            } else if (item == 1){
                line += "L"
            } else if (item == 2){
                line += '#'
            }
        })

        console.log(line)
    })
}

function countOccupied(matr): number{
    let occupied = 0
    matr.forEach(row => {
        row.forEach(item => {
            if (item == 2){
                occupied++
            }
        });
    });
    return occupied
}

function part1(input: string[]): number{
    let matrix = translateToMatrix(input)
    let operations = -1
    while (operations != 0){

        let advanced = advanceMatrixPart1(matrix)
        matrix = advanced[0]
        operations = advanced[1]
    }

    return countOccupied(matrix)
}

function part2(input: string[]): number{
    let matrix = translateToMatrix(input)
    let operations = -1
    while (operations != 0){
        let advanced = advanceMatrixPart2(matrix)
        matrix = advanced[0]
        operations = advanced[1]
    }

    return countOccupied(matrix)
}

console.log("part 1:", part1(input))
console.log("part 2:", part2(input))
