import React from "react";
import PropTypes from "prop-types";

const ContactListItem = ({ id, name, number, onRemoveItem }) => {
	return (
		<li>
			<p>
				{name}: {number}
			</p>
			<button type="button" onClick={() => onRemoveItem(id)}>
				Delete Contact
			</button>
		</li>
	);
};

export default ContactListItem;

ContactListItem.propTypes = {
	name: PropTypes.string,
	number: PropTypes.string,
	onRemoveItem: PropTypes.func.isRequired,
};
