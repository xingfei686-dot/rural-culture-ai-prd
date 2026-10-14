# 乡村文化通 AI Agent PRD

一份可直接部署到 GitHub Pages 的静态网页作品集。无需安装依赖或执行构建命令。

## 本地预览

直接双击 index.html 即可浏览。为获得与线上一致的效果，也可在当前目录启动任意静态文件服务器。

## 部署到 GitHub Pages

### 方式一：网页上传（最适合第一次使用 GitHub）

1. 登录 GitHub，点击右上角 + → New repository。
2. 仓库名称建议填写 rural-culture-ai-prd，可见性选择 Public。
3. 进入仓库后选择 uploading an existing file，上传本目录中的全部文件和文件夹。
4. 打开仓库的 Settings → Pages。
5. 在 Build and deployment 中将 Source 设为 Deploy from a branch。
6. 分支选择 main，目录选择 /(root)，点击 Save。
7. 等待约 1–3 分钟，访问：
   https://你的GitHub用户名.github.io/rural-culture-ai-prd/

### 方式二：Git 命令

git init
git add .
git commit -m Publish-rural-culture-AI-PRD
git branch -M main
git remote add origin https://github.com/你的GitHub用户名/rural-culture-ai-prd.git
git push -u origin main

然后按方式一的第 4–7 步开启 GitHub Pages。

## 上线前建议替换

- 页面目前不展示作者姓名；如需个人品牌，可在页脚增加姓名、邮箱或作品集主页。
- 可将真实 Coze 配置截图放入 assets，并在“产品方案”或“Agent 架构”章节中补充。
- 所有项目表述均按“个人 AI 产品实践”呈现，未使用虚构用户量、准确率或业务转化数据。

## 简历写法

乡村文化通｜AI 文化知识助手
在线体验：https://www.coze.cn/store/agent/7696162329666404371?bot_id=true
产品 PRD：https://你的GitHub用户名.github.io/rural-culture-ai-prd/

## 视觉素材

封面插画由 OpenAI 图像生成工具生成，用于本项目网页视觉展示。
