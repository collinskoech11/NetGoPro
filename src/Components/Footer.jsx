import React from 'react';
import "../css/footer.css"

function Footer() {
  return (
    <>
    <div className='footer-main'>
        <div className="footer-actual">
            <div className='footer-sub'>
                <h2 style={{paddingLeft:"70px"}}>Find us on <br/>
                our Socials</h2>
                <div className='flex-socials'>
                    
                </div> 
            </div>
            <div className='footer-sub' style={{paddingTop:"40px"}}>
                <p>About us</p>
                <p>Products</p>
                <p>Services</p>
                <p>Contact Us</p>
                <br/>
                <p>Privacy &amp; Policy</p>
                <p>Terms and Conditions</p>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Footer