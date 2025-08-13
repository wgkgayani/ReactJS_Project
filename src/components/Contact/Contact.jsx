import React from 'react' ;
import './Contact.css'
const Contact = () => {
    return (
        <section className='c-wrapper'>
            <div className='paddings innerWidth flexCenter c-container'>
                {/*left side*/}
                <div className='flexColStart c-left'>
                   <span className='orangeText'>Our Conetacts</span>
                   <span className='primaryText'>Easy to Contact us</span>
                   <span className='secondaryText'>We always redy to help by providing the best servise
                    beleive a good blace to live to live can make your life better
                   </span>
                </div>

                {/* right side*/}
                <div className='c-right'>
                    <div cl assName='image-container'>
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;