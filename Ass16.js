
/*OTP Countdown Simulator (Console App)
------------------------------------
Simulate OTP sending flow in Node.js:
        Show “OTP Sent Successfully”
        Start 10-second countdown
        Allow resend only after countdown ends
*/

let sec = 10
console.log("OTP Sent Successfully")

let timer = setInterval(() => {
    console.log(sec)
    sec--

    if (sec < 0) {
        clearInterval(timer)
        console.log("Re-send OTP")
    }
}, 1000)


