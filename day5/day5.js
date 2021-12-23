class Input {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1
        this.x2 = x2
        this.y1 = y1
        this.y2 = y2
    }

    checkIfValid() {
        if(this.x1 === this.x2 || this.y1 === this.y2)
        return true
        else
        return false
    }

    checkDirection() {
        if(this.x1 === this.x2)
        return 'horizontal'
        else if(this.y1 === this.y2)
        return 'vertical'
    }

}


function loadFile() {
    let [file] = document.querySelector('.file').files
    let reader = new FileReader()

    reader.addEventListener('load', () => {
        let input = reader.result.split('\n').join(' ').split(' -> ').join(' ').split(' ').join(',').split(',')
        
        console.log(input)
}, false)
if(file) {
    reader.readAsText(file)
}
}
