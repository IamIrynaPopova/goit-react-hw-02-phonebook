import { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactItem extends Component {

  handleDelete = () => {
    const { deleteItem, id } = this.props;
    deleteItem(id);
  };

  render() {
    const { name, number } = this.props;
    return (
      <>
        <li>
          {name}: {number}
          <button type="button" onClick={this.handleDelete}>
            Delete
          </button>
        </li>
      </>
    );
  }
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteItem: PropTypes.func.isRequired,
  };