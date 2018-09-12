export const changeEntityStatus = (id, status) => {
  return {
    id,
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

export const changeShowStatus = (targetAttribute, value) => {
  return {
    targetAttribute,
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
