action = {
    type: 'CREATE_EVENT',
    title: '',
    body: ''
}




const events = (state = [], action) => {
  switch(action.type){
    case 'CREATE_EVENT':
      
    case 'DELETE_EVENT':
      
    case 'DELETE_ALL_EVENT':
      return []
    default:
      return state
  }
}

export default events