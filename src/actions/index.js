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
