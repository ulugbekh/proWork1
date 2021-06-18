import './main.scss'
import LeftText from '../../../../components/left-text';        //chap bolag uchun text component
import ContactInput from '../../../../components/contacts-input/contact-input'; //input component
import ContactTextarea from '../../../../components/contacts-input/contact-textarea';   //textarea component
import ContactLink from '../../../../components/contact-link-number';   //telefon, gmail, maps component
import Follow from '../../../../components/follow'                      // Be instagram, facebook jamlangan component
import BoxLink from '../../../../components/Contact-box-link';          // box-link component 
import ScroolDown from '../../../../components/text'                    // scrool-down component
import ContactMail from '../../../../components/contacts-input/contact-mail';   // input mail ucun component

import Telephone from '../../../../images/icon/phone.svg'           //telefon rasmi
import Sms from '../../../../images/icon/gmail.svg'                 // xat rasmi
import MapIcon from '../../../../images/icon/maps.svg'              // karta rasmi

import { useState } from 'react';

const MainSection5 = () => {

    const [ formBlock, setFormBlock ] = useState([
    ])

    // console.log(formBlock);

    const [ inputText, setInputText ] = useState('')
    const [ inputMail, setInputMail ] = useState('')
    const [ textareaText, setTextareaText ] = useState('')
    

    const handleSubmit = (e) => {
        
        if(inputText.length > 0) {
            formBlock.push({
                inputTextValue:inputText,
                InputMailValue:inputMail,
                textareaValue: textareaText
            })
        }
        setInputText('')
        setInputMail('')
        setTextareaText('')
        console.log(formBlock);
        e.preventDefault()
        window.localStorage.setItem('Malumot', JSON.stringify(formBlock))

    }
    return ( 
        <div className="main-section5 container1">
            <LeftText
                text={'contacts'}
            />
                <h4 className="contact-usText">
                Contact us
                </h4>
                <p className="contact-miniText">
                Let’s get to the nex level together
                </p>
            <div className="main-section5-inner">
            <div className="contacts-left-block">
                <form action="" onSubmit={handleSubmit}>
                    <div className="contact-input-block">
                    <ContactInput
                        inputText={inputText}
                        setInputText={setInputText}
                        legendText={'Full name'}            //karta orab turuvchi border text    props
                        inputType={'text'}                  // input qiymati TYPE    props
                        inputPlaceholder={'Enter your first name'}      // input placeholder    props
                    />
                    </div>
                    <div className="contact-input-block">
                    <ContactMail
                        inputMail={inputMail}
                        setInputMail={setInputMail}
                        legendText={'Email'}  //karta orab turuvchi border text    props
                        inputType={'email'}     // input qiymati TYPE    props
                        inputPlaceholder={'Enter your email'}       // input placeholder    props
                    />
                    </div>
                    <div className="main-section5-textarea">
                    <ContactTextarea
                        textareaText={textareaText}
                        setTextareaText={setTextareaText}
                        legendText={'How can we help?'}     //karta orab turuvchi border text    props
                        textareaPlaceholder={'Your massage'}    // textarea placeholder    props
                    />
                    </div>
                    <button className="contact-btn">Send</button>
                </form>
            </div>
            <div className="contacts-left-right">
                <div className="contact-right-top">
                    <ContactLink
                    img={Telephone}                      //rasm props
                        link={'+1 (647)-563-9114'}      // component text
                        href={'tel:+1 (647)-563-9114'}  // href="" <= wuning url adrese 
                    />
                    <ContactLink
                        img={Sms}                       //rasm props
                        link={'lead@gmail.com'}         // component text
                        href={'mailto: lead@gmail.com'}     // href="" <= wuning url adrese
                        blank={'_blank'}                 // target={blank} component props
                    />
                    <ContactLink
                    img={MapIcon}
                        link={'Margaretenstraße 70/3, 1050 Vienna, Austria'}
                        href={'Margaretenstraße 70/3, 1050 Vienna, Austria'} 
                        blank={'_blank'}
                    />
                </div>
                <div className="contact-lerightft-bottom">
                <div className="contact-lerightft-bottom-top">
                <BoxLink
                    href={'business@LEAD.com'}      // url() ardres
                        boxLink={'boxLink'}         // component ClassName={ }
                        text={'BECOME A CLIENT '}   // component kotta text
                        miniText={'business@LEAD.com'}  // component kichkina text
                    />
                    <Follow/>
                </div>
                    
                    <div className="contact-lerightft-bottom-inner">
                    <div className="white-box">
                    <BoxLink
                        
                        href={'business@LEAD.com'}
                        boxLink={'boxLink active'} // component classiga active class qowilsa css ozgaradi
                        text={'BECOME A CLIENT '}
                        miniText={'business@LEAD.com'}
                    />
                    </div>
                    <BoxLink
                        href={'business@LEAD.com'}
                        boxLink={'boxLink'}
                        text={'BECOME A CLIENT '}
                        miniText={'business@LEAD.com'}
                    />
                    </div>
                </div>
            </div>
            </div>
                <div className="scrool-down-section5">
                <ScroolDown
                scroolText={'Scrool Down'}
            />
                </div>
        </div>
     );
}
 
export default MainSection5;