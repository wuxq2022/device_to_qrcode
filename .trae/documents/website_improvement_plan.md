# 网站完善计划

## 当前状态

已实现功能：
- ✅ 基础二维码生成
- ✅ 输入字段：id、external_id、serial_number、device_description、model
- ✅ 文字标签格式：`{external_id} ({device_description}) ({model})`
- ✅ PNG 图片下载
- ✅ 文字自动换行
- ✅ 示例图片参考

## 待完善功能计划

### 阶段一：功能增强（优先级：高）

#### 1. 批量生成功能
- 支持 CSV 文件导入设备数据
- 批量生成多个二维码
- 打包下载为 ZIP 文件
- 进度显示

#### 2. 历史记录功能
- 使用 localStorage 保存生成记录
- 快速重新生成之前的二维码
- 支持删除历史记录
- 最多保存 100 条记录

#### 3. 表单验证增强
- 必填字段验证
- 数据格式验证
- 重复数据检测
- 友好的错误提示

### 阶段二：用户体验优化（优先级：中）

#### 4. 响应式设计
- 移动端适配
- 触摸友好界面
- 移动端二维码预览优化
- 适配不同屏幕尺寸

#### 5. 打印功能
- 直接打印二维码
- 批量打印支持
- 打印布局优化
- 纸张尺寸适配

#### 6. 自定义选项
- 二维码颜色自定义
- 背景颜色选择
- 文字样式调整
- 保存自定义设置

### 阶段三：高级功能（优先级：低）

#### 7. 数据导入导出
- Excel/CSV 导入
- 数据导出为 Excel
- 模板下载功能
- 数据备份与恢复

#### 8. 数据库集成功能
- 数据库后端 API 开发
- 从数据库获取设备列表
- 网页端设备选择界面
- 批量生成选中设备二维码
- 支持搜索和筛选设备
- 设备信息实时同步
- 权限控制和用户认证

#### 9. 云端同步（可选）
- 用户账号系统
- 云端数据存储
- 多设备同步
- 团队协作功能

#### 9. 多语言支持
- 中英文切换
- 语言自动检测
- 国际化架构

## 技术改进

### 代码优化
- 组件化重构
- 模块化管理
- TypeScript 迁移
- 单元测试覆盖

### 性能优化
- 图片懒加载
- 二维码缓存
- 代码分割
- 压缩资源

### 安全改进
- 输入数据消毒
- XSS 防护
- CSRF 防护
- 安全依赖更新

## 实施步骤

### 步骤 1：批量生成功能
```
1.1 创建 CSV 解析模块
1.2 添加批量生成 UI 界面
1.3 实现 ZIP 打包下载
1.4 添加进度条显示
1.5 测试并修复问题
```

### 步骤 2：历史记录功能
```
2.1 设计数据结构
2.2 实现 localStorage 存储
2.3 创建历史记录列表 UI
2.4 添加重新生成功能
2.5 添加删除功能
```

### 步骤 3：响应式设计
```
3.1 媒体查询适配
3.2 移动端布局调整
3.3 触摸事件优化
3.4 测试多设备兼容性
```

### 步骤 4：表单验证增强
```
4.1 添加实时验证
4.2 改进错误提示样式
4.3 添加数据格式检查
4.4 优化用户体验
```

### 步骤 5：自定义选项
```
5.1 添加颜色选择器
5.2 保存用户偏好设置
5.3 实时预览效果
5.4 添加预设样式
```

### 步骤 6：打印功能
```
6.1 创建打印样式
6.2 实现打印功能
6.3 优化打印布局
6.4 支持批量打印
```

### 步骤 7：数据库集成功能
```
7.1 设计数据库表结构
    - 设备表（id, external_id, serial_number, device_description, model）
    - 用户表（用户名，密码哈希，角色）
    - 权限表（用户-设备关联）

7.2 开发后端 API
    - RESTful API 设计
    - 用户认证接口（登录/注册/JWT）
    - 设备列表查询接口
    - 设备搜索和筛选接口
    - 设备信息更新接口

7.3 实现后端服务
    - 选择后端框架（Flask/Express/FastAPI）
    - 数据库连接配置
    - API 路由开发
    - 中间件（认证、日志、错误处理）

7.4 开发前端数据库集成
    - API 调用模块
    - 设备选择界面 UI
    - 搜索和筛选功能
    - 实时同步机制

7.5 批量生成功能扩展
    - 多设备选择（复选框）
    - 批量二维码生成
    - ZIP 打包下载
    - 进度显示

7.6 权限控制
    - 用户角色（管理员/普通用户）
    - 设备访问权限
    - API 安全验证

7.7 测试
    - API 接口测试
    - 前端功能测试
    - 集成测试
    - 安全测试
```

## 文件结构优化

