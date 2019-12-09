/* <div id="breadMenu">
        <a href="javascript">微云</a>
        <span>我的文档</span>
    </div> */
const {getParents,bong,getChild,getChilds} = tools;
const $bread = $('#breadMenu');
let list = null;

function createMenu(id){
    $bread.html('');
    let menu = getParents(id); //找当前id下的所有父级包括自己
    //console.log(menu)
    menu.forEach((item,i,all)=>{
        //如果item是数组的最后一项,那么元素应为span
            //console.log(all);
        let $navChild = null;
        if ( i === all.length-1) {
            //console.log(1)
            $navChild = $('<span>'+ item.title +'</span>');
        }else{
            //console.log(2)
            $navChild = $('<a href="javascript:void(0);">'+ item.title +'>'+'</a>');
        }

        //点击面包屑,让文件夹和面包屑一起动
        $navChild.click(function(){
            //console.log(tools.getChild(data,3));
            tools.getChild(data,id).forEach(item=>item.checked = false);
            render(item.id);
            createMenu(item.id);    
        });
        $bread.append($navChild);
    });
}
createMenu(0);