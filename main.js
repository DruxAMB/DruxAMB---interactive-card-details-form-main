
var a1=document.getElementById("cvc");
var a2=document.getElementById("cardNumber");
var a3=document.getElementById("cardName");
var a4=document.getElementById("date");

var forM=document.getElementById("forM");
var b1=document.getElementById("inpName");
var b2=document.getElementById("inpNum");
var b3=document.getElementById("inpMonth");
var b4=document.getElementById("inpYear");
var b5=document.getElementById("inpCvc");

var p1=document.getElementById("pName")
var p2=document.getElementById("pNum");
var p3=document.getElementById("pMonth");
var p4=document.getElementById("pYear");
var p5=document.getElementById("pCvc");

var main2=document.getElementById("main2");

function conFirm(){
    if(b5.value=="" && b2.value=="" && b1.value=="" && b3.value=="" && b4.value==""){
        p1.style.display="block";
        p2.style.display="block";
        p3.style.display="block";
        p4.style.display="block";
        p5.style.display="block";

        p1.innerHTML="You need to input your card name here";
        p2.innerHTML="input your card name here";
        p3.innerHTML="can't be blank";
        p4.innerHTML="can't be blank";
        p5.innerHTML="can't be blank";

        console.log("Hello")
    }
    else if(b4.value=="" || b1.value==""){
        p2.style.display="block";
        p3.style.display="block";
    
        p2.innerHTML="can't be blank";
        p3.innerHTML="can't be blank";
    }
    else if(b4.value=="" || b2.value==""){
        p3.style.display="block";
        p5.style.display="block";
    
        p3.innerHTML="can't be blank";
        p5.innerHTML="can't be blank";
    }
    else if(b4.value=="" || b3.value==""){
        p2.style.display="block";
        p5.style.display="block";
    
        p2.innerHTML="can't be blank";
        p5.innerHTML="can't be blank";
    }
    else if(b5.value=="" || b4.value==""){
        p1.style.display="block";
        p3.style.display="block";
    
        p1.innerHTML="can't be blank";
        p3.innerHTML="can't be blank";
    }
    else if(b5.value=="" || b3.value==""){
        p2.style.display="block";
        p4.style.display="block";
    
        p2.innerHTML="can't be blank";
        p4.innerHTML="can't be blank";
    }
    else if(b5.value=="" || b2.value==""){
        p1.style.display="block";
        p3.style.display="block";
    
        p1.innerHTML="input your card name here";
        p3.innerHTML="can't be blank";
    }
    else if(b5.value=="" || b1.value==""){
        p2.style.display="block";
        p3.style.display="block";
        
        p2.innerHTML="You need to input your card name here";
        p3.innerHTML="can't be blank";
    }
    else if(b1.value=="" || b3.value==""){
        p2.style.display="block";
        p4.style.display="block";
        
        p2.innerHTML="You need to input your card name here";
        p4.innerHTML="can't be blank";
    }
    else if(b2.value=="" || b1.value==""){
        p3.style.display="block";
        p5.style.display="block";   
        
        p3.innerHTML="You need to input your card name here";
        p5.innerHTML="input your card name here";
    }
    else if(b5.value=="" || b2.value=="" || b4.value==""){
        p3.style.display="block";
        p1.style.display="block";
    
        p3.innerHTML="input your card name here";
        p1.innerHTML="can't be blank";
    }
    else if(b5.value=="" || b4.value=="" || b3.value==""){
        p2.style.display="block";
        p1.style.display="block";
    
        p2.innerHTML="input your card name here";
        p1.innerHTML="can't be blank";
    }
    else if(b4.value=="" || b2.value=="" || b3.value==""){
        p5.style.display="block";
        p1.style.display="block";
    
        p5.innerHTML="input your card name here";
        p1.innerHTML="can't be blank";
    }
    else if(b5.value=="" || b2.value=="" || b3.value==""){
        p1.style.display="block";
        p4.style.display="block";
    
        p1.innerHTML="input your card name here";
        p4.innerHTML="can't be blank";
    }
    else if(b5.value=="" || b1.value=="" || b3.value==""){
        p2.style.display="block";
        p4.style.display="block";
    
        
        p2.innerHTML="You need to input your card name here";
        p4.innerHTML="can't be blank";
    }
    else if(b5.value=="" || b2.value=="" || b1.value==""){
        p3.style.display="block";
        p4.style.display="block";
    
        
        p3.innerHTML="You need to input your card name here";
        p4.innerHTML="input your card name here";
    }
    else if(b2.value=="" || b1.value=="" || b3.value==""){
        p4.style.display="block";
        p5.style.display="block";
    
        
        p4.innerHTML="You need to input your card name here";
        p5.innerHTML="input your card name here";
    }
    else if(b4.value=="" || b2.value=="" || b1.value=="" || b3.value==""){
        p5.style.display="block";
    
        
        p5.innerHTML="You need to input your card name here";
    }
    else if(b5.value=="" || b2.value=="" || b1.value=="" || b3.value==""){
        p4.style.display="block";
    
        
        p4.innerHTML="You need to input your card name here";
    }
    else if(b1.value==""){
        p1.innerHTML="You need to input your card name here";
        p1.style.display="block";
    }
    else if(b2.value==""){
        p2.innerHTML="input your card name here";
        p2.style.display="block";
    }
    else if(b3.value==""){
        p3.innerHTML="can't be blank";
        p3.style.display="block";
    }
    else if(b4.value==""){
        p4.innerHTML="can't be blank";
        p4.style.display="block";
    }
    else if(b5.value==""){
        p5.innerHTML="can't be blank";
        p5.style.display="block";
    }
    else{       
        forM.style.display="none";
        main2.style.display="block";
        
        p1.innerHTML="";
        p2.innerHTML="";
        p3.innerHTML="";
        p4.innerHTML="";
        p5.innerHTML="";

        a1.innerHTML= b5.value;
        a2.innerHTML= b2.value;
        a3.innerHTML= b1.value;
        a4.innerHTML= b3.value+"/"+b4.value;
    }
}