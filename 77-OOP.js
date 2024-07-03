class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.loggedIn = false;
  }

  login(inputPassword) {
    if (inputPassword === this.password && this.loggedIn) {
      this.loggedIn = true;
      console.log(`${this.username} has logged in.`);
    } else if (!this.loggedIn) {
      console.log("Please log in first");
    } else {
      console.log("invalid password");
    }
  }
  verifyAuth() {
    if (this.loggedIn) {
      console.log(`Welcome ${this.username}! here is your email ${this.email}`);
    } else {
      console.log("Please Log in first");
    }
  }
  logout() {
    this.loggedIn = false;
    console.log(`${this.username} has logged out.`);
  }
}

const user1 = new User("Jgarette0", "Jgarette@gmail.com", "bomtaratarat");
console.log(user1.verifyAuth());
console.log(user1.login("bomtaratarat"));
console.log(user1.logout());
// class Car {
//   constructor() {
//     thn";
//     this.release = 2022;is.color = "yellow";
//     this.brand = "McLare
//   }
//   carDetail() {
//     return this.brand + " " + this.color + " " + this.release;
//   }
// }

// const myCar = new Car();
// console.log(myCar.carDetail());s
