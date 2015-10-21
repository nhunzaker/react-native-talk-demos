import React from 'react'

const Edges = React.createClass({

  getCurve(curve, i) {
    let path = curve.connector.path.print()

    return (
      <path key={ i } fill="none" stroke="rgba(0, 0, 0, 0.5)" d={ path  } />
    )
  },

  render() {
    return (
      <g fill="none" stroke="rgba(0, 0, 0, 0.5)">
         { this.props.items.map(this.getCurve) }
      </g>
    )
  }

})

export default Edges
