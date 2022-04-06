let listColor = []

/************ display do box principal ******************/

document.getElementById("fecha").addEventListener("mouseover", function() {
    document.getElementById("container").style.display = "none";
  });


document.getElementById("fecha").addEventListener("mouseout", function() {
    document.getElementById("container").style.display = "flex";
  });

/************ display do box de cores ******************/

function colorBox(){
        const box = document.getElementsByClassName('boxColor')
        box[0].setAttribute('class','boxColor-display')
}

function getId(id){
    getColor(id)
}

function getColor(id){
    
    const inputColor = document.getElementById(`cor${id}`).value 

    console.log('antes',listColor)
    
     listColor.splice(id-1,1,inputColor)
    //console.log(id-1,inputColor)

    document.getElementById(`put${id}`).value = inputColor
    
    changeBg()
    
    //console.log('depois',listColor)

/*     const aj =  [1,2,3,6,8,5,7]

aj.splice(id-1,1,inputColor)

console.log(aj) */
     
}


/************ altera background ******************/

function changeBg(){

    console.log('depois',listColor)

    const colors = document.getElementsByClassName('boxColor-display')
    const bg = document.getElementById('background')
   // console.log([...listColor])
    bg.style.background= `${'linear'}-gradient(to right,${[...listColor]})`
}

function a(){
  //  console.log(listColor)
}

a()

function closeBox(){
    const box = document.getElementsByClassName('boxColor-display')
        box[0].setAttribute('class','boxColor')
}







