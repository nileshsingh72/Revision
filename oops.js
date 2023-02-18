// function Myobject1(f, l, a) {
//   this.fname = f;
//   this.lname = l;
//   this.a = a;
// }

// function Myobject(f, l, a) {
//   this.fname = f;
//   this.lname = l;
//   this.a = a;
// }
// Myobject.prototype.getName = function () {
//   console.log(this.fname + " " + this.lname);
// };

// // arrow function are not working
// Myobject1.prototype.__proto__ = Object.create(Myobject.prototype);
// let obj1 = new Myobject("nilesh", "singh", 22);
// let obj11 = new Myobject1("NNnilesh", "singh", 22);
// console.log(obj11.getName());

// let obj = {
//   name: "Nilesh",
// };
// console.log(obj);

// class person {
//   constructor() {
//     console.log("ji");
//   }
// }
// let p1 = new person();

// function Person(fn, ln) {
//   this.fname = fn;
//   this.lname = ln;
// }
// Person.prototype.getName = function getName() {
//   console.log(this.fname);
// };
// function Living() {}
// Living.prototype.lfn = function () {
//   console.log("living here");
// };
// Person.prototype.__proto__ = Living.prototype;
// let p2 = new Person("Kuldeep", "singh");

// console.log(p2.lfn());

// let impobj = {
//   sayhi() {
//     console.log("hi");
//   },
// };
// class person {
//   constructor(name) {
//     this.name = name;
//     this.age = 22;
//   }
//   getname() {
//     console.log(this.name);
//   }
// }

// class manager extends person {
//   constructor(name, d) {
//     super(name);
//     this.department = d;
//   }
//   //   msg() {
//   //     console.log("message here");
//   //   }
//   //   info() {
//   //     super.getname();
//   //   }
// }
// // let m1 = new manager("kuldeep", "mern");
// Object.assign(manager.prototype, impobj);
// let m1 = new manager("kudeep", "mern");
// console.log(m1);

// class Main {
//   constructor(f, l) {
//     this.Fname = f;
//     this.Lname = l;
//   }

//   getName() {
//     console.log(this.Fname + " " + this.Lname);
//   }
// }

// class subclass extends Main {
//   constructor(pf, pl, a) {
//     super(pf, pl, a);
//     this.age = a;
//   }
// }

// let main1 = new Main("NIlesh", "Singh");

// let subclass1 = new subclass("Nilesh", "Singh", 22);
// // console.log(main1);
// // console.log(subclass1);

// class addA {
//   add() {
//     console.log("addtion");
//   }
// }

// class addB {
//   add() {
//     console.log(10 + 20);
//   }
// }
// let x = new addA();
// let y = new addB();
// console.log(x.add());
// console.log(y.add());

// #public data .. private data

// class example {
//   #name = "";
//   constructor(name) {
//     this.#name = name;
//   }

//   getName() {
//     console.log(this.#name);
//   }
// }
// let ex1 = new example("Masai");
// console.log(ex1.getName());

// #Mixin

let objimp = {
  impfunction() {
    console.log("this is imp things....");
  },
};

class Parent {
  get() {
    console.log("Parent..........");
  }
}

class Child extends Parent {
  constructor(name) {
    super();
    this.name = name;
  }
}
Object.assign(Child.prototype, objimp);
let child1 = new Child("Nilesh");
console.log(child1.impfunction());
