import React from 'react'

const Curve = React.createClass({

  render(node, i) {
    let { curve } = this.props

    return (<path fill="none" stroke="rgba(0, 0, 0, 0.5)" d={ curve.connector.path.print() } />)
  }

})

export default Curve
