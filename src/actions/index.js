export const changeEntityStatus = (index, status) => {
  return {
    index,
    status,
    type: 'CHANGE_ENTITY_STATUS'
  }
}

export const changeQueryStr = (value) => {
  return {
    value,
    type: 'CHANGE_QUERY_STR'
  }
}

export const changeShowStatus = (target, value) => {
  return {
    target,
    value,
    type: 'CHANGE_SHOW_STATUS'
  }
}

export const addNewEntity = (title) => {
  return {
    title,
    type: 'ADD_NEW_ENTITY'
  }
}
