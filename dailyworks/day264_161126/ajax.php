<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>#264 Web API with PHP, Ajax2</title>
    <script
        src="https://code.jquery.com/jquery-2.2.4.min.js"
        integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
        crossorigin="anonymous">
    </script>
    <script>
        $(function() {
            $('#load').on('click', function() {
                $.getJSON('json.php', function(data) {
                    for (var i in data) {
                        var tr = $('<tr>');
                        var td_item = $('<td>').text(data[i].item);
                        tr.append(td_item);
                        var td_price = $('<td>').text(data[i].price);
                        tr.append(td_price);
                        var td_orders = $('<td>').text(data[i].orders);
                        tr.append(td_orders);
                        $('#listbox').append(tr);
                        $('#loca').hide();
                    }
                });
            });
        });
    </script>
</head>
<body>
<div>
    <input type="button" value="読込" id="load">
    <table id="listbox">
        <tr>
            <th>品名</th>
            <th>価格</th>
            <th>注文数</th>
        </tr>
    </table>
</div>
</body>
</html>