console.log("Online Shopping Discount System");

let cart=4;
let totalAmount=2570;
let paymentmethod=3;
let iswithincity= true;
if (cart>0) {
    console.log("Proceed to Checkout");
    let shippingcharge = (totalAmount >=500) ? 0: 50;
    console.log("Shipping Charge: ₹" + shippingcharge);
    let discount=0;
    if (totalAmount>=2000)
    {
        discount= 0.20;
    }
    else if (totalAmount>=1000){
        discount=0.10;
    }
    else if (totalAmount>=500){
        discount=0.05;
    }
    else{
        discount=0;
    }
    let discountAmount = totalAmount * discount;
    console.log("Discount Applied: ₹" + discountAmount + "(" + (discount * 100) + "%)");
    
    let finalAmount = totalAmount - discountAmount + shippingcharge;
    console.log("Final Payable Amount: ₹" + finalAmount);

    switch (paymentmethod){
        case 1:{
            console.log("Payment Method: UPI");
            break;
        }
        case 2:{
            console.log("Payment Method: Credit Card");
            break;
        }
        case 3:{
            console.log("Payment Method: COD");
            break;
        }
        default:{
            console.log("Invalid Payment Method");
        }
    }
        let cashbackstatus =(paymentmethod == 1 || paymentmethod == 2) ? "Eligible for cashback" : "Not Eligble";
        console.log("Cashback Status: " + cashbackstatus);

        if (paymentmethod===3){
            if (finalAmount<=3000 && iswithincity){
                console.log("COD is allowed");
            }
            else{
                console.log("COD not allowed");
            }
        }
    }
else{
    console.log("Cart is empty. Add items to proceed.");
}
console.log("");
console.log("Student Result Grading System");

let score=82;
let attendance=82;
let grade;
if (score==null || score==undefined) {
    console.log("Invalid score. Enter valid number.");
}
else{
    
    if (score>=35) {
        console.log("Result: Pass");
    }
    else{
        console.log("Resutl:Fail");
    }

    if (score>=90) {
        grade="A";
    } 
    else if (score>=75){
        grade="B";
    }
    else if (score>=50){
        grade="C";
    }
    else{
        grade="F";
    }
    console.log("Grade: " + grade);
    switch (grade) {
        case "A":
            console.log("Award: Gold Medal");
            break;
        case "B":
            console.log("Award: Silver Medal");
            break;
            
        case "C":
            console.log("Award: Certificate");
            break;
        default:
            console.log("Award: Try Again");
            break;
    }
    let scholarship = (score>=90) ? "🎉 Scholarship Eligible" : "❌ Not Eligible";
    console.log("Scholarship: " + scholarship);
    if (score>=90 && attendance == 80) {
        console.log("Special: Best Student Award");
    }
        console.log("End of Result");

}

console.log("");
console.log("Restaurant Food Ordering System");

let openHours = true;
let totalorder = 1560;
let menuchoice = 1;
let deliverylocation = "nearby";

