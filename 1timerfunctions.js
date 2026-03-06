/*1.Exam portal simulator:
-----------------------------
When a student submits an exam:

        Immediately show: “Exam submitted successfully”
        After 2 seconds → show: “Evaluating answers…”
        After 4 seconds → show: “Result: Pass”*/
      let student;  
console.log("exam submitted succesfully")
setTimeout(()=>{
        console.log("Evaluating answers…")
    },2000);
setTimeout(()=>{
        console.log("Result: Pass")
    },3000);


  /*  2.OTP Countdown Simulator (Console App)
        Simulate OTP sending flow in Node.js:
        Show “OTP Sent Successfully”
        Start 10-second countdown
        Allow resend only after countdown ends*/
        
        console.log("OTP sent successfully")
let seconds=10;
let intervalId=setInterval(()=>{
    seconds--;
    console.log(`OTP can resend after ${seconds} secs`);
    if(seconds===0){
        console.log("Resend OTP");
        clearInterval(intervalId);
    }
},1000);