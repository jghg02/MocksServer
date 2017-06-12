/**
 * Created by jhgonzalez on 6/12/17.
 */


//LIST
var purchase_list0 = require('./flow_v1.json');
var purchase_list1 = require('./listado_compras1.json');
var purchase_list2 = require('./listado_compras2.json');
var purchase_list3 = require('./listado_compras3.json');
var purchase_list4 = require('./listado_compras4.json');
var down_payment_list = require('./down_payment_list.json');




var purchasesList = function (request, response, next) {
    setTimeout(function(){
        var offset = request.query.offset;
        var resList = purchase_list0;
        if (offset >= "10" && offset <= "19"){
            resList = purchase_list2;
        } else if (offset >= "20" && offset <= "29"){
            resList = purchase_list3;
        } else if (offset >= "30" && offset <= "39"){
            resList = purchase_list4;
        }  else if(offset >= "40"){
            resList = down_payment_list;
        }
        response.send(JSON.stringify(resList), 200);
    }, 2000);
};

exports.purchasesList = purchasesList;