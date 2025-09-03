let display= document.getElementById("display")
function appendtodisplay(num){
    display.value+=num
}
function cleardisplay(){
    display.value=""
}
function calculate(){
    try{
        display.value=eval(display.value)
    }catch(err){
       display.value="error"
    }
}