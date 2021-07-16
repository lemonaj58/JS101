//what do we mean when we say that classes are first class values?
//this means that we can use the values of them in other functions if we want to
//like functions.

//Consider the following class declaration:


class Television {
  static manufacturer() {
    // omitted code
  }

  model() {
    // method logic
  }
}
//What does the static modifier do? How would we call the method manufacturer?
//the static method is stuck to the class, to call it we call it like a static method in
//a constructor Television.manufacturer()

