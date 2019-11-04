function AddressBook() {
  this.contacts = [],
  this.currentId = 0
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContactsById=function(idx)
{
  for (var i=0; i<this.contacts.length; i++)
  {
    if(this.contacts[i])
    {
    if (this.contacts[i].id===idx)
    {
      return this.contacts[i];
    }
  }
  };
  return false;
}
AddressBook.prototype.deleteContactById=function(idx)
{
  for(var index=0; index<this.contacts.length;index++)
  if(this.contacts[index])
  {
    if(this.contacts[index].id===idx)
    {
      delete this.contacts[index];
      return true;
    }
  }
  }
  return false;
}
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
