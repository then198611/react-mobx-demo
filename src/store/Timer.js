import { observable, action, computed, autorun } from 'mobx'

class Timer {
  @observable time = 0

  @action.bound
  addTime () {
    this.time++
  }

  @action.bound
  reduceTime () {
    this.time--
  }

  // @computed get timeStr () {
  //   return `当前点击数：${this.time}`
  // }
}

const timer = new Timer()

autorun(() => {
  console.log(`当前点击数：${timer.time}`)
})

export default timer
