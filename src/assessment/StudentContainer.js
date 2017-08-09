import React, { PureComponent } from 'react'
import Title from '../components/Title'

class StudentsContainer extends PureComponent {
  renderStudent(student, index) {
    return null // this will come later
  }

  render() {
    return(
      <div className="students wrapper">
        <header>
          <Title content="Students" />
        </header>

        <main>
          { this.props.students.map(this.renderStudent) }
        </main>
      </div>
    )
  }
}

export default StudentsContainer
