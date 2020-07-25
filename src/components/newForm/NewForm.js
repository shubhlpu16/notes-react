// eslint-disable-file
// import 'date-fns';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import withStyles from 'isomorphic-style-loader/withStyles';
import style from 'react-calendar/dist/Calendar.css';
import s from './NewForm.css';

class NewForm extends Component {
  static propTypes = {
    heading: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
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

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.title,
      description: nextProps.description,
    });
  }

  render() {
    return (
      <div className={s.formContainer}>
        <div className={s.heading}> {this.props.heading}</div>
        <Calendar
          className={style.reactCalendar}
          value={this.state.selectedDate}
          onChange={value => this.setState({ selectedDate: value })}
        />
        <form>
          <div className={s.label}>Title</div>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.props.handleChange}
            placeholder="Title"
          />
          <div className={s.label}>Desciption</div>
          <textarea
            rows="5"
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.props.handleChange}
            placeholder="Description"
          />
          <div className={s.buttonContainer}>
            <button
              className={s.action}
              type="button"
              onClick={() => this.props.handleSave(this.state)}
              style={
                this.state.title === ''
                  ? { cursor: 'not-allowed' }
                  : { cursor: 'pointer' }
              }
              disabled={this.state.title === ''}
            >
              Save
            </button>
            <button
              className={s.action}
              type="button"
              onClick={this.props.handleDiscard}
            >
              Discard
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(s, style)(NewForm);
