const validation = (userData)=>{
    const errors = {};
    if(!/\S+@\S+\.\S+/.test(userData.email)){
        errors.email = 'No es un email valido'
    }
    if(userData.email === ''){
        errors.email = 'El campo no puede estar vacío'
    }
    if(userData.email.length > 36){
        errors.email = 'Debe contener menos de 35 caracteres'
    }
    if(!/\d/.test(userData.password)){
         errors.password='Debe contener al menos un numero'
    }
    if(userData.password.length < 6){
        errors.password = 'La contraseña tiene que tener al menos 6 caracteres'

    }
    if(userData.password.length > 10){
        errors.password = 'La contraseña no puede ser mayor a 10 caracteres'
    }
  return errors;
};

export default validation;