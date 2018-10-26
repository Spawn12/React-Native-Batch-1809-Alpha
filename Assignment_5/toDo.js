
var actions={
    arrValues:[],
    addIteam:function(){
        let values=document.getElementById('input').value
        if(this.arrValues.includes(values)!==true && values !==""){
            this.arrValues.push(values)
            this.showIteam(values)
        }else{alert("This value is already added to list")}
        console.log(this.arrValues);
    },

    removeIteam:function(){
        targetLiElement=this.parentNode.parentNode
        targetLiElement.parentNode.removeChild(targetLiElement)
        console.log(this.arrValues)
        // x.style.display='none'
    },
    
    resetIteam:function(){
        liTag=document.getElementsByTagName('LI')
        for (let i=0 ; i<liTag.length ; i++){
            liTag[i].style.display="none"
            // liTag.parentNode.removeChild(liTag)
            
        }
        this.arrValues=[]
    },
    showIteam:function(singleValue){
        //Creating li element and creating text node
        var liElement=document.createElement('LI')
        var textElement=document.createTextNode(singleValue)

        //Creating p element and inserting textnode in it
        var paraElement=document.createElement('P')
        paraElement.appendChild(textElement)

        //inserting p elemnt in li element
        liElement.appendChild(paraElement)
        
        //Assigning attribues to li element 
        liElement.setAttribute('id','list')

        //Creating span element and button element , styling span element
        var spanElement=document.createElement('SPAN')
        // spanElement.style="padding-left:5%"
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
