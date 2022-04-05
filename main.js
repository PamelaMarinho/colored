function colorBox(){
        const box = document.getElementsByClassName('boxColor')
        box[0].setAttribute('class','boxColor-display')
}



function getColor(){
        const inputColor = document.getElementById('cor').value 
        document.getElementById('put').value = inputColor


}