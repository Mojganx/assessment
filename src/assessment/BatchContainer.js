import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import FlatButton from 'material-ui/FlatButton'
import BatchItem from './BatchItem'
import BatchEditor from './BatchEditor'

class BatchContainer extends PureComponent {
  renderBatch(batch, index) {

    return <BatchItem key={index} { ...batch } />
  }

  handleOnClick(event) {
    event.preventDefault();
    console.log('handleOnClick');
    this.chooseStudent();
    //hier een functie aanroepen --> wat wil ik? Een actie
  }

  chooseCategory() {
     let random = Math.floor(Math.random() * 10 )

     let category = 'yellow'

     if (random < 6) {
       category = 'red'
     }
     if (random > 8) {
       category = 'green'
     }
     return category
  }

chooseStudent() {
  let category = this.chooseCategory();
  let studentCategory = [];

  this.props.batch.map(student => {
    if (student.evaluation === category) {
      studentCategory.push(student)
    }
  });

  let randomStudent = Math.floor(Math.random() * studentCategory.length);
  let askStudent = studentCategory[randomStudent].name;

  console.log('student', askStudent, studentCategory[randomStudent].evaluation)
}

renderStudents() {
  this.props.batch.map(this.renderBatch)
}

getCountStudents(color) {

  let count = this.props.batch.filter(function(student) {
    return student.evaluation === color;
  }).length;

  let percentage = count / 10 * 100;
  percentage = percentage + " %";

  return percentage;
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
      <th><table>
      <main>
        { this.props.batch.map(this.renderBatch) }
      </main>
      </table></th>
      <FlatButton label="Ask a Question" onClick={this.handleOnClick.bind(this)} />
    </div>
    )
  }
}

const mapStateToProps = ({ batch}) => ({ batch})


export default connect(mapStateToProps) (BatchContainer)
