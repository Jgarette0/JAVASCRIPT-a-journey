//Single Responsibility Principle

// class CalorieTracker {
//   constructor(maxCalories) {
//     this.maxCalories = maxCalories;
//     this.currentCalories = 0;
//   }

//   myIntake(calorieCount) {
//     this.currentCalories += calorieCount;
//     if (this.currentCalories >= this.maxCalories) {
//       this.calorieLimitMsg();
//     } else {
//       this.calorieIniffecient();
//     }
//   }

//   calorieLimitMsg() {
//     console.log("You achieve the calories intake for today");
//   }

//   calorieIniffecient() {
//     console.log(
//       `Your calorie intake is only  ${this.currentCalories} and is not enough`
//     );
//   }
// }

// const calorieTracker = new CalorieTracker(2000);
// calorieTracker.myIntake(500);

//above is not adhering to the principle of single responsibility

function calorieLimitMsg(message) {
  console.log(message);
}
function calorieIniffecient(msg) {
  console.log(msg);
}

class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  myIntake(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories >= this.maxCalories) {
      calorieLimitMsg("You achieve the calories intake for today");
    } else {
      calorieIniffecient(
        `Your calorie intake is only  ${this.currentCalories} and is not enough`
      );
    }
  }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.myIntake(600);
