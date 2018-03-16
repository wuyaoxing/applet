import wepy from 'wepy'

export default class tokenMixin extends wepy.mixin {
  data = {
    token: '',
    sessionid: ''
  }

  getToken() {
    this.token = this.$parent.globalData.token
    this.sessionid = this.$parent.globalData.sessionid
  }
}
