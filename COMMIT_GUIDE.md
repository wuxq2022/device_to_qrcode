# Git 提交规范

## 提交信息格式

```
<类型>: <简短描述>

[可选的详细说明]
```

## 类型

| 类型 | 说明 |
|------|------|
| `feat` | 新功能 |
| `fix` | 修复 bug |
| `docs` | 文档更新 |
| `style` | 代码格式调整（不影响功能） |
| `refactor` | 重构（不是修复也不是新功能） |
| `perf` | 性能优化 |
| `test` | 测试相关 |
| `chore` | 构建或辅助工具更新 |

## 示例

### feat - 新功能
```
feat: 添加设备描述字段支持

- 新增 device_description 输入框
- 文字标签格式更新为 {external_id} ({device_description}) ({model})
```

### fix - 修复问题
```
fix: 修复二维码密度不足的问题

调整 qrcode-generator 模块大小参数从 12 增加到 80
```

### docs - 文档更新
```
docs: 添加使用说明文档

新增 README.md 包含功能说明、使用方法和项目结构
```

## 配置 Git 提交模板

运行以下命令设置提交模板：

```bash
git config --global commit.template .gitmessage
```

或者每次提交时手动按照上述格式编写提交信息。

## 注意事项

- 简短描述不超过 50 个字符
- 使用中文编写提交信息
- 详细说明应解释 WHY 而不是 WHAT
