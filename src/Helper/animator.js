export default     function animator(){
    let animationobject=[
        {text:"B",delay:200},
        {text:"R",delay:400},
        {text:"E",delay:600},
        {text:"A",delay:800},
        {text:"K",delay:1000},
        {text:" ",delay:1200},
        {text:"T",delay:1400},
        {text:"H",delay:1600},
        {text:"E",delay:1800},
        {text:" ",delay:2000},
        {text:"C",delay:2200},
        {text:"O",delay:2400},
        {text:"D",delay:2600},
        {text:"E",delay:2800},
        {text:".",delay:3000},

    ]
    
    animationobject.forEach((element)=>{
        setTimeout(()=>{
            let text=document.querySelector(".text-container").textContent
            document.querySelector(".text-container").textContent=text+element.text
        },element.delay)
        
    })
}