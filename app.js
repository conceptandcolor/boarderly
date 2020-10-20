var data = [
    {"quote":"2019-01167-R9", "status":"lost", "customer": "Merry Savings Bank", "quotetitle": "Inside Network", "agent": "Jordon, Denny"},
    {"quote":"2020-01362-R1", "status":"draft", "customer": "Merry Savings Bank", "quotetitle": "Inside Network", "agent": "Jordon, Denny"},
    {"quote":"2019-01207-R2", "status":"rejected", "customer": "PDC Group", "quotetitle": "Managed Servers & Routers", "agent": "Jordon, Denny"},
    {"quote":"2019-01167-R3", "status":"draft", "customer": "Merry Savings Bank", "quotetitle": "Inside Network", "agent": "Jordon, Denny"},
    {"quote":"2019-01207-R4", "status":"approved", "customer": "PDC Group", "quotetitle": "Managed Servers & Routers", "agent": "Jordon, Denny"},
    {"quote":"2019-01207-R5", "status":"approved", "customer": "PDC Group", "quotetitle": "Managed Servers & Routers", "agent": "Jordon, Denny"},
    {"quote":"2019-01207-R6", "status":"approved", "customer": "PDC Group", "quotetitle": "Managed Servers & Routers", "agent": "Jordon, Denny"}
];

var columns = [
    {"columnName":"Draft", "color": "#5fd2ed", "fontColor": "black"},
    {"columnName":"Submit for Approval", "color": "#3db9af", "fontColor": "black"},
    {"columnName":"Approved", "color": "#85ce36", "fontColor": "black"},
    {"columnName":"Rejected", "color": "#f35959", "fontColor": "black"}, 
    {"columnName":"Pending Customer", "color": "#ffd633", "fontColor": "black"},
    {"columnName":"Lost", "color": "#404041", "fontColor": "white"},
    {"columnName":"Won", "color": "#1a1aa9", "fontColor": "white"}
];

gogo = () => {
    const app = document.getElementById("app");
   // app.setAttribute("class", "container");

    const table = document.createElement("table");
        table.setAttribute("class", "table");
        table.setAttribute("id", "tableReset");

    const tableHead = document.createElement("thead");
    const tableHeaderRow = document.createElement("tr");

    for (i = 0; i < columns.length; i++){
        const obj = document.createElement("th");
            obj.innerHTML = columns[i].columnName;
            obj.setAttribute("style", `background-color:${columns[i].color}; text-align:center; font-size: small; color: ${columns[i].fontColor};`);
            obj.setAttribute("id", `${columns[i].columnName}`);
            //obj.setAttribute("class", "col");
        tableHeaderRow.appendChild(obj);
    }

    tableHead.appendChild(tableHeaderRow);
    table.appendChild(tableHead);

    const tbody = document.createElement("tbody");
    var contractBin = [];


    var res = data.reduce(function(obj, v) {
    obj[v.status] = (obj[v.status] || 0) + 1;
    return obj;
    }, {});

    const vals = Object.values(res);
    const totalRows = Math.max(...vals);       


     
    for (j = 0; j < totalRows; j++){
        
        var tbodyRow = document.createElement("tr");
        var bin = [];

    for(r = 0; r < columns.length; r++){

        var obj = document.createElement("th");

         for (i = 0; i < data.length; i++){

             var dataStatus = data[i].status.toLowerCase();
             var columnStatu = columns[r].columnName.toLowerCase();

            var check = bin.find(element => element == columnStatu);
            var flag = false;

            if (check === columnStatu){
                flag = true;
            }

            var used = contractBin.find(element => element == data[i].quote);

            if (dataStatus === columnStatu && flag === false && used != data[i].quote){

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

                    bin.push(dataStatus); 
                    contractBin.push(data[i].quote);
                    flag = false;
                    break;
             } 
        }
        tbodyRow.appendChild(obj);
    }
    tbody.appendChild(tbodyRow);
    }
table.appendChild(tbody);
app.appendChild(table);
}

gogo();


buildInput = () => {
    const cont = document.createElement("app");
    cont.setAttribute("id", "buildInputSection"); 


    const quoteSet = document.createElement("input");
    quoteSet.setAttribute("placeholder", "Enter Quote #"); 
    quoteSet.setAttribute("id", "quote"); 

    const statusSet = document.createElement("input");
    statusSet.setAttribute("placeholder", "Enter Status");
    statusSet.setAttribute("id", "status"); 

    const customerSet = document.createElement("input");
    customerSet.setAttribute("placeholder", "Enter Customer Name");
    customerSet.setAttribute("id", "customer"); 

    const titleSet = document.createElement("input");
    titleSet.setAttribute("placeholder", "Enter Quote Title");
    titleSet.setAttribute("id", "title"); 

    const agentSet = document.createElement("input");
    agentSet.setAttribute("placeholder", "Enter Agent");
    agentSet.setAttribute("id", "agent"); 

    const submitBtn = document.createElement("button");
    submitBtn.innerHTML = "Submit";
    submitBtn.setAttribute("onclick", "submitInput()"); 

    cont.appendChild(quoteSet);
    cont.appendChild(statusSet);
    cont.appendChild(customerSet);
    cont.appendChild(titleSet);
    cont.appendChild(agentSet);
    cont.appendChild(submitBtn);


    app.appendChild(cont);
}

buildInput();

submitInput = () => {
    var a = document.getElementById("quote").value;
    var b = document.getElementById("status").value;
    var c = document.getElementById("customer").value;
    var d = document.getElementById("title").value;
    var e = document.getElementById("agent").value;

    data.push({"quote": a, "status": b,"customer": c,"quotetitle": d, "agent": e});

    div = document.getElementById("tableReset");
    div.parentNode.removeChild(div); 

    div = document.getElementById("buildInputSection");
    div.parentNode.removeChild(div); 

    gogo();
    buildInput();
    console.log(data);
}

