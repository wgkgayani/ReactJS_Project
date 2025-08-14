import React from 'react' ;
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

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

                    <div className='flexColStart contactModes'>
                        {/* first row*/}
                        <div className='flexStart row'>
                            <div className='flexColCenter mode'>
                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <MdCall size={25}/>
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>076 123 213 33</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>Call Now</div>
                            </div>

                             {/* second mode*/}
                            <div className='flexColCenter mode'>
                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>076 123 213 33</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>Chat Now</div>
                            </div>
                        </div>

                        {/*second row*/}
                        <div className='flexStart row'>
                            <div className='flexColCenter mode'>
                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <MdCall size={25}/>
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>Video Call</span>
                                        <span className='secondaryText'>076 123 213 33</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>Video Call Now</div>
                            </div>

                             {/* fourth mode*/}
                            <div className='flexColCenter mode'>
                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <HiChatBubbleBottomCenter size={25}/>
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>Massege</span>
                                        <span className='secondaryText'>076 123 213 33</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>Massege Now</div>
                            </div>
                        </div>

                    </div>


                </div>

                {/* right side*/}
                <div className='c-right'> 
                    <div className='image-container'>
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;