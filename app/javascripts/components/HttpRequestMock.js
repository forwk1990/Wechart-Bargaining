/**
 * Created by itachi on 16/11/3.
 */

var Mock = require("mockjs");
var MockRandom = Mock.Random;
var AppConfig = require("./AppConfig.js");

// 配置请求的相应时间
Mock.setup({timeout:'200-600'});

// 模拟首页请求数据
Mock.mock(AppConfig.ApiConfig.getBarginInfo,{
    'status|0-1':1,
    'data':{
        'openId': '@string',
        'isMine|0-1': 1,
        'isFirst|0-1': 1,
        'money':MockRandom.integer(30000,40000),
        'price':MockRandom.integer(400000,500000),
        'originalPrice':MockRandom.integer(500000,600000),
        'name|1':['奥迪A7','奔驰','雪铁龙'],
        'deadline':MockRandom.date('yyyy/MM/dd HH:mm:ss')
    }
});