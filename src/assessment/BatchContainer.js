import React, { PureComponent } from 'react'
import Title from '../components/Title'
import FlatButton from 'material-ui/FlatButton'

class BatchContainer extends PureComponent {
  renderBatch(batch, index) {
    console.log('renderBatch', batch, index);
    return (
      <article className="batch">
        <h1>{ batch.name }</h1>
        <div>
          <img src={ batch.photo } />
        </div>
      </article>
    )
  }

  handleOnClick(event) {
    event.preventDefault();
    console.log('handleOnClick');
    this.chooseStudent();
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

  render(){
    return(
      <div className="Batch wrapper">
      <header>
        <Title content="Welcome Batch #9" />
        <Title name="Moj you are so Awesome" />
      </header>

      <main>
        { this.props.batch.map(this.renderBatch) }
      </main>
      <FlatButton label="Ask a Question" onClick={this.handleOnClick.bind(this)} />
    </div>
    )
  }
}

export default BatchContainer
