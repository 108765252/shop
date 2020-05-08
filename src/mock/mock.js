// eslint-disable-next-line no-unused-vars
import Mock from 'mockjs'
import data from './data.json'

Mock.mock('http://www.weichuang.com/getList', {data: data.list});

Mock.mock('http://www.weichuang.com/getUser', {
    'name|2': 'weichuang',
    'age|18-35': 20
});

Mock.mock('http://www.weichuang.com/regexp', {
'regexp1': /[a-z][A-Z][1-9]/,
'regexp2': /\d{5,10}/
});

Mock.mock('http://www.weichuang.com/list',{
    'info|10-20': [
        {
            'index|+1': 1,
            'name': '@first @last',
            'id': '@integer(10000,99999)',
            'date': '@datetime',
            'img': '@image("200x200")',
            'text': '@sentence(6,22)'
        }
    ]
});

// eslint-disable-next-line no-unused-vars
let Random = Mock.Random;
// eslint-disable-next-line no-unused-vars
let productData = req => {
let productList = []; //定义农机信息空数组
for(let i=0; i<100; i++){
    let product = {
        name: Random.ctitle(5,20),
        img: Random.dataImage('100x100', '农机' + Random.integer(1,100)),
        price: Random.integer(1000,10000),
        owner: Random.cname()
    };
    productList.push(product); //向空数组推送数据
}
return productList; //返回数据
};
Mock.mock('http://www.weichuang.com/getVarietyItem',productData);
