function chainCorrect(input: number[]): boolean{
    let joltage = 0

    for (let i = 0; i < input.length; i++) {
        const adapter = input[i];

        if (adapter == undefined){
            continue
        }
        if (adapter - joltage > 3) {
            return false
        }
        joltage = adapter
    }
    return true
}

function findDifferences(input: number[]): number[]{
    let sorted = input.sort(function(a, b){return a-b})

    let joltage = 0

    let diff1 = 0
    let diff2 = 0
    let diff3 = 0

    sorted.forEach(adapter => {
        if (adapter - joltage == 1){
            diff1++
        } else if(adapter - joltage == 2){
            diff2++
        } else if(adapter - joltage == 3){
            diff3++
        }
        joltage = adapter
    })

    joltage += 3
    diff3++

    return[diff1, diff2, diff3]
}


function part1(input: number[]){
    let differences = findDifferences(input)
    return differences[0] * differences[2]
}

function part2(input: number[]){
    input.push(0)
    let sorted = input.sort(function(a, b){return a-b})

    
    let total = []
    let temp = []
    for (let i = 0; i < sorted.length - 2; i++) {

        const current = sorted[i]
        const nextnext = sorted[i+2]

        if (nextnext - current <= 3){
            //next can be removed
            temp.push(i+1)
        } else{
            //next cannot be removed
            if (temp.length != 0){
                total.push(temp)
                temp = []
            }
        }
    }
    if (temp.length != 0){
        total.push(temp)
        temp = []
    }

    let counts = []
    total.forEach(group => {
        let count = 1  //this is for the empty list
        let combinations = getCombinationsUptoLength(group)
        
        combinations.forEach(combination => {
            // console.log("combination", combination)
            let clonedSorted = [...sorted]
            combination.forEach(index => {
                delete clonedSorted[index]
            })
            if (chainCorrect(clonedSorted)){
                count++
            }
        })

        counts.push(count)
    })

    let returnTotal = 1
    counts.forEach(count => {
        returnTotal *= count
    })

    return returnTotal
}


var example: number[];
example =[
    16,
    10,
    15,
    5,
    1,
    11,
    7,
    19,
    6,
    12,
    4,
] 

var example2: number[];
example2 = [
    28,
    33,
    18,
    42,
    31,
    14,
    46,
    20,
    48,
    47,
    24,
    23,
    49,
    45,
    19,
    38,
    39,
    11,
    1,
    32,
    25,
    35,
    8,
    17,
    7,
    9,
    4,
    2,
    34,
    10,
    3,
]

var input: number[];
input = [
    47,
    61,
    131,
    15,
    98,
    123,
    32,
    6,
    137,
    111,
    25,
    28,
    107,
    20,
    99,
    36,
    2,
    97,
    88,
    124,
    138,
    75,
    112,
    52,
    122,
    78,
    46,
    110,
    41,
    64,
    63,
    16,
    93,
    104,
    105,
    91,
    27,
    45,
    119,
    14,
    1,
    65,
    62,
    118,
    37,
    79,
    77,
    19,
    71,
    35,
    130,
    69,
    5,
    44,
    9,
    48,
    125,
    136,
    103,
    140,
    53,
    126,
    106,
    55,
    129,
    139,
    87,
    68,
    21,
    85,
    76,
    31,
    113,
    12,
    100,
    24,
    96,
    82,
    13,
    70,
    72,
    86,
    26,
    117,
    58,
    132,
    114,
    40,
    54,
    133,
    51,
    92,
]


function getCombinationPerLength(lst, length): number[][] {
    //getCombinationPerLength([1,2,3], 2)
    //[[1,2], [1,3], [2,3]]

    let combinations = []
    if (length == 1){
        lst.forEach(item => {
            combinations.push([item])
        })
    } else {
        for (let i = 0; i < lst.length; i++) {
            let combinationsLength = getCombinationPerLength(lst.slice(i+1, lst.length), length - 1)
            combinationsLength.forEach(c => {
                c.push(lst[i])
                combinations.push(c)

            })
        }
    }
    return combinations
}

function getCombinationsUptoLength(lst): number[][]{
    //getCombinationsUptoLength([1,2,3])
    //[[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]

    let combinations = [] //include empty
    for (let i = 1; i <= lst.length; i++) {
        let combinationsOneLength = getCombinationPerLength(lst, i)
        combinations = combinations.concat(combinationsOneLength)
    }

    return combinations
}

console.log("part 1:", part1(input))
console.log("part 2:", part2(input))
