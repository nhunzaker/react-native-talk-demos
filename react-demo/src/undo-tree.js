import Microcosm from 'microcosm'

class UndoTree extends Microcosm {

  /**
   * In Microcosm, this tells the the app to always maintain
   * transaction history instead of automatically cleaning up
   * completed requests. This allows for undo state.
   */
  shouldHistoryKeep () {
    return true
  }

  /**
   * Roll state forward from a specific point in time
   */
  checkout (moment) {
    this.history.checkout(moment)
    this.rollforward()
  }

}

export default UndoTree
