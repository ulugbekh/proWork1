import './main.scss'
const ContactInput = ({legendText,inputType,inputPlaceholder, inputText, setInputText  }) => {
    return ( 
       <div className="contact-input">
           <fieldset>
               <legend className="legend">{legendText}</legend>
               <input 
                type={inputType}
                required 
                placeholder={inputPlaceholder}
                onChange={(e) => setInputText(e.target.value)}
                value={inputText}
                className="contact-input" />
           </fieldset>
       </div>
     );
}
 
export default ContactInput;