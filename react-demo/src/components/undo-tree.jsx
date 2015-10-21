import Edges from './edges'
import Nodes from './nodes'
import React from 'react'
import Tree  from 'paths-js/tree'

function UndoTree (props) {
  let tree = Tree({ data: props.history.root(), height: 360, width: 360 })

  return (
    <svg width="400" height="400">
      <g transform="translate(20, 20)">
        <Edges items={ tree.curves } />
        <Nodes items={ tree.nodes } focus={ props.history.focus } onClick={ props.onClick } />
      </g>
    </svg>
  )
}

export default UndoTree
