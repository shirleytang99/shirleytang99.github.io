$(document).ready(function(){
    $("button#hide_h2").click(function() {
        $("h2").hide(500);
    });

    $("button#show_h2").click(function() {
        $("h2").show(300);
        $("h2").css("color","blue");
        $("h2").html("You clicked me hard.");
    });

    $("button#get_data").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/appTLnwsg6opF4Dcj/What%20I%20wear?api_key=keytIXhS7YQcZwe4a";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.Items);
                       items.push(value.fields.Assortment);
                       items.push(value.fields.Category);
                       items.push(value.fields.Color);
                       items.push(value.fields.Price);
                       items.push(value.fields.MonthlySales);
                       items.push(value.fields.MonthlyTransactions);
                       dataSet.push(items);
                }); // end .each
             $('#example').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "Items",
                       defaultContent:""},
                     { title: "Assortment",
                       defaultContent:"" },
                     { title: "Category",
                       defaultContent:""},
                     { title: "Color",
                       defaultContent:""},
                    { title: "Price",
                       defaultContent:""},
                    { title: "Monthly Sales",
                        defaultContent:""},
                    { title: "Monthly Transactions",
                            defaultContent:""},
                 ]
             } );
        }); // end .getJSON
     }); // end button
}); // document ready
