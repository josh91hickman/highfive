import React from 'react';
import { Grid, Row, Col, Image, Button, FormGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createInterview } from '../../actions/company';
import InterviewFormJun from './InterviewCreationJun';
import InterviewFormSen from './InterviewCreationSen';
import InterviewFormMid from './InterviewCreationMid';
import PositionsLevel from './PositionsLevel';


class Positions extends React.Component {
  //renderPositions() {
  //map over get and render all positions for company id and position id
  // }
  render() {
    console.log(this.props.companyProfile.createButton, '++++++++++++++++++++++++++++++');
    console.log('companyProfile', this.props.companyProfile)
    return (
      <div>
        <div>
        {this.props.companyProfile.createButton === false ?
            <PositionsLevel /> : ''}
        </div>
        <div>
          {this.props.companyProfile.createButton && this.props.companyProfile.junior ?
            <InterviewFormJun /> : ''}
        </div>
        <div>
          {this.props.companyProfile.createButton && this.props.companyProfile.senior ?
            <InterviewFormSen /> : ''}
        </div>
        <div>
          {this.props.companyProfile.createButton && this.props.companyProfile.mid ?
            <InterviewFormMid /> : ''}
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    companyProfile: state.companyProfile
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createInterview }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Positions);