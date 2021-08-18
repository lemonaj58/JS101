let contacts = {
  list: [],
  add(name, gender) {
    let contact = new Contact(name, gender);
    this.list.push(contact);
  },
  males() {
    return this.list.filter(function(contact) {
      return contact.gender === 'male';
    });
  },
  females() {
    return this.list.filter(function(contact) {
      return contact.gender === 'female';
    });
  },
  filterByName(name) {
    return this.list.filter(function(contact) {
      return contact.hasName(name);
    });
  },
};

function Contact(name, gender) {
  this.name = name;
  this.gender = gender;
}

function hasNameproto(name) {
  return this.list.contact[name] === true;

}

let useThis = hasNameproto.bind(contacts);

Object.assign(Contact.prototype, useThis());