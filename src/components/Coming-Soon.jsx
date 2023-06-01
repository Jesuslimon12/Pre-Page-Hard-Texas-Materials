import React,{useState} from 'react'
import axios from 'axios';
import '../styles/Coming-Soon.css'
import '../styles/Form.css'
import Icon_Logo from '../img/HTM_logo.svg'
import Icon_Shapes from '../img/shapes.svg'




export default function Coming_Soon() {
  const [X, setX] = useState(100/3)
  const [values, setValues] = useState({
    first_name: "",
    last_name:"",
    email: ""
  });

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  })

  const [step, setStep] = useState(0)
  const ctranslateX = 'translateX('+X+'%)'
  var css = {
    transform: ctranslateX
  }

  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      nextStep(2)
      /*window.location.reload();
      setValues({
      first_name: "",
      last_name:"",
      email: ""
      });*/

    }
  }

  function handleChange(evt) {
    const { target } = evt;
    const { name, value } = target;
    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
  }

  function nextStep(step){
    setX(prevX => prevX + (-100/3))
    setStep(step)
  }

  const handleSubmit = event => {
    event.preventDefault();
    /*setServerState({ submitting: true });
    axios({
      method: "POST",
      url: "https://formspree.io/f/xgebdnwy",
      data: values
    })
    .then(r => {
      handleServerResponse(true, "Thanks!");
    })
    .catch(r => {
      handleServerResponse(false, r.response.data.error);
    });*/
    nextStep(2)
  }

  



  return (
    <section className='coming-soon'>
        <div className='logo-box'>
            <img src={Icon_Logo} alt="Logo" className='logo'/>
        </div>

        <div className='coming-soon__content-box' style={css}>

          <div className={`content ${step === 0 ? 'active' : ''}`} id='notify' >
            <span className='heading-secondary'>Our online portal is</span>
            <h1  className='heading-primary'>Coming Soon!</h1>
            <p  className='content-msg'>Enter your email to be notified when we open and you will receive a <b className='bold'>5% DISCOUNT </b>on your first order!</p>
            <a href='#' onClick={() => nextStep(1)} className='btn-hero margin-top-big'>Notify Me</a>
          </div>

          <div className={`content ${step === 1 ? 'active' : ''}`} id='form' >
            <p  className='content-msg'>To be notified when our site launches and secure your <b className='bold'>5%  discount, </b> please fill in your name and email below. Thank you for your interest!</p>
            
            <form onSubmit={handleSubmit} className='form margin-top-big'>
              <div className="form__row">
                  <div className="form__group">
                      
                      <input type="text" className="form__input" id="name" name="first_name" value={values.first_name} onChange={handleChange} placeholder="First Name" required/>
                      <label htmlFor="name" className="form__label">First Name</label>
                  </div>

                  <div className="form__group">
                      <input type="text" className="form__input" id="last_name" name="last_name" value={values.last_name} onChange={handleChange} placeholder="Last Name"  required/>
                      <label htmlFor="last_name" className="form__label">Last Name</label>       
                  </div>
              </div>

              <div className="form__row">
                  <div className="form__group">
                    <input type="email" className="form__input" id="email" name="email" value={values.email} onChange={handleChange} placeholder="Email Address" required/>
                    <label htmlFor="email" className="form__label">Please insert a valid email address.</label>
                  </div>
              </div>

              <button type='submit' className='btn-submit'>Send</button>
            </form>
          </div>

          <div className={`content ${step === 2 ? 'active' : ''}`} id='registered'>
            <img src={Icon_Shapes} alt="Icon Shape" className='icon'/>
            <p  className='content-msg margin-top-big'>Thank you for your interest! Keep an eye on your inbox at <b className='bold'>{values.email} </b> for the official launch of Hard Texas Materials.</p>
          </div>



          
        </div>
    </section>
  )
}
