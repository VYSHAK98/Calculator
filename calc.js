function displayData(n){
    result.value+=n
}

function evaluateEx(){
    result.value=eval(result.value)
}

function allClear(){
    result.value=""
}
function backSpace(){
    result.value=result.value.slice(0,-1)
}