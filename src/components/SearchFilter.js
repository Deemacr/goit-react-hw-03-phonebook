import React from "react";
import PropTypes from "prop-types";

export default function SearchFilter({ value, onChangeFilter }) {
	return (
		<div>
			<input
				type="text"
				value={value}
				onChange={(e) => onChangeFilter(e.target.value)}
			/>
		</div>
	);
}

SearchFilter.propTypes = {
	value: PropTypes.string.isRequired,
	onChangeFilter: PropTypes.func.isRequired,
};
