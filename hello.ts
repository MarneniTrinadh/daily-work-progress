//Strings
let myName: string = "Trinadh";
let myClg : string = "KARE";
console.log("My name is " + myName + " and I study in " + myClg);

//Numbers
let myAge: number = 22;
let myRollNo: number = 41041;
console.log("My age is " + myAge + " and my roll number is " + myRollNo);

//Boolean
let isProjectCompleted: boolean = false;
let isProjectDevelopment: boolean = true;

//Undefined & Union
let projectCompletionDate: (undefined | string) = undefined;
projectCompletionDate = "2026-08-06";
console.log("Project completion date is " + projectCompletionDate);

//Any
let storeAnythig: any;
storeAnythig = "Hello";
storeAnythig = 100;
storeAnythig = true;
console.log("Stored value is " + storeAnythig);

//Arrays
let myFruits: string[] = ["Apple", "Banana", "Mango"];
let myRatings: number[] = [8, 7, 10];
let myStatus: boolean[] = [true, false, true];
let myFruitsAndRatings: (string | number)[] = ["Apple", 8, "Banana", 7, "Mango", 10, 11];
myFruits.push("Grapes");
myRatings.push(9);
myFruitsAndRatings.pop();
console.log(myFruits);
console.log(myRatings);
console.log(myFruitsAndRatings);
console.log("After Modification " + myFruits);
console.log("After Modification " + myRatings);
console.log("After Modification " + myFruitsAndRatings);

//Tuple is a Structured od Array
// let interviewDetails : [string,string,number] = ["Compase Tech", "SDE-Intern", 30];
// let [companyName, Role, interviewDuraction] = interviewDetails;
// console.log("Company name " + companyName);
// console.log("Role " + Role);
// console.log("interviewDuration " + interviewDuraction);
//or we can use array in tuple
let interviewDetails : [string,string,number][] = [["Compase Tech", "SDE-Intern", 30],
["Capgemini", "SDE-junior Developer", 40],
["TCL", "SDE-junior Developer", 50]];
console.log("Interview Details " + interviewDetails);
interviewDetails.map((interview) => {
    console.log(interview);
    let [companyName, Role, interviewDuraction] = interview;
    console.log("Company name: " + companyName);
    console.log("Role: " + Role);
    console.log("interviewDuration: " + interviewDuraction + " mins");
})

//Objects
let projectDetails:{
    projectName : string,
    projectDescription : string,
    teamSize : number;
    isCompleted ?: Boolean
}={
    projectName : "Travelling plain",
    projectDescription : "Persons to going to trip whithout plaining to going this web site give the shortest distance to reach",
    teamSize : 6,
    isCompleted : true
};
console.log("Project Details: ", projectDetails)

//enums 
enum ProjectStatus {
    isProgress = "Project is in progress",
    isCompleted = "Project is completed",
    isHold = "Project is in Hold",
}

console.log("What is the Project Status?")
console.log(ProjectStatus.isProgress);
let projectStatus = ProjectStatus.isProgress;
if(projectStatus === "Project is in progress") {
    console.log("Project is being delay");
}


//Practiced problems
//1. Simple Employee Object
let employee: {
  name: string;
  age: number;
  isWorking: boolean;
} = {
  name: "Rahul",
  age: 25,
  isWorking: true
};

console.log(employee.name);
console.log(employee.age);

if (employee.isWorking) {
  console.log("Employee is working.");
}

//2.Simple Payment
enum PaymentStatus {
  Success = "Success",
  Failed = "Failed"
}

let payment = {
  amount: 500,
  method: "UPI" as string,
  status: PaymentStatus.Success
};

console.log("Amount: ₹" + payment.amount);
console.log("Method: " + payment.method);
console.log("Status: " + payment.status);

//3.Simple User Account
enum AccountStatus {
  Active = "Active",
  Inactive = "Inactive"
}

let user: {
  username: string;
  age: number;
  isVerified: boolean;
  status: AccountStatus;
} = {
  username: "Trinadh",
  age: 22,
  isVerified: true,
  status: AccountStatus.Active
};

console.log(user.username);
console.log(user.age);
console.log(user.status);

//4.Electricity Bill
enum BillStatus {
  Paid = "Paid",
  Pending = "Pending"
}

let bill = {
  customer: "Anil",
  meterNumber: 12345,
  units: 150,
  pricePerUnit: 8,
  paid: false,
  connection: "Residential" as "Residential" | "Commercial",
  discount: undefined as number | undefined,
  status: BillStatus.Pending
};

let total = bill.units * bill.pricePerUnit;

console.log("Customer: " + bill.customer);
console.log("Units: " + bill.units);
console.log("Connection: " + bill.connection);
console.log("Bill Amount: ₹" + total);

if (bill.paid) {
  console.log("Bill is paid.");
} else {
  console.log("Bill is pending.");
}

//5.Flight Booking
enum FlightStatus {
  Confirmed = "Confirmed",
  Delayed = "Delayed",
  Cancelled = "Cancelled"
}

let flight = {
  passenger: "Arun",
  flightNumber: "AI202",
  passengers: 2,
  ticketPrice: 5000,
  classType: "Economy" as "Economy" | "Business",
  passport: undefined as string | undefined,
  status: FlightStatus.Confirmed
};

let totalFlight = flight.passengers * flight.ticketPrice;

console.log("Passenger: " + flight.passenger);
console.log("Flight: " + flight.flightNumber);
console.log("Total: ₹" + total);
console.log("Status: " + flight.status);