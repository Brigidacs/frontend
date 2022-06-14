import './styles.css';

import ProductImg from 'assets/images/molho_whiskas.png';
import ProductPrice from 'components/ProductPrice';

const ProductCard = () => {

    return(
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src= {ProductImg} alt="Imagem do produto" />
            </div>
            <div className="card-bottom-container">
                <h6>MOLHO WHISKAS 85G PEIXE 7 ANOS
MOLHO WHISKAS 85G PEIXE 7 ANOS</h6>
                <ProductPrice/>

            </div>






        </div>


    );
}

export default ProductCard;