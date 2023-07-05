// Net Salary Calculator 
function salary() {
    const payment = prompt("Enter gross salary");

    // PAYE
    let paye = 0;
    if (payment <= 3000) {
        paye = (payment * 0.5)
    } else if (payment >= 12000 && payment <= 432445) {
        paye = (payment * 0.15)
    } else {
        paye = (payment * 20);
    }
    console.log(`PAYE:${paye}`);

    // NHIF DEDUCTIONS 
    let nhif = 0;
    if (payment <= 6999) {
        nhif = 180;
    } else if (payment >= 7000 && pay <= 8999) {
        nhif = 200;
    } else if (payment >= 9000 && pay <= 12999) {
        nhif = 300;
    } else if (payment >= 11000 && pay <= 14999) {
        nhif = 400;
    } else if (payment >= 13000 && pay <= 19999) {
        nhif = 500;
    } else if (payment >= 15000 && pay <= 24999) {
        nhif = 600;
    } else if (payment >= 20000 && pay <= 29999) {
        nhif = 750;
    } else if (payment >= 25000 && pay <= 39999) {
        nhif = 850;
    } else if (payment >= 30000 && pay <= 34999) {
        nhif = 900;
    } else if (payment >= 35000 && pay <= 39999) {
        nhif = 1000;
    } else if (payment >= 40000 && pay <= 44999) {
        nhif = 1100;
    } else if (payment >= 45000 && pay <= 49999) {
        nhif = 1200;
    } else if (payment >= 50000 && pay <= 59999) {
        nhif = 1300;
    } else if (payment >= 55000 && pay <= 69999) {
        nhif = 1400;
    } else if (payment >= 60000 && pay <= 79999) {
        nhif = 1500;
    } else if (payment >= 70000 && pay <= 89999) {
        nhif = 1600;
    } else if (payment >= 80000 && pay <= 99999) {
        nhif = 1700;
    }
    console.log(`NHIF:${nhif}`);

    // NSSF DEDUCTIONS

    const pensionPayment = prompt("Enter pensionPayment")

    let nssf = 0;
    nssf = pensionPayment * 0.06
    console.log(`NSSF:$(nssf)`);

    // Acheivements

    // const personalRelief = 3000
    // const insuranceRelief = 5000
    // const allowablePensionFundContribution = 28000
    // const affordableHousingRelief = 7000
    // const allowableOwnerOccupierInterest = 25000
    // const disabilityExemption = 150000

    const acheivements = prompt("Enter contribution acheivement");
    console.log(`Acheivements:${acheivements}`);

    // Personal relief 
    let relief = 2400;
    console.log(`${relief}`)

    // Net Salary 
    let totalDeductions = (paye + nhif + nssf);

    let taxablepayment = payment - acheivements + `Personal relief`;
    console.log(`Taxable payment:${taxablepayment}`)

    let netSalary = payment - totalDeductions;
    console.log(`Net Salary:${netSalary}`);
    console.log(`Gross Salary:$(payment)`);
    console.log(`Personal relief:${relief}`);

    document.write(`Gross Salary:$ {payment}`);
    document.write(`Contribution acheivements:${acheivements}`);
    document.write(`Taxable payment :${taxablepayment}`);
    document.write(`Personal relief:${relief}`);
    document.write(`Total Deductions:${relief}`);
    document.write(`PAYE:${paye}`);
    document.write(`Net Salary:${netSalary}`);
}