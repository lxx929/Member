require(['../js/config.js'], function() {
    require(['mui', 'utils'], function(mui, utils) {

        init();

        function init() {
            console.log(utils);
            // console.log(theRequest)

            // mui.ajax('/api/list', {
            //     dataType: 'json', //服务器返回json格式数据
            //     type: 'get', //HTTP请求类型
            //     success: function(data) {
            //         //服务器返回响应，根据响应结果，分析是否登录成功；
            //         console.log(data.data);
            //         renderList.innerHTML = data.data.map(function(item) {
            //             return `<li class="mui-table-view-cell">
            //                         <div>
            //                             ${item.user}
            //                         </div>
            //                         <div>
            //                             <button type="button" class="mui-btn mui-btn-primary" data-id="${item._id}" data-loading-icon="">查看详情</button>
            //                             <button id='confirmBtn'  type="button" class="mui-btn mui-btn-danger"  data-id="${item._id}" >
            //                                     删除
            //                             </button>
            //                         </div>
            //                     </li>`;
            //         }).join('');
            //     }
            // });



        }

    });
});