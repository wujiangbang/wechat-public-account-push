/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '妙妙, 早上好',
    desc: `
      **{{date.DATA}}**

      城市：{{province.DATA}}-{{city.DATA}}

      天气：{{weather.DATA}}
      
      风向: {{wind_direction.DATA}}

      风力: {{wind_scale.DATA}}

      当前湿度：{{shidu.DATA}}

      当前气温：{{wendu.DATA}}

      最低气温：{{min_temperature.DATA}}

      最高气温：{{max_temperature.DATA}}

      日出时间：{{sunrise.DATA}}

      日落时间：{{sunset.DATA}}

      空气质量：{{quality.DATA}}

      PM2.5：{{pm25.DATA}}

      温馨提示：{{notice.DATA}}

      预防感冒提醒：{{ganmao.DATA}}

      ---

      {{love_horoscope.DATA}}

      {{career_horoscope.DATA}}

      {{wealth_horoscope.DATA}}

      {{healthy_horoscope.DATA}}

      {{comprehensive_horoscope.DATA}}
      
      ---
      
      {{holidaytts.DATA}}
      
      {{birthday_message.DATA}}
      
      每日一句：{{poison_chicken_soup.DATA}}

    `,
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `,
  },
];

module.exports = TEMPLATE_CONFIG;
