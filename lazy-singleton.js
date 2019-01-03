/**
 * 惰性单例模式
 * IIFE/闭包实现，向外部提供一个可以访问单例的函数
 */
var getSingleton = (function() {
  function Single(config) {
    this.config = config
  }
  var instance = null
  // 返回一个可以获取单例的函数
  return function(config) {
    if (!instance) {
      instance = new Single(config)
    }
    return instance
  }
})()

console.log(getSingleton('config').config)
