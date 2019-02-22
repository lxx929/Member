require(['../js/config.js'], function() {
    require(['mui'], function(mui) {

        init();

        function init() {
            adduser();

        }

        function adduser() {

            document.querySelector('#que').addEventListener('tap', function() {

                var user = document.querySelector('.user').value,
                    age = document.querySelector('.age').value,
                    phone = document.querySelector('.phone').value,
                    address = document.querySelector('.address').value,
                    card = document.querySelector('.card').value;


                if (user == "" || card == "") {
                    alert("请您完善信息！");
                } else {
                    mui.ajax('/api/add', {
                        data: {
                            user: user,
                            age: age,
                            phone: phone,
                            address: address,
                            ID_card: card
                        },
                        dataType: 'json', //服务器返回json格式数据
                        type: 'post', //HTTP请求类型
                        success: function(data) {
                            window.location.href = '../../index.html';
                        }
                    });
                }

            });

            document.querySelector('#qu').addEventListener('tap', function() {
                window.location.href = "../../index.html";
            });
        }

    });
});
1