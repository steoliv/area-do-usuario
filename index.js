var fields = document.querySelectorAll("#form-user-create [name]");
var user ={}; //json



//Função para adicionar linha na tabela
function addLine(dataUser){
    
    document.getElementById("table-user").innerHTML = 
        `<tr>
                <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
                <td>${dataUser.name}</td>
                <td>${dataUser.email}</td>
                <td>${dataUser.admin}</td>
                <td>${dataUser.brith}</td>
                <td>
                <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
                </td>
            </tr>
        `;

    

}

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
    
    addLine(user); // exibindo JSON


    });

