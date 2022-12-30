import { useState } from "react";
import './Subscribe.css';
import { useRef } from "react";

function Subscribe({ isDark }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [frequency, setFrequency] = useState("");
  const [isSubscribe, setIsSubscribe] = useState(false);
  const modalRef = useRef(null);

  function subscribe(event){
    
    if(name !== "" && email !== "" && frequency !== "") {
      setIsSubscribe(true);
    }
    event.preventDefault();
  }

  return (
    <div className="subscribe">
        <dialog className='subscribe__modal'ref={modalRef}>


      <h2 className={isDark ? "subtitle-dark" : "subtitle-light"}> Do you want to get latest film information? </h2>
      <form className={isDark ? "subscribe-form-dark" : "subscribe-form-light"}
        action="/register" 
        method="POST">
        {/* name */}
        <label id="name-label">Name: </label>
        <input 
          id="name" 
          name="name" 
          type="text"
          value={name}
          onInput = {(e) => setName(e.target.value)} 
        />
        {name === "" ? 
          <div className="error-message" id="name-error">* Name is required!</div> : 
        ""}
        {/* email */}
        <label id="email-label">Email: </label>
        <input 
          id="email" 
          name="email" 
          type="text"
          value={email}
          onInput = {(e) => setEmail(e.target.value)}
        />
        {email === "" ? 
          <div className="error-message" id="email-error">* Email is required!</div> : 
        ""}
        {/* frequency */}
        <label id="frequency-label">How often do you want to receive our emails? </label>
        <select id="frequency" name="frequency" onChange={e => setFrequency(e.target.value)}>
          <option value="">Please select</option>
          <option value="1">Every week</option>
          <option value="2">Every two weeks</option>
          <option value="3">Every month</option>
        </select>
        {frequency === "" ?
         <div className="error-message" id="frequency-error">* Please choose email frequency!</div> : 
        ""}
        <button 
          className="subscribe-button"
          id={isDark ? "subscribe-button-dark" : "subscribe-button-light"}
          onClick={e => subscribe(e)}
        >Subscribe</button>
      </form>
      
      { isSubscribe === true ? <p className="submitted-tip"> Congratulations {name}, you have subscribed successfully! </p> : ""}
      </dialog>
      <button className='subscribe__open'
      onClick={ () =>{
        modalRef.current.showModal();
      }}
      >Subscribe</button>
    </div>
  );
}

export default Subscribe;
