
console.log(localStorage.gfUserMsgrole)

if(localStorage.gfUserMsgrole==="0"||localStorage.gfUserMsgrole===""){
	alert("您还没有登录，请登录后再进入")
		window.location.replace("./login.html");
	}
var time=new Date();
if(time.getTime()-localStorage.gfTime>=3000000){
	alert("时间太长,请重新登录")
	window.location.replace("./login.html");
}


function logout(){
  localStorage.gfUserMsgrole="0";
	alert('注销成功')
  window.location.replace("./login.html");
}
