function partOne() {
    let [file] = document.querySelector(".part1").files
    let reader = new FileReader()

    reader.addEventListener('load', () => {
        console.log("files loaded")
    },false)   
}