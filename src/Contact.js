import './App.css';
import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import Instagram from './instagram.svg';
import Calendar from './calendar.svg';



function Contact() {





	return (
    <div className='app'>


      <div className='homepage'>
			<div className='container'>
			<a href="./home" className='button-back'>GO BACK</a>
					<div class="card">
					
					<h2>Contact Me!🤙</h2>


					<div >

					
						<a style={{margin:"10px"}} href='https://www.instagram.com/tradnik.visual/'>
						<img  className='instagram' src={Instagram} width='500px' alt="Image" />
						</a>

						<a style={{margin:"10px"}} href='https://calendly.com/edy-tradnik/meeting'>
						<img  className='instagram' src={Calendar} width='500px' alt="Image" />
						</a>
					</div>
				
						

				
					</div>

		
			</div>
    	</div>

    </div>
	);
}



export default Contact;
