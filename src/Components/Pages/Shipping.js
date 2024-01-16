import React, {useEffect} from "react";
import "./Shipping.css";

const Shipping = () => {

    useEffect(() => {
        const navbar = document.querySelector('.nav-bar');
        if (navbar) {
          navbar.style.display = 'none';
        }
    
        return () => {
          if (navbar) {
            navbar.style.display = 'block';
          }
        };
      }, []);

      const underline = {
        textDecoration: "underline",
        color: "#102C57"
      }

    return(
        <div className="shipping_container">
            <section id="shipping"></section>
            <div className='shipping-bg'>
                <h1 className='shippingTitle'>Shipping</h1>
            </div>
            
            <div className="shipping_content">
                <h1 className="shipping_heading">At Navkar Courier Ltd., we recognize how crucial prompt and dependable shipment is to improving your online buying experience. Our shipping services are made to be flexible, convenient, and worry-free for you.
                <br />
                </h1>
                <br />
                <h2 className="shipping_mobile_view">Important Aspects of Our Shipping Offerings:</h2>
                <ul>
                    <li><span style={underline}>Quick and Dependable:</span> We put a high priority on processing and shipping your orders quickly, making sure they get to you as soon as possible without sacrificing security.</li>
                    <li><span style={underline}>Adaptable Choices:</span> A variety of delivery solutions that are customized to your needs are available. We can handle both regular and expedited shipping, depending on your needs. regular shipping is ideal for budget-conscious orders.</li>
                    <li><span style={underline}>Time-of-Day Monitoring:</span> Use our real-time tracking option to remain up to date on the progress of your shipment. You will feel more at ease knowing the precise location of your shipment on its route.</li>
                    <li><span style={underline}>Safe Packaging:</span> We take great care to package your belongings safely to guard against damage while in transit. Your purchases will arrive in perfect condition because of our dedication to using high-quality packaging.</li>
                    <li><span style={underline}>Client Assistance:</span> Concerned or have questions regarding your shipment? Our committed customer service team is available to help and will respond to you in a timely and kind manner.</li>
                </ul>
                <br />
                <br />
                
                <h2 className="shipping_mobile_view">Reasons to Select Navkar Courier for Delivery:</h2>
                <br />
                <br />
                <div className="shippingCards">
                  <div className="shippingCards_card1">
                    <h1>Reliability</h1>
                    <p> You can rely on us to deliver your packages undamaged and on schedule.</p>
                  </div>
                  <div className="shippingCards_card2">
                    <h1>Convenience</h1>
                    <p>With numerous options, get a hassle-free shipping experience.</p>
                  </div>
                  <div className="shippingCards_card3">
                    <h1>Global Reach</h1>
                    <p>We serve clients all around the world, whether they are domestic or foreign</p>
                  </div>
                </div>
                <br />
                <br />
                <h4>Visit us to enjoy the ease of dependable and smooth shipping services. We pledge to make your online purchase delightful from the time you click "checkout" until your delivery arrives at your door.</h4>
            </div>
        </div>
    )
}

export default Shipping;