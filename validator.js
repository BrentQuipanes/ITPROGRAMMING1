/**
 *  Name : Brent M Quipanes 
 *  Created Date : 2026-03-10
 *  Subject : IT Programming 1
 *  Section and Course : BSIT 1M
 * 
 */
// Account object is created to store the user's acc information
var account = {
     username : "Zeyks",
     password : "Zeyks123",
     age : 18,
     status : "active",
     occupation : "Student",
};

// Function to validate the user's input 
function validate(data) {
    const   Occupation = ["Student", "Teacher", "Registrar", "Dean", "Counselor", "Staff", "Admin", "Alumni"];
    const   errors = [];

         if (!data.username || data.username.length < 5) {
            errors.push("Username is required and must be at least 5.");
    }

        if (!data.password || data.password.length < 8) {
            errors.push("Password must be at least 8 characters long.");
    }

        if (!data.age || data.age < 18 || data.age > 80) {
            errors.push("Age is required and must be a adult.");
    }

        if (!data.status || (data.status !== "active" && data.status !== "inactive")) {
            errors.push("Status must be either 'active' or 'inactive'.");
    }


        if (!data.occupation || !Occupation.includes(data.occupation)) {
            errors.push("Occupation is required and must be a valid option.");
    }


    return errors;
};

/**Test the validate function with the account object and log the errors to the console.
 */
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


// Test the validate function with the valid account object
console.log("Valid Account Errors:", validate(validAccount)); // Output: Valid Account  

// Test the validate function with the invalid account object
console.log("Invalid Account Errors:", validate(invalidAccount)); // Output: Invalid Account 

// Test the validate function with the empty account object
console.log("Empty Account Errors:", validate(emptyAccount)); // Output: Empty Account Errors: