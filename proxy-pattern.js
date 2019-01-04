/**
 * CNZZ(站长统计) using proxy pattern
 */
var Count = (function() {
  // cache the Image object
  var img = new Image()
  return function(param) {
    var url = 'http://something.com/a.gif?',
    for (let i in param) {
      // ANCHOR maybe '&' is need
      url += (i + '=' + param[i])
    }
    img.src = url
  }
})()

Count({
  num: 10
})



/**
 * JSONP using proxy pattern
 * suppose the page's html is like the following one
 */
// <html>
//   <body>
//     <script>
//       // 回调函数
//       function jsonpCallback(res, req) {
//         console.log(res, req)
//       }
//     </script>
//     <script>
//       window.onload = function() {
//         var params = {
//           callback: 'jsonpCallback',
//           data: 'hello world'
//         }
//         var script = document.createElement('script')
//         var url = `http://localhost.com/jsonp.php?callback=${params.callback}&data=${params.data}`
//         script.scr = url
//       }
//     </script>
//   </body>
// </html>

