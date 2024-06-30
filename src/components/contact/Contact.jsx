import React, { useState } from 'react';
import Title from '../../utils/Title';
import contactImg from '../assests/contactImage/contactImg.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import emailjs from 'emailjs-com';


const Contact = React.forwardRef((props, ref)=> {
    const [userName, setUserName] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errmsg, setErrmsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    
    const emailValidation = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/
            );
    };

    const handleSend = (e) => {
        
        e.preventDefault();
        if (userName === "") {
            setErrmsg("Username is required!");
        } else if (phoneNumber === "") {
            setErrmsg("Phone number is required!");
        } else if (email === "") {
            setErrmsg("Email id is required!");
        } else if (!emailValidation(email)) {
            setErrmsg("Please provide a valid email!");
        } else if (subject === "") {
            setErrmsg("Please provide a subject!");
        } else if (message === "") {
            setErrmsg("Message is required!");
        } else {
            const templateParams = {
                userName,
                phoneNumber,
                email,
                subject,
                message,
            };

            emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID, 
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                templateParams, 
                process.env.REACT_APP_EMAILJS_USER_ID)
                .then((result) => {
                    setSuccessMsg("Your message has been sent successfully!");
                    setErrmsg("");
                    setUserName("");
                    setphoneNumber("");
                    setEmail("");
                    setSubject("");
                    setMessage("");
                }, (error) => {
                    setErrmsg("Failed to send the message. Please try again later.");
                    console.log(error)
                });
        }
    };

    return (
        <section id='contacts' ref={ref} className='w-full py-20 border-b-[1px] border-b-black'>
            <div className='flex justify-center items-center text-center'>
                <Title title="CONTACT" des="Contact With Me" />
            </div>
            <div className='flex flex-col lg:flex-row'>
                <div className='w-full lg:w-[35%] h-full p-4 lg:p-8 rounded-lg shadow-shadowOne'>
                    <img
                        className='w-full h-64 object-cover rounded-lg mb-2'
                        src={contactImg}
                        alt="contactImg"
                    />
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-xl lg:text-3xl font-bold text-white mt-5'>Sujit Vishwakarma</h3>
                        <p className='text-lg font-normal text-gray-400'>MERN Stack Developer</p>
                        <p className='text-base text-gray-400 tracking-wide'>
                        I am a passionate and results-oriented Software Engineer. I am proficient in a variety of programming languages and frameworks, including Java, C++, Python, HTML, CSS, JavaScript, Verilog, ReactJS, NodeJS, Material-UI and MongoDB. I am experienced in designing, developing, and implementing web applications, and I am confident in my ability to deliver high-quality code that meets deadlines.
                        </p>
                        <p className='text-base text-gray-400 flex items-center gap-2'>
                            Email: <span className='text-lightText'>sujitv257@gmail.com</span>
                        </p>
                    </div>
                    <div>
                        <h2 className='text-base uppercase font-titleFont mb-4 mt-4'>
                            Find me in
                        </h2>
                        <div className='flex gap-4 '>
                            <a href='https://www.instagram.com/sujit5256/' target="_blank" rel="noopener noreferrer"  className='bannerIcon hover:text-orange-500'>
                                <InstagramIcon />
                            </a>
                            <span className='bannerIcon hover:text-orange-500'>
                                <FacebookIcon />
                            </span>
                            <span className='bannerIcon hover:text-orange-500'>
                                <XIcon />
                            </span>
                            <a href='https://www.linkedin.com/in/sujit-vishwakarma-8b1381212' target="_blank" rel="noopener noreferrer" className='bannerIcon hover:text-orange-500'>
                                <LinkedInIcon />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='w-full lg:w-[60%] h-full bg-gradient-to-r from-[#0e1218] to-[#041421] p-4 lg:p-8 rounded-lg shadow-shadowOne mt-6 lg:mt-0'>
                    <form className='w-full flex flex-col gap-3 lg:gap-6 py-2 lg:py-5' onSubmit={handleSend}>
                        {errmsg && <p className='text-designColor items-center text-center animate-bounce'>{errmsg}</p>}
                        {successMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne tracking-wide animate-bounce text-center text-green-500'>{successMsg}</p>}
                        <div className='w-full flex flex-col lg:flex-row gap-10'>
                            <div className='w-full lg:w-1/2 flex flex-col gap-2 lg:gap-4'>
                                <p className='text-m text-gray-400 uppercase tracking-wide'>
                                    Your Name
                                </p>
                                <input onChange={(e) => setUserName(e.target.value)} value={userName} className='bg-[#676872] text-[#fff]'
                                    type='text' placeholder='Enter your Name' />
                            </div>
                            <div className='w-full lg:w-1/2 flex flex-col gap-2 lg:gap-4'>
                                <p className='text-sm text-gray-400 uppercase tracking-wide'>
                                    Phone Number
                                </p>
                                <input onChange={(e) => setphoneNumber(e.target.value)} value={phoneNumber}
                                    className='bg-[#676872] text-[#fff]' type='number' placeholder='Enter your Phone Number' />
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-4 mt-4'>
                            <p className='text-sm text-gray-400 uppercase tracking-wide'>
                                Your e-mail Id
                            </p>
                            <input onChange={(e) => setEmail(e.target.value)} value={email}
                                className='bg-[#676872] text-[#fff]' type='email' placeholder='Your Email-id' />
                        </div>
                        <div className='w-full flex flex-col gap-4 mt-4'>
                            <p className='text-sm text-gray-400 uppercase tracking-wide'>
                                Subject
                            </p>
                            <input onChange={(e) => setSubject(e.target.value)} value={subject}
                                className='bg-[#676872] text-[#fff]' type='text' placeholder='Your Subject' />
                        </div>
                        <div className='w-full flex flex-col gap-4 mt-4'>
                            <p className='text-sm text-gray-400 uppercase tracking-wide'>
                                Your Message
                            </p>
                            <textarea onChange={(e) => setMessage(e.target.value)} value={message}
                                className='bg-[#676872] text-[#fff]' cols='30' rows='8'></textarea>
                        </div>
                        <div className='w-full flex flex-col mt-4'>
                            <button type='submit' className='w-full h-12 bg-[#141518] rounded-xlg text-base text-gray-400 tracking-wider uppercase duration-300 hover:border-[1px] hover:border-[#FA8072] hover:text-[#FA8072] border-transparent'>
                                Send Message
                            </button>
                        </div>
                        {errmsg && <p className='text-designColor items-center text-center animate-bounce'>{errmsg}</p>}
                        {successMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne tracking-wide animate-bounce text-center text-green-500'>{successMsg}</p>}
                    </form>
                </div>
            </div>
        </section>
    )
})

export default Contact;
