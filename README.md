# Judy Sun — 食品质量工程师 个人介绍网页

一个专业、简约、现代的自我介绍网页，用于向面试官全面展示食品质量工程师 **孙萍（Judy Sun）** 的教育背景、工作经历、项目成果及专业技能。

## 📋 内容概览

- **个人概述** — 核心竞争力、独特优势、职业目标
- **教育经历** — 甘肃农业大学 食品质量与安全 本科
- **工作经历** — 欧本食品（QA专员）+ 嘉吉食品科技（QA工程师）
- **案例展示** — 可视化看板、异物管控、培训创新、食安文化、项目管理、知识分享
- **专业技能** — 硬技能（HACCP、ISO 22000、GMP、法规等）+ 软技能

## 🚀 如何本地运行

### 方式一：直接打开（推荐）

1. 确保 `index.html`、`styles.css`、`script.js` 和 `imagine/` 文件夹在同一目录下
2. 用浏览器直接打开 `index.html` 即可

### 方式二：使用本地服务器

```bash
# Python 3
python -m http.server 8080

# 或使用 VS Code Live Server 插件
```

然后在浏览器访问 `http://localhost:8080`

## 📁 项目结构

```
Judy Self-introduction/
├── index.html          # 主 HTML 文件（语义化结构）
├── styles.css          # CSS 样式表（绿色主题、响应式设计）
├── script.js           # JavaScript 交互（导航、灯箱、动画）
├── README.md           # 本文件
└── imagine/            # 图片资源文件夹
    ├── 00-personal photo.jpg    # 个人照片
    ├── 01-logo-ouben.png        # 欧本食品 Logo
    ├── 02-logo-cargill.png      # 嘉吉食品 Logo
    ├── 05-handwash-board.png    # 洗手流程看板
    ├── 06-change-board.jpg      # 更衣流程看板
    ├── 07-foreign-analysis.png  # 异物原因分析
    ├── 08-foreign-before.png    # 异物处理前
    ├── 09-foreign-after.png     # 异物处理后
    ├── 10-pest-training.png     # 虫害防控培训
    ├── 11-handwash-video.jpg    # 洗手更衣流程视频
    ├── 12-food-safety-video.png # 食品安全培训视频
    ├── 13-award-announce.png    # 获奖公告
    ├── 14-award-poster1.jpg     # 获奖海报 1
    ├── 15-award-poster2.jpg     # 获奖海报 2
    ├── 16-project-tasks.png     # 项目行动项
    ├── 17-sc-thanks.png         # SC 证获批邮件
    ├── 18-article.png           # 经验总结文章
    ├── 19-article-email.png     # 投稿邮件
    └── 20-article-reply.png     # 编辑回复邮件
```

## 🎨 设计特点

- **色彩**：以绿色系为主色调，搭配暖金色辅助色，营造清新、专业的食品行业形象
- **布局**：清晰的信息层级，合理的留白空间，易于阅读
- **响应式**：适配桌面、平板和手机三种设备尺寸
- **动画**：平滑的滚动渐入动画、导航栏交互效果
- **灯箱**：点击案例图片可全屏放大查看
- **无障碍**：语义化 HTML 标签，支持键盘导航

## 🛠 技术栈

- HTML5（语义化标签）
- CSS3（Custom Properties、Flexbox、Grid、动画）
- JavaScript（Intersection Observer、事件委托）
- Google Fonts（Inter + Noto Sans SC）
