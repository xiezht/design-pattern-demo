/**
 * Mediator Pattern
 */
var Mediator = (function() {
  var _msg = {}
  return {
    /**
     * the method to register msg
     * @param type 
     * @param action 
     */
    register: function(type, action) {
      if (_msg[type]) {
        _msg[type].push(action)
      } else {
        _msg[type] = []
        _msg[type].push(action)
      }
    },
    /**
     * the method to send msg
     * @param type 
     */
    send: function(type) {
      if (_msg[type]) {
        let msgLen = _msg[type].length
        for(let i = 0; i < msgLen; i++) {
          _msg[type][i] && _msg[type][i]()
        }
      }
    }
  }
})()

Mediator.register('demo', function() {
  console.log('first register reveive msg')
})

Mediator.register('demo', function() {
  console.log('sencond register receive msg')
})

Mediator.send('demo')
