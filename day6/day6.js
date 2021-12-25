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