import React, { Component } from "react";
import SubmitForm from "./SubmitForm";
import ContactsList from "./ContactsList";
import { v4 as uuidv4 } from "uuid";
import SearchFilter from "./SearchFilter";

export default class App extends Component {
	state = {
		contacts: [],
		filter: "",
	};

	componentDidMount() {
		const savedContacts = localStorage.getItem("contacts");
		if (savedContacts) {
			this.setState({ contacts: JSON.parse(savedContacts) });
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState !== this.state.contacts) {
			localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
		}
	}

	addContact = (name, number) => {
		const contact = {
			id: uuidv4(),
			name,
			number,
		};
		if (this.state.contacts.some((contact) => contact.name === name)) {
			return alert(`${contact.name} is already in the Phonebook`);
		}
		this.setState((prevState) => {
			return {
				contacts: [...prevState.contacts, contact],
			};
		});
	};

	changeFilter = (filter) => {
		this.setState({ filter });
	};

	getVisibleContacts = () => {
		const { contacts, filter } = this.state;
		return contacts.filter((contact) =>
			contact.name.toLowerCase().includes(filter.toLowerCase())
		);
	};

	removeItem = (contactID) => {
		this.setState((prevState) => {
			return {
				contacts: prevState.contacts.filter(({ id }) => id !== contactID),
			};
		});
	};

	render() {
		const { contacts, filter } = this.state;

		const visibleTasks = this.getVisibleContacts();

		return (
			<>
				<h2>Phonebook</h2>
				<SubmitForm onAddContact={this.addContact} />
				<h3>Find Contacts by name</h3>
				<SearchFilter value={filter} onChangeFilter={this.changeFilter} />
				{contacts.length > 0 && (
					<ContactsList
						contacts={visibleTasks}
						onRemoveItem={this.removeItem}
					/>
				)}
			</>
		);
	}
}
