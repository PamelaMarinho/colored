let listColor = []

function colorBox(){
        const box = document.getElementsByClassName('boxColor')
        box[0].setAttribute('class','boxColor-display')
}

function getId(id){
    getColor(id)
}

function getColor(id){
        const inputColor = document.getElementById(`cor${id}`).value 
        console.log(inputColor)
        document.getElementById(`put${id}`).value = inputColor
        listColor.push(inputColor)
        
        changeBg()
}

function changeBg(){
    const colors = document.getElementsByClassName('boxColor-display')
    const bg = document.getElementById('background')
    console.log([...listColor])
    bg.style.background= `${'linear'}-gradient(to right,${[...listColor]})`
}

function a(){
    console.log(listColor)
}

a()
