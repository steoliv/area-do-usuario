var fields = document.querySelectorAll("#form-user-create [name]");
var user ={}; //json



//Evento click nos btns

document.getElementById("form-user-create").addEventListener("submit", function(event){

    event.preventDefault(); //Cancela o comando padrão que o evento teria
    
    fields.forEach(function(field, index){
    
        if(field.name == "gender"){
    
            if(field.checked){
    
                user[field.name] = field.value;
    
            }
            
        }else{
    
            user[field.name] = field.value;
        
        }
    
        
    });
    
    console.table(user); // exibindo JSON


    });

