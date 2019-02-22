require(['./js/config.js'], function() {
    require(['mui'], function(mui) {


        inits();

        function inits() {
            isScroll();
            render();
            clickEvent();
        }

        function isScroll() {
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        }

        function render() {
            mui.ajax('/api/list', {
                dataType: 'json', //服务器返回json格式数据
                type: 'get', //HTTP请求类型
                success: function(data) {
                    //服务器返回响应，根据响应结果，分析是否登录成功；
                    console.log(data.data);
                    renderList.innerHTML = data.data.map(function(item) {
                        return `<li class="mui-table-view-cell">
                                    <div>
                                        ${item.user}
                                    </div>
                                    <div>
                                        <button type="button" class="mui-btn mui-btn-primary" data-id="${item._id}" data-loading-icon="">查看详情</button>
                                        <button id='confirmBtn'  type="button" class="mui-btn mui-btn-danger"  data-id="${item._id}" >
                                                删除
                                        </button>
                                    </div>
                                </li>`;
                    }).join('');
                }
            });
        }

        function clickEvent() {
            mui(".mui-table-view").on('tap', '.mui-btn-primary', function() { //进详情页面
                //dataset.id为自定义属性
                // var id = this.parentElement.parentElement;
                // console.log(this)
                // var id = this.parentElement.parentElement.dataset.id;
                var id = this.getAttribute('data-id');
                console.log(id);
                window.location.href = "../../pages/xinxi.html?id=" + id;
            });

            mui(".mui-table-view").on('tap', '.mui-btn-danger', function() { //删除
                var id = this.getAttribute('data-id');
                var btnArray = ['否', '是'];
                var that = this;
                mui.confirm('您是否确认删除此用户？', '删除用户', btnArray, function(e) {
                    if (e.index == 1) {
                        mui.ajax('/api/del', {
                            data: {
                                id: id
                            },
                            dataType: 'json', //服务器返回json格式数据
                            type: 'get', //HTTP请求类型
                            success: function(data) {
                                //服务器返回响应，根据响应结果，分析是否登录成功；
                                // if (data.code === 0) {
                                console.log('我是缓存，我就是不走')
                                that.parentNode.parentNode.remove();
                                // }
                            }
                        });
                    }
                });
            });

            document.querySelector('#jia').addEventListener('tap', function() {
                window.location.href = "../../pages/add.html";
            });

        }




    });
});