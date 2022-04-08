let listColor = []

/************ setta cor default ******************/

async function defaultColor(){

    const inputColor = document.getElementById(`cor1`).value 
    listColor.splice(0,1,inputColor)    
    document.getElementById('putcor1').value = inputColor
    
    const inputColor2 = document.getElementById(`cor2`).value 
    listColor.splice(1,1,inputColor)
    document.getElementById(`putcor2`).value = inputColor2

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
        let mainbox = document.getElementById('mainbox')
        let box = document.getElementById('0')
        let clone = box.cloneNode(true)
        clone.setAttribute('class', 'boxColor-display box')
        mainbox.appendChild(clone)
        changeId()
}

function changeId(){
        let box = document.getElementsByClassName('box')
        let id = box[box.length-2].id
        let index = Number(id)+1
        let newChild = box[box.length-1]
        newChild.setAttribute('id', index)
        let idCloseBt = newChild.firstElementChild.setAttribute('id',index)
        let idInputColor = newChild.lastElementChild
                               .lastElementChild.setAttribute('id',(`cor${index}`))
        let idInputtext = newChild.lastElementChild
                               .firstElementChild.setAttribute('id',(`putcor${index}`))
} 

function changeColor(id){
        let inputColor = document.getElementById(`cor${id}`).value;
        listColor.splice(id-1,1,inputColor)
        document.getElementById(`putcor${id}`).value = inputColor
        changeBg()  
}

/************ altera background ******************/

function getGradient(){

        
     let gradient = function gradient(){
        let select = document.getElementById('gradient').selectedIndex;
        let value = document.getElementById('gradient').options;
        let item = document.getElementById('gradient').classList.item(0)
        document.getElementById('gradient').classList.replace(item,value[select].text)
        return value[select].text;
        //console.log(select,value, item)
    }

    //document.getElementById('gradient').addEventListener('change',  gradient)
    let a = gradient
    return a;
}


function changeBg(){

    const bg = document.getElementById('background')    

    if(document.getElementById('gradient').value == 'LINEAR'){
        bg.style.background=`${'linear'}-gradient(to right,${[...listColor]})`
    }else{
         bg.style.background= `${'radial'}-gradient(${[...listColor]})`
    }
}


 
/************ fecha box color *****************/

function closeBox(id){

    document.getElementById(id).remove()
    let box = document.getElementsByClassName('main_box')
}

/* function closeBox(id){
    let codeColor = document.querySelector(`#put${id}`)
    listColor.splice(id-1,1)
    document.getElementById(`put${id}`).value = "#000000"
    document.getElementById(`cor${id}`).value = "#000000"
    changeBg()
}

let listBox = document.getElementsByClassName('boxColor')

function changePosition(id){
  let boxes = document.getElementById('b')

} */