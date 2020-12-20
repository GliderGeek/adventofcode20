//! part2 is not yet done

function part1(startingNumbers: number[]): number{
    let numbers = {}
    for (let i = 0; i < startingNumbers.length - 1; i++) {
        const element = startingNumbers[i];
        numbers[element] = i+1
    }


    let lastNumber = startingNumbers[startingNumbers.length - 1]
    console.log(numbers, lastNumber)
    
    let newNumber = 0
    let turn = 0
    for (turn = startingNumbers.length+1; turn < 2021; turn++){
    
        if (lastNumber in numbers){
            newNumber = turn - numbers[lastNumber] - 1
        } else {
            newNumber = 0
        }
    
        // console.log(turn, numbers, newNumber)
    
        numbers[lastNumber] = turn-1
        lastNumber = newNumber
    }
    
    return newNumber
}

function part2(startingNumbers: number[]): number{
    let numbers = {}
    for (let i = 0; i < startingNumbers.length - 1; i++) {
        const element = startingNumbers[i];
        numbers[element] = i+1
    }


    let lastNumber = startingNumbers[startingNumbers.length - 1]
    console.log(numbers, lastNumber)
    
    let newNumber = 0
    let turn = 0
    for (turn = startingNumbers.length+1; turn < 50; turn++){
    
        if (lastNumber in numbers){
            newNumber = turn - numbers[lastNumber] - 1
        } else {
            newNumber = 0
        }
    
        console.log(turn, newNumber)

        numbers[lastNumber] = turn-1
        lastNumber = newNumber
    }
    
    return newNumber
}


// console.log("part 1:", part1([3,1,2]))
console.log("part 1:", part1([2,0,1,9,5,19]))

// console.log("part 2:", part2([3,2,1]))
