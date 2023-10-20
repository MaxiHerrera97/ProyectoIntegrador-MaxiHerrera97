import { useState, useEffect } from "react";
import validation from "./validation";
import styles from "./Form.module.css"



const Form = ({login}) =>{

const [userData, SetUserData] = useState ({
        email: '',
        password: ''
});

const [errors, setErrors] = useState({});

const handleChange = (event) =>{
    SetUserData({
        ...userData, 
        [event.target.name]: event.target.value
    });

};

const handleSumbit = (event)=>{
  event.preventDefault();
  login(userData);
}

useEffect(()=>{
    if(userData.email !== '' || userData.password !== ''){
          const userValidated = validation(userData);
  setErrors(userValidated);
    }

},[userData]);


    return (
       <div className={`${styles.background}`}>
        <div className={`${styles.form}`}>
        <form onSubmit={handleSumbit}>
          <label htmlFor="email">Email: </label>
          <input 
          type="email" 
          name="email" 
          value={userData.email}
          onChange={handleChange}
          className={`${styles.input}`}
          />
          {errors.email && <p className={`${styles.error}`}>{errors.email}</p>}

          <hr className={`${styles.hr}`} />

          <label htmlFor="password">Password: </label>
          <input 
          type="password" 
          name="password" 
          value={userData.password}
          onChange={handleChange}
          className={`${styles.input}`}
          />
          {errors.password && <p className={`${styles.error}`}>{errors.password}</p>}

          <hr className={`${styles.hr}`} />

          <button type="sumbit" className={`${styles.button}`}>Sumbit</button>
          
        </form>
      </div>
    </div>
    )
}
export default Form;