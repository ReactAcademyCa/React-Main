import { useState } from 'react';
import { Table, Button, Form as F } from 'react-bootstrap';
import { Link, Form } from 'react-router-dom';
import {
  TrashFill,
  Pen,
  ListUl,
  PersonPlusFill,
  CheckSquareFill,
  XSquareFill,
} from 'react-bootstrap-icons';

const ContactTable = ({ contacts, modifyContact, deleteContact }) => {
  const [modificationRow, setModificationRow] = useState(null);

  function modifyRow(id) {
    setModificationRow(id);
  }

  return (
    <Form
      onSubmit={async (evt) => {
        evt.preventDefault();
        setModificationRow(null);
        modifyContact(new FormData(evt.target));
      }}
    >
      <Table striped>
        <thead>
          <tr>
            <th className='text-muted' style={{ maxWidth: 70 }}>
              id
            </th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) =>
            contact.id === modificationRow ? (
              <EditRow key={contact.id} contact={contact} setRow={modifyRow} />
            ) : (
              <Row
                key={contact.id}
                contact={contact}
                setRow={modifyRow}
                deleteContact={deleteContact}
              />
            )
          )}
        </tbody>
        <tfoot>
          {modificationRow === 0 ? (
            <EditRow contact={{ id: 0 }} setRow={modifyRow} />
          ) : (
            <tr>
              <td colSpan={5}>
                <Button
                  title='Create Contact'
                  variant='primary'
                  onClick={() => {
                    setModificationRow(0);
                  }}
                >
                  <PersonPlusFill /> Create Contact
                </Button>
              </td>
            </tr>
          )}
        </tfoot>
      </Table>
    </Form>
  );
};

export default ContactTable;

function Row({ contact, setRow, deleteContact }) {
  return (
    <tr key={contact.id}>
      <td
        style={{ maxWidth: 70 }}
        className='align-middle text-muted text-truncate'
        title={contact.id}
      >
        {contact.id}
      </td>
      <td className='align-middle'>{contact.firstName}</td>
      <td className='align-middle'>{contact.lastName}</td>
      <td className='align-middle'>
        <a href={`mailto:{contact.email}`}>{contact.email}</a>
      </td>
      <td className='align-middle'>
        <Button
          variant='primary'
          className='me-3'
          title='Edit'
          onClick={() => {
            setRow(contact.id);
          }}
        >
          <Pen />
        </Button>

        <Link to={`/data/details-data-router/${contact.id}`}>
          <Button variant='secondary' className='me-3' title='Details'>
            <ListUl />
          </Button>
        </Link>
        <Button
          title='Delete'
          variant='danger'
          onClick={() => deleteContact(contact.id)}
        >
          <TrashFill />
        </Button>
      </td>
    </tr>
  );
}

function EditRow({ contact, setRow }) {
  return (
    <tr key={contact.id} className='bg-warning'>
      <td
        style={{ maxWidth: 70 }}
        className='align-middle text-muted text-truncate'
        title={contact.id}
      >
        <F.Control
          name='id'
          placeholder='ID'
          defaultValue={contact.id}
          readOnly
        />
      </td>
      <td className='align-middle'>
        <F.Control
          name='firstName'
          placeholder='First Name'
          defaultValue={contact.firstName}
        />
      </td>
      <td className='align-middle'>
        <F.Control
          name='lastName'
          placeholder='Last Name'
          defaultValue={contact.lastName}
        />
      </td>
      <td className='align-middle'>
        <F.Control
          name='email'
          placeholder='name@email.com'
          defaultValue={contact.email}
        />
      </td>
      <td className='align-middle'>
        <Button variant='success' className='me-3' title='Save' type='submit'>
          <CheckSquareFill />
        </Button>
        <Button
          variant='warning'
          className='me-3'
          title='Cancel'
          onClick={() => {
            setRow(null);
          }}
        >
          <XSquareFill />
        </Button>
      </td>
    </tr>
  );
}
