const input = document.getElementById("password")

input.addEventListener('input',(e=>{
    if (e.target.value.length>7) {
        input.className="valid"
    }
    else{
        input.className="invalid "    
}
}))






