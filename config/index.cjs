/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  USE_PASSAGE: 'push-deer',

  PROVINCE: '上海',
  CITY: '青浦区',

  USERS: [
    {
      // 想要发送的人的名字
      name: '妙妙',
      id: 'PDU27275TbWZk8eMvTchUPn7Mly423uGTiapAYEpg',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-09',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: 'https://weibo.com/',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日',
          name: '妙妙',
          year: '1996',
          date: '08-27',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日',
          name: '妙妙',
          year: '1996',
          date: '10-09',
        },
        // {
        //   type: '节日',
        //   name: '相识纪念日',
        //   year: '2023',
        //   date: '12-20',
        // },
      ],
      // // 我们在一起已经有xxxx天了的配置
      // customizedDateList: [
      //   // 在一起的日子
      //   { keyword: 'love_day', date: '2023-09-08' },
      // ],
    },
    {
      // 想要发送的人的名字
      name: '梆梆',
      id: 'PDU25371TzW1vWaCRsvQPE3S8AmVPdXZd55g7mBgl',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-09',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: 'https://weibo.com/',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日',
          name: '妙妙',
          year: '1996',
          date: '08-27',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日',
          name: '妙妙',
          year: '1996',
          date: '10-09',
        },
        // {
        //   type: '节日',
        //   name: '相识纪念日',
        //   year: '2023',
        //   date: '12-20',
        // },
      ],
      // // 我们在一起已经有xxxx天了的配置
      // customizedDateList: [
      //   // 在一起的日子
      //   { keyword: 'love_day', date: '2023-09-08' },
      // ],
    },
  ],

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '0002',

  CALLBACK_USERS: [
    {
      name: '自己',
      id: 'PDU25371TzW1vWaCRsvQPE3S8AmVPdXZd55g7mBgl',
    },
  ],
};

module.exports = USER_CONFIG;
