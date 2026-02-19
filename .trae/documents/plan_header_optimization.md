# Header 优化计划

## 目标
优化网站 Header 的视觉效果和交互行为，具体包括：
1.  **滚动交互**：首屏隐藏，向下滚动后出现。
2.  **视觉风格**：采用优雅的模糊透明背景（毛玻璃效果）。
3.  **布局优化**：重新布局 Header 内容，提升视觉体验。

## 步骤

### 1. 创建 Header 组件 (`src/components/Header.tsx`)
我们将创建一个新的 `Header` 组件来封装所有 Header 相关的逻辑和样式。

-   **状态管理**：使用 `useState` 和 `useEffect` 监听滚动事件。
    -   定义 `isVisible` 状态：当 `window.scrollY > 100` (或其他阈值) 时为 `true`，否则为 `false`。
-   **样式设计**：
    -   **定位**：`fixed top-0 left-0 right-0 z-50`，确保固定在顶部且层级最高。
    -   **过渡动画**：使用 `transition-all duration-300 ease-in-out` 实现平滑的显示/隐藏效果。
    -   **显示状态**：
        -   隐藏（首屏）：`opacity-0 -translate-y-full pointer-events-none`
        -   显示（滚动后）：`opacity-100 translate-y-0 pointer-events-auto`
    -   **视觉效果**：
        -   背景：`bg-white/70` 或 `bg-white/80` (根据实际效果调整透明度)。
        -   模糊：`backdrop-blur-md` 或 `backdrop-blur-lg` 实现毛玻璃效果。
        -   边框/阴影：添加细微的底部边框 `border-b border-white/20` 或轻微阴影 `shadow-sm` 增强层次感。
-   **内容布局**：
    -   使用 `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` 限制内容宽度，与页面其他部分保持一致。
    -   使用 `flex items-center justify-between h-16` (或 `h-20` 根据需要) 进行垂直居中和两端对齐。
    -   **左侧 Logo**：保持现有 Logo 设计，优化间距。
    -   **中间导航** (桌面端)：居中显示，调整链接间距和悬停效果，使其更现代。
    -   **右侧 CTA**：保留“预约内测”按钮，优化按钮样式使其更精致。

### 2. 更新主应用文件 (`src/App.tsx`)
-   引入新的 `Header` 组件。
-   移除原有的内联 `<nav>` 代码。
-   确保页面内容在 Header 出现时不会发生意外的布局偏移（由于 Header 是 `fixed` 的，且首屏隐藏，所以不需要占位符）。

### 3. 样式微调
-   根据实际渲染效果，微调透明度、模糊程度和阴影，确保“优雅”的视觉感受。
-   检查移动端适配，确保在小屏幕上表现良好（主要关注 Logo 和 CTA 的布局，导航菜单在移动端通常隐藏或折叠，这里暂保持原有的隐藏逻辑，后续可扩展汉堡菜单）。

## 预期效果
-   用户进入页面时，顶部无 Header，专注于首屏内容。
-   用户向下滚动时，Header 平滑滑入顶部，背景呈现半透明模糊效果。
-   Header 内容布局整洁、现代，提升整体网站质感。
