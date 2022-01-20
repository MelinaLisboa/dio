const usuarios = new Map();

usuarios.set('Maria', 'Admin');
usuarios.set('Jose', 'User');
usuarios.set('Carlos', 'Admin');
usuarios.set('Gustavo', 'User');
usuarios.set('Sonia', 'Admin');


function getAdmins(mapAdmin){
    
    let admins = [];

    for ([key, value] of mapAdmin){
        if (value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

console.log(getAdmins(usuarios));