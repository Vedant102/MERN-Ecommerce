const initialState = {
  catogeries: []
} 

const categoriesReducer = (state = initialState,action) => {
  const {type, payload} = action

  switch(type){
    default:
      return state
  }
}
export default categoriesReducer;