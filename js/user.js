$(document).ready(function() {









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
        title: '编号',
        sortable:true
    }, {
        field: 'email',
        title: '邮箱账户',
        sortable:true
    },{
        field: 'name',
        title: '姓名',
        sortable:true
    },{
        field: 'time',
        title: '时间',
        sortable:true
    },{
        field: 'company',
        title: '公司',
        sortable:true
    },{
        field: 'phone',
        title: '电话',
        sortable:true
    },{
        field: 'state',
        title: '激活状态',
        sortable:true
    }
   ],

});






//toggle方法
    $('.verify').click(function() {
        if ($('.verifyContainer').is(":hidden")) {
            $('.verifyContainer').removeClass("bounceOutLeft");
            $('.resetContainer').removeClass("bounceOutLeft");
            $('.queryContainer').removeClass("bounceOutLeft");
            $('.listContainer').removeClass("bounceOutLeft");
            $('.transferContainer').removeClass("bounceOutLeft");

            $('.verifyContainer').css('display', 'none');
            $('.resetContainer').css('display', 'none');
            $('.queryContainer').css('display', 'none');
            $('.listContainer').css('display', 'none');
            $('.transferContainer').css('display', 'none');

            $('.verifyContainer').addClass("bounceInLeft");
            $('.verifyContainer').css("display", "block");

        } else {
            $('.verifyContainer').removeClass("bounceInLeft");
            $('.verifyContainer').addClass("bounceOutLeft");
            setTimeout("$('.verifyContainer').css('display', 'none')",900);
        }
    });
    $('.reset').click(function() {
        if ($('.resetContainer').is(":hidden")) {
          $('.verifyContainer').removeClass("bounceOutLeft");
          $('.resetContainer').removeClass("bounceOutLeft");
          $('.queryContainer').removeClass("bounceOutLeft");
          $('.listContainer').removeClass("bounceOutLeft");
          $('.transferContainer').removeClass("bounceOutLeft");

          $('.verifyContainer').css('display', 'none');
          $('.resetContainer').css('display', 'none');
          $('.queryContainer').css('display', 'none');
          $('.listContainer').css('display', 'none');
          $('.transferContainer').css('display', 'none');

          $('.resetContainer').addClass("bounceInLeft");
          $('.resetContainer').css("display", "block");

        } else {

            $('.resetContainer').removeClass("bounceInLeft");
            $('.resetContainer').addClass("bounceOutLeft");
            setTimeout("$('.resetContainer').css('display', 'none')",900);
        }
    });
    $('.query').click(function() {
        if ($('.queryContainer').is(":hidden")) {
          $('.verifyContainer').removeClass("bounceOutLeft");
          $('.resetContainer').removeClass("bounceOutLeft");
          $('.queryContainer').removeClass("bounceOutLeft");
          $('.listContainer').removeClass("bounceOutLeft");
          $('.transferContainer').removeClass("bounceOutLeft");

          $('.verifyContainer').css('display', 'none');
          $('.resetContainer').css('display', 'none');
          $('.queryContainer').css('display', 'none');
          $('.listContainer').css('display', 'none');
          $('.transferContainer').css('display', 'none');

          $('.queryContainer').addClass("bounceInLeft");
          $('.queryContainer').css("display", "block");
        } else {

            $('.queryContainer').removeClass("bounceInLeft");
            $('.queryContainer').addClass("bounceOutLeft");
            setTimeout("$('.queryContainer').css('display', 'none')",900);
        }
    });
    $('.list').click(function() {
        if ($('.listContainer').is(":hidden")) {
          $('.verifyContainer').removeClass("bounceOutLeft");
          $('.resetContainer').removeClass("bounceOutLeft");
          $('.queryContainer').removeClass("bounceOutLeft");
          $('.listContainer').removeClass("bounceOutLeft");
          $('.transferContainer').removeClass("bounceOutLeft");

          $('.verifyContainer').css('display', 'none');
          $('.resetContainer').css('display', 'none');
          $('.queryContainer').css('display', 'none');
          $('.listContainer').css('display', 'none');
          $('.transferContainer').css('display', 'none');

          $('.listContainer').addClass("bounceInLeft");
          $('.listContainer').css("display", "block");
        } else {

            $('.listContainer').removeClass("bounceInLeft");
            $('.listContainer').addClass("bounceOutLeft");
            setTimeout("$('.listContainer').css('display', 'none')",900);
        }
    });
    $('.transfer').click(function() {
        if ($('.transferContainer').is(":hidden")) {
          $('.verifyContainer').removeClass("bounceOutLeft");
          $('.resetContainer').removeClass("bounceOutLeft");
          $('.queryContainer').removeClass("bounceOutLeft");
          $('.listContainer').removeClass("bounceOutLeft");
          $('.transferContainer').removeClass("bounceOutLeft");

          $('.verifyContainer').css('display', 'none');
          $('.resetContainer').css('display', 'none');
          $('.queryContainer').css('display', 'none');
          $('.listContainer').css('display', 'none');
          $('.transferContainer').css('display', 'none');

          $('.transferContainer').addClass("bounceInLeft");
          $('.transferContainer').css("display", "block");
        } else {

            $('.transferContainer').removeClass("bounceInLeft");
            $('.transferContainer').addClass("bounceOutLeft");
            setTimeout("$('.transferContainer').css('display', 'none')",900);
        }
    });


});
