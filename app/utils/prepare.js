import _ from 'lodash'

export default (o) => {
  const copy = _.cloneDeep(o)
  _.set(copy, 'id', o._id.toString())
  return copy
}
