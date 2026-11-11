# nblog

博客地址：<https://nblog.github.io>。使用 [Hexo](https://hexo.io/zh-cn/) 和 [hsad](https://github.com/watanabe-hsad/hexo-theme-hsad) 主题，通过 GitHub Actions 发布到 GitHub Pages。

## 本地预览

需要 Node.js 24 或更新版本。首次下载仓库时一并拉取主题子模块：

```powershell
git clone --recurse-submodules https://github.com/nblog/nblog.github.io.git
cd nblog.github.io
npm ci
npm run server
```

浏览器打开 <http://localhost:4000>。已有仓库但缺少主题时，执行 `git submodule update --init --recursive`。

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

推送到 `main` 后自动构建并发布；可以在仓库的 **Actions** 查看进度。构建产物 `public/` 无需提交，也不需要配置个人访问令牌。

尚未完成的文章可以创建为草稿：`npm run new -- draft "draft-title"`，完成后用 `npx hexo publish draft-title` 发布。草稿默认不会出现在站点中。

## 外观设置

`_config.yml` 管理站点标题、作者、地址和文章链接。`_config.hsad.yml` 管理头像、背景、菜单及页脚，优先于主题默认配置，日常调整不需要修改主题源码。

`source/css/custom.css` 提供固定浅色的米白阅读背景，用很淡的暖色渐变和细纹理减轻纯色的平板感。菜单保留首页、分类、标签、搜索、关于；联系方式为 GitHub 和 E-Mail。

Hexo 默认按数组下标合并主题配置；`scripts/theme-config.js` 将菜单和社交链接整组替换，避免继承主题作者的多余条目。

背景文件是 `source/images/windows-center.jpg`：取自本机 `C:\Windows\Web\4K\Windows\img70.jpg` 的居中区域，裁成 960 × 1440 后压缩保存；主题使用 `background-position: center` 和 `background-size: cover`，会继续按屏幕比例居中裁切。头像取自 GitHub 账号 nblog。

主题以 Git 子模块固定在可复现的提交，保留上游 MIT 许可。更新主题时执行以下命令，预览确认后再提交主题指针的变更：

```powershell
git submodule update --remote themes/hsad
npm run clean
npm run build
```

首次上线包含一篇可直接修改或删除的开站文章，以及归档、分类、标签、搜索、关于和 404 页面。
