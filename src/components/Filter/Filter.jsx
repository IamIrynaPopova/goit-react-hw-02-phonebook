import { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  state = {
    filter: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
    this.props.filter(target.value);
  };

  render() {
    return (
      <>
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input
          onChange={this.handleChange}
          type="text"
          name="filter"
          value={this.state.filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </>
    );
  }
}

Filter.propTypes = {
    filter: PropTypes.func.isRequired
      };