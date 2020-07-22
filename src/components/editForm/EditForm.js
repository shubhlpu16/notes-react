// eslint-disable-file
// import 'date-fns';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import DateFnsUtils from '@date-io/date-fns';
// import { KeyboardDatePicker } from '@material-ui/pickers';
// import MuiPickersUtilsProvider from '@material-ui-pickers/utils/MuiPickersUtilsProvider';
import withStyles from 'isomorphic-style-loader/withStyles';
// import { Button } from 'react-bootstrap';
import s from './EditForm.css';

class EditForm extends Component {
  static propTypes = {
    heading: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    handleDiscard: PropTypes.func.isRequired,
    handleSave: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description,
      selectedDate: new Date(),
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSave = () => {
    this.props.handleSave({ ...this.state, index: this.props.index });
  };

  render() {
    return (
      <div className={s.formContainer}>
        <div className={s.heading}> {this.props.heading}</div>
        <form>
          <div className={s.label}>Title</div>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Title"
          />
          <div className={s.label}>Desciption</div>
          <textarea
            rows="5"
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="Description"
          />
          <div className={s.buttonContainer}>
            <button
              type="button"
              onClick={() => this.handleSave()}
              style={
                this.state.title === ''
                  ? { cursor: 'not-allowed' }
                  : { cursor: 'pointer' }
              }
              disabled={this.state.title === ''}
            >
              Save
            </button>
            <button type="button" onClick={this.props.handleDiscard}>
              Discard
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(s)(EditForm);
