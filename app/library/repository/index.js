/* @flow */

import _ from 'lodash'
// import { Schema } from 'mongoose'

export default class Repository {
  _schema

  constructor(schema) {
    this._schema = schema
  }

  /**
   * Counts number of documents
   */
  async count(query) {
    const res = await this._schema.find(query).count()
    return res || 0
  }

  /**
   * Find multiple entries
   */
  async findBy(
    query = {},
    projection,
    populate,
    options = { lean: true }
  ) {
    const res = this._schema.find(query, projection)

    if (populate) {
      if (_.isArray(populate)) {
        populate.forEach((x) => {
          res.populate(x)
        })
      } else {
        res.populate(populate)
      }
    }

    if (options) {
      if (_.get(options, 'lean', false)) {
        res.lean()
      }

      if (_.get(options, 'skip', false)) {
        res.skip(options.skip)
      }

      if (_.get(options, 'limit', false)) {
        res.limit(options.limit)
      }

      if (_.get(options, 'sort', false)) {
        res.sort(options.sort)
      }
    }

    return res
  }

  /**
   * Finds all instances in the collection.
   */
  async findAll() {
    const res = await this.findBy()
    return res || []
  }

  /**
   * Find an object.
   */
  async findOneBy(
    query = {},
    projection,
    populate,
    options = { lean: true }
  ) {
    const res = await this.findBy(query, projection, populate, options)
    return _.first(res) || null
  }

  /**
   * Find an object by id.
   */
  async findById(
    id,
    projection,
    populate,
    options = { lean: true }
  ) {
    const res = await this.findBy({ _id: id }, projection, populate, options)
    return _.first(res) || null
  }

  /**
   * Aggregate special methods across a model
   *
   * @param  {Object}      options
   * @return {Object|null}
   */
  async aggregate(options) {
    return this._schema.aggregate(options)
  }

  /**
   * Return distinct values
   */
  async distinct(fields, query = {}) {
    return this._schema.distinct(fields, query)
  }

  /**
   * Create an entity.
   * @param {Object}
   * @returns {void}
  async add(query, cb) {
    // @TODO TO IMPLEMENT PROPERLY
    // const res = this._schema.create
    // perform the save
  }
  */

  /**
   * Update an entry without returning the new one
   */
  async update(query, set, options) {
    return this._schema.update(query, set, options)
  }

  /**
   * Update an entry and return the modified one
   */
  async findOneAndUpdate(
    query,
    set,
    lean = true,
    opts
  ) {
    const defaultOptions = { returnOriginal: false, returnNewDocument: true, new: true }
    const options = opts ? { ...defaultOptions, ...opts } : defaultOptions

    const updated = await this._schema.findOneAndUpdate(query, set, options)

    return (lean && updated) ? updated.toObject() : updated
  }

  /**
   * Delete all the item that meet the query
   */
  async hardDelete(query) {
    return this._schema.remove(query)
  }
}
