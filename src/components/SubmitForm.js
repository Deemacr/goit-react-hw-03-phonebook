import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const FormOverlay = styled.form`
	width: 25%;
	border: 2px solid black;
	padding: 10px;
`;

const NameLabel = styled.label`
	display: block;
	margin-top: 10px;
`;

const StyledLabelName = styled.span`
	display: block;
	margin-bottom: 10px;
`;
const StyledInput = styled.input`
	display: block;
`;

const NumberLabel = styled.label`
	display: block;
	margin-top: 10px;
`;

const SubmitButton = styled.button`
	display: block;
	margin-top: 25px;
`;
export default class SubmitForm extends Component {
	state = { name: "", number: "" };

	handleSubmit = (e) => {
		const { name, number } = this.state;
		e.preventDefault();
		this.props.onAddContact(name, number);
		this.setState({ name: "", number: "" });
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { name, number } = this.state;
		return (
			<FormOverlay onSubmit={this.handleSubmit}>
				<NameLabel>
					<StyledLabelName>Name</StyledLabelName>
					<StyledInput
						type="text"
						name="name"
						value={name}
						onChange={this.handleChange}
					/>
				</NameLabel>
				<NumberLabel>
					<StyledLabelName>Number</StyledLabelName>
					<StyledInput
						type="number"
						name="number"
						value={number}
						onChange={this.handleChange}
					/>
				</NumberLabel>
				<SubmitButton type="submit">Add Contact</SubmitButton>
			</FormOverlay>
		);
	}
}

SubmitForm.propTypes = {
	onAddContact: PropTypes.func.isRequired,
};
