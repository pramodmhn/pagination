function () {
  
    var item_per_page = 4;    
    var item = [];
    var item_arr= [];
    var count=0;
     $(".project_container .selector").each(function(i,e){       
         item.push(e); 
         if( (i+1) % item_per_page == 0){
             count++;         
             item=[];
         }
         item_arr[count]= item;         
     });
    
    $("#index_project").html('');

    //grouping items in container div
    $.each(item_arr,function(i,e){ 
            $.each(e,function(index,ele){
                $(ele).removeClass("selector").addClass("selector"+i);
                 $("#index_project").append(ele);
            });
            $(".selector"+i).wrapAll('<div class="item-container"/>');
    });
    
    $(".item-container:not(:first)").hide();
    var last_item = $(".item-container").last().index();
    $("#index_project").append('<nav class="paginate-pagination"><i class="fa fa-chevron-circle-left fa-lg" aria-hidden="true"></i><i class="fa fa-chevron-circle-right fa-lg pull-right" aria-hidden="true"></i></nav>');
    
    $(".paginate-pagination i").click(function(){
        //current item container index
        var current_index = $(".item-container:visible").index();
        if( $(this).index() == 0 ){          
            if(current_index > 0)  $(".item-container:visible").hide().prev().show();          
        }
        else{          
            if(current_index !== last_item) $(".item-container:visible").hide().next().show();
            
        }
    });
    
}
   