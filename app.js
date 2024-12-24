const Zalo = require("zca-js").Zalo
const fs = require("fs")
const path = require("path");
const { MessageType } = require("zca-js");

async function startBot() {
    const zalo = new Zalo();
    
    const api = await zalo.login({
        cookie: JSON.parse(fs.readFileSync(path.resolve("./cookies.json"), "utf-8")), 
        imei: "<imei>", //localStorage.getItem('sh_z_uuid') 
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 OPR/114.0.0.0",
    }, {
        selfListen: false, // mặc định false, lắng nghe sự kiện của bản thân
        checkUpdate: true // mặc định true, kiểm tra update
    });
    const listener = api
    listener.findUser("<phone>").then(res=>console.log(res)).catch(e=>console.log(e))
    
}

startBot()
