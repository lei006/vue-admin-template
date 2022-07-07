module.exports = {

  title: 'Vue Admin Template',

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,

  devApiPrefix: 'vue-admin-template',
  ProApiPrefix: 'vue-admin-template',

  getApiPrefix: function() {
    if (process.env.NODE_ENV === 'development') {
      return this.devApiPrefix
    }

    return this.ProApiPrefix
  }
}
