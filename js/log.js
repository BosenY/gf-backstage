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
  uniqueId: "time", //每一行的唯一标识，一般为主键列
  showToggle: true, //是否显示详细视图和列表视图的切换按钮
  showPaginationSwitch:true, //是否显示 数据条数选择框
  cardView:false,//设置为 true将显示card视图，适用于移动设备。否则为table试图，适用于pc
    columns: [{
        field: 'time',
        title: '操作时间',
        sortable:true
    }, {
        field: 'account',
        title: '操作账号',
        sortable:true
    },
    {
      field: 'context',
      title: '操作内容',
      sortable:true
    }
  ],

});








});
