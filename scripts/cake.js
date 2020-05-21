
const {join} = require('path');

require('hexo-theme-cake/lib/extend')(hexo)
const injector = require('hexo-extend-injector2')(hexo);
injector.register('style', join(__dirname, '../views/styles.styl'));
injector.register('head-end', () => {
  return `<style>${hexo.extend.helper.get('fa_css')()}</style>`
})
