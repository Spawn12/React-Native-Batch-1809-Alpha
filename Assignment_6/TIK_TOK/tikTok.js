var actions={
    turn:'O',
    win:false,
    playerNames:false,
    scoreX:0,
    scoreO:0,
    playGameView:function(){
        UsernameX=document.getElementById('UsernameX').value
        UsernameO=document.getElementById('UsernameO').value
        if( UsernameX !=="" && UsernameO !==""){
            document.querySelector('.playersName').style.display="none"
            document.body.style.backgroundColor="transparent";
            document.querySelector('.palyingField').style.display='block';
            this.playerNames=true;
        }else{return false}
        this.settingName()
    },

    settingName:function(){
        if(this.playerNames==true){
            document.getElementById("playerNameX").textContent=UsernameX+" (X)"
            document.getElementById("playerNameO").textContent=UsernameO+" (O)"
        }
    },
    
    settingScore:function(){
        document.getElementById('scoreX').textContent=this.scoreX
        document.getElementById('scoreO').textContent=this.scoreO
    },
    
    write:function(clickedId){
        tdElement=document.getElementById(clickedId)
        statusH2Element=document.getElementById('status')
        if(tdElement.innerHTML=='' && this.win==false){
            if(this.turn=='X'){
                statusH2Element.textContent="X Turn"
                tdElement.innerHTML="O"
                this.turn="O"
            }else{
                statusH2Element.textContent="O Turn"
                tdElement.innerHTML="X"
                this.turn="X"
            }     
        }else{
            console.log('Y this ');
            
            return false
        }
        this.winingAlgo()
    },
    
    winingAlgo:function(){
        text=""
        let box1=document.getElementById('td1'),
        box2=document.getElementById('td2'),
        box3=document.getElementById('td3'),
        box4=document.getElementById('td4'),
        box5=document.getElementById('td5'),
        box6=document.getElementById('td6'),
        box7=document.getElementById('td7'),
        box8=document.getElementById('td8'),
        box9=document.getElementById('td9');


        if(box1.textContent ==="X" && box2.textContent==="X" && box3.textContent==="X"){
            this.winnerBoxes(box1,box2,box3)
        } else if(box4.textContent ==="X" && box5.textContent==="X" && box6.textContent==="X") {
            this.winnerBoxes(box4,box5,box6)
        }
        else if(box7.textContent ==="X" && box8.textContent==="X" && box9.textContent==="X") {
            this.winnerBoxes(box7,box8,box9)
        }
        else if(box1.textContent ==="X" && box4.textContent==="X" && box7.textContent==="X") {
            this.winnerBoxes(box1,box4,box7)
        }
        else if (box2.textContent ==="X" && box5.textContent==="X" && box8.textContent==="X") {
            this.winnerBoxes(box2,box5,box8)
        }
        else if(box3.textContent ==="X" && box6.textContent==="X" && box9.textContent==="X") {
            this.winnerBoxes(box3,box6,box9)
        }
        else if(box1.textContent ==="X" && box5.textContent==="X" && box9.textContent==="X") {
            this.winnerBoxes(box1,box5,box9)
        }else if(box3.textContent ==="X" && box5.textContent==="X" && box7.textContent==="X") {
            this.winnerBoxes(box3,box5,box7)
        }
        
        else if(box1.textContent ==="O" && box2.textContent==="O" && box3.textContent==="O"){
            this.winnerBoxes(box1,box2,box3)
        } else if(box4.textContent ==="O" && box5.textContent==="O" && box6.textContent==="O") {
            this.winnerBoxes(box4,box5,box6)
        }
        else if(box7.textContent ==="O" && box8.textContent==="O" && box9.textContent==="O") {
            this.winnerBoxes(box7,box8,box9)
        }
        else if(box1.textContent ==="O" && box4.textContent==="O" && box7.textContent==="O") {
            this.winnerBoxes(Obox1,box4,box7)  
        }
        else if (box2.textContent ==="O" && box5.textContent==="O" && box8.textContent==="O") {
            this.winnerBoxes(box2,box5,box8)       
        }
        else if(box3.textContent ==="O" && box6.textContent==="O" && box9.textContent==="O") {
            this.winnerBoxes(box3,box6,box9)      
        }
        else if(box1.textContent ==="O" && box5.textContent==="O" && box9.textContent==="O") {
            this.winnerBoxes(box1,box5,box9)    
        }
        else if(box3.textContent ==="O" && box5.textContent==="O" && box7.textContent==="O") {
            this.winnerBoxes(box3,box5,box7)   
        } 
        else if((box1.textContent !=="" && box2.textContent!=="" && box3.textContent!=="") &&
        (box4.textContent !=="" && box5.textContent!=="" && box6.textContent!=="") &&
        (box7.textContent!=="" && box8.textContent!=="" && box9.textContent!=="") &&
        (box1.textContent !=="" && box4.textContent!=="" && box7.textContent!=="") &&
        (box2.textContent !=="" && box5.textContent!=="" && box8.textContent!=="")&&
        (box3.textContent !=="" && box6.textContent!=="" && box9.textContent!=="") &&
        (box1.textContent !=="" && box5.textContent!=="" && box9.textContent!=="") &&
        (box3.textContent !=="" && box5.textContent!=="" && box7.textContent!=="") ){ 
            statusH2Element.textContent='Match is Draw'
        }
        return true
            
    },
    
    winnerBoxes:function(b1,b2,b3){
        this.win=true
        if(b1.textContent==='X'){ color='green' ; statusH2Element.textContent='Congrats X won the match';this.scoreX++}
        else{ color='red' ; statusH2Element.textContent='Congrats O won the match'; this.scoreO++}
        b1.style.color=color,
        b2.style.color=color,
        b3.style.color=color   
        statusH2Element.style.color=color; 
        this.settingScore()
    },

    restartMatch:function(){
       this.win=false;
       this.turn='O'
       tdElement=document.getElementsByTagName('TD')
       statusH2Element.textContent='X Turn'
       statusH2Element.style.removeProperty('color')
       for(let i=0; i<=tdElement.length; i++){
                tdElement[i].innerText='';
                tdElement[i].style.removeProperty('color');
        }  
    }
}

