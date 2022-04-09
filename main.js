let listColor = []

function gradDefault(){
    document.getElementById('background').style.background=`linear-gradient(135deg,${[...listColor]})`
}

/************ setta cor default ******************/

function defaultColor(id,value){

    let idIndex = [...id][3]
    listColor.splice(idIndex-1,1,value)    
    document.getElementById(`put${id}`).value = value
    document.getElementById(id).value = value
    changeBg()
}

/************ display do box principal ******************/

document.getElementById("fecha").addEventListener("mouseover", function() {
    document.getElementById("container").style.display = "none";
  });

document.getElementById("fecha").addEventListener("mouseout", function() {
    document.getElementById("container").style.display = "flex";
  });

/************** copia código ***************/

function copy(){

    let style = document.getElementById('background').style.background
    document.getElementById('copy').value=`${style}`
    let text = document.getElementById('copy')
    text.select()
    text.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(text.value)

}

/************ display do novo box de cores ******************/

function createBox(){

        let boxGroup = document.getElementsByClassName('box')
        if(boxGroup.length <= 4){
            let mainbox = document.getElementById('mainbox')
            let box = document.getElementById('0')
            let clone = box.cloneNode(true)                                     
            clone.setAttribute('class', 'boxColor-display box')
            mainbox.appendChild(clone)
            createId()
            gradient()
        }

}

/************ altera ID do novo box de cores ******************/

function createId(){

        let box = document.getElementsByClassName('box')
        let index = Number(box.length)
        let clone = box[box.length-1]
        clone.setAttribute('id', index)
        clone.firstElementChild.setAttribute('id',index)
        clone.lastElementChild.lastElementChild.setAttribute('id',(`cor${index}`))
        clone.lastElementChild.firstElementChild.setAttribute('id',(`putcor${index}`))   
        defaultColor(`cor${index}`,'#ffffff')

} 

/************ muda ID dos boxes remanescentes *****************/

function changeId(id){

    let box = document.getElementsByClassName('box')
    for(i in box){
      if (box[i].id>id){
        let index = box[i].id -1
        box[i].setAttribute('id', index)
        box[i].firstElementChild.setAttribute('id',index)
        box[i].lastElementChild.lastElementChild.setAttribute('id',(`cor${index}`))
        box[i].lastElementChild.firstElementChild.setAttribute('id',(`putcor${index}`)) 
      }
    }

}

/************ fecha box color *****************/

function closeBox(id){

    let codeColor = document.getElementById(`putcor${id}`).value
    let index = listColor.indexOf(codeColor)
    listColor.splice(index,1)
    document.getElementById(id).remove()
    changeId(id)
    changeBg()

 }

/************ altera cor do box de cores ******************/

function changeColor(id){  

        let idNumber = [...id][3]
        let inputColor = document.getElementById(id).value
        listColor[idNumber-1]= inputColor
        document.getElementById(`put${id}`).value = inputColor
        changeBg() 
}

/************ altera background ******************/

let gradient = function(){

        let select = document.getElementById('gradient').selectedIndex;
        let value = document.getElementById('gradient').options;
        if (value[select].text == 'LINEAR'){
            document.getElementById('background').classList = 'background-linear'
        }else{
            document.getElementById('background').classList = 'background-radial'
        }
        changeBg()

}

document.getElementById('gradient').addEventListener('change', gradient)

function changeBg(){

    const bg = document.getElementById('background')  
    if(document.getElementById('background').classList.value == 'background-linear'){
        bg.style.background=`linear-gradient(135deg,${[...listColor]})`
    }else{
         bg.style.background= `radial-gradient(${[...listColor]})`
    }

}