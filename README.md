# nblog


## 写文章和发布

```powershell
npm run new -- "my-first-post"
```

编辑 `source/_posts/my-first-post.md`：`title` 可以写中文，文件名建议使用英文以保持网址简洁；`description` 用作首页摘要；`categories` 和 `tags` 用于归类。文章配图放入同名目录 `source/_posts/my-first-post/`，正文使用 `![说明](image.png)` 引用。

```powershell
npm run build
git add .
git commit -m "Add new post"
git push
```

尚未完成的文章可以创建为草稿：`npm run new -- draft "draft-title"`，完成后用 `npx hexo publish draft-title` 发布。草稿默认不会出现在站点中。

## 外观设置

`source/css/custom.css` 提供固定浅色的米白阅读背景，用很淡的暖色渐变和细纹理减轻纯色的平板感。

`_config.yml` 管理站点标题、作者、地址和文章链接。`_config.hsad.yml` 管理头像、背景、菜单及页脚，优先于主题默认配置，日常调整不需要修改主题源码。
