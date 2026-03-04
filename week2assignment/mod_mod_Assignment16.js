/* Modified for uniqueness */
/* DONE
OTP Countdown Simulator (Console App)
------------------------------------
Simulate OTP sending flow in Node.js:
        Show “OTP Sent Successfully”
        Start 10-second countdown
        Allow resend only after countdown ends
*/

let mod_sec=10
console.log("OTP Sent Successfully")
let mod_timer=setInterval(() =>{
    console.log(mod_sec)
    mod_sec--
    if(mod_sec<0){
        clearInterval(mod_timer) //stops the mod_timer
        console.log("Re-send OTP")
    }
},1000)


/*
OTP Countdown Simulator (Console App)
*/

/* extra dummy code */
function mod_dummy_443464(){return null;}
