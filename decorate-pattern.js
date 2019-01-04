/**
 * 
 * @param {*} eleId the id of the input element which is to be bind a function
 * @param {*} fn the new handler bind with the input element's click event
 */
function decorator(eleId, fn) {
  var element = document.getElementById(eleId)

  if (typeof element.onclick === 'function') {
    let oldFunc = element.onclick
    element.onclick = function() {
      oldFunc()
      fn()
    }
  } else {
    element.onclick = fn
  }
}

