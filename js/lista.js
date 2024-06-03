let nomes = [];
            let ul = document.getElementById("lista");

            function cadastra_nome(){
                let n = document.getElementById("nome").value;
                nomes.push(n);


                
                document.getElementById("nome").value = "";
                
                console.log(n);
                lista();
            }

            function lista(){
              
                ul.innerHTML = "";
               for (let x=0; x < nomes.length; x++){
                let ul = document.getElementById("lista");
                  let li = document.createElement("li");
                  li.innerHTML += `${nomes[x]}`;

                  ul.appendChild(li);
                
               }

            }


            function remove_baixo(){
               
                nomes.pop();
                lista();
            }

            function remove_cima(){
                
                nomes.shift();
                lista();
            }

            function enviar(){
                window.location.assign("camarote.html")
                

                
            }


           