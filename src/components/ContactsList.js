import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "./ContactListItem";

const ContactList = ({ contacts, onRemoveItem }) => (
	<ul>
		<h2>Contacts</h2>

		{contacts.map(({ id, name, number }) => (
			<ContactListItem
				key={id}
				id={id}
				name={name}
				number={number}
				onRemoveItem={onRemoveItem}
			/>
		))}
	</ul>
);

export default ContactList;

ContactList.propTypes = {
	contacts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string,
			number: PropTypes.string,
		})
	).isRequired,
	onRemoveItem: PropTypes.func.isRequired,
};