if (!openHours) {
    console.log("❌ Restaurant is close. Please come later.");
} else {
    console.log("✅ Restaurant is open! Taking your order...");
    let deliverycharge;
    if (totalorder>=1000) {
        deliverycharge = 0;
        console.log("Free Delivery");
    } else {
        deliverycharge = 50;
        console.log("Delivery Charge: ₹" + deliverycharge);
    }
    let preptime;
    if (totalorder>=2000) {
        preptime= 45;
        
    } else if (totalorder>=1000){
        preptime = 30;
    } else{
        preptime = 20;
    }
    console.log("Food Preparation Time: " + preptime + "mins");
    let menuitem;
    switch (menuchoice) {
        case 1:
            menuitem="Pizza";
            break;
        case 2:
            menuitem="Burger";
            break;
        case 3:
            menuitem="Pasta";
            break;
        case 4:
            menuitem="Salad";
            break;
        default:
            menuitem="Invalid Choice";
            break;
    }
    console.log("Your Order: " + menuchoice);
    let deliverytype = (deliverylocation === "nearby" ? "Fast Delivery" : "Normal Delivery");
    console.log("Delivery Type: " + deliverytype);
    if (menuitem === "Pizza" || menuitem === "Pasta"){
        console.log("Italian Combo Applied!");
    }
    let finalBill = totalorder + deliverycharge;
    console.log("Final Amount: " + finalBill);
    console.log("\n=== ✅ Order Confirmed! ===");
}
console.log("");
console.log("Employee Payroll System");
let isActive = true;
let monthlySalary = 75000;
let experience = 10;
let department = 1;
let isManager = true;
let isPermanent = true;
if (!isActive) {
    console.log("❌ Employee is not active. Payroll cannot be processed.");
} else {
    console.log("✅ Employee is active. Processing payroll...\n");
    let taxRate = (monthlySalary >= 50000) ? 0.10 : 0.05;
    let taxAmount = monthlySalary * taxRate;
    console.log("Tax Applied: ₹" + taxAmount + " (" + (taxRate * 100) + "%)");
    let bonusRate;
    if (experience >= 10) {
        bonusRate = 0.20;
    } else if (experience >= 5) {
        bonusRate = 0.10;
    } else {
        bonusRate = 0.05;
    }
    let bonusAmount = monthlySalary * bonusRate;
    console.log("Bonus Applied: ₹" + bonusAmount + " (" + (bonusRate * 100) + "%)");
    let allowance = 0;
    switch (department) {
        case 1:
            allowance = 5000;
            console.log("Department: IT → Allowance ₹5000");
            break;
        case 2:
            allowance = 4000;
            console.log("Department: HR → Allowance ₹4000");
            break;
        case 3:
            allowance = 3000;
            console.log("Department: Sales → Allowance ₹3000");
            break;
        default:
            console.log("Invalid Department");
    }
    let carAllowance = isManager ? "✅ Eligible for Car Allowance" : "❌ Not Eligible";
    console.log("Car Allowance: " + carAllowance);
    if (monthlySalary >= 80000 && isPermanent) {
        console.log("Health Insurance: 🌟 Luxury Health Insurance Package");
    } else {
        console.log("Health Insurance: Standard Package");
    }
    let finalSalary = monthlySalary - taxAmount + bonusAmount + allowance;
    console.log("Final Salary Credited: ₹" + finalSalary);

    console.log("=== ✅ Payroll Processed ===");
}


console.log("");
console.log("=== 🏠 Smart Home Control System ===\n");
let systemPower = true;
let outsideTemp = 32;
let humidity = 75;
let currentHour = 21;
let deviceChoice = 1;
let motionDetected = true;
if (!systemPower) {
    console.log("❌ System is OFF. Please turn ON power.");
} else {
    console.log("✅ System Power is ON\n");
    if (outsideTemp > 30) {
        console.log("AC Status: ❄️ ON (Temperature > 30°C)");
    } else {
        console.log("AC Status: 🔴 OFF (Temperature ≤ 30°C)");
    }
    if (currentHour >= 18 && currentHour < 22) {
        console.log("Lighting Mode: 🌆 Evening Lights");
    } else if (currentHour >= 22 || currentHour < 6) {
        console.log("Lighting Mode: 🌙 Night Mode");
    } else {
        console.log("Lighting Mode: ☀️ Day Mode Lights");
    }
    switch (deviceChoice) {
        case 1:
            console.log("Device Selected: 💡 Lights");
            break;
        case 2:
            console.log("Device Selected: 🌀 Fan");
            break;
        case 3:
            console.log("Device Selected: ❄️ AC");
            break;
        case 4:
            console.log("Device Selected: 🔥 Heater");
            break;
        default:
            console.log("Invalid device choice.");
    }
    let lightStatus = motionDetected ? "💡 Turn ON light" : "💡 Keep OFF";
    console.log("Motion Sensor: " + lightStatus);
    if (outsideTemp > 28 || humidity > 70) {
        console.log("Smart Mode: ❄️ AC ON (Cool Mode)");
    } else {
        console.log("Smart Mode: AC Normal/Off");
    }

    console.log("\n=== ✅ Smart Home Status Updated ===");
}
