
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Tab.css'


class HelpPageTableView extends Component{
    constructor(props){
        super(props);
    }

    stringFormat() {
        var s = arguments[0];
        for (var i = 0; i < arguments.length - 1; i++) {
            var reg = new RegExp("\\{" + i + "\\}", "gm");
            s = s.replace(reg, arguments[i + 1]);
        }
        return s;
    }

    render(){

        const cells = [
            {
                text:"不忘初心，人胖多砍价，人笨多砍价，一口气砍掉{0}元",
                money:1500,
                imageUrl:"http://img3.imgtn.bdimg.com/it/u=3419798110,2614926993&fm=11&gp=0.jpg"
            },
            {
                text:"小溪，说待我长发及腰时再砍，帮你砍掉{0}元",
                money:200,
                imageUrl:"http://img3.imgtn.bdimg.com/it/u=3419798110,2614926993&fm=11&gp=0.jpg"
            },
            {
                text:"Uchiha Itachi,你问我爱你有多深，砍价代表我的心，帮你砍掉{0}元",
                money:4600,
                imageUrl:"http://img3.imgtn.bdimg.com/it/u=3419798110,2614926993&fm=11&gp=0.jpg"
            },
            {
                text:"不忘初心，人胖多砍价，人笨多砍价，一口气砍掉{0}元",
                money:1500,
                imageUrl:"http://img3.imgtn.bdimg.com/it/u=3419798110,2614926993&fm=11&gp=0.jpg"
            },
            {
                text:"不忘初心，人胖多砍价，人笨多砍价，一口气砍掉{0}元",
                money:1500,
                imageUrl:"http://img3.imgtn.bdimg.com/it/u=3419798110,2614926993&fm=11&gp=0.jpg"
            }
        ];
        var self = this;
        var cellsHtml = cells.map(function(cell){
            return (
                <div className="row cell">
                    <div className="small-2 columns padding-clear">
                        <img src={cell.imageUrl}/>
                    </div>
                    <div className="small-10 columns padding-clear">
                        <p>{self.stringFormat(cell.text,cell.money)}</p>
                    </div>
                </div>
            );

        });
        return (
            <div className="small-12 columns padding-clear help-page active">
                {cellsHtml}
            </div>
        );
    }
}

class Tab extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="row">
                <div className="small-12 columns tab padding-clear">
                    <div className="row tab-bar padding-clear">
                        <div className="small-4 columns padding-clear">
                            <span>助砍好友榜</span>
                        </div>
                        <div className="small-4 columns padding-clear">
                            <span className="active">活动规则</span>
                        </div>
                        <div className="small-4 columns padding-clear">
                            <span>参与榜</span>
                        </div>
                    </div>
                    <div className="row tab-page padding-clear">
                        <HelpPageTableView/>
                        <div className="small-12 columns padding-clear rule-page" id="action-rule">
                            <p>
                                活动规则：
                                1) 188元红包仅限从未在京东下单的新用户领取，每个用户仅限领取1次;
                                2) 用户在页面完成短信验证可领取68元组合优惠券，通过实名认证可领取120元组合优惠券。部分幸运用户有机会省略短信验证直接领取68元组合优惠券，极少数幸运用户有机会直接通过实名认证一键领取全部188元红包；
                                3) 短信验证时，会给当前登录的京东账号所绑定的手机号发送短信，请注意查收。实名认证需提供姓名、身份证、银行卡及银行卡预留手机号。实名后可升级账户安全，实名认证所填写的信息将保密存储。京东不会以任何方式索要您的银行密码等信息，请注意安全谨防诈骗；
                                4) 红包中优惠券的有效期及具体使用规则信息可点击页面“查看已领优惠券”去往我的优惠券页面查看，或从京东首页进入 “我的京东--优惠券”页面查看；如偶遇发放延迟，请您耐心等待；
                                5) 红包内含多张优惠券，过期未使用自动失效，优惠券具体面额及其有效期以实际到账为准，请及时用券；
                                6) 红包中优惠券在全平台（手机京东、PC、微信京东精选、手Q京东购物）均可使用，优惠券分为全品类券和限品类券两种：全品类券可用于全部商品（在商品详情页标注不得使用东券的特殊商品及全球购商品除外），限品类券优惠券仅可购买对应分类下指定商品，当订单中所购商品总额满足对应优惠券使用限额才能使用；
                            </p>
                        </div>
                        <div className="small-12 columns padding-clear participate-page">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tab