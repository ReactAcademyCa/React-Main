import React from 'react';
import ContactApi from '../contact-api/contact-api';
import ContactForm from './contact-form';

export default class ContactDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: 0, firstName: '', lastName: '', formErrors: {} };
  }

  async componentDidMount() {
    if (this.props.match.params.id) {
      let contact = await ContactApi.getContact(this.props.match.params.id);
      this.setState(contact);
    }
  }

  submit = async () => {
    if (!this.contactFormIsValid()) {
      return;
    }

    await ContactApi.saveContact({
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    });
    this.props.history.push('/contacts');
  };

  change = evt => {
    this.setState(
      { [evt.target.name]: evt.target.value },
      this.contactFormIsValid
    );
  };

  contactFormIsValid = () => {
    let formErrors = {};

    if (this.state.firstName.length < 3) {
      formErrors.firstName = `First name needs three letters or more (${this.state.firstName})`;
    }

    if (this.state.lastName.length < 3) {
      formErrors.lastName = 'Last name needs three letters or more';
    }

    this.setState({ formErrors });
    return Object.keys(formErrors).length === 0;
  };

  render = () => (
    <>
      <h1>
        {this.props.match.params.id
          ? `Contact ${this.state.firstName} ${this.state.lastName} `
          : 'Create Contact'}
      </h1>
      <ContactForm
        {...this.state}
        onChange={this.change}
        onSubmit={this.submit}
      />
    </>
  );
}
