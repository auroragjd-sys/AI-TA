# Tasks

- [x] Task 1: 视觉与交互基础优化 (Visual & Interaction Baseline)
  - [x] SubTask 1.1: 优化 `src/index.css` 中的字体定义，增加 Windows 友好字体（如 'Microsoft YaHei UI' 等）作为回退，并调整字重。
  - [x] SubTask 1.2: 检查并调整全局颜色变量，引入“科技蓝”或“医疗绿”辅助色变量。
  - [x] SubTask 1.3: 扫描并修复 `src/App.tsx` 中对比度过低的文字颜色（如 `#8e5f4a` -> 更深的色值）。

- [x] Task 2: Hero 区域重构 (Hero Section Refactor)
  - [x] SubTask 2.1: 修改 `src/App.tsx` 中的 Hero 文案（标题、副标题），采用更具场景感和紧迫感的描述。
  - [x] SubTask 2.2: 移除 Hero 左侧的 `heroStats` 卡片布局。
  - [x] SubTask 2.3: 在 Hero 区域下方（或 CTA 下方）新增一个简洁的“核心特性横条” (Feature Bar) 来替代原有的 Stats 卡片。
  - [x] SubTask 2.4: 优化 Hero 右侧手机样机内容，替换/调整 `Card` 组件样式，使其更像是一个数据仪表盘（使用 CSS 模拟图表或简化内容）。

- [x] Task 3: 信任背书模块开发 (Trust Indicators Module)
  - [x] SubTask 3.1: 在 `src/App.tsx` 的 Hero Section 之后（或穿插在 Value Section 之前）添加一个新的 `<section>`。
  - [x] SubTask 3.2: 实现“兽医监制”/“数据来源”的布局（可以是简单的 Logo Wall 或 认证徽章风格）。

- [x] Task 4: 细节润色与动效 (Polish & Polish)
  - [x] SubTask 4.1: 为新增的“科技蓝/医疗绿”元素添加微小的呼吸或扫描动画（CSS keyframes）。
  - [x] SubTask 4.2: 调整 Hero 区域的留白（Spacing），确保 CTA 按钮突出。

# Task Dependencies
- Task 2 depends on Task 1 (需要先定好色板和字体)
- Task 4 depends on Task 2 and Task 3
