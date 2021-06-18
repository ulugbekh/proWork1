import './main.scss'

const ContactLink = ({img, link, href, blank}) => {
    return ( 
        <div className="contact-link">
            <img src={img} alt="" className="contact-link-img" />
            <a target={blank}  href={href} className="contact-link">{link}</a>
        </div>
     );
}
 
export default ContactLink;

{/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.455 14.678L16.6639 11.8869C15.6671 10.8901 13.9725 11.2889 13.5738 12.5847C13.2747 13.4819 12.2779 13.9803 11.3808 13.7809C9.3872 13.2825 6.69582 10.6908 6.19741 8.59746C5.89837 7.7003 6.49646 6.70349 7.39358 6.40448C8.68943 6.00576 9.08816 4.31119 8.09135 3.31438L5.30029 0.523324C4.50284 -0.174441 3.30667 -0.174441 2.60891 0.523324L0.714976 2.41726C-1.17896 4.41087 0.914338 9.69395 5.59933 14.3789C10.2843 19.0639 15.5674 21.2569 17.561 19.2633L19.455 17.3694C20.1528 16.5719 20.1528 15.3757 19.455 14.678Z" fill="white"/>
</svg> */}
