const person = {
    name: "Nabeel",
    age: 21,
    country: "PAK",
    semester: "Fall 2021",
    cms: "123456",
    details: [
      { contactNumber: "123-456-7890", email: "nabeel@gmail.com" },
      { contactNumber: "987-654-3210", email: "arain@gmail.com" },
      { contactNumber: "555-555-5555", email: "Arain3@gmail.com" }
    ]
  };
  
  function printObjectValues(obj) {
    for (const key in obj) {
      if (typeof obj[key] !== "object") {
        console.log(obj[key]);
      } else {
        for (const innerObj of obj[key]) {
          for (const innerKey in innerObj) {
            console.log(innerObj[innerKey]);
          }
        }
      }
    }
  }
  printObjectValues(person);
  