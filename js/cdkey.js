$(document).ready(function() {

var cdkeyId=1;

//toggle方法
    $('.creatNewCDKEY').click(function() {
        if ($('.newCDKEY').is(":hidden")) {
            $('.newCDKEY').removeClass("bounceOutLeft");
            $('.checkCDKEY').addClass("bounceOutLeft");
            $('.checkCDKEY').css("display", "none");
            $('.newCDKEY').addClass("bounceInLeft");
            $('.newCDKEY').css("display", "block");

        } else {

            $('.newCDKEY').removeClass("bounceInLeft");
            $('.newCDKEY').addClass("bounceOutLeft");
            setTimeout("$('.newCDKEY').css('display', 'none')",900);
        }
    });
    $('.queryCDKEY').click(function() {
        if ($('.checkCDKEY').is(":hidden")) {
            $('.checkCDKEY').removeClass("bounceOutLeft");
            $('.newCDKEY').addClass("bounceOutLeft");
            $('.newCDKEY').css('display', 'none');
            $('.checkCDKEY').addClass("bounceInLeft");
            $('.checkCDKEY').css("display", "block");

        } else {

            $('.checkCDKEY').removeClass("bounceInLeft");
            $('.checkCDKEY').addClass("bounceOutLeft");
            setTimeout("$('.checkCDKEY').css('display', 'none')",900);
        }
    });





    //生成cdkey
    function randomCDKEY(){
      var pwd = '';
      var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
      var maxPos = $chars.length;
      for (i = 0; i < 8; i++) {
　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
　　}
　　return pwd;
    }



//创建cdkey行
function add(){
  var rows=[];
  for(var i=0;i<10;i++)
{  rows.push({
    id:cdkeyId++,
    name:randomCDKEY(),

  });}
return rows;
}



//初始化表格
$('#table').bootstrapTable({
  striped: true,
  pagination: true,
  sortable: true,
  pageNumber: 1, //初始化加载第一页，默认第一页
  pageSize: 10, //每页的记录行数（*）
  pageList: [10, 20, 50, 100], //可供选择的每页的行数（*）
  selectItemName:'btSelectItem',//radio or checkbox 的字段名
  checkbox:true,
  search: true, //是否显示表格搜索，此搜索是客户端搜索，不会进服务端
  strictSearch: true,//设置为 true启用 全匹配搜索，否则为模糊搜索
  searchTimeOut:500, //设置搜索超时时间

  showHeader:true,//是否显示列头
  showFooter:false,//是否显示列脚
  showColumns: true, //是否显示所有的列
  showRefresh: true, //是否显示刷新按钮
  clickToSelect: true, //是否启用点击选中行
  uniqueId: "id", //每一行的唯一标识，一般为主键列
  showToggle: true, //是否显示详细视图和列表视图的切换按钮
  showPaginationSwitch:true, //是否显示 数据条数选择框
  cardView:false,//设置为 true将显示card视图，适用于移动设备。否则为table试图，适用于pc
    columns: [{
        field: 'id',
        title: '序列号编号'
    }, {
        field: 'name',
        title: '序列号号码'
    } ],
    data: [{
        id: cdkeyId++,
        name: randomCDKEY()

    }, {
        id: cdkeyId++,
        name: randomCDKEY()
    }]
});



//增加
$('.buildCDY').click(function() {
    $('#table').bootstrapTable('append',add());
    $('#table').bootstrapTable('scrollTo', 'bottom');
    $('.CDKEYState').text('【当前CDKEY概况】当前系统中共有CDKEY【'+(cdkeyId-1)+'】枚，已被使用【0】枚。')

});




});
