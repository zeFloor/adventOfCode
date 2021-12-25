function loadFile() {
    let [file] = document.querySelector('.file').files
    let reader = new FileReader

    reader.addEventListener('load', () => {
        let input = reader.result
    }, false)
    if(file) {
        reader.readAsText(file)
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

    }
}