import React, {useEffect} from "react";
import "./Warehousing.css";

const Warehousing = () => {

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
        <div className="main_container">
            <section id="warehousing"></section>
            <div className='warehousing-bg'>
              <h1 className='titleWarehouse'>Warehousing</h1>
            </div>

            <div className="warehousing_content">
            <h1 className="main_heading">
            At Navkar Courier Ltd., we take great satisfaction in offering seamless warehousing solutions that are intended to maximize the administration and storage of your products.
            <br/>
            <br/>
            Modern technology and a strong infrastructure are features of our state-of-the-art warehouse, which guarantees the efficiency, security, and safety of your inventory.
            </h1>
            <br />
            <h1>Key features:</h1> 
            <ul>
                <li><span style={underline}>Secure Storage:</span> To protect your priceless goods, our warehouse is outfitted with cutting-edge security measures, such as access control, CCTV cameras, and round-the-clock monitoring.</li>
                <li><span style={underline}>Climate-Controlled Environment:</span> Because we recognize that commodities vary widely, we provide a climate-controlled environment to safeguard goods that are susceptible to changes in humidity and temperature.</li>
                <li><span style={underline}>Inventory Management:</span> You can track and manage your inventory in real-time with our advanced inventory management system. This lowers the possibility of mistakes, guarantees exact stock levels, and improves overall efficiency.</li>
                <li><span style={underline}>Order Fulfillment:</span> Use our integrated solutions to streamline your order fulfillment procedure. We make sure that your products get at their destination on time and in ideal shape, starting with selection and packaging and ending with shipment.</li>
                <li><span style={underline}>Customizable Solutions:</span> We understand that every company has different demands when it comes to warehousing. Whether you need bulk storage, order processing, or specialist handling, you can customize our solutions to meet your unique needs.</li>
                <li><span style={underline}>Scalability:</span> Our warehouse solutions expand along with your business. We can handle growing inventory levels without sacrificing effectiveness thanks to our scalable services.</li>
                <li><span style={underline}>Technology Integration:</span> Use our integrated systems to harness the power of technology. The most recent software is installed in our warehouse to improve visibility, expedite procedures, and give you detailed inventory information.</li>
            </ul>
            <br></br>
            <br />
            
            <h1>Why Opt for Us?</h1>
            <br />
            <br />
            <p><span style={underline}>Efficiency:</span> Our technology-driven approach and streamlined processes provide efficient operations.</p>
            <br />
            <p><span style={underline}>Reliability:</span> You can rely on us for dependable and consistent storage services.</p>
            <br />
            <p><span style={underline}>Support for Customers:</span> Our committed customer service team is available to help you with any questions or issues at any time.</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h4>Visit <a href="https://www.navkarcourier.ca">navkarcourier.ca</a> to learn about the dependability and simplicity of our warehousing solutions. Put your trust in us as your go-to partner for efficient inventory control and flawless order fulfillment.</h4>
            </div>
        </div>
    )
}

export default Warehousing;