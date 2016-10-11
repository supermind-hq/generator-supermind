//----------------------------------------
// Action Types
//----------------------------------------

export const types = {
  ACTION_ONE: 'ACTION_ONE',
  ACTION_TWO: 'ACTION_TWO'
}

//----------------------------------------
// Action Creators
//----------------------------------------

export const creators = {

  actionOne(value) {
    return { type: types.ACTION_ONE, value }
  },

  actionTwo(value) {
    return { type: types.ACTION_TWO, value }
  }
}
