/**
 * Created by itachi on 16/11/3.
 */

var Mock = require("mockjs");
var MockRandom = Mock.Random;
var AppConfig = require("./AppConfig.js");

// 配置请求的相应时间
Mock.setup({timeout:'2000-3000'});

// 模拟首页请求数据
Mock.mock(AppConfig.ApiConfig.getBarginInfo,{
    'status':1,
    'data':{
        'openId': '@string',
        'isMine': 1,
        'isFirst': 1,
        'money':MockRandom.integer(30000,40000),
        'price':MockRandom.integer(100000,500000),
        'originalPrice':MockRandom.integer(500000,600000),
        'name|1':['奥迪A7','奔驰','雪铁龙'],
        'deadline|1':['2016/11/08 00:00:00','2016/11/09 00:00:00','2016/11/10 00:00:00']
    }
});