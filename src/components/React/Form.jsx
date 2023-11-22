import './Form.css'
import emailjs from '@emailjs/browser';

const Test = ['test1','test1' ]

function FormSection () {


  return (
    <div className="Form">
      <div className="Form__title">
        <h2>
          Empecemos a crear
        </h2>
        <ul>
          <li><p>San Pedro Garza García, N.L.</p></li>
          <li><p>Reynosa, Tamps.</p></li>
        </ul>
        <h2>
          Contacto:
        </h2>
        <p>+52 81 3644 0028</p>
        <p>ad.justmkt@gmail.com</p>
      </div>
      <div className="Form__section">
        <form className="form__mail">
          <label>Proyecto/ idea</label>
          <input type="text-b" name ="name_project"/>
          {/* double inputs section */}
            <div className='form__inputs'>
              <label>Nombre</label>
              <input type="text" name= "name" />
            </div>
            <div className='form__inputs'>
              <label>Apellido</label>
              <input type="text" name= "last_name" />
            </div>
          {/* double inputs section */}
            <div className='form__inputs'>
              <label>Correo-Electronico</label>
              <input type="email" name= "email" />
            </div>
            <div className='form__inputs'>
              <label>Compañia</label>
              <input type="text" name= "company" />
            </div>
        </form>
        <button className='primary__button'>
          Enviar
        </button>
      </div>
    </div>
  )
}

export default FormSection;