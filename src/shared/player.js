import {rand} from "./utils"

export default class Player {
  constructor(opts) {
    opts = opts || {}
    this.name = opts.name
    this.x = rand(10, 100)
    this.y = rand(10, 100)
  }
}
