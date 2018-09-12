export const changeEntityStatus = (index, status) => {
  return {
    index,
    status,
    type: 'CHANGE_ENTITY_STATUS'
  }
}
