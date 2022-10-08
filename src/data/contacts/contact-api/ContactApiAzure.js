import './ContactTypes';

const base = 'https://contacts.reactacademy.live/api';

export default class ContactApi {
  static getAllContacts() {
    return fetch(`${base}/contacts`).then((resp) => resp.json());
  }

  static getContact(contactId) {
    return fetch(`${base}/contacts/${contactId}`).then((resp) => resp.json());
  }

  static saveContact(contact) {
    // Simulate server-side validation
    const minContactLength = 3;
    if (contact.firstName.length < minContactLength) {
      throw new Error(
        `First Name must be at least ${minContactLength} characters.`
      );
    }

    if (contact.lastName.length < minContactLength) {
      throw new Error(
        `Last Name must be at least ${minContactLength} characters.`
      );
    }

    if (contact.id) {
      //if id, update contact
      return fetch(`${base}/contacts/${contact.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact), // body data type must match "Content-Type" header
      });
    } else {
      //if no id, create contact
      return fetch(`${base}/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact), // body data type must match "Content-Type" header
      }).then((resp) => resp.json());
    }
  }

  static deleteContact(contactId) {
    return fetch(`${base}/contacts/${contactId}`, { method: 'DELETE' });
  }

  // static async getAllContacts() {
  //   const resp = await fetch("/contacts");
  //   if(resp.ok) {
  //     return resp.json();
  //   }
  //   throw new Error('Network response was not ok.');
  // }
}
