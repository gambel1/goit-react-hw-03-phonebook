import { ContactListUl, ContactListLi } from './ContactsList.styled';
import PropTypes from 'prop-types';
export default function ContactsList(props) {
  const { deleteContacts, filteredContacts } = props;
  return (
    <>
      <ContactListUl>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactListLi key={id}>
              <span>{name}</span>
              <span>{number}</span>
              <button type="button" onClick={() => deleteContacts(id)}>
                Delete
              </button>
            </ContactListLi>
          );
        })}
      </ContactListUl>
    </>
  );
}

ContactsList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContacts: PropTypes.func.isRequired,
};
