/*
应用名称：皮皮工具箱
备注：破解VIP
*/

var body = JSON.parse($response.body);
body.data.userInfo.userVip.isVip = 1;
body.data.userInfo.userVip.endTime = "2099-07-16 10:04:32";
$done({ body: JSON.stringify(obj) });