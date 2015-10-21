import DOM      from 'react-dom'
import Drawing  from './components/drawing'
import React    from 'react'
import UndoTree from './undo-tree'
import matrix   from '../lib/matrix'

import { update }    from 'sprout-data'
import { willStart } from 'microcosm/lifecycle'

let app  = new UndoTree()
let swap = (x, y) => ({ x, y })
let el   = document.getElementById('app')

app.addStore('pixels', function() {
  return {
    [willStart] : matrix(15),
    [swap]      : (pixels, { x, y }) => update(pixels, [ y, x ], val => val ? 0 :  1)
  }
})

app.listen(function ({ pixels }) {
  DOM.render(<Drawing app={ app } pixels={ pixels } onClick={ app.prepare(swap) }/>, el)
}).start()

app.start()
