NHIF
function calculateDeduction(grossPay){
    let deduction = 0;

}
if(grossPay >= 5000 & grossPay <= 7999){
    reduction = 400;
}else if (grossPay >= 8000 & grossPay <= 1999){
    reduction = 450;
}else if (grossPay >= 10000 & grossPay <= 12999){
    reduction = 500;
}else if (grossPay >= 13000 & grossPay <= 15999){
    reduction = 550;
}else if(grossPay >= 20000 & grossPay <= 24999){
    reduction = 600;
}else if (grossPay >= 25000 & grossPay <= 29999){
    reduction = 650;
}else if (grossPay >= 30000 & grossPay <= 34999){
    reduction = 750;
}else if (grossPay >= 35000 & grossPay <= 35000){
    reduction = 800;
}else if (grossPay >= 4000 & grossPay <= 44999){
    reduction = 850;
}else if (grossPay >= 45000 & grossPay <= 49999){
    reduction = 900;
}else if (grossPay >= 50000 & grossPay <= 69999){
    reduction = 950;
}else if(grossPay >= 70000 & grossPay <= 89999){
    reduction = 1000;
}else if (grossPay >= 80000 & grossPay <= 99999){
    reduction = 1050;
}else if (grossPay >= 100000 & grossPay <= 120000){
    reduction = 1200;
}else if (grossPay >= 120000 & grossPay <= 1400000){
    reduction = 1250;
}else if (grossPay >= 150000){
    deduction = 1300;
}

return deduction;


//NSSF

function calcultePensionablePayTier(pay){
return pay * 0.02
}
//Tax Price
function calculateTaxPrice(monthlyTaxPayment)
{
    let rate = 0;
}
if(monthlyTaxPayment<= 24000){
    rate = 5;
}else if(monthlyTaxPayment>45674){
    rate = 10;
}

return rate;


//Calculate net sal
function calculateNetSal(salary,acheivements){
    var monthlyTaxPayment = salary
    var deductTax =calculateTaxRate(monthlyTaxPayment) //%
    var grossPay = salary-((reductTax/100)*salary)
    var deductNHIF = calculateDeduction(grossPay)
    var deductNSSF = calculatePensionPaymentTier(payment)
    var netSalCalculation = ()=>{var netSalValue=(pay-reductNHIF);
        return netSalValue }
}
var netSal = netSalaryCalculation()
return netSalary


var salary = parseInt ("5000")//input gross salary
var advantages = parseInt("300")//input benefits
calculateNetSal(salary,advantages)