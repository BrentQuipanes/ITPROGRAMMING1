// enrollment.js
// This program calculates the total tuition fee for a student based on the number of units, tuition per unit, VAT, and miscellaneous fees.
// Constants are used to store the tuition per unit, number of units, VAT rate, and miscellaneous fees.
const tuitionPerUnit = 450;
const numberOfUnits = 3;
const vatRate = 0.12;
const miscellaneousFee = 1200;


// Student Information
// Variables are used to store the student's name, program, year level, and enrollment status.
const studentName = 'Juan Dela Cruz';
const program = 'BSIT';
const yearLevel = 2;
const isEnrolled = true;


// Calculate the total tuition fee
// The base fee is calculated by multiplying the tuition per unit by the number of units.
const baseFee = tuitionPerUnit * numberOfUnits;
const totalBaseFee = baseFee + miscellaneousFee;

// Calculate the total fee including VAT
// The total fee with VAT is calculated by adding the base fee and miscellaneous fee, then applying the VAT rate.
const totalWithVat = totalBaseFee + totalBaseFee * vatRate;



// Enrollment Count
// A variable is used to keep track of the number of students enrolled. The enrollment count is incremented by 1 for each student enrolled.
let enrollmentCount = 0;
enrollmentCount = enrollmentCount + 1;


// Determine enrollment status
// A variable is used to store the enrollment status of the student. If the student is enrolled, the status is set to 'Enrolled', otherwise it is set to 'Not Enrolled'.
let enrollmentStatus;
if (isEnrolled == true ) {
    enrollmentStatus = 'Enrolled';
} else {
    enrollmentStatus = 'Not Enrolled';
}


// Output the results
// The student's name, program, year level, enrollment status, base fee, total fee with VAT, and enrollment count are logged to the console.
console.log(studentName, program, yearLevel, enrollmentStatus);
console.log(baseFee);
console.log(totalWithVat);
console.log(enrollmentCount);