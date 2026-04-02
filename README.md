# 设备二维码生成器

一个用于生成设备二维码图片的 Web 工具，可在浏览器中直接使用。

## 功能特点

- ✅ 输入设备信息生成二维码
- ✅ 支持中文字符
- ✅ 文字标签自动换行显示完整
- ✅ 一键下载 PNG 图片
- ✅ 纯前端实现，无需服务器

## 输入字段

| 字段 | 说明 | 示例 |
|------|------|------|
| ID | 设备唯一标识 | 173 |
| External ID | 外部编号 | SN103 |
| Serial Number | 序列号（作为二维码内容） | D173 |
| 设备描述 | 设备名称 | 全自动抗折抗压试验机 |
| 型号 | 设备型号 | DYE-300 |

## 输出格式

- 文件名：`{id}_{external_id}_{serial_number}.png`
- 示例：`173_SN103_D173.png`
- 二维码内容：`{serial_number}`
- 文字标签：`{external_id} ({设备描述}) ({型号})`

## 使用方法

### 方法一：直接打开

双击 `index.html` 在浏览器中打开即可使用。

### 方法二：本地服务器

```bash
python -m http.server 8080
```

然后在浏览器中访问：http://localhost:8080

### 方法三：部署到 GitHub Pages

将项目部署到 GitHub Pages，即可通过网页访问。

## 技术栈

- HTML5 + CSS3 + JavaScript
- qrcode-generator（生成二维码）
- Canvas API（绘制图片）

## 项目结构

```
device_to_qrcode/
├── index.html          # 主页面
├── css/
│   └── style.css      # 样式文件
├── js/
│   └── app.js         # 核心逻辑
└── images/
    └── 173_SN103_D173.png  # 示例图片
```

## 预览效果

生成的二维码图片样式：
- 白色背景
- 中央二维码（高密度）
- 下方文字标签：`编号 (设备描述) (型号)`

## 许可证

MIT License