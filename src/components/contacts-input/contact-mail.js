import './main.scss'


const ContactMail = ({legendText,inputType,inputPlaceholder, inputMail, setInputMail}) => {
    return ( 
        <div className="contact-input">
           <fieldset>
               <legend className="legend">{legendText}</legend>
               <input 
                type={inputType}
                required 
                placeholder={inputPlaceholder}
                onChange={(e) => setInputMail(e.target.value)}
                value={inputMail}
                className="contact-input" />
           </fieldset>
       </div>
     );
}
 
export default ContactMail;