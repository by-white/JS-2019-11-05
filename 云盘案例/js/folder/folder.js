const $folders = $('#f'); //放文件夹的盒子
const $f_empty = $('#f-empty'); //显示隐藏空文件夹
const $checkAll = $('.checkAll');
let every = true;
let returnVal = false;
let time;

function render(num=0){
    every = true; //初始状态就是true
    $folders.html('');
    let d = tools.getChild(data,num);
    //console.log(d)
    list = d; //每次render的时候都把最新的当前需要显示的数据更新
    //console.log(d.length);
    //没有length,就是没有子级
    if(!d.length){
        $f_empty.show();
        $folders.hide();
        return;
    }
    $f_empty.hide();
    $folders.show();
    $.each(d,(i,item)=>{
        //只要有一个数据的布尔值为false,就不可能全部选中,只要不是全部选中那么checkAll就不能打钩
        //console.log(item)
        if(!item.checked){
            every = false;
            $checkAll.removeClass('checked');
        }
       /*  <div class="folder>
            <img src="img/folder-b.png" alt="" />
            <input type="text"/>
            <p></p>
        </div> */
        const {checked,id,title} = item;
        //console.log(item)
        let $folder = $(
        `<div class="folder ${checked?'active':''}" did="${id}">
            <img src="img/folder-b.png" alt="" />
            <input type="text" value="${title}"/>
            <p>${title}</p>
        </div>`
        );
        let $txt = $folder.find('input');
        $txt.hide();
        let $p = $folder.find('p');
        let $img = $folder.find('img');
        //单击选中
        $folder.click(function(){
            clearTimeout(time);
            time = setTimeout(()=>{
               //console.log('单击');
               data[id].checked = !data[id].checked;
               render(num); 
            },200);   
        }) 
       
        $folder.dblclick(function(){
            clearTimeout(time);
            //console.log('双击');
            let id = $(this).attr('did')*1;
            //console.log(id);
            //只要双击进文件夹,先把当前对应数据的布尔值清掉
            d.forEach(item=>item.checked = false);
            $checkAll.removeClass('checked');
            render(id);
            createMenu(id);//联动面包屑
        });

        //阻止按下文件夹的默认行为
        $folder.mousedown(function(){return false;});
        $folders.mousedown(function(){return false;});
        $folders.append($folder);
    });

    //点击全选
    $checkAll.off().click(function(){
        //如果list是个空数组,就不用render
        //console.log(list);
        if (!list.length) return;
        //console.log(d)
        d.forEach(item=>item.checked = !every);//先同步数据
        render(num); //在通过数据渲染页面
    });
    if(every){
        $checkAll.addClass('checked');
    }
} 
render(0);