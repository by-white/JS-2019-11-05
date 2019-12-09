//新建
$('#new').click(function(){
    let $folder = $(`
    <div class="folder">
        <img src="./img/folder-b.png" alt="">
        <input type="text" value="新建文件夹">
        <p>新建文件夹</p>
    </div>  
    `);
    let {pid} = list[0];
    //console.log(list)
    $('#f').append($folder);
    let $txt = $folder.find('input');
    let $p = $folder.find('p');
    $p.hide();
    //聚焦
    $txt.select();
    //失焦
    $txt.blur(function(){
        let val = $txt.val();
        let bool = list.map(item=>item.title).includes(val); 
        let nval = '';
        let num = 1;
        nval = val;
        while(bool){
            let s = val.replace(/\(\d\)$/,'') + '('+ num++ +')';
            bool = list.map(item=>item.title).includes(s);
            nval = s;
        }
        //console.log(data[pid])
        //console.log(data)
        data[+new Date] = {
            id:+new Date,
            pid:pid,
            title:nval
        }
        render(pid);
    });
}); 

//删除
const $del = $('#delete');

$del.click(function(){
    //去判断至少要有一个文件被选中，如果都没被选中，说明找不到要删除的文件
    if(list.some(item=>item.checked)){
        let {pid} = list[0]; //为了删除数据之后，重新渲染页面使用的
        list.forEach(item => {
            if(item.checked){
               delete data[item.id];
            }
        });
        render(pid);
    }else{
        alert('请选择文件');
    }
});


//重命名
const $rename = $('#rename');
$rename.click(function(){
    let reData = list.filter(item=>item.checked); 
    if(list.some(item=>item.checked)){
        if(reData.length === 1){
            /*
                reData.title = val   (不能重名)
            */
           let $folder = $folders.find('.active');
           let $p = $folder.find('p');
           let $txt = $folder.find('input');
           $p.hide();
           $txt.css('display','block');
           $txt.select();
           $txt.blur(function(){
               //不能重名    
               /*
                    1.用户修改了吗？没有修改就不动，有就修改
                    2.有没有重名
               */
                let val = $txt.val();
                if($p.text() === val){
                    $p.show();
                    $txt.hide();
                }else{
                    if(!val){
                        console.log('请填写内容');
                        $txt.val($p.text());
                        $txt.select();
                        return;
                    }
                    let {id,pid} = reData[0];
                    let siblings = list.filter(item=>item.id != id);
                    if(siblings.some(item=>item.title === val)){
                        console.log('不好意思,你重名了');
                        $txt.select();
                    }else{
                        data[id].title = val;
                        data[id].checked = false;
                        render(pid);
                    }
                }
           });
        }else{
            alert('只能选择一个文件');
        }
    }else{
        alert('请选择文件');
    }
});


//移动tree
let that = null;
let okcode = -1;
function createModelTree(num){
    //通过num找到对应的子级
    let ary = getChild(data,num);
    if(!ary.length)return;
    //只要有自己就创建一个ul，因为ul中要插入li
    let $ul = $('<ul style="padding-left:5px"></ul>');
    //循环子级数据，生成很多的li
    ary.forEach(item=>{
        let $li = $(`
         <li>
            <i></i><span>${item.title}</span>
         </li>
        `);
        if(!getChild(data,item.id).length){
            $li.find('i').css('background','none');
        }
        $li.off().click(function(){
            let reData = list.filter(item=>item.checked); 
            //点击li的时候，看看点击的文件和要移动的文件是不是有直系关系
            //如果有直系关系，那么就点不开
            if(reData.some(d=>d.id === item.id)){
                okcode = 'error';
                return;
            }else{
                okcode = item.id;
            }
            if(that){
                that.css({background:'none'});
            }
            $(this).find('span').css({
                background:'skyblue'
            });
            that = $(this).find('span');

            if(this.children[0].classList.toggle('open')){
                $(this).append(createModelTree(item.id));
            }else{
                // okcode = item.id; 
                $(this).find('ul').remove();
            }
            return false;
        });
        //再把li放到ul中
        $ul.append($li);
    }); 
    //返回当前创建的ul，里面有很多的li(文件夹)
    return  $ul;
}


//移动
const $remove = $('#move');
const $model_list = $('#moveT ul').children();
$remove.off().click(function(){
    let reData = list.filter(item=>item.checked); 
    if(!reData.length){
        console.log('木有移动的文件');
    }else{
        $('#moveF').css('display','flex'); //打开移动的框
        $model_list.find('ul').remove();
        $model_list.append(createModelTree(0)); 
    }
    //确定
    const ok = $('#yes');
    ok.off().click(function(){
        if(okcode === 'error'){
            alert('非法操作');
            return;
        }
        let id = reData[0].pid; //存一下改之前的pid，为了一会刷新页面
        reData.forEach(item=>{
            item.pid = okcode;
            item.checked = false;
        });
        console.log(createTree(0,true));
        $tree.children().append(createTree(0,true));
        render(id);
        $('#moveF').hide();
    });
    //取消
    const no = $('#no');
    no.off().click(function(){
        $('#moveF').hide();
    });
    //取消二
    const clo = $('#mTop span');
    clo.off().click(function(){
        $('#moveF').hide();
    });
})





