// call --> Invoke (execute) a function immediately
//          Explicitly set the value of this inside that function
//           Pass arguments one by one

const info = {
  greet: function (city) {
    console.log(`Hi, I'm ${this.name} from ${city}`);
  }
};

const person2 = { name: "Arun" };

info.greet.call(person2, "Delhi");
// Hi, I'm Arun from Delhi