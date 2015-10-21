import React from 'react'

const Nodes = React.createClass({

  getNode(node, i) {
    let { point, item } = node
    let { focus, onClick } = this.props

    let isFocused = focus === item

    return (<circle key={ i }
                    r={ isFocused ? 7 : 5 }
                    fill={ isFocused ? '#e39' : 'black' }
                    cx={ point[0] }
                    cy={ point[1] }
                    onClick={ () => onClick(item) } />)
  },

  render() {
    return (<g>{ this.props.items.map(this.getNode) }</g>)
  }

})

export default Nodes
