var fields = document.querySelectorAll("#form-user-create [name]");

fields.forEach(function(field, index){

    if(field.name == "gender"){

        if(field.checked){
   
            console.log("Sim", field);
        }
        
    }else{

        console.log("Nao", field);
    
    }
    
});