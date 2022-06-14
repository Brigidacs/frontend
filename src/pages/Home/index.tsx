import './styles.css';
import { ReactComponent as MainImage } from 'assets/images/Pethouse.svg';
import ButtonIcon from 'components/Buttonlcon';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      
        
        <div className="home-container">
            <div className="base-card home-card">
                <div className="home-content-container">
                  <div className="home-container-des">
                      
                    <h1>Ganhe 10% OFF</h1>
                    <p>Usando o cupom DOGUINHO.</p>
                    </div>
                    <div>
                    <Link to="/products"><ButtonIcon/></Link>
                    </div>
                    
                </div>
                <div className="home-image-container">
                    <MainImage/>
                </div>

                
            </div>

        </div>
     
    );
  }
  
  export default Home;