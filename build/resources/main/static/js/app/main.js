var main = {
    init : function () {
        var _this = this;
        $('#btn-save').on('click', function(){
            _this.save();
        });
    },
    save : function (){
        var data = {
            title:$('#title').val(),
            author:$('#author').val(),
            content:$('#content').val()
        };

        $.ajax({
            type: 'POST',
            url: '/posts',
            /*dataType: 'json',*/ // dataType은 클라이언트가 받는 값 설정하는 것인데 컨트롤러에서는 리턴값이 void로 설정되어 있어 받는 값이 없는데 json으로 설정해 200번 에러 발생ㅜ
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data),
        }).done(function (){
            alert('글이 등록되었습니다.');
            location.reload();
        }).fail(function (request, status, error) {
            alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        });
    }
};

main.init();