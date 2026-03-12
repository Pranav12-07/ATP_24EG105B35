/* DONE
Password Reset Link Countdown (Console App)
--------------------------------------------
Simulate password reset flow:
        Show “Reset Link Sent”
        Start 5-second countdown
        Allow resend only after countdown ends
*/

let seconds = 5;

console.log("Reset Link Sent");

let timer = setInterval(() => {
  console.log("Time left:", seconds);
  seconds--;

  if (seconds < 0) {
    clearInterval(timer); // stops the timer
    console.log("You can request a new reset link now.");
  }
}, 1000);