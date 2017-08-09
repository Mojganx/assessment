import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class BatchItem extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    evaluation: PropTypes.string.isRequired,
  }
  render() {
    const { name, photo, evaluation } = this.props

    return(
      <article className="batch">
        <h1>{ name }</h1>
         <img src={ this.props.photo } />
        </article>
    )
  }
}

export default BatchItem
