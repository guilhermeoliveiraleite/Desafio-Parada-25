let codigo = [];
            let li = document.getElementById("cod_camarote");

            function cadastrarcamarote(){
                let c = document.getElementById("i_camarote").value;
                codigo.push(c);


                
                document.getElementById("i_camarote").value = "";
                
                console.log(c);
                lista_camarote();
            }

            function lista_camarote(){
              
                li.innerHTML = "";
               for (let y=0; y < codigo.length; y++){
                li.innerHTML = `<li> ${codigo[y]} </li>`;
                 
               }

            }
            function remove_camarote(){
               
                codigo.pop();
                lista_camarote();
            }
