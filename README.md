# Password_Generator

This is my password generator that creates a strong password to provide greater security powered by javascript. When the "generate password" button is clicked, a series of prompt and confirm alerts asking the user which criteria they would like to include in their password. <br>
The first question is a prompt asking for character length of the password. The following three questions are confirms asking if the user would like to include lowercase, uppercase, numbers and/or special characters. <br>
By using 'if' and 'else' properties, I have made it a requirement that at least one confirm must be true and the password length must be between 8 and 128 in order for the password to generate. If these requirements are not met, an alert will be shown asking the user to repeat and follow the password requirements. <br>

In order to for the password to generate using the information the user has input into the browser, I have used the 'concat' property and empty array to combine the arrays that are selected in the confirms used earlier. Next I have used a for and loop property to produce a password that is the length the user has requested. 
Next, I used the 'Math.random' method to randomly extract characters from the new array that holds total amount of characters that the user has selected. This is then 'returned' to produce the final password. <br>
https://arob0017.github.io/Password_Generator/ <br>
https://github.com/arob0017/Password_Generator <br>

<div align="centre">
    <img src="https://github.com/arob0017/Password_Generator/blob/master/Generated%20Password.png" width="400px"</img> 
</div>
<div align="centre">
    <img src="https://github.com/arob0017/Password_Generator/blob/master/Password%20Generator%20-%20Prompt.png" width="400px"</img> 
</div>
<div align="centre">
    <img src="https://github.com/arob0017/Password_Generator/blob/master/Pwd%20Gen%2C%20requirement%20fail.png" width="400px"</img> 
</div>
