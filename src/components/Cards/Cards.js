import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { convertToDateFormat } from 'utils/HelperMethods';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './Cards.css';

class Cards extends Component {
  static propTypes = {
    heading: PropTypes.string.isRequired,
    notes: PropTypes.array.isRequired,
    deleteNote: PropTypes.func.isRequired,
    editNote: PropTypes.func.isRequired,
    handleCardClick: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps() {
    this.setState({});
  }

  render() {
    return (
      <div className={`${s.formContainer} custom-scrollbar`}>
        <div className={s.heading}> {this.props.heading}</div>
        {this.props.notes.map((note, i) => (
          <div className={s.card}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <img
                src="/images/delete.svg"
                alt="delete"
                width="18px"
                role="presentation"
                style={{ cursor: 'pointer', marginRight: '8px' }}
                onClick={() => this.props.deleteNote(i)}
              />
              <img
                src="/images/edit.svg"
                alt="delete"
                width="18px"
                role="presentation"
                style={{ cursor: 'pointer' }}
                onClick={() => this.props.editNote(i, note)}
              />
            </div>
            <div
              role="presentation"
              onClick={() => this.props.handleCardClick(note, i)}
            >
              <div style={{ display: 'flex', marginBottom: '12px' }}>
                <div className={s.index}>{i + 1}</div>
                <div className={s.title} title={note.title}>
                  {note.title}
                </div>
              </div>
              {convertToDateFormat(note.selectedDate)}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default withStyles(s)(Cards);
