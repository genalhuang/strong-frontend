var  moment = require('moment') 
moment.locale('zh-cn');
console.log(moment().format("MMMM Do YYYY, h:mm:ss a"))
console.log(moment(6000).format('LTS'))