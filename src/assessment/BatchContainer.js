import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import FlatButton from 'material-ui/FlatButton'
import BatchItem from './BatchItem'
import BatchEditor from './BatchEditor'
import action from '../actions/batch/setChosenStudent';

class BatchContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      chosenStudent: '',
    }
  }


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
  let studentCategory = this.props.batch.filter(student => student.evaluation === category);

  let randomNumber = Math.floor(Math.random() * studentCategory.length);
  let chosenStudent = studentCategory[randomNumber];
  // this.setState({chosenStudent : chosenStudent});
  // hier roep  je je action aan een geef je de chosenStudent als argument mee!!
  this.props.dispatch(action(chosenStudent));

}

renderStudents() {
  if (this.props.setStudent.name){
    return <BatchItem key='index' { ...this.props.setStudent } />
  }else {
    return this.props.batch.map(this.renderBatch)
  }

}

getCountStudents(color) {

  let count = this.props.batch.filter(student => student.evaluation === color).length;

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
        { this.renderStudents()}
      </main>
      </table></th>
      <FlatButton label="Ask a Question" onClick={this.handleOnClick.bind(this)} />
    </div>
    )
  }
}

const mapStateToProps = ({ batch, setStudent}) => ({ batch, setStudent})


export default connect(mapStateToProps) (BatchContainer)
