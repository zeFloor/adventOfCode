function previewFile() {
  const [file] = document.querySelector('input[type=file]').files;
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // this will then display a text file
    var measurements = reader.result.split('\n')
    var larger = 0
    var smaller = 0
    var increase = 0
    for (var i = 1; i <= measurements.length; i++){
      if(measurements[i] >= measurements[i-1]){
        larger++
      } else{
        smaller++
      }
    }
    var sum = larger + smaller

    for(var j = 0; j <= measurements.length - 3; j++){
      var x = parseInt(measurements[j]) + parseInt(measurements[j+1]) + parseInt(measurements[j+2])
      var y = parseInt(measurements[j+1]) + parseInt(measurements[j+2]) + parseInt(measurements[j+3])
      if(x < y){
          increase++
        }
    }
    console.log(larger, smaller, sum)
    console.log(increase)
  }, false);

  if (file) {
    reader.readAsText(file);
  }
}