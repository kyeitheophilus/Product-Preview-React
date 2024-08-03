import desktop from '../src/assets/images/image-product-desktop.jpg'
import mobile from '../src/assets/images/image-product-mobile.jpg'

const Body = () => {
  return (
    <section className="main">
      <div className="image-box">
        <picture>
          <source srcSet={mobile} media="(max-width: 400px)" />
          <img src={desktop} alt={`${desktop} image`} />
        </picture>
        <div className="text-box">
          <h2>Perfume</h2>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="prices">
            <p className="original-price">$149.99</p>
            <p className="cancelled-price">$169.99</p>
          </div>
          <button className="button">🛒 Add to Cart</button>
        </div>
      </div>
    </section>
  );
}

export default Body