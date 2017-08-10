import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'
import BatchItem from './BatchItem'
import selectStudent from '../actions/batch/studentActions';
import {bindActionCreators} from 'redux';

class BatchContainer extends PureComponent {

  renderBatch(batch, index) {
    return <BatchItem key={index} { ...batch } />;
  }

  renderStudents() {
    if (this.props.setStudent.name){
      return <BatchItem key='index' { ...this.props.setStudent } />;
    }else {
      return this.props.batch.map(this.renderBatch);
    }
  }

  render(){
    return(
      <div className="Batch wrapper">
      <header>
        <div className="legenda">
          <h1> Percentage students </h1>
          <div className="red"> {this.getCountStudents("red")}</div>
          <div className="yellow"> {this.getCountStudents("yellow")}</div>
          <div className="green"> {this.getCountStudents("green")}</div>
        </div>
      </header>
      <main>
        { this.renderStudents()}
      </main>
      <FlatButton label="Ask a Question" onClick={this.handleOnClick.bind(this)} />
    </div>
    )
  }

  handleOnClick(event) {
    event.preventDefault();
    this.chooseStudent();
  }

  chooseCategory() {
     let random = Math.floor(Math.random() * 10 );
     let category = 'yellow';

     if (random < 6) {category = 'red'};
     if (random > 8) {category = 'green'};

     return category;
  }

  chooseStudent() {
    let category = this.chooseCategory();
    let studentCategory = this.props.batch.filter(student => student.evaluation === category);

    let randomNumber = Math.floor(Math.random() * studentCategory.length);
    let chosenStudent = studentCategory[randomNumber];
    this.props.selectStudent(chosenStudent);
  }

  getCountStudents(color) {
    let count = this.props.batch.filter(student => student.evaluation === color).length;
    let percentage = count / 10 * 100;
    percentage = percentage + " %";

    return percentage;
  }

}

const mapStateToProps = ({ batch, setStudent}) => ({ batch, setStudent});
const mapDispatchToProps = (dispatch) =>  bindActionCreators({selectStudent : selectStudent}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (BatchContainer);
