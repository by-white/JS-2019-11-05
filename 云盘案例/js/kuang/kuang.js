//拖拽框+勾选
const $kuang = $('#b');
const {left:box_l,top:box_t} = $folders.offset(); 
const $box = $('#box');

$folders.on('mousedown',function(ev){
    let disX = ev.pageX,disY = ev.pageY,
    $folder = $folders.find('.folder');
    $p = $folder.find('p');
    $txt = $folder.find('input');
    $txt.hide();
    $p.show();
    /*
        在按下的时候，通过ev.target去判断，当前元素是不是文件夹，或者看看
        目标元素的父级是不是文件夹，如果是就不让框显示出来
    */
    //console.log($(ev.target))
    if($(ev.target).closest('.folder').length) return;
    // console.log($(ev.target).closest('.file-item')); 

    $kuang.show().css({
        left:disX,
        top:disY,
        border: '1px dashed #000'
    });

    $folders.on('mousemove',function(ev){
        $kuang.css({
            //移动的减去按下的
            width:Math.abs(ev.pageX - disX),
            height:Math.abs(ev.pageY - disY),
            //鼠标移动的距离（基于可视区的） - f的距离
            left:Math.min(ev.pageX,disX),
            top:Math.min(ev.pageY,disY),
            
        });
        //move的时候看看，当前的框是否碰到了某几个元素
        $folder.each((i,ele)=>{
          //console.log(1)
            if(bong($kuang[0],ele)){
                list.forEach((item)=>{
                    //数据的id和碰到的did去对比，如果相等就把item的值设置为true
                    if(item.id === $(ele).attr('did')*1){
                        item.checked = true;
                        $(ele).addClass('active');
                    }
                });
            }else{
                list.forEach((item)=>{
                    if(item.id === $(ele).attr('did')*1){
                        item.checked = false;
                        $(ele).removeClass('active');
                    }
                });
            }
            //如果全选就勾上全选中，否则取消全选中。
            if(list.every(item=>item.checked)){
                $checkAll.addClass('checked');
                every = true;
            }else{
                $checkAll.removeClass('checked');
                every = false;
            }
         
        });

    });

    $(document).on('mouseup',function(ev){
      $folders.off('mousemove');
        $(document).off('mouseup');
        $kuang.css({
            width:0,
            height:0,
            display:'none',
            border:'none',
            top:0,
            left:0
        });

        //returnVal 只要是returnVal为true（不需要阻止默认行为的时候，你就没必要画框）

        if(ev.pageX === disX && ev.pageY === disY && !returnVal){
            list.forEach(item => item.checked = false);
            $folder.each((i,ele)=>{
                $(ele).removeClass('active');
            });
            every = false;
            $checkAll.removeClass('checked');
        }
    });

    //return false;
    //console.log(ev.originalEvent);
    ev.originalEvent.returnValue = returnVal;
});
