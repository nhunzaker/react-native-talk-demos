import Canvas   from './canvas'
import React    from 'react'
import UndoTree from './undo-tree'

function Drawing (props) {

  return (
    <main>
      <Canvas pixels={ props.pixels } onClick={ props.onClick } />

      <UndoTree history={ props.app.history } onClick={ node => props.app.checkout(node) } />
    </main>
  )
}

export default Drawing
