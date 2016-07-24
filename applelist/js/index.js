var todos=[
  {
  	id:1,
  	title:'新列表1',
  	color:'red',
  	list:[
  	  {
  		content:"113456789",
  		date:'100000',
  		done:true
  	  },
  	  {
  		content:"1222222222",
  		date:'100000',
  		done:true
  	  },
  	  {
  		content:"133333333",
  		date:'100000',
  		done:false
  	  }
  	  ,
  	  {
  		content:"gjbhjhjnjh",
  		date:'100000',
  		done:true
  	  }
  	]
  },{
  	id:2,
  	title:'新列表2',
  	color:'yellow',
  	list:[
  	  {
  		content:"2456789",
  		date:'20000',
  		done:false
  	  },
  	  {
  		content:"256789",
  		date:'220045',
  		done:false
  	  }
  	]
  }
]

var  icloud=angular.module('icloud',[]);
     icloud.controller('ctrl',function($scope){

        //1.实现点击按钮添加
        $scope.todo=todos;
        $scope.color=['red','orange','yellow','green','blue','pink','purple']
        // $scope.ids=0;
        $scope.index=0;     //3 下标初始化  否则右侧的title从新添加的列表显示
        $scope.add=function(){
    	$scope.ids=$scope.todo[$scope.todo.length-1].id+1;
    	$scope.todo.push({
    		id:$scope.ids,
    		title:'新列表'+$scope.ids,
    		//1.1. 实现左边球球颜色的改变
    		color:$scope.color[$scope.ids%7],
    		list:[]
    	})
    	// console.log($scope.todo.length)
    	$scope.index=$scope.todo.length-1;  //3  onle this js
    }

    //点击左侧右侧出现相应列表  4
    $scope.select=function(i){
    	$scope.index=i;
    }

    //右侧已完成列表默认隐藏 6
    $scope.flag=true;
    //把已完成()项 与js中的数据关联起来  7.2
    $scope.doneNum=0;
    angular.forEach($scope.todo[$scope.index].list,function(o,i){
    	if(o.done==true){
    	  $scope.doneNum++;
    	}
    })
    //7.1 已完成的内容 通过判断done的值 true false 
    $scope.done=function(val,index,arr){
    	return val.done==true?true:false;
    }
    //8 未完成的内容 done:false
    $scope.doing=function(val,index,arr){
    	return val.done==false?true:false;
    }
    //右侧 点击新建内容 新增一条可编辑的列表
    

})

//1.实现点击按钮 新增列表
  //1.1 按钮 新增列表左侧圆球的颜色是不一样的
//2.从js获取右侧title的内容及颜色   获取选项按钮的颜色
//3.左侧新增列表 同时 右边的title相应变化
    //$scope.todo.length 4(左侧列表数)   $scope.index=3
//4.点击左侧列表 右边的内容相应变化
//5.当前页面显示哪个列表 页面左侧那个列表的颜色改变
    //点击哪个列表 哪个列表的颜色改变
//5.获取右边title以下的内容  首先获取已完成的内容 5.1  5.2
//6.右边已完成下的列表默认隐藏  6.1  6.2
//7.已完成()项  将内容写成动态的 与js中的数据关联起来
//8.当前未完成的内容 
//9.右侧 点击新建内容 新增一条可编辑的列表
