document.getElementById("btnn").addEventListener("click",()=>{
    let sum=0,i;
    var ele=document.getElementsByTagName("input");
    for(i=0;i<ele.length;i++){
        if(ele[i].type=="radio"){
            if(ele[i].checked){
                sum=sum+parseFloat(ele[i].value);
            }
        }
    }
    if(sum>0 && sum<2){
        console.log("very conservative");
        document.getElementById("res1").src="Group 12.png"
        
        document.getElementById("resulttext").innerHTML=" *You belong to the category of <strong '> Very conservative investors</strong> a possible allocation for you will be Equity:0-10% and 90% to the Debt and other asset classes"  

    }
    if(sum>=2 && sum<4){
        document.getElementById("res1").src="Group 13 1.png"
        document.getElementById("resulttext").innerHTML="*You belong to the category of <strong> Conservative investors</strong a possible allocation for you will be Equity:10-30% and 70-90% to the Debt and other asset classes"  

        console.log("conservative");    
    }
    if(sum>=4 && sum<6){
        document.getElementById("res1").src="Group 14 1.png"
        document.getElementById("resulttext").innerHTML="*You belong to the category of <strong> Balanced investors</strong> a possible allocation for you will be Equity:40-60% and 40-60% to the Debt and other asset classes"  
        console.log("BALANCED");    
    }
    if(sum>=6 && sum<8){
        document.getElementById("res1").src="Group 15 1.png"
        document.getElementById("resulttext").innerHTML="*You belong to the category of <strong> Moderately Aggressive	 </strong> investors a possible allocation for you will be Equity:70-90% and 10-30% to the Debt and other asset classes"  
        console.log("moderately agressive");    
    }
    if(sum>=8){
        document.getElementById("res1").src="Group 16 1.png"
        document.getElementById("resulttext").innerHTML="*You belong to the category of <strong> Aggressive </strong> a possible allocation for you will be Equity:90-100% and 0-10% to the Debt and other asset classes"  
        console.log("agressive");    
    }
    console.log("HII",sum)
    // BELOW Tfunction will help the page to go at top
    
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
})
