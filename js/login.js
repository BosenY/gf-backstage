

$('#btn-lg').click(function(){
  var adminname =$('.adminName').text();
  var adminpassword=$('.adminpassword').text();
  $.ajax({
  url:'http://rap.taobao.org/mockjs/5855/login',
  data:{
    'adminName':adminname,
    'adminPassword':adminpassword
  },
  success:function(json){
    var time=new Date();
    localStorage.gfTime=time.getTime();
    localStorage.gfUserMsgrole='1';
    console.log(json)
    console.log(localStorage.gfTime)
    console.log(localStorage.gfUserMsgrole)
    if(json.result==adminname)
    alert('登陆成功！');
     window.location.href="./manage-index.html";
  },
  error:function(response){
    localStorage.gfUserMsgrole='0';
    alert("发生错误"+response.status);
  }

});
});
