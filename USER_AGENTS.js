const USER_AGENTS = [
  'jdapp;android;9.4.4;11;5656235343933623-9333830393631663;network/wifi;model/Redmi K30 Pro;addressid/138452724;aid/ee2549c2938096a6;oaid/ff8a84e38b9a9b2a;osVer/30;appBuild/87076;partner/xiaomi001;eufv/1;Mozilla/5.0 (Linux; Android 11; Redmi K30 Pro Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045513 Mobile Safari/537.36'
]
/**
 * 生成随机数字
 * @param {number} min 最小值（包含）
 * @param {number} max 最大值（不包含）
 */
function randomNumber(min = 0, max = 100) {
  return Math.min(Math.floor(min + Math.random() * (max - min)), max);
}
const USER_AGENT = USER_AGENTS[randomNumber(0, USER_AGENTS.length)];

module.exports = {
  USER_AGENT
}
