function levelUpdater(level){
    let whiteline=document.querySelectorAll(".white-line")
    for(let i=1;i<6;i++){
        if(level["level"+i]==="success"){
            document.querySelector("#level"+i).className="success"
            whiteline[i-1].style.backgroundColor="lightgreen"
        }
       
        
    

    }


}
export default levelUpdater