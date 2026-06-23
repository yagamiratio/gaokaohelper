/**
 * 高考志愿助手 · 前端配置
 * 
 * 🔥 方案B：全链路国内化 — 火山引擎 Ark Bot 直连
 *   前端 → Ark Bot API（内置联网搜索 + DeepSeek）→ 返回结构化院校数据
 * 
 * 使用前：按照 worker/volcano-bot-guide.md 创建 Bot 并获取 Bot-ID + API Key
 */
window.APP_CONFIG = {
  // 火山引擎 Ark Bot API 地址（不需要改）
  arkEndpoint: 'https://ark.cn-beijing.volces.com/api/v3/bots/chat/completions',

  // Bot-ID：在火山引擎后台创建联网搜索 Bot 后获得（格式 bot-2025...）
  botId: 'bot-20260623111853-ql9sj',

  // API Key：在火山引擎后台「API Key 管理」创建
  apiKey: 'ark-ee72e379-4fe9-4e62-99c7-854eb8838eaa-e41fe',
};
