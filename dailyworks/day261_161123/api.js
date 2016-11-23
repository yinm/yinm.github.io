$(function() {
    $('body').on('click', 'button[data-btn-type=ajax]', function(e) {
        console.log('click btn');

        var send_data;
        send_data = {
            user_type: $('input').val()
        };
        console.log('inputタグの値だよ');
        console.log(send_data);

        // Web APIを叩く
        $.ajax({
            url: 'users.php',
            dataType: 'json',
            data: send_data
        })
        .done(function(response) {
            if (response.result === "OK") {
                console.log('responseだよ！');
                console.log(response);
                $('div[data-result=""]').html(JSON.stringify(response));
            } else {
                console.log('responseだよ！');
                console.log(response);
                $('div[data-result=""]').html(JSON.stringify(response));
            }
            return false;
        })
        .fail(function(XMLHttpRequest, textStatus, errorThrown) {
            $('div[data-result=""]').html(XMLHttpRequest.status + ':' + errorThrown);
            return false;
        });

        // フォーカスをテキストボックスに合わせる
        $('input').focus();
        return false;
    });

});