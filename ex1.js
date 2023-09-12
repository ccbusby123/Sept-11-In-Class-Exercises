//Function #1
firstFunction () {

};
console.log (this);

//Function #2 as an object method
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

//Function #3 arrow function inside an object
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : () => {
    return this.firstName + " " + this.lastName;
  }
};