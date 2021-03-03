function AddressBook() {
    this.contacts = []
    this.initialComplete = false
}
//Asynchronous sample
AddressBook.prototype.getInitialContacts = function(cb) {
    var self = this

    setTimeout(function() {
        self.initialComplete = true
        if(cb) {
            return cb()
        }
    }, 3)
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
