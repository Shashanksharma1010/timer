// getting the buttons
// getting all buttons

const inputs = document.querySelectorAll('input');
const buttons = document.querySelectorAll('button');
const message = document.getElementById('message');

// input value restriction logic 1
function myFunction(e) {
    var value = e.value;
    var name = e.name;

     // if input is hour and days
    if (name == "days" || name == "hours"){
        if (value <= 24 && value >= 0) {
            console.log('success')
            return
        } e.value = "0"
    }

    // if input is minutes and seconds
    if (name == "minutes" || name == "seconds"){
        if (value <= 60 && value >= 0) {
            console.log('success')
            return
        } e.value = "0"
    }
}


// input value restriction logic 2

// message function.
const myMessage = (messageText) => {
    message.style.display = 'block';
    message.innerText = messageText;
    setTimeout(() => {message.style.display = "none"},2500)
}

// looping on inputsArray
for (var index = 0; index < inputs.length; index++) {
    // getting all the inputs with index and adding eventListener.
    inputs[index].addEventListener('change', (e) => {
        console.log(e.target.value.length);

    // Checking if the input is empty.
    if (e.target.value == "") {
        e.target.value = 0;
    }

    // if input exceeds the length of two digits.
    else if (e.target.value.length > 2) {
        e.target.value = 0;
    }

    else {
        // if input is an hour.
        if (e.target.name == "hours") {

            if (e.target.value <= 24 && e.target.value >= 0) {
                return;
            } 
            e.target.value = "0";
            // displaying message if input is larger than range
            myMessage("Only values between 0 & 24 are allowed", 'rgb(45,41,63)');
        }

        // if input is minutes and seconds
        if (e.target.name == "minutes" || e.target.name == "seconds") {

            if (e.target.value <= 59 && e.target.value >= 0) {
                return;
            } 
            e.target.value = 0;
            // displaying message if input is larger than range.
            myMessage("Only values between 0 & 59 are allowed", 'rgb(28,19,31)');
        }
    }
    })
}
    
// Handling start button
buttons[0].addEventListener('click', () => {
    clock();
})

const clock = (param) => {

// getting the current values of the inputes first.
var remainingHours = inputs[0].value;
var remainingMinutes = inputs[1].value;
var remainingSeconds = inputs[2].value;
console.log(remainingHours, remainingMinutes, remainingSeconds);

// setting time interval to run update value function.
var myId = setInterval(() => {clk()},1000);

// Handling stop button
buttons[1].addEventListener('click', () => {
    console.log('click');
    clearInterval(myId);
})

// Handling reset button
buttons[2].addEventListener('click', () => {
    console.log('click');
    clearInterval(myId);
    inputs[0].value = 0;
    inputs[1].value = 0;
    inputs[2].value = 0;
})

// Function to change input values accordingly.
function clk() {

    // Checking if timer is complete 
    if (inputs[0].value == 0 && inputs[1].value == 0 && inputs[2].value == 0) {
        clearInterval(myId);
        let beat = new Audio('C:/Users/asus/OneDrive/Desktop/react apps/Javascript projects/javascript timer/tornado-sirens.mp3');
        beat.play();
        myMessage("Your Timer is Complete");
    } 

    // When timer is incomplete.
    else {

        // hours left logic
        if (inputs[0].value != 0 && inputs[1].value == 0 && inputs[2].value == 0){
            remainingSeconds = 60;
            remainingMinutes = 60;
            remainingHours = remainingHours - 1;
            inputs[0].value = remainingHours;
        }

        // minutes left logic
        if (inputs[2].value == 0) {
            remainingSeconds = 60;
            remainingMinutes = remainingMinutes - 1;
            inputs[1].value = remainingMinutes;
        }

        // seconds left logic
        remainingSeconds = remainingSeconds - 1;
        inputs[2].value = remainingSeconds;
    }
}

}









