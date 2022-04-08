let listColor = []

/************ setta cor default ******************/

async function defaultColor(){

    const inputColor = document.getElementById('cor1').value 
    listColor.splice(0,1,inputColor)    
    document.getElementById('putcor1').value = inputColor
    
    const inputColor2 = document.getElementById('cor2').value 
    listColor.splice(1,1,inputColor)
    document.getElementById(`putcor2`).value = inputColor2

    changeColor('cor1')
    await changeColor('cor2')
}

/************ display do box principal ******************/

document.getElementById("fecha").addEventListener("mouseover", function() {
    document.getElementById("container").style.display = "none";
  });

document.getElementById("fecha").addEventListener("mouseout", function() {
    document.getElementById("container").style.display = "flex";
  });

/************ display do novo box de cores ******************/

function colorBox(){
        let mainbox = document.getElementById('mainbox')
        let box = document.getElementById('0')
        let clone = box.cloneNode(true)
        clone.setAttribute('class', 'boxColor-display box')
        mainbox.appendChild(clone)
        changeId()
}

/************ altera ID do novo box de cores ******************/

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

/************ altera cor do box de cores ******************/

function changeColor(id){
        let idNumber = [...id][3]
        let inputColor = document.getElementById(id).value
        if(listColor[id-1]){
            listColor.splice(Number(idNumber)-1,0,inputColor)
        }else{
            listColor.splice(idNumber-1,1,inputColor)
        }
        document.getElementById(`put${id}`).value = inputColor
        changeBg() 
        console.log(listColor)
}

/************ altera background ******************/




let gradient = function(){

        let select = document.getElementById('gradient').selectedIndex;
        let value = document.getElementById('gradient').options;
        let item = document.getElementById('gradient').classList.item(0)

        if (value[select].text == 'RADIAL'){
            console.log('radial')
            document.getElementById('background').classList = 'background-radial'
        }else{
            console.log('linear')
            document.getElementById('background').classList = 'background-linear'
        }
    }


    document.getElementById('gradient').addEventListener('change', gradient)


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
    let box = document.getElementsByClassName('main_box')
    let codeColor = document.getElementById(`putcor${id}`).value
    let index = listColor.indexOf(codeColor)
    listColor.splice(index,1)
    console.log( codeColor,listColor )
    document.getElementById(id).remove()
    changeBg()
}

