/**
 * Created by mtoader on 12/18/2017.
 */
$(document).ready(() => {
    $.ajax({url: "https://www.cryptocompare.com/api/data/coinlist/", success: function(result){
        console.log(result);
    }});
});
