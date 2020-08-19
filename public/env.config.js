/*
 接口外置，进行自行配置
 host可以改成任意地址:http://www.espweb.com:31138
 */
var host = window.location.protocol + "//" + window.location.host
window.config = {
  // 接口请求
  VUE_APP_API: host + "",
  // 图片预览地址
  VUE_APP_IMG_ICON: host + "",
  // 图片上传地址
  VUE_APP_IMG_UPLOAD: host + "",
  // 附件下载
  VUE_APP_FILE_DOWNLOAD: host + "",
  // 重新登录
  VUE_APP_LOGIN: host + "",
  // 进入门户网站首页
  VUE_APP_INDEX: host + "",
}
