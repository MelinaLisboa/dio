function adicionarItem(){
    var txtTarefa = document.getElementById('txtTarefa');
    var res = document.querySelector('div#itens');

   if(txtTarefa.value.length == 0){
       window.alert('Digite uma tarefa antes de adicionar.');
   }
   else{
       var parList = document.createElement('p');
       var chkItemList = document.createElement('input');
       chkItemList.setAttribute('type', 'checkbox');
       chkItemList.setAttribute('id', 'checkItem');
       var labelItemList = document.createElement('label');
       labelItemList.setAttribute('for', 'checkItem');
       labelItemList.innerHTML = txtTarefa.value;
       
       res.appendChild(parList);
       res.appendChild(chkItemList);
       res.appendChild(labelItemList);
       txtTarefa.value = "";
   }
}