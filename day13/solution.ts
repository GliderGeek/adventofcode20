//! part2 is not yet done

function parseInput(input: string[]) {
    let earliestTime = parseInt(input[0])

    let busses = []
    let busIndices = []

    let parts = input[1].split(",")
    for (let i = 0; i < parts.length; i++) {
        const element = parts[i];
        if (element != "x"){
            busses.push(parseInt(element))
            busIndices.push(i)
        }
    }

    return {
        "earliestTime": earliestTime,
        "busses": busses,
        "busIndices": busIndices,
    }
}

function findEarliestBus(earliest: number, busses: number[]){
    let t = 0

    let busTimes = []
    busses.forEach(bus => {
        busTimes.push(0)
    })

    let found = false
    while (!(found)){
        for (let i = 0; i < busTimes.length; i++) {
            busTimes[i] += busses[i]
            if (busTimes[i] >= earliest){
                found = true
            }
        }
    }

    let earliestBus = null
    let time = null

    for (let i = 0; i < busTimes.length; i++) {
        const busTime = busTimes[i];
        if (busTime > earliest && busTime < time || time == null && busTime > earliest){
            time = busTime
            earliestBus = busses[i]
        } 
    }

    return [earliestBus, time]
}

function part1(input): number {
    let parsed = parseInput(input)
    let earliest = parsed["earliestTime"]
    let busses = parsed["busses"]

    let result = findEarliestBus(earliest, busses)
    let earliestBus = result[0]
    let time = result[1]

    return earliestBus * (time - earliest)
}

function part2BruteForce(input){
    let parsed = parseInput(input)
    let busses = parsed["busses"]
    let busIndices = parsed["busIndices"]

    console.log(busses, busIndices)

    let busTimes = []
    busses.forEach(bus => {
        busTimes.push(0)
    })

    while (true){

        busTimes[0] += busses[0]
        for (let i = 1; i < busTimes.length; i++) {
            while (busTimes[i] - busTimes[0] < busIndices[i]) {
                busTimes[i] += busses[i]
            }
        }

        let correct = true
        for (let i = 0; i < busTimes.length; i++) {
            const busTime = busTimes[i];
            let diff = busTime - busTimes[0]

            if (diff != busIndices[i]){
                correct = false
                break
            }
        }

        if (correct){
            console.log("Found!")
            return busTimes[0]
        }
    }
}

var example: string[];
example = [
    "939",
    "7,13,x,x,59,x,31,19"
]

var example2: string[];
example2 = [
    "0",
    "17,x,13,19"
]

var example3: string[];
example3 = [
    "0",
    "67,7,59,61"
]

var example4: string[];
example4 = [
    "0",
    "67,x,7,59,61"
]

var example5: string[];
example5 = [
    "0",
    "67,7,x,59,61"
]

var example6: string[];
example6 = [
    "0",
    "1789,37,47,1889"
]

var input: string[];
input = [
    "1008169",
    "29,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,41,x,x,x,37,x,x,x,x,x,653,x,x,x,x,x,x,x,x,x,x,x,x,13,x,x,x,17,x,x,x,x,x,23,x,x,x,x,x,x,x,823,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,19",
]

console.log("part 1:", part1(input))
console.log("part 2:", part2BruteForce(input))
