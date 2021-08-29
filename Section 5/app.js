// Person constructor
function Person(name, dob) {
   this.name = name;
   // this.age = age;
   this.birthday = new Date(dob);
   // console.log(this);
   this.calculateAge = function(){
      const diff = Date.now() - this.birthday.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
   }
}

// const shlocky = new Person('Shlocky', 50);
// const rusty = new Person('Rusty', 17);

const shlocky = new Person('Shlocky', '06-22-1971');
console.log(shlocky.calculateAge());