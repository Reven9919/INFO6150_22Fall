import './About.css';
import Card from './Card';
import Subscribe from './Subscribe';

function About(){
    return(
        <div className='about'>
            <dialog className='subscribe__modal'>
                Subscribe to my newsletter!
                <button className='subscribe__confirm'>Confirm</button>
                <button className='subscribe__cancel'>Cancel</button>
            </dialog>
            <Card className="cards" />
            <Subscribe/>
        </div>
    );
}

export default About;