import React, {useEffect} from 'react'
import "./Fulfillment.css";

const Fulfillment = () => {

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

  return (
    <div className="fulfillment_container">
      <section id='fulfillment'></section>
      <div className='fulfillment-bg'>
        <h1 className='fulfillmentTitle'>Fulfillment</h1>
      </div>

      <div className='fulfillment_content'>
        <h1 className='fulfillment_heading'>Greetings from Navkar Courier Ltd., your one-stop shop for professional kitting services and easy order fulfillment. Since every transaction is different, we provide a comprehensive fulfillment service that includes kit assembly strategically to improve your client experience. We handle every stage, from order processing to kitting and delivery.</h1>
        <br />
        
        <h2 className='fulfillment_mobile_view'>Important characteristics:</h2>
        <ul>
          <li><span style={underline}>Order Fulfillment:</span> From the time an order is placed on your website, accuracy and efficiency are guaranteed by our automated order processing system. Order verification, payment processing, and smooth integration into our fulfillment pipeline are all handled by us.</li>
          <li><span style={underline}>Kitting Expertise:</span> With our skilled kitting services, you may improve your product offers. We customize our kitting services to fit your unique requirements, whether that involves putting together subscription boxes, putting together promotional bundles, or bundling complementing items.</li>
          <li><span style={underline}>Assemble and Pack:</span> Our skilled staff carefully selects each component and item, guaranteeing precise assembly for every kit. The kits are packed with care to ensure that they don't break while in transit.</li>
          <li><span style={underline}>Custom Packaging:</span> Adding bespoke packaging alternatives to your products can improve their aesthetic appeal. We know how important it is to have a great unboxing experience, so our staff makes sure your kits are displayed beautifully.</li>
          <li><span style={underline}>Transportation Options:</span> Select from a variety of delivery choices for kits as well as individual products. We work with reliable carriers to deliver goods on time and at a reasonable cost, all while satisfying customers.</li>
          <li><span style={underline}>Time-of-Day Monitoring:</span> Order and kit tracking that is updated in real time will keep you and your clients informed. Our solution fosters openness and confidence by giving users access to real-time details about the whereabouts and status of every shipment.</li>
          <li><span style={underline}>Returns Management:</span> Use our simplified procedure to handle returns for both single goods and kits. We make sure that returned goods and parts are handled effectively, which will assist you in keeping your customers happy.</li>
          <li><span style={underline}>Management of Inventory:</span> In order to avoid stockouts and guarantee a consistent supply for fulfillment, our integrated inventory management system tracks stock levels of both individual items and kit components in real-time.</li>
          <li><span style={underline}>Customizable Solutions:</span> Adapt our kitting and fulfillment services to your particular needs. We can realize your concept with unique kit configurations, unique packaging, or personalized inserts.</li>
        </ul>
        
        <h2 className='fulfillment_mobile_view'>Advantages of Selecting Navkar Courier for Kitting and Fulfillment:</h2>
        <br />
        <br />
        <p><span style={underline}>Time Savings:</span> Let us manage the logistics and kitting procedures so you can concentrate on growing your business.</p>
        <br />
        <p><span style={underline}>Cost-Effective:</span> You save money thanks to cost-effective procedures and bulk shipping reductions.</p>
        <br />
        <p><span style={underline}>Enhanced Product Offerings:</span> With well put together and presented kits, set your business apart.</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>What Makes Us a Partner?</h1>
        <br/>
        <br/>
        <h4>Our goal at Navkar Courier is to provide a flawless and dependable fulfillment and kitting experience. Join companies that have faith in us to improve their services and go above and beyond for their clients. With Navkar Courier Fulfillment and Kitting Services, discover the difference.</h4>
      </div>
    </div>
  )
}

export default Fulfillment