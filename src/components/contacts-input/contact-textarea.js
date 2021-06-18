import './main.scss'

const ContactTextarea = ({legendText,textareaPlaceholder, textareaText, setTextareaText }) => {
    return ( 
        <div className="contact-textarea">
            <fieldset>
                <legend className="legend">{legendText}</legend>
                    <textarea
                    onChange={(e) => setTextareaText(e.target.value)}

                    className="textarea"
                    required placeholder={textareaPlaceholder}
                    value={textareaText}>
                        
                </textarea>
           </fieldset>
        </div>
     );
}
 
export default ContactTextarea;