function AddressBook() {
    this.contacts = []
}

AddressBook.prototype.addContact = function(contact) {
    this.contacts.push(contact)
}

AddressBook.prototype.getContact = function(i) {
    return this.contacts[i]
}

AddressBook.prototype.deleteContact = function(i) {
    return this.contacts.splice(i, 1)
}
