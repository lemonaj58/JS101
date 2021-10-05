/* eslint-disable max-lines-per-function */
const Todo = require("./todo.js");
const TodoList = require("./todolist.js");

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('calling toArray returns the list in an array form', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test('calling first, to make sure the first item is correct', () => {
    expect(list.first()).toEqual(todo1);
  });

  test('calling last to make sure the last item is correct', () => {
    expect(list.last()).toEqual(todo3);
  });


  test('shift() removes first item in list and returns it', () => {
    let todo = list.shift();
    expect(todo).toEqual(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test('pop() removes last item in the list and returns it', () => {
    let todo = list.pop();
    expect(todo).toEqual(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test('isDone returns correctly if all items are done or not', () => {
    expect(list.isDone()).toEqual(false);
    list.markAllDone();
    expect(list.isDone()).toEqual(true);
  });

  test('add throws error when non todo item is added', () => {
    expect(() => list.add(1)).toThrow(TypeError);
    expect(() => list.add('hi')).toThrow(TypeError);
  });

  test('itemAt returns the item at given index', () => {
    expect(list.itemAt(0)).toEqual(todo1);
    expect(list.itemAt(1)).toEqual(todo2);
    expect(() => list.itemAt(5)).toThrow(ReferenceError);
  });

  test('MarkDoneAt returns if item at specific index is done', () => {
    expect(() => list.markDoneAt(6)).toThrow(ReferenceError);

    list.markDoneAt(1);
    expect(todo1.isDone()).toBe(false);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(false);
  });

  test('markUndoneAt makes it so an item is not done', () => {
    expect(() => list.markUndoneAt(6)).toThrow(ReferenceError);
    list.markAllDone();
    expect(todo1.isDone()).toEqual(true);
    list.markUndoneAt(1);
    expect(todo2.isDone()).toEqual(false);
  });

  test('markAllDone marks all todos in list done', () => {
    list.markAllDone();
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);
    expect(list.isDone()).toBe(true);
  });

  test('removeAt removes todo at given index', () => {
    expect(() => list.removeAt(6)).toThrow(ReferenceError);
    list.removeAt(1);
    expect(list.toArray()).toEqual([todo1, todo3]);
  });

  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(string);
  });

  test('toString returns different string for done todo', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[X] Clean room
[ ] Go to the gym`;

    list.markDoneAt(1);

    expect(list.toString()).toBe(string);
  });

  test('toString returns different string for all done todos', () => {
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;

    list.markAllDone();

    expect(list.toString()).toBe(string);
  });

  test('filter returns new TodoList object with filtered todos', () => {
    todo1.markDone();
    let newList = new TodoList(list.title);
    newList.add(todo1);

    expect(newList.title).toBe(list.title);

    let doneItems = list.filter(todo => todo.isDone());
    expect(doneItems.toString()).toBe(newList.toString());
  });

  test('forEach iterates over all todos', () => {
    let result = [];
    list.forEach(todo => result.push(todo));

    expect(result).toEqual([todo1, todo2, todo3]);
  });

  test('findByTitle returns the right title that we intend to do.', () => {
    expect(list.findByTitle('Buy milk')).toEqual(todo1);
    expect(list.findByTitle('Clean room')).toEqual(todo2);
    expect(list.findByTitle('Go to the gym')).toEqual(todo3);
  });

  test('see if alldone works,as we change if done', () => {
    list.markAllDone();
    expect(list.allDone()).toEqual([todo1, todo2, todo3]);
  });

  test('see if all not done returns correct list of not done items.', () => {
    expect(list.allNotDone()).toEqual([todo1, todo2, todo3]);
    list.markAllDone();
    expect(list.allNotDone()).toEqual([]);
    list.markAllUndone();
    list.markDone('Buy milk');
    expect(list.allNotDone()).toEqual([todo2, todo3]);
  });


});