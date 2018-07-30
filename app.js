const div = document.getElementById('container-post');

const array = [{
	name:'maria',
	id:1,
},{
	name:'juanita',
	id:2,
}];
const publicar = () => {
	for (const key in array) {
			div.innerHTML += `
			<div>
			<form>
			<textarea name="" cols="30" rows="10"  id="${array[key].id}" disabled>
				${array[key].name}
			</textarea>
			<input type="button" value="editar" class="post" id="${'id'+array[key].id}" onclick="editar(${array[key].id})">
			</form>
			</div>
			`;
	}
}
publicar();
const editar = (id) => {
	const textA = document.getElementById(id);
	textA.disabled = false;
	const btn = document.querySelector('#id'+ id);
	btn.value = 'Guardar'
	if(btn.value === 'Guardar') {
			btn.onclick = () => {
					for(const key of array) {
							if(key.id === id){
									key.name = textA.value;
							}
					}
					console.log(array)
					textA.disabled = true;
					btn.value = 'editar';
			}
	}
   
}
