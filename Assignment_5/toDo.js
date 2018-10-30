let arrValues=[]
var actions={
    pId:0,
    addIteam:function(){
        let values=document.getElementById('input').value
        if(arrValues.includes(values)!==true && values !=="" ){
            arrValues.push(values)
            this.showIteam(values)
            this.pId++
        }else{alert('This element is alreay added')}
    },

    removeIteam:function(){
        /******** removing Element from DOM **********/
        targetLiElement=this.parentNode.parentNode
        targetLiElement.remove()                        //OR targetLiElement.parentNode.removeChild(targetLiElement)

        /******** removing Element from Array **********/
        indexValue=arrValues.indexOf(targetLiElement.textContent)
        arrValues.splice(indexValue)
    },
    
    resetIteam:function(){
        var ulId = document.getElementById("iteamList");
        var list=document.getElementsByTagName('LI')       //OR 
        while(ulId.hasChildNodes()){                     // for (let i=0 ; i<list.length ; i++){
            list[0].remove()                                 //     list[i].style.display='none'
            arrValues=[]                                // }
        }                                               // arrValues=[] 
    },

    showIteam:function(singleValue){
        // this.pId++
        //Creating li element and creating text node
        var liElement=document.createElement('LI')
        var textElement=document.createTextNode(singleValue)

        //Creating p element and inserting textnode in it
        var paraElement=document.createElement('P')
        paraElement.appendChild(textElement)

        //Assigning attribues to p element
        paraElement.setAttribute('id',this.pId)

        //Cearting onclick function for delete line on text
        paraElement.onclick=function(){
            delElement=document.createElement('DEL')
            delElement.appendChild(textElement)
            paraElement.appendChild(delElement) 
        }

        //inserting p elemnt in li element
        liElement.appendChild(paraElement)
        
        //Assigning attribues to li element 
        liElement.setAttribute('id','list')

        //Creating span element and button element 
        var spanElement=document.createElement('SPAN')
        var btnElement=document.createElement('INPUT')

        //Assigning d/f attribute of button
        btnElement.setAttribute('type','button')
        btnElement.setAttribute('value','Delete')
        btnElement.setAttribute('class','delButton')

        //Add onclick event on button
        btnElement.onclick=this.removeIteam

        // Adding buton element to span Element
        spanElement.appendChild(btnElement)

        //Adding span elemet to list element
        liElement.appendChild(spanElement)

        //Adding list element by calling id of ul in html
        document.getElementById('iteamList').appendChild(liElement) 
    },
    
}
