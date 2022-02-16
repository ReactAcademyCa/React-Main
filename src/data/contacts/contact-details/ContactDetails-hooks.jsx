import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ContactApi from '../contact-api/ContactApi';
import ContactForm from './ContactForm';

export default function ContactDetails() {
  const [state, setState] = React.useState({
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    formErrors: {},
  });

  const id = useParams().id;
  const navigate = useNavigate();

  async function getData(id) {
    let contact = await ContactApi.getContact(id);
    setState({ ...contact, formErrors: {} });
  }

  React.useEffect(() => {
    if (id) {
      getData(id);
    }
  }, [id]);

  React.useEffect(() => {
    contactFormIsValid();
  });

  async function submit() {
    if (!contactFormIsValid()) {
      return;
    }
    await ContactApi.saveContact({
      id: state.id || undefined,
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
    });
    navigate('/data/hooks');
  }

  function change(evt) {
    setState({ ...state, [evt.target.name]: evt.target.value });
  }

  function contactFormIsValid() {
    let formErrors = {};

    if (state.firstName.length < 3) {
      formErrors.firstName = `First name needs three letters or more (${state.firstName})`;
    }

    if (state.lastName.length < 3) {
      formErrors.lastName = 'Last name needs three letters or more';
    }

    if (!isEquivalent(state.formErrors, formErrors)) {
      setState({ ...state, formErrors });
    }

    return Object.keys(formErrors).length === 0;
  }

  return (
    <>
      <h1>
        {id
          ? `Contact ${state.firstName} ${state.lastName} `
          : 'Create Contact'}
      </h1>
      <ContactForm {...state} onChange={change} onSubmit={submit} />
    </>
  );
}

function isEquivalent(a, b) {
  // Create arrays of property names
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  // If number of properties is different,
  // objects are not equivalent
  if (aProps.length !== bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];

    // If values of same property are not equal,
    // objects are not equivalent
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  // If we made it this far, objects
  // are considered equivalent
  return true;
}
