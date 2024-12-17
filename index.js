/* Formula: BMI = weight (pounds) / [height (in)]2 x 703

For example, if someone weighs 180 lbs and is 5'5" (65 in total), their BMI would be calculated as:
180 x 703 = 126,540
126,540 / 65 = 1,946.769
1,946.769 / 65 = 29.95%

*/


// Collect user input on click
// Convert heightFeet from feet to inches (Multiply by 12)
// Add heightFeet and heightInches and set to a new variable called combinedHeight
// Multiply weight by 703
// Divide product of the above step and divide it by combinedHeight
// Divide the quotient of the above step again by combinedHeight to receive BMI
// Display BMI to the user

function calculateBMI() {
    let heightFeet = document.getElementById("height-feet").value
    let heightInches = document.getElementById("height-inches").value
    let weight = document.getElementById("weight-pounds").value
    let output = document.getElementById("bmi-output")

   let  convertedHeightFeetToInches = heightFeet * 12 
   let combinedHeight = convertedHeightFeetToInches + heightInches
   let weightMultiplied = weight * 703

  let firstWeightQuotient =  weightMultiplied / combinedHeight
let secondWeightQuotient = firstWeightQuotient / combinedHeight

    output.textContent = `Your body mass index is ${secondWeightQuotient.toFixed(1)}% `
} 


/* example 5 ft 4in 145lbs


5*12 = 60
60+3= 63
145*703= 101,935
101935/63 = 1618.01587

*/