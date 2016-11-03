/**
 * Created by itachi on 16/11/3.
 */

// 启动Ajax拦截
require('./HttpRequestMock.js');

let AppConfig = require("./AppConfig.js");

let sendRequest = function(url,parameters){

    var promise = new Promise(function(resolve,reject){

        // initialize the form data
        var formData = new FormData();
        for(var propertyName in parameters){
            formData.append(propertyName,parameters[propertyName]);
        }

        /*
         initialize the xml http request level2
        * @discussion :
        * 1、there are two types of XMLHttpRequest,XmlHttpRequest level1 and XmlHttpRequest level2
        * 2、XmlHttpRequest level 1 is the old version,it can't send request across origin.
        * 3、XmlHttpRequest level 2 is the newest version,it can send request across origin and build formData with new interface.
        * */
        var client = new XMLHttpRequest();
        client.open('POST',url);
        client.onreadystatechange = handler;
        client.responseType = 'json';
        client.setRequestHeader('Accept','application/json');
        client.send(formData);

        function handler(){
            if(this.readyState !== 4){
                return;
            }
            if(this.status === 200){
                const responseObject = JSON.parse(this.response);
                if(responseObject.status == 1){
                    resolve(responseObject.data);
                }else{
                    reject("this must be server error!");
                }
            }else{
                reject(new Error(this.statusText));
            }
        }
    });

    return promise;
}

module.exports = {
    /*
    * 获取商品砍价信息
    * @param parameters:Object 请求参数
    * */
    getBargainInfo:function(parameters){
        return sendRequest(AppConfig.ApiConfig.getBarginInfo,parameters);
    }
};

