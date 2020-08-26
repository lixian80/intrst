function calculate(){
var current = Number(document.getElementById("currentV").value);
var interest = Number(document.getElementById("interest").value);
var termCount = Number(document.getElementById("termCount").value);
var circleTime = Number(document.getElementById("circleTime").value);
var gross = Number(document.getElementById("gross").value);


// gross = current*(1+ interest/360*circleTime/100)^termCount;
//
// (interstRoot - 1) *36000/circleTime= interest
 if(interest == 0 && gross !== 0){
    let interstRoot = Math.pow(gross/current, 1/termCount);

    interest = (interstRoot - 1) *36000/circleTime;

    document.getElementById("interest").value = interest;
 }  else if(gross == 0 && interest !== 0){
    let interestPower = 1 + interest/360*circleTime/100;
    let powerGross = Math.pow(interestPower, termCount);
    gross = current*powerGross;
    document.getElementById("gross").value = gross;
 }else{

    document.getElementById("warning").innerHTML = "⚠警告：请输入正确的值或检查是否有空没填！"
 }


  


    // gross = current*powerGross;
   
    // // console.log(current);
    // // console.log(interest);
    // // console.log(termCount);
    // // console.log(circleTime)
    // // console.log(interestPower)
    // // console.log(powerGross)

   
    // document.getElementById("gross").value = gross;
    
  
}