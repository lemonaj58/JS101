//1
// eslint-disable-next-line max-lines-per-function
function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${this.morning} ${this.name}`;
          break;
        case 'afternoon':
          msg += `${this.afternoon} ${this.name}`;
          break;
        case 'evening':
          msg += `${this.evening} ${this.name}`;
          break;
      }

      console.log(msg);
    },
  };
}

let helloVictor = createGreeter('victor');
helloVictor.greet('morning');

//2

let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let discount = this.price * (percent / 100);
    return this.price - discount;


  },
};

console.log(item.discount(20));   // should return 40
//= 40
console.log(item.discount(50));   // should return 25
//= 20
console.log(item.discount(25));   // should return 37.5
//= 15

function objectEqual(obj1, obj2) {
  let objectsAreEqual = true;
  let obj1Entries = Object.entries(obj1);
  let obj2Entries = Object.entries(obj2);
  let length = obj1Entries.length > obj2Entries.length ?
    obj1Entries.length : obj2Entries.length;
  for (let index = 1; index <= length; index += 1) {
    objectsAreEqual = obj2Entries[index] === obj1Entries[index];
    if (!objectsAreEqual) break;
  }

  return objectsAreEqual;
}

console.log(objectEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectEqual({}, {}));                                      // true
console.log(objectEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false


// eslint-disable-next-line max-lines-per-function
function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    info: function() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    listCourses: function() {
      return this.courses;
    },

    addCourse: function(course) {
      this.courses.push(course);
    },

    addNote: function(courseCode, note) {
      let course = this.courses.filter(course => {
        return course.code === courseCode;
      })[0];

      if (course) {
        if (course.note) {
          course.note += `; ${note}`;
        } else {
          course.note = note;
        }
      }

    },

    viewNotes: function() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },

    updateNote: function(courseCode, note) {
      let course = this.courses.filter(course => {
        return course.code === courseCode;
      })[0];

      if (course) {
        course.note = note;
      }
    },
  };
}

let foo = createStudent('foo', '1st');
foo.info();
foo.listCourses();

foo.addCourse({name: 'Math', code: 101});
foo.addCourse({name: 'advances math', code: 102});
foo.listCourses();

foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();

foo.addNote(102, 'Difficult subject');
foo.viewNotes();
foo.updateNote(101, 'Fun course');
foo.viewNotes();