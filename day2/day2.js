function fileView() {
    let [file] = document.querySelector('input[type=file]').files
    let reader = new FileReader()

    reader.addEventListener('load', () => {
        let coords = reader.result.split('\n')
        let forward = 0
        let depth = 0
        let aim = 0
       for(var i = 0; i < coords.length; i++){
            var splcoord = coords[i].split(' ')            
/*Part1 START             if(splcoord[0][0] == 'f'){
                forward+= parseInt(splcoord[1])
            } else {
                if(splcoord[0][0] == 'd') {
                    depth+= parseInt(splcoord[1])
                } else {
                    depth-= parseInt(splcoord[1])
                }
            }      Part1 END*/
            if(splcoord[0][0] == 'f'){
                forward+= parseInt(splcoord[1])
                depth+= (aim*parseInt(splcoord[1])) 
            } else {
                if(splcoord[0][0] == 'd') {
                    aim+= parseInt(splcoord[1])
                } else {
                    aim-= parseInt(splcoord[1])
                }
            }
        }


        console.log(forward * depth)

    }, false)
    if(file) {
        reader.readAsText(file)
    }
}