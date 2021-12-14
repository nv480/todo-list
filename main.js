function listaTareas() {
   let form = document.getElementById('mainForm');

   form.addEventListener('submit', function(e) {
      e.preventDefault();

      let takeInput = document.getElementById('add').value,
          createH3 = document.createElement('h3'),
          createLi = document.createElement('li'),
          createDiv = document.createElement('div'),
          principal = document.getElementById('main'),
          btn = document.createElement('button');

      createH3.innerHTML = `${takeInput}`;
      createH3.style.fontSize = '3vh';
      createDiv.style.border = '2px solid black';
      createDiv.style.padding = '15px 15px 15px';
      createDiv.style.background = '#8e94f2';
      createDiv.style.borderRadius = '10px';
      createDiv.appendChild(createH3);
      createLi.appendChild(createDiv);

      
       
      btn.id = 'btnDelete';
      btn.innerHTML = '<strong>Delete</strong>';
      btn.style.fontSize = '2vh';
      btn.style.background = '#ae2012';
      btn.style.color = 'white';
      btn.style.width = '200px';
      btn.style.height = '65px';
      btn.style.marginLeft = '10px';
      btn.style.border = 'none';
      btn.style.cursor = 'pointer';
      btn.style.borderRadius = '25px';
   
      btn.addEventListener('click', function(e) {
         let drop = e.target;
         createLi.remove(drop);
      });

      createLi.appendChild(btn);
      createLi.style.display = 'flex';
      createLi.style.width = '900px'
      createLi.style.justifyContent = 'space-between';
      createLi.style.padding = '25px 25px 25px';
      createLi.style.background = 'gainsboro';

      principal.appendChild(createLi);
   });
}

listaTareas();