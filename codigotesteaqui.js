/************ fecha box color *****************/f
unction closeBox(id){
    //console.log(listColor)
    let codeColor = document.querySelector(`#put${id}`)
    listColor.splice(id-1,1)
    //console.log(listColor)
    document.getElementById(`put${id}`).value = "#000000"
    document.getElementById(`cor${id}`).value = "#000000"
    /* console.log(codeColor.value) */

    changeBg()

    listColor.addEventListener('change',()=>{
      //console.log(listColor)
    })

}

let listBox = document.getElementsByClassName('boxColor')

function changePosition(id){
  let boxes = document.getElementById('b')

}




/************ altera background ******************/

function changeBg(){
     
    document.getElementById('gradient').addEventListener('change',function(){
       let select = document.getElementById('gradient').selectedIndex;
       var value = document.getElementById('gradient').options;
       var item = document.getElementById('gradient').classList.item(0)
       document.getElementById('gradient').classList.replace(item,value[select].text)
   // console.log(document.getElementById('gradient'))
   })
   
    // console.log(document.getElementById('gradient').value )
       const bg = document.getElementById('background')    
   
       if(document.getElementById('gradient').value == 'LINEAR'){
    //console.log(document.getElementById('gradient'))
   
           bg.style.background=`${'linear'}-gradient(to right,${[...listColor]})`
       }else{
            bg.style.background= `${'radial'}-gradient(${[...listColor]})`
       }
   }
    
   function closeBox(){
       const box = document.getElementsByClassName('boxColor-display')
           box[0].setAttribute('class','boxColor')
   }





   /************ display do box principal ******************/

document.getElementById("fecha").addEventListener("mouseover", function() {
    document.getElementById("container").style.display = "none";
  });



document.getElementById("fecha").addEventListener("mouseout", function() {
    document.getElementById("container").style.display = "flex";
  });



  <!--                 <div class="boxColor" id="b">