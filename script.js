let answer=document.querySelector('.answer');
let start=document.querySelector('.start');
let end=document.querySelector('.end');
let form=document.querySelector('form');
let fromMin,toMin,fromHour,toHour,hour=0,minute=0,finalAnswer,hourForm='hour',minuteForm='minute';

form.addEventListener('submit',e=>{
    e.preventDefault();
    reset();
    getTimeParameter();
    calculate();
})
function getTimeParameter(){
    fromHour=Number(start.value.slice(0,2));
    toHour=Number(end.value.slice(0,2));
    fromMin=Number(start.value.slice(3));
    toMin=Number(end.value.slice(3));
}
function calculate(){
    if(fromHour===toHour&&fromMin===toMin){
        answer.innerHTML='No time passed';
        return;
    }
    while(fromMin!=toMin || fromHour!=toHour){
        fromMin++;
        minute++;
        if(minute==60){
            hour++;
            minute=0;
        }
        if(fromMin==60){
            fromHour++;
            fromMin=0;
        }
        if(hour==24)hour=0;
        if(fromHour==24)fromHour=0;
    }
    if(hour>1)hourForm='hours';
    if(minute>1)minuteForm='minutes';
    if(hour==0)finalAnswer=`${minute} ${minuteForm}`;
    else if(minute==0)finalAnswer=`${hour} ${hourForm}`;
    else finalAnswer=`${hour} ${hourForm} and ${minute} ${minuteForm}`;
    answer.innerHTML=finalAnswer;
}
function reset(){
    [hour,minute]=[0,0];
    [hourForm,minuteForm]=['hour','minute'];
}
