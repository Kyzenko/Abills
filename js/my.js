$(document).ready(function () {  
   
    $( function() {
        $( "#left-panel, #right-panel" ).sortable({
          connectWith: ".connectedSortable",
        handle: ".header",
        cursor: "move",
        }).disableSelection();
    });
    
});