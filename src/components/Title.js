import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


class Title extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }
  render() {
    return(
      <div>
      <h1>{this.props.content}</h1>
      <h2>{this.props.name}</h2>
      </div>
    )
  }
}

export default Title
