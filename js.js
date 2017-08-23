
      // 载入所有存储在localStorage的数据
      loadAll();  
            
    //保存数据  
    function save(){  
        var siteurl = document.getElementById("siteurl").value;  
        var sitename = document.getElementById("sitename").value;
        if(siteurl!="" && sitename!=""){
            localStorage.setItem(sitename, siteurl);
            loadAll();
        }  
            
    }
    // 清空数据
    function del(){
        localStorage.clear();
        loadAll();  
    }
    // 删除数据
    function remove(a){
        var sitename = a.parentNode.firstChild.innerHTML;
        localStorage.removeItem(sitename); 
        loadAll();
    }
    //查找数据  
    function find(){  
        var search_site = eval(document.getElementById("searchsite")).value;  
        var sitename = localStorage.getItem(search_site);  
        if(sitename){
            var find_result = document.getElementById("find_result");  
            find_result.innerHTML = search_site + "的网址是：" + sitename;  
        }else{
            var find_result = document.getElementById("find_result");  
            find_result.innerHTML = '"'+search_site+'"'+"网址不存在,请重新输入！！！"; 
        }
        
    }
    //将所有存储在localStorage中的对象提取出来，并展现到界面上
    function loadAll(){  
        var searchsite = document.getElementById("searchsite");
        var searchsites = document.getElementById("searchsites");
        var list = document.getElementById("list");  
        if(localStorage.length>0){  
            var result = "<table>";  
            result += "<tr><td class='td1'>网站名</td><td class='td2'>网址</td><td class='td3'>操作</td></tr>"; 
            var opt = "" ; 
            for(var i=0;i<localStorage.length;i++){  
                var sitename = localStorage.key(i);  
                var siteurl = localStorage.getItem(sitename);  
                result += "<tr><td class='td1'>"+sitename+"</td><td class='td2'>"+siteurl+"</td><td class='td3 curpoi' onclick='remove(this)'>删除</td></tr>";  
                opt += "<option value='"+sitename+"'>";
            }  
            result += "</table>";  
            list.innerHTML = result; 
            searchsites.innerHTML = opt;
        }else{  
            var result = "<table border='1' style='border-collapse: collapse;width:100%'>";  
            result += "<tr><td>网站名</td><td>网址</td><td>操作</td></tr>";
            result += "<tr><td colspan='3'>数据为空……</td></tr>";   
            result += "</table>";  
            list.innerHTML = result;  
            var opt = "";
            searchsites.innerHTML = opt;
            var find_result = document.getElementById("find_result");  
            find_result.innerHTML = "数据为空……"; 
        }  
    }      