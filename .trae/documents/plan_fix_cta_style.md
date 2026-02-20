# 修复 CTA 区域设计风格计划

## 问题分析
用户指出 CTA (Call To Action) 区域的字体和按钮样式不符合整体设计风格。
1.  **字体不协调**：CTA 标题未使用项目统一的圆体风格 (`font-rounded-chinese`)，且颜色可能与 Header 不完全一致。
2.  **按钮样式突兀**：Header 和其他主要操作按钮均使用 `rounded-full` (全圆角) 和特定的暖色阴影，而目前 CTA 区域使用了 `rounded-lg` (小圆角)，导致视觉割裂。
3.  **输入框不匹配**：输入框的圆角风格需要与全圆角按钮相呼应。

## 修改目标
将 CTA 区域的样式调整为与 Header 和 Hero 区域一致的“暖色、圆润、柔和”风格。

## 具体步骤

### 1. 调整 CTA 标题
*   **文件**: `src/App.tsx`
*   **操作**:
    *   为 `CardTitle` 添加 `font-rounded-chinese` 类。
    *   将文字颜色统一为 `#3f261c` (深棕色)。
    *   保持 `text-3xl md:text-4xl` 大小。

### 2. 重构表单区域 (输入框 + 按钮)
*   **文件**: `src/App.tsx`
*   **操作**:
    *   **按钮 (`Button`)**:
        *   修改圆角为 `rounded-full`。
        *   添加阴影效果: `shadow-lg shadow-orange-200 hover:shadow-orange-300`。
        *   保持背景色 `#ff8b59` 和悬停色 `#f37543`。
    *   **输入框 (`Input`)**:
        *   修改圆角为 `rounded-full`。
        *   增加水平内边距 (`px-6`) 以适应全圆角形状，防止文字被切。
        *   保持高度 `h-12` 与按钮一致。
        *   调整边框颜色为 `#e6ccb3` (暖色调)。

### 3. 微调卡片容器
*   **文件**: `src/App.tsx`
*   **操作**:
    *   保持背景渐变 `bg-gradient-to-br from-[#fffbf7] via-[#fff4eb] to-[#ffe8d6]`。
    *   确保阴影为 `shadow-soft-xl` (或 `shadow-soft-lg`，根据定义调整)。

## 预期效果
CTA 区域将拥有圆润的输入框和按钮，标题字体更加亲和，整体视觉风格与页面头部首尾呼应。
