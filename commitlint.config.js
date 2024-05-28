/**
 * git commit -m 'type: subject'
 *
  type(必填)
    *   feat: 新增功能
    *   update: 更新功能
    *   fix: bug修复
    *   docs: 文档更新
    *   style: 不影响程序逻辑的代码修改（修改空白字符、格式缩进、补全缺失的分号等，没有改变代码逻辑）
    *   refactor: 重构代码（既没有新增功能，也没有修复bug）
    *   perf: 性能，体验优化
    *   test: 新增测试用例或是更新现有测试
    *   build: 修改项目构建系统（eg: webpack）的提交
    *   ci: 修改项目继续集成流程（eg: jenkins）的提交
    *   chore: 不属于以上类型的其它类型，eg: 构建流程，依赖管理
    *   revert: 回滚某个更早之前的提交
  subject(必填)
    *   简述
*/

module.exports = { extends: ['@commitlint/config-conventional'] };

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'update', 'fix', 'docs', 'style', 'refactor', 'test', 'build', 'chore', 'revert']],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
  },
};