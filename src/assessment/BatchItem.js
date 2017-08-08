import React, { PureComponent } from 'react'

class BatchItem extends PureComponent {
  render() {
    const { name, photo, evaluation } = this.props

    return(
      <article className="batch">
        <h1>{ name }</h1>
        </article>
    )
  }
}
