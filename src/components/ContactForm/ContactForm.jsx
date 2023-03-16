import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css'
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  addContact = e => {
    e.preventDefault();
    this.props.createUser({
      id: nanoid(),
      name: this.state.name,
      number: this.state.number
    });
    e.target.reset();
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    return (
      <form className={css.form}   onSubmit={this.addContact}>
        <p className={css.name}>Name</p>
        <input className={css.input}
          onChange={this.handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <p className={css.name}>Number</p>
        <input className={css.input}
          onChange={this.handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.button} type="submit">Add contact</button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  createUser:PropTypes.func.isRequired
}