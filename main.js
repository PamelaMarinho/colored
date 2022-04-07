let listColor = []


/************ setta cor default ******************/

async function defaultColor(){

    const inputColor = document.getElementById(`cor1`).value 
    listColor.splice(0,1,inputColor)    
    document.getElementById('put1').value = inputColor
    
    const inputColor2 = document.getElementById(`cor2`).value 
    listColor.splice(1,1,inputColor)
    document.getElementById(`put2`).value = inputColor2

    changeColor(1)
    await changeColor(2)
}
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

function changeColor(id){
    let inputColor = document.getElementById(`cor${id}`).value;
    listColor.splice(id-1,1,inputColor)
    document.getElementById(`put${id}`).value = inputColor  
    changeBg()  
}

/************ altera background *****   *************/

function changeBg(){
     
 document.getElementById('gradient').addEventListener('change',function(){
    let select = document.getElementById('gradient').selectedIndex;
    var value = document.getElementById('gradient').options;
    var item = document.getElementById('gradient').classList.item(0)
    document.getElementById('gradient').classList.replace(item,value[select].text)
 console.log(document.getElementById('gradient'))
})

  console.log(document.getElementById('gradient').value )
    const bg = document.getElementById('background')    

    if(document.getElementById('gradient').value == 'LINEAR'){
 console.log(document.getElementById('gradient'))

        bg.style.background=`${'linear'}-gradient(to right,${[...listColor]})`
    }else{
         bg.style.background= `${'radial'}-gradient(${[...listColor]})`
    }

}
 
function closeBox(){
    const box = document.getElementsByClassName('boxColor-display')
        box[0].setAttribute('class','boxColor')
}


/************ fecha box color*****   *************/

function closeBox(id){
    //console.log(listColor)
    let codeColor = document.querySelector(`#put${id}`)
    listColor.splice(id-1,1)
    //console.log(listColor)
    document.getElementById(`put${id}`).value = "#000000"
    document.getElementById(`cor${id}`).value = "#000000"
    /* console.log(codeColor.value) */
    let box = document.querySelector(`#b${id}`)
    box.className='boxColor'
    changeBg()
}


