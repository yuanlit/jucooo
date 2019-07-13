const proxy = require('http-proxy-middleware')

var userList = [{
        id: 1,
        username: 'tly',
        password: '1',
        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561201013774&di=08d8d179ccc15ff5ba38ddac4a2d1797&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn09%2F140%2Fw870h870%2F20180627%2F95fa-hencxtu9383408.jpg',
        sex: '男',
        name: '彭于晏'
    },
    {
        id: 2,
        username: 'ttw',
        password: '1',
        sex: '女',
        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561201196348&di=828fe185f52ae21d1b3f5e3a1a0c96e8&imgtype=0&src=http%3A%2F%2Fi-1.chuzhaobiao.com%2F2018%2F8%2F14%2F3cfa3d55-b33c-4a2e-a131-67b9308a84f6.jpg',
        name: '陶天伟'
    }
    ,
    {
        id: 3,
        username: 'css',
        password: '1',
        sex: '女',
        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561201196348&di=828fe185f52ae21d1b3f5e3a1a0c96e8&imgtype=0&src=http%3A%2F%2Fi-1.chuzhaobiao.com%2F2018%2F8%2F14%2F3cfa3d55-b33c-4a2e-a131-67b9308a84f6.jpg',
        name: '陈双双'
    } ,
    {
        id: 4,
        username: 'dds',
        password: '1',
        sex: '女',
        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561201196348&di=828fe185f52ae21d1b3f5e3a1a0c96e8&imgtype=0&src=http%3A%2F%2Fi-1.chuzhaobiao.com%2F2018%2F8%2F14%2F3cfa3d55-b33c-4a2e-a131-67b9308a84f6.jpg',
        name: '扫地僧'
    }
    
]

// 所有http请求都会从这过
module.exports = function (app) {
    console.log(typeof(userList))
    app.get("/login", (req, res) => {
        var con  = false;
        setTimeout(() => {
            for (var i = 0; i < userList.length; i++) {
                if (userList[i].username == req.query.uname && userList[i].password == req.query.upwd) {
                    con = true;
                    let result = {
                        msg: "登录成功",
                        status: 1,
                        data:userList[i]
                    }
                    res.end(JSON.stringify(result));
                }
            }
            if (!con) {
                    let result = {
                msg: "用户名或密码错误",
                status: 0,
            }
            res.end(JSON.stringify(result));
            }
        }, 1000)
    })

    app.use(proxy("/apis", {
        target: 'https://m.juooo.com',
        changeOrigin: true,
        // 代理完成,将url复写成空,不然发送到主机会带一个api,主机有可能不能识别
        pathRewrite: {
            "^/apis": ""
        }
    }))
}