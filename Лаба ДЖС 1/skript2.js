const txt = document.getElementById("text");
const result = document.getElementById("result")
const submit = document.getElementById("submit-but")

submit.addEventListener("click", function(){
    let text = txt.value;
    if(text != '') result.value =  text.split("").length;
    else result.value = "Очікую..."


})





