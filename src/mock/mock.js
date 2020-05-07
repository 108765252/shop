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
})