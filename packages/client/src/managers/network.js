const _ = require('lodash')
const networks = require('../networks/ark')

export default class NetworkManager {
  /**
   * [getAll description]
   * @return {[type]} [description]
   */
  static getAll () {
    return networks
  }

  /**
   * [findByName description]
   * @param {String} name [description]
   */
  static findByName (name) {
    return _.find(networks, { name })
  }
}