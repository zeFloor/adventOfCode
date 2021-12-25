function loadFile() {
    let [file] = document.querySelector('.file').files
    let reader = new FileReader

    reader.addEventListener('load', () => {
        input = reader.result.split(',')
        console.log(input)
    }, false)
    if(file) {
        reader.readAsText(file)
    }
}
let input = []
let lanternfishes = []

function addingLanternfishes(arr) {
    for(let i = 0; i < arr.length; i++) {
        lanternfishes.push(new Lanternfish(arr[i]))
    }
}

class Lanternfish {
    constructor(timer) {
        this.timer = timer
    }

    passingDay() {
        if(this.timer > 0) {
            this.timer--
        } else if (this.timer === 0) {
            this.timer = 6
        }
    }

    multiplying() {
        if(this.timer == 0)
        lanternfishes.push(new Lanternfish(8))
    }
}