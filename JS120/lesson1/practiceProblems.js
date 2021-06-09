//Problem 1 - 3
//I did factory function for my first problem which covers
//problem 1-3 because it uses the same setup.

/*

Attributes
  Title: Mythos
  Author: Stephen Fry

Behavior:
  Get Description

-----------------------------
Attributes
  Title: Me Talk Pretty One Day
  Author: David Sedaris

Behavior:
  Get Description

-----------------------------
Attributes
 Title: Aunts aren't Gentlemen
 Author: PG Wodehouse

 Behavior:
   Get Description
   */

function makeBook(title, author, read = false) {
  let object  = {
    title,
    author,
    read,

    getDiscription() {
      if (this.read) {
        console.log(`${title} was written by ${author}, i have read it`);
      } else {
        console.log(`${title} was writtin by ${author}, i havn't read it`);

      }
    },
    readBook() {
      this.read = true;
    }
  };
  return object;
}

let book1 = makeBook('Mythos', 'stephen fry');
let book2 = makeBook('Me talk pretty one day', 'David Sedaris', false);
let book3 = makeBook("aunts aren;t gentlement", 'PG Wodehouse', true);

book3.getDiscription();
console.log(book2.read);
book1.getDiscription(); // Mythos was written by David Fry. I haven't read it.
book1.readBook();
book1.getDiscription(); // Mythos was written by David Fry. I have read it.

