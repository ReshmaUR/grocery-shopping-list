function shoppinglist(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState ==4 && this.status ==200){
            var response = JSON.parse(this.responseText);
            var jproduct = response.product;
            var col = [];
            for(var i=0;i<jproduct.length;i++){
                for(var key in jproduct[i]){
                    if(col.indexOf(key) === -1){
                        col.push(key);
                    }
                }
            }
            //table creation
            var table = document.createElement("table");
            var tr = table.insertRow(-1);
            for(var i =0;i<col.length;i++){
                var th = document.createElement("th");
                th.innerHTML = col[i];
                tr.appendChild(th);
            }
            for(var i =0;i<jproduct.length;i++){
                tr = table.insertRow(-1);
                for(var j = 0;j<col.length;j++){
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = jproduct[i][col[j]];
                }
            }
            var container = document.getElementById("matter");
            container.innerHTML = "";
            container.appendChild(table);
            document.getElementById("image").src = "images/shop2.jpg";
            var text = document.getElementById("text");
            text.innerHTML = "Grocery shopping list...";
        }
    };
    xhttp.open("GET","list.json",true);
    xhttp.send();
}