'use strict';

// Hexo merges arrays by index and keeps upstream entries beyond our list.
// Replace these lists so the theme author's contacts and menu do not leak in.
hexo.extend.filter.register('before_generate', () => {
  hexo.theme.config.menu = hexo.config.theme_config.menu;
  hexo.theme.config.social = hexo.config.theme_config.social;
});

hexo.extend.injector.register('head_end',
  '<link rel="stylesheet" href="/css/custom.css">');
