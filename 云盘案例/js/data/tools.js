let tools = (function(){
    function getChild(data,id=0){
        //debugger
        if (!data[id]) return null; //如果传入的id,没有这个数据就返回null
        let ary = Object.keys(data);//data对象的所有属性名的数组集合
        return ary.filter(item=>data[item].pid === id).map(item=>data[item]);//  data[item]属性值  data[item].pid属性值的属性为pid的属性值         
    }
    function getChilds(id=-1){
        let ary = Object.keys(data);
        return ary.filter(item=>data[item].pid === id).map(item=>data[item]);
    }
    function getParent(id){
        //data[id].pid 是个数字   data[data[id].pid]
        if(data[id].pid === '-1')return null;//到-1就说明到顶了
        return data[data[id].pid];
    }
    function getParents(id){
        let pdata = getParent(id);//父级
        let ary = [data[id]]; //先把自己存进去
        //一直循环直到pdata为null
        //debugger
        while (pdata) {
            ary.unshift(pdata);//把每次的父级都存到ary中
            pdata = getParent(pdata.id);//每次都要改变pdata
        }
        //console.log(ary)
        return ary;
    }
    function bong(obj,obj2){
        let {left:l,top:t,bottom:b,right:r} = obj.getBoundingClientRect();
        let {left:l2,top:t2,bottom:b2,right:r2} = obj2.getBoundingClientRect();
        if(r < l2 || b < t2 || l > r2 || t > b2){
            // console.log('没碰到');
            return false;
        }else{
            // console.log('碰到');
            return true;
        }
    }
    return{
        getChild,
        getParents,
        bong,
        getChilds
    }
})();
