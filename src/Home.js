import './App.css';
import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import brush from './profile.png'

function Home() {
	return (
    <div className='app'>


      <div className='homepage'>
			<div className='container'>
					<div class="card">
						
						<img className='profil' src={brush} width='500px' alt="Image" />

					

						<h2>Tradnik Visual©</h2>

						<div className='contact'>
						<a className='button' href="/projects">Projects</a>
					
						<a className='button' href="/contact">Contact</a>
						</div>
					</div>

		
			</div>
    	</div>

    </div>
	);
}



export default Home;
