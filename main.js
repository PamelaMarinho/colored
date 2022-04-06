let listColor = []

function colorBox(){
        const box = document.getElementsByClassName('boxColor')
        box[0].setAttribute('class','boxColor-display')
}

function getId(id){
    getColor(id)
}

function changeColor(color){
    alert('jhkj')
    console.log('cor',color)
}

function getColor(id){
        const inputColor = document.getElementById(`cor${id}`).value 
        document.getElementById(`put${id}`).value = inputColor
        listColor.push(inputColor)
        changeBg()
}

function changeBg(){
    const colors = docum.getElementsByClassName('boxColor-display')
    const bg = document.getElementById('background')
    //console.log([...listColor])
    bg.style.background= `${'linear'}-gradient(to right,${[...listColor]})`
}

function a(){
    console.log(listColor)
}

a()

function closeBox(){
    const box = document.getElementsByClassName('boxColor-display')
        box[0].setAttribute('class','boxColor')
}

document.getElementById("fecha").addEventListener("mouseover", function() {
    document.getElementById("container").style.display = "none";
  });


document.getElementById("fecha").addEventListener("mouseout", function() {
    document.getElementById("container").style.display = "flex";
  });








