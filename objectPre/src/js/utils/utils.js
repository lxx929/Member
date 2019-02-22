define(function() {
    // var idName = window.location.search.substr(1).split('&');
    // var obj = {};

    // for (let i = 0; i < idName.length; i++) {
    //     obj[idName[i].split('=')[0]] = idName[i].split('=')[1];
    //     // console.log(idName[i].split('=')[1]);
    //     idName[i].split('=')[1] = obj;
    // };
    // return obj;



    var url = location.search; //获取url中"?"符后的字串  
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
});