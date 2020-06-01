const MOCKURL = 'http://www.weichuang.com/'; //MOCK
// eslint-disable-next-line no-unused-vars
const SERVERURL = 'http://localhost:3000/'; //后端koa 3000

// eslint-disable-next-line no-unused-vars
const URL = { //URL对象的方法是getVarietyItem
    getVarietyItem: MOCKURL + 'getVarietyItem',//MOCK
    getHotProducet: MOCKURL + 'getHotProducet',//MOCK
    registUser: SERVERURL + 'user/registUser'  //对应后端controller的user
};

export default URL;