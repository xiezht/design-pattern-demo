/**
 * 参数适配器
 * @param {*} obj 
 */
function doSomething(obj) {
  var defaultParams = {
    name: '',
    title: '',
    age: '',
    author: ''
  }
  for (var i in defaultParams) {
    defaultParams[i] = obj[i] || defaultParams[i]
  }
  // 或者extend(defaultParams, obj)，可能新增属性

  // ...
}

/**
 * 数据适配器
 * @param {*} arr 
 */
function arrToObjAdapter(arr) {
  return {
    name: arr[0],
    title: arr[1]
  }
}

/**
 * 对后端返回的数据进行适配后，再进行处理
 * @param {*} data 
 */
function ajaxAdapter(data) {
  return [data['key1'], data['key2']]
}
$.ajax({
  url: '',
  success: function(data, status) {
    if (data) {
      handler(ajaxAdapter(data))
    }
  }
})