```
device_to_qrcode/
├── index.html           # 主页面
├── css/
│   ├── style.css       # 主样式
│   ├── responsive.css  # 响应式样式
│   └── print.css      # 打印样式
├── js/
│   ├── app.js          # 主逻辑
│   ├── qrcode.js       # 二维码生成模块
│   ├── storage.js      # 本地存储模块
│   ├── csv.js          # CSV 处理模块
│   ├── validator.js    # 表单验证模块
│   ├── printer.js      # 打印模块
│   └── api.js          # 数据库 API 调用模块
├── assets/
│   └── sample.csv      # 示例数据模板
├── docs/
│   └── user-guide.md   # 用户指南
├── server/              # 后端服务（新增）
│   ├── app.py          # Flask/Express 应用
│   ├── models.py       # 数据库模型
│   ├── routes/         # API 路由
│   │   ├── auth.py     # 认证接口
│   │   └── devices.py  # 设备接口
│   ├── middleware/     # 中间件
│   │   └── auth.py     # 认证中间件
│   └── config.py       # 配置文件
├── database/
│   └── schema.sql     # 数据库表结构
└── README.md
```

## 里程碑

| 阶段 | 目标 | 预计时间 |
|------|------|----------|
| MVP | 批量生成 + 历史记录 | 1-2 天 |
| v1.0 | 响应式 + 验证增强 | 1 天 |
| v1.1 | 自定义选项 + 打印 | 1 天 |
| v2.0 | 数据导入导出 | 1-2 天 |

## 数据库集成详细设计

### 技术栈选择

| 组件 | 技术 | 说明 |
|------|------|------|
| 后端框架 | Flask (Python) | 轻量级，易于部署 |
| 数据库 | SQLite | 零配置，适合小型应用 |
| 认证 | JWT | JSON Web Token 无状态认证 |
| API 格式 | RESTful | 标准化的接口设计 |

### 数据库表结构

```sql
-- 用户表
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'user',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 设备表
CREATE TABLE devices (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    external_id VARCHAR(50) NOT NULL,
    serial_number VARCHAR(100) NOT NULL,
    device_description TEXT,
    model VARCHAR(100),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 用户-设备权限表
CREATE TABLE user_device_access (
    user_id INTEGER,
    device_id INTEGER,
    can_read BOOLEAN DEFAULT TRUE,
    can_write BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (user_id, device_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (device_id) REFERENCES devices(id)
);
```

### API 接口设计

| 接口 | 方法 | 说明 |
|------|------|------|
| `/api/auth/login` | POST | 用户登录 |
| `/api/auth/register` | POST | 用户注册 |
| `/api/auth/logout` | POST | 用户登出 |
| `/api/devices` | GET | 获取设备列表（支持分页、搜索） |
| `/api/devices/<id>` | GET | 获取单个设备信息 |
| `/api/devices/<id>` | PUT | 更新设备信息 |
| `/api/devices/batch` | POST | 批量创建设备 |
| `/api/user/devices` | GET | 获取用户有权限的设备 |

### 前端设备选择界面

```
┌─────────────────────────────────────┐
│  设备列表                    [搜索] │
├─────────────────────────────────────┤
│  ☐ ID    External ID  设备描述      │
│  ☐ 173   SN103        全自动抗折... │
│  ☑ 174   SN104        压力试验机    │
│  ☐ 175   SN105        拉力试验机    │
├─────────────────────────────────────┤
│  已选择 1 个设备                     │
│  [生成选中设备的二维码]  [下载ZIP]   │
└─────────────────────────────────────┘
```

### 里程碑更新

| 阶段 | 目标 | 预计时间 |
|------|------|----------|
| MVP | 批量生成 + 历史记录 | 1-2 天 |
| v1.0 | 响应式 + 验证增强 | 1 天 |
| v1.1 | 自定义选项 + 打印 | 1 天 |
| v2.0 | 数据库集成 | 2-3 天 |
| v2.1 | 用户认证和权限 | 1-2 天 |

## 注意事项

1. 数据库集成需要后端支持（不再是纯前端）
2. 需要考虑数据安全和用户隐私
3. 建议先实现本地模式再扩展到数据库模式
4. 保持 Git 提交规范

## 测试计划

- 单元测试：核心功能覆盖
- 集成测试：模块间协作
- 浏览器兼容性测试
- 移动端适配测试
- 性能测试

## 额外可完善内容

### 无障碍访问（Accessibility）
- 键盘导航支持
- 屏幕阅读器兼容
- ARIA 标签完善
- 高对比度模式
- 焦点指示器优化

### 键盘快捷键
- `Ctrl+G` - 生成二维码
- `Ctrl+S` - 下载图片
- `Ctrl+P` - 打印
- `Ctrl+H` - 显示历史记录
- `Esc` - 清除表单

### 深色模式
- 自动检测系统主题
- 手动切换明/暗模式
- 保存用户偏好
- 适配所有界面元素

### Logo 嵌入功能
- 上传 Logo 图片
- 将 Logo 嵌入二维码中央
- Logo 位置和大小调整
- 支持 PNG/SVG 格式

### 二维码管理
- 生成二维码缩略图列表
- 预览模式切换
- 选中多个二维码
- 批量删除功能

### 撤销/重做功能
- 表单修改撤销
- 撤销历史记录
- 重做功能
- 快捷键支持

### 离线支持（PWA）
- Service Worker 实现
- 离线访问功能
- 应用安装提示
- 后台同步支持

### 帮助与教程
- 交互式教程
- 工具提示
- 常见问题解答
- 视频教程链接

### 数据统计
- 生成数量统计
- 使用频率分析
- 热门设备统计
- 导出统计数据

### 预设模板
- 保存常用配置为模板
- 快速加载预设
- 模板导入/导出
- 共享模板功能
