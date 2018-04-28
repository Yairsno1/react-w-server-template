import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AnswerCtrl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: NaN,
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Verify that the input value is always valid number
  handleChange(event) {
    const tmpValue = Number(event.target.value.trim());

    //Todo: handle leading zero
    if (isNaN(tmpValue)) {
      this.setState((currState, props) => ({
        value: isNaN(currState.value) ? '' : currState.value,
      }));
      //const currValue = this.state.value;
      //event.target.value = isNaN(currValue) ? '' : currValue.toString();
    } else {
      this.setState({value: tmpValue});
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const answer = this.state.value;
    if (answer !== '' && !isNaN(answer)) {
      this.setState({submitted: true});
      this.props.submitAnswer(answer);
    }
  }

  render() {
    const submitBtnClassItems = [
      'w3-button',
      'hp-btn',
      'w3-circle',
      'w3-xlarge',
      'w3-black',
      'w3-text-' + this.props.submitBtnColor,
      'w3-hover-black'];

      const labelClassItems = [
        'w3-padding-16',
        'fa fa-calculator',
        'w3-xxlarge',
        'w3-text-black',
        this.state.submitted ? 'w3-spin' : ''];

    return (
      <form className="w3-container w3-center hp-answer" onSubmit={this.handleSubmit}>
        <label>
          <span className={labelClassItems.join(' ')}></span>
          <input
            type="text"
            name="answer"
            dir="ltr"
            className="w3-xlarge w3-input hp-input w3-border w3-center"
            autoFocus
            autoComplete={"off"}
            value={isNaN(this.state.value) ? '' : this.state.value}
            onChange={this.handleChange}/>
        </label>
        <p className="w3-center">
          <button type="submit" className={submitBtnClassItems.join(' ')}>
            <b>=</b>
          </button>
        </p>
      </form>
    );
  }
}

AnswerCtrl.propTypes = {
  submitBtnColor: PropTypes.string.isRequired,
  submitAnswer: PropTypes.func.isRequired,
};

export default AnswerCtrl;
