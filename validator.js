/**
 *  Name : Brent M Quipanes
 *  Created Date : 2026-03-10
 *  Subject : IT Programming 1
 *  Section and Course : BSIT 1M
 * 
 */

// Account object stores the user's account information
var account = {
    username: "Brent Quipanes",
    password: "Zeyks123",
    age: 18,
    status: "active",
    occupation: "Student",
};


let nickname = '';
const score = 78;
// Function to validate the user's input
function validate(data) {
    const validOccupations = [
        "Student", "Teacher", "Registrar", "Dean",
        "Counselor", "Staff", "Admin", "Alumni",
    ];
    const errors = [];

    if (!data.username || data.username.length < 5) {
        errors.push("Username is required and must be at least 5 characters.");
    }

    if (!data.password || data.password.length < 8) {
        errors.push("Password must be at least 8 characters long.");
    }

    if (!data.age || data.age < 18 || data.age > 80) {
        errors.push("Age is required and must be between 18 and 80.");
    }

    if (data.status !== "active" && data.status !== "inactive") {
        errors.push("Status must be either 'active' or 'inactive'.");
    }

    if (!data.occupation || !validOccupations.includes(data.occupation)) {
        errors.push("Occupation is required and must be a valid option.");
    };

    return errors;
};

// Test accounts
const validAccount = {
    username: "BrentQuipanes",
    password: "Quipanes123",
    age: 22,
    status: "active",
    occupation: "Student",
};

const invalidAccount = {
    username: "Brent",
    password: "123",
    age: 17,
    status: "pending",
    occupation: "Unknown",
};

const emptyAccount = {
    username: "",
    password: "",
    age: "",
    status: "",
    occupation: "",
};

console.log("Valid Account Errors:", validate(validAccount));     // []
console.log("Invalid Account Errors:", validate(invalidAccount)); // 4 errors
console.log("Empty Account Errors:", validate(emptyAccount));     // 5 errors
console.log(5 == '5');            // true  - types converted
console.log(5 === '5');           // false - types differ
console.log(null == undefined);   // true
console.log(null === undefined);  // false
console.log(NaN === NaN);         // false - always
console.log(Boolean(''));    // false
console.log(Boolean('0'));   // true   <-- surprising
console.log(Boolean([]));    // true   <-- surprising
console.log(nickname || 'Ruben Quipanes');  // 'Guest' - any falsy triggers ||
console.log(nickname ?? 'Ruben Quipanes');  // ''      - only null/undefined





