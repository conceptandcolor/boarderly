for (r = 0; r < data.length; r++){
    var tbodyRow = document.createElement("tr");
    var bin = [];
    
 
for (j = 0; j < columns.length; j++){
  
    
    //var bin = [];


        for (i = 0; i < data.length; i++){
          
            
                var a = data[i].status.toLowerCase();
                var b = columns[j].columnName.toLowerCase();

                var c = bin.find(element => element == b);
                var d = false;

                if (c === b){
                    d = true;
                }

                var used = contractBin.find(element => element == data[i].quote);

                if (a === b && d === false && used != data[i].quote){
                        //console.log(a+ i + " " + b + j);
                        var obj = document.createElement("th");

                        const rowContainer = document.createElement("div");
                        rowContainer.setAttribute("style", "border-right-style: solid; border-bottom-style: solid; border-width: 1px;");
                        rowContainer.innerHTML = data[i].quote;

                        const customerObj = document.createElement("p");
                            customerObj.innerHTML = data[i].customer;
                            customerObj.setAttribute("style", "font-size: x-small;");
                            rowContainer.appendChild(customerObj);

                        const quotetitleObj = document.createElement("p");
                            quotetitleObj.innerHTML = data[i].quotetitle;
                            quotetitleObj.setAttribute("style", "font-size: x-small; margin-top: -15px;");
                            rowContainer.appendChild(quotetitleObj);

                            
                        const agentObj = document.createElement("p");
                            agentObj.innerHTML = data[i].agent;
                            agentObj.setAttribute("style", "font-size: x-small; margin-top: -15px;");
                            rowContainer.appendChild(agentObj);


                        obj.appendChild(rowContainer);
                        //tbodyRow.appendChild(obj);
                        

                        bin.push(a); 
                        contractBin.push(data[i].quote);
                        d = false;
                        break;
                } else {
                        var obj = document.createElement("th");
                        const rowContainer = document.createElement("div");
                        rowContainer.innerHTML = "Empty";
                        obj.appendChild(rowContainer);
                        //tbodyRow.appendChild(obj);
                        //bin.push(a); 
                        d = false;
                            
                }
                
            
    }
    tbodyRow.appendChild(obj);


}
tbody.appendChild(tbodyRow);
}