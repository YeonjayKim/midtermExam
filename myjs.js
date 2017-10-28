//-------------------------------variable-----------------
var checkmenu = 0;
var theBGLeft = 0;
var theBGTop = 0;
var theBGSize=300;
var newDivNum = 1;
var theLastestID1 = '';
var theLastestID2 = '';
var theLastestID3 = '';
var theClickedDiv = '';
//--------------------------------functions----------------
function expandMenu(){
    if(checkmenu == 0){
        document.getElementById("controls").style.bottom = "0px";
        checkmenu = 1;
    }else if(checkmenu == 1){
        document.getElementById("controls").style.bottom = "-170px";
        checkmenu = 0;
    }
    
}

function changeColor(theValue){
    if(theLastestID2 == '' && theLastestID3 == ''){
        document.getElementById("title").style.color = theValue;
        document.getElementById("description").style.color = theValue;
    }else if(theLastestID2 != '' && theLastestID3 != ''){
        document.getElementById(theLastestID2).style.color = theValue;
        document.getElementById(theLastestID3).style.color = theValue;
    }
}

function changeDescription(theValue){
    if(theLastestID3 == ''){
        document.getElementById("description").innerHTML = theValue;   
    }else if(theLastestID3 != ''){
        document.getElementById(theLastestID3).innerHTML = theValue;
    }
}

function changeTitle(theValue){
    if(theLastestID2 == ''){
        document.getElementById("title").innerHTML = theValue;
    }else if(theLastestID2 != ''){
        document.getElementById(theLastestID2).innerHTML = theValue;
    }
        
}

function changeBG(theName){
    if(theLastestID1 == ''){
        if(theName.indexOf("http") != -1){
            document.getElementById("background").style.backgroundImage= "url("+theName+")";
        }else if(theName == "horse"){
            document.getElementById("background").style.backgroundImage ="url(img/bg1.jpg)";
        }else if(theName == "night"){
            document.getElementById("background").style.backgroundImage ="url(img/bg2.jpg)";
        }else if(theName == "mountain"){
            document.getElementById("background").style.backgroundImage ="url(img/bg3.jpg)";
        }else if(theName.indexOf("epic") != -1){
            document.getElementById("background").style.backgroundImage ="url(img/bg4.jpg)";
        }else{
            alert("Wrong Input");
        }
    }else if(theLastestID1 != ''){
        if(theName.indexOf("http") != -1){
            document.getElementById(theLastestID1).style.backgroundImage= "url("+theName+")";
        }else if(theName == "horse"){
            document.getElementById(theLastestID1).style.backgroundImage ="url(img/bg1.jpg)";
        }else if(theName == "night"){
            document.getElementById(theLastestID1).style.backgroundImage ="url(img/bg2.jpg)";
        }else if(theName == "mountain"){
            document.getElementById(theLastestID1).style.backgroundImage ="url(img/bg3.jpg)";
        }else if(theName.indexOf("epic") != -1){
            document.getElementById(theLastestID1).style.backgroundImage ="url(img/bg4.jpg)";
        }else{
            alert("Wrong Input");
        }
    }
    
}

function moveBG(keyCode){
    if(keyCode == 37){
        theBGLeft = theBGLeft -10;
    }else if(keyCode == 39){
        theBGLeft = theBGLeft +10;
    }else if(keyCode == 38){
        theBGTop = theBGTop -10; 
    }else if((keyCode == 40)){
        theBGTop = theBGTop +10;
    }
    if(keyCode == 189){
        theBGSize = theBGSize -10;
    }else if(keyCode == 187){
        theBGSize = theBGSize +10;
    }
    document.getElementById("background").style.backgroundPosition= theBGLeft+"px"+" "+theBGTop+"px";
    document.getElementById("background").style.height= theBGSize+"px";
}

function createANewDiv(theNum){
    var newDivID = "newDivID"+theNum
    theLastestID2 = "newTitleDivID"+theNum
    theLastestID3 = "newDesDivID"+theNum
    var ndiv = document.createElement("div");
    var ndivtitle = document.createElement("div");
    var ndivdescrip = document.createElement("div");
    ndiv.className = "newDivClass col-xs-12 col-sm-6 col-md-4 col-lg-3";
    ndivtitle.className="newTitleClass";
    ndivdescrip.className= "newDesClass";
    ndiv.setAttribute("id", newDivID);
    ndivtitle.setAttribute("id", theLastestID2);
    ndivdescrip.setAttribute("id", theLastestID3);

    ndiv.style.cssText = document.getElementById("background").style.cssText;
    ndivtitle.style.cssText = document.getElementById("title").style.cssText;
    ndivtitle.innerHTML = document.getElementById("title").innerHTML;
    ndivdescrip.style.cssText = document.getElementById("description").style.cssText;
    ndivdescrip.innerHTML = document.getElementById("description").innerHTML;
    

    ndiv.appendChild(ndivtitle);
    ndiv.appendChild(ndivdescrip);
    
    document.getElementById("display").appendChild(ndiv);
    
    return newDivID;
}
//-----------------------------interaction------------------------

document.getElementById("menu").addEventListener("click",function(){
    expandMenu()
});

document.getElementById("fileInput").addEventListener("keydown",function(ev){
    if(ev.keyCode == 13){
        changeBG(fileInput.value)
    }
});

document.getElementById("titleInput").addEventListener("keydown",function(){
    var theTitleValue = document.getElementById("titleInput").value;
    changeTitle(theTitleValue);
});

document.getElementById("decriptionInput").addEventListener("keydown",function(){
    var theDesValue = document.getElementById("decriptionInput").value;
    changeDescription(theDesValue);
});

document.getElementById("colorInput").addEventListener("change",function(){
    changeColor(colorInput.value)
});

document.body.addEventListener("keydown",function(ev){
    moveBG(ev.keyCode);
});

document.getElementById("plus").addEventListener("click",function(){
    theLastestID1 = createANewDiv(newDivNum);
    newDivNum = newDivNum + 1;
});