
const btn = document.getElementById('btn');

btn.addEventListener('click', index);

function index(event){
    const name = document.getElementById('name');
    const login = document.getElementById('log');
    login.value = "";
    nombre = name.value;
    
    login.innerHTML = nombre;
    
    window.location.href = "index.html";
}




