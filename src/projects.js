import './App.css';

import brush from './profile.png';
import work1 from './hand.png';
import work2 from './tshirt.png';
import work3 from './skull.png';
import work4 from './money.png';
import work5 from './money2.png';
import work6 from './wise monkey 1.png';
import work7 from './bullet.png';

function Projects() {




	return (
    <div className='app'>


      <div className='homepage projects'>
			<div className='container '>
      
          <div className='nush'>
           <a href="./home" className='button-back'>GO BACK</a>
						<img className='round' src={work1} width='300px' alt="Image" />
            <img className='round' src={work2} width='300px' alt="Image" />
            <img className='round' src={work3} width='300px' alt="Image" />
            <img className='round' src={work4} width='300px' alt="Image" />
            <img className='round' src={work5} width='300px' alt="Image" />
            <img className='round' src={work6} width='300px' alt="Image" />
            <img className='round' src={work7} width='300px' alt="Image" />

            </div>

			</div>
    	</div>

    </div>
	);
}



export default Projects;
