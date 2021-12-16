//------------------ Part One ------------------------------

function partOne() {
    let [file] = document.querySelector('.part1').files
    let reader = new FileReader()

    reader.addEventListener('load', () => {
        let diagnosis = reader.result.split('\n')
        let mostComm = []
        let leastComm = []
        let gammaRate = 0
        let epsilonRate = 0
        for(var i = 0; i < diagnosis[0].length; i++) {
            var ones = 0
            var zeroes = 0
            for(var j = 0; j < diagnosis.length; j++) {
                if(diagnosis[j][i] == 1) {
                    ones++
                } else {
                    zeroes++
                }
            }
            if(ones >= zeroes) {
                mostComm.push(1) 
                leastComm.push(0)
            } else {
                mostComm.push(0)
                leastComm.push(1)
            }
        }
        console.log(mostComm, leastComm)
        mostComm.reverse()
        leastComm.reverse()
        for(var i = 0; i < mostComm.length; i++) {
            gammaRate+= mostComm[i] * (2**i)
            epsilonRate+= leastComm[i] * (2**i)
        }
        console.log(gammaRate * epsilonRate)

    }, false)
    if(file) {
        reader.readAsText(file)
    }
}

//------------------ Part Two ------------------------------

function partTwo() {
    let [file] = document.querySelector('.part2').files
    let reader = new FileReader()

    reader.addEventListener('load', () => {
        let diagnosis = reader.result.split('\n')
        let diagnosis2 = diagnosis.slice()
        const diagnosisLength = diagnosis[0].length
        //--------------------------- OXYGEN --------------------------
        for(var i = 0; i < diagnosisLength; i++) {
            removeItemAll(diagnosis, 3)
            if(diagnosis2.length < 2) {
                break
            }
            let ones = 0
            let zeroes = 0
            for(var j = 0; j < diagnosis.length; j++) {
                if(diagnosis[j][i] == 1) {
                    ones++
                } else {
                    zeroes++
                }
            }
            if(ones >= zeroes) {
                let length = diagnosis.length
                for(var k = 0; k < length; k++) {
                    if(diagnosis[k][i] == 0) {
                        diagnosis[k] = 3
                    }
                }
            } else {
                for(var k = 0; k < diagnosis.length; k++) {
                    if(diagnosis[k][i] == 1) {
                        diagnosis[k] = 3
                    }
                }
            }
            }
            console.log(diagnosis)
            //----------------------- CO2 --------------------------- 
            for(var i = 0; i < diagnosisLength; i++) { 
                removeItemAll(diagnosis2, 3)
                if(diagnosis2.length < 2) {
                    break
                }
                let ones2 = 0
                let zeroes2 = 0
                for(var j = 0; j < diagnosis2.length; j++) {
                    if(diagnosis2[j][i] == 1) {
                        ones2++
                    } else {
                        zeroes2++
                    }
                }
                if(zeroes2 <= ones2) {
                    for(var k = 0; k < diagnosis2.length; k++) {
                        if(diagnosis2[k][i] == 1) {
                            diagnosis2[k] = 3
                        }
                    }
                } else {
                    for(var k = 0; k < diagnosis2.length; k++) {
                        if(diagnosis2[k][i] == 0) {
                            diagnosis2[k] = 3
                        }
                    }
                }
                }
                console.log(diagnosis2)

                function removeItemAll(arr, value) {
                    var i = 0;
                    while (i < arr.length) {
                      if (arr[i] === value) {
                        arr.splice(i, 1);
                      } else {
                        ++i;
                      }
                    }
                    return arr;
                }

                var oxygen = 0
                var co2 = 0
                ox = diagnosis[0]
                co = diagnosis2[0]
                ox = reverseString(ox)
                co = reverseString(co)
                console.log(ox, co)
                for(var i = 0; i < ox.length; i++) {
                    oxygen+= ox[i] * (2**i)
                    co2+= co[i] * (2**i)
                }
                console.log(oxygen + ' * ' + co2 + ' = ' + oxygen * co2 )

                function reverseString(str) {
                    return str.split("").reverse().join("");
                }
                  

    }, false)
    if(file) {
        reader.readAsText(file)
    }
}
