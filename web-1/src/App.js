
import './App.css';



function App() {
  /*********************  Navbar Start *********************/
window.onscroll = () => {
  let navbar = document.getElementById('navs')
  if (window.scrollY > 460) {
    navbar.classList.add('nav-active');
  } else {
    navbar.classList.remove('nav-active');
  }
};
/*********************  Navbar Start *********************/
  return (
    <div className="">
      {/* Section 1 Start */}
   <div className='section-1'>
   <nav className="navbar navbar-expand-lg bg-body-transparent pt-3" id='navs'>
  <div className="container-fluid">
    <a className="navbar-brand text-white ps-5">DORSIN</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item px-3">
          <a className="nav-link active text-white" aria-current="page" herf="/">Home</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link active text-white" aria-current="page" herf="/">Services</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link active text-white" aria-current="page" herf="/">Features</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link active text-white" aria-current="page" herf="/">Pricing</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link active text-white" aria-current="page" herf="/">Team</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link active text-white" aria-current="page" herf="/">Blog</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link active text-white" aria-current="page" herf="/">Contact</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
     
        <button className="btn" type="submit">Try it Free</button>
      </form>
    </div>
  </div>
</nav>

   <div className='sec1-body'>
     <div className='text-aligne-center'>
      <h1 className='text-white'>We help startups launch their <br/> products</h1>
      <p>Etiam sed.Interdum consequat proin vestibulum class at.</p>
      {/* <div className='sec1-icon'>
      <i class="fa-solid fa-arrow-down-to-line"></i>
      </div> */}
     </div>
   </div>
   </div>
   {/* Section 1 End */}
   
   {/* Section 2 Start */}
   <div className='section-2'>
    <div className='sec2-heading'>
   <h1 className=''>OUR SERVICES</h1>
   <p>We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.</p>
    </div>
    <div className='container'>
 <div className='row'>
 <div className='col-md-4'>
        <div className='sec2-card'>
          <div className='sec2-circle'>
          <i class="fa-regular fa-gem"></i>
          </div>
          <div className='card-text'>
            <h1>Digital Design</h1>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
             </div>
        </div>
      </div>
  
      <div className='col-md-4'>
        <div className='sec2-card'>
          <div className='sec2-circle'>
          <i class="fa-solid fa-display"></i>
          </div>
          <div className='card-text'>
            <h1>Unlimited Colors</h1>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
             </div>
        </div>
      </div>
 
      <div className='col-md-4'>
        <div className='sec2-card'>
          <div className='sec2-circle'>
          <i class="fa-solid fa-piggy-bank"></i>
          </div>
          <div className='card-text'>
            <h1>Strategy Solutions</h1>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
             </div>
        </div>
      </div>
      
    

 </div>

 <div className='row'>
 <div className='col-md-4'>
        <div className='sec2-card'>
          <div className='sec2-circle'>
          <i class="fa-solid fa-atom"></i>
          </div>
          <div className='card-text'>
            <h1>Awesome Support</h1>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
             </div>
        </div>
      </div>
  
      <div className='col-md-4'>
        <div className='sec2-card'>
          <div className='sec2-circle'>
          <i class="fa-regular fa-newspaper"></i>
          </div>
          <div className='card-text'>
            <h1>Truly Multipurpose</h1>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
             </div>
        </div>
      </div>
 
      <div className='col-md-4'>
        <div className='sec2-card'>
          <div className='sec2-circle'>
          <i class="fa-solid fa-plane-departure"></i>
          </div>
          <div className='card-text'>
            <h1>Easy to customize</h1>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
             </div>
        </div>
      </div>
      
    

 </div>
    </div>
   </div>
   {/* Section 2 End */}


   {/* Section 3 Start */}
   <div className='section-3'>
      <div className='container'>
        <div className='row my-3'>
        <div className='col-md-6'>
            <div className='sec3-text py-5'>
                   <h5 className='w-75 py-2'>A digital web design studio creating modern & engaging online experiences</h5>
                   <p className='py-2 w-75 text-center'>
                   Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
                   </p>
                   <ul>
                    <li>We put a lot of effort in design.</li>
                    <li>The most important ingredient of successful website.</li>
                    <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
                    <li>Submit Your Organization.</li>
                   </ul>
                   <button>learn more</button>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='sec3-img w-100 py-5'>
              <img className='w-100' src = 'http://dorsin.react.themesbrand.com/assets/images/online-world.svg'></img>
            </div>
          </div>

          </div>
        </div>
      </div>
{/* Section 3 End */}

{/* Section 4 Start */}
<div className='section-4'>
  <div className='container'>
 <div className='sec4-text'>
  <h1>OUR PRICING</h1>
  <p>Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing options.</p>
 </div>
 <div className='row'>
  <div className='col-md-4'>
    <div className='price-card my-2 py-5 text-center'>
          <p>ECONOMY</p>
          <h1>$9.90</h1>
          <p className='pb-5'>BILLING PER MONTH</p>
          <hr></hr>
          <p className='py-1'>Bandwidth: <span>1GB</span></p>
          <p className='py-1'>Onlinespace: <span>50GB</span></p>
          <p className='py-1'>Suppor: <span>no</span></p>
          <p className='py-1'>1 <span>Domain</span></p>
          <p className='py-1'>No <span>Hidden Fees</span></p>
       <button>Join Now</button>
    </div>
  </div>

  <div className='col-md-4'>
    <div className='price-card my-2 py-5 text-center'>
          <p>DELUXE</p>
          <h1>$19.90</h1>
          <p className='pb-5'>BILLING PER MONTH</p>
          <hr></hr>
          <p className='py-1'>Bandwidth: <span>1GB</span></p>
          <p className='py-1'>Onlinespace: <span>50GB</span></p>
          <p className='py-1'>Suppor: <span>no</span></p>
          <p className='py-1'>1 <span>Domain</span></p>
          <p className='py-1'>No <span>Hidden Fees</span></p>
       <button>Join Now</button>
    </div>
  </div>

  <div className='col-md-4'>
    <div className='price-card my-2 py-5 text-center'>
          <p>ULTIMATE</p>
          <h1>$29.90</h1>
          <p className='pb-5'>BILLING PER MONTH</p>
          <hr></hr>
          <p className='py-1'>Bandwidth: <span>1GB</span></p>
          <p className='py-1'>Onlinespace: <span>50GB</span></p>
          <p className='py-1'>Suppor: <span>no</span></p>
          <p className='py-1'>1 <span>Domain</span></p>
          <p className='py-1'>No <span>Hidden Fees</span></p>
       <button>Join Now</button>
    </div>
  </div>

  
 </div>
 </div>
</div>
{/* Section 4 End */}

{/* Section 5 start */}
<div className='section-5'>
  <div className='container'>
    <div className='sec5-text'>
      <h1>BEHIND THE PEOPLE</h1>
      <p>It is a long established fact that create category leading brand experiences a reader will be distracted by the readable content of a page when looking at its layout.</p>
    </div>

    <div className='row'>
      <div className='col-md-3'>
        <div className='people-card my-2'>
        <div class="card">
        <img src="http://dorsin.react.themesbrand.com/assets/images/team/img-1.jpg" class="card-img-top" alt=""></img>
       <div class="card-body text-center">
        <h6>Frank Johnson</h6>
        <p>CEO</p>
  </div>
</div>
        </div>
      </div>

      <div className='col-md-3'>
        <div className='people-card my-2'>
        <div class="card">
        <img src="http://dorsin.react.themesbrand.com/assets/images/team/img-2.jpg" class="card-img-top" alt=""></img>
       <div class="card-body text-center">
        <h6>Joshua Stemple</h6>
        <p>MANAGER</p>
  </div>
</div>
        </div>
      </div>

      <div className='col-md-3'>
        <div className='people-card my-2'>
        <div class="card">
        <img src="http://dorsin.react.themesbrand.com/assets/images/team/img-3.jpg" class="card-img-top" alt=""></img>
       <div class="card-body text-center">
        <h6>Elaine Stclair</h6>
        <p>DESIGNER</p>
  </div>
</div>
        </div>
      </div>

      <div className='col-md-3'>
        <div className='people-card my-2'>
        <div class="card">
        <img src="http://dorsin.react.themesbrand.com/assets/images/team/img-4.jpg" class="card-img-top" alt=""></img>
       <div class="card-body text-center">
        <h6>Wanda Arthur</h6>
        <p>DEVELOPER</p>
  </div>
</div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Section 5 End */}

{/* Section 6 start */}
<div className='section-6'>
  <div className='container'>
  <div className='sec6-text'>
      <h1>BLOG</h1>
      <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean class at a euismod mus ipsum vel ex finibus semper luctus quam.</p>
    </div>
   <div className='row'>
    <div className='col-md-4'>
      <div className='blog-card my-2'>
      <div class="card">
  <img src="http://dorsin.react.themesbrand.com/assets/images/blog/img-1.jpg" class="card-img-top" alt=""/>
  <div class="card-body">
    <p>UI & UX Design</p>
    <h5 class="card-title">Doing a cross country road trip</h5>
    <p class="card-text">She packed her seven versalia, put her initial into the belt and made herself on the way...</p>
    <span>Read More</span>
    
  </div>
</div>
      </div>
    </div>

    <div className='col-md-4'>
      <div className='blog-card my-2'>
      <div class="card">
  <img src="http://dorsin.react.themesbrand.com/assets/images/blog/img-2.jpg" class="card-img-top" alt=""/>
  <div class="card-body">
    <p>UI & UX Design</p>
    <h5 class="card-title">Doing a cross country road trip</h5>
    <p class="card-text">She packed her seven versalia, put her initial into the belt and made herself on the way...</p>
    <span>Read More</span>
    
  </div>
</div>
      </div>
    </div>

    <div className='col-md-4'>
      <div className='blog-card my-2'>
      <div class="card">
  <img src="http://dorsin.react.themesbrand.com/assets/images/blog/img-3.jpg" class="card-img-top" alt=""/>
  <div class="card-body">
    <p>UI & UX Design</p>
    <h5 class="card-title">Doing a cross country road trip</h5>
    <p class="card-text">She packed her seven versalia, put her initial into the belt and made herself on the way...</p>
    <span>Read More</span>
    
  </div>
</div>
      </div>
    </div>
   </div>
  </div>
</div>
{/* Section 6 End */}

{/* Section 7 start */}
<div className='section-7'>
  <div className='container'>
    <div className='sec7-text'>
      <h1>GET IN TOUCH</h1>
      <p>We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with faucibus sapien odio measurable results..</p>
    </div>
    <div className='contact-form'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='contact-text p-5'>
              <p className='add'>Office Address 1:</p>
              <p className='pb-2'>4461 Cedar Street Moro, AR 72368</p>
              <p className='add'>Office Address 2:</p>
              <p className='pb-2'>2467 Swick Hill StreetNew Orleans, LA 70171</p>
              <p className='add'>Working Hours:</p>
              <p className='pb-2'>9:00AM To 6:00PM</p>
            </div>
          </div>

          <div className='col-md-8'>
             <div className='detail'>
              <input className='' type='text' placeholder='Enter Your Name'></input>
              <input className='' type='email' placeholder='Enter Your Email'></input>
              <input className='' type='text' placeholder='Enter Subject'></input>
              <input className='' type='text' placeholder='Enter Message'></input>
              <button>Send Message</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className='touch'>
    <div className='row m-0'>
      <div className='col-md-4'>
        <div className='sec7-icons p-5'>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-square-twitter"></i>
        <i class="fa-brands fa-square-instagram"></i>
        <i class="fa-brands fa-google-plus"></i>
        </div>
      </div>

      <div className='col-md-4'>
     <div className='number p-5'>
      <p><span><i class="fa-solid fa-phone"></i></span>  +91 123 4556 789</p>
     </div>
      </div>

      <div className='col-md-4'>
     <div className='number p-5'>
      <p><span><i class="fa-solid fa-envelope"></i></span>Support@info.com</p>
     </div>
      </div>
    </div>
  </div>
</div>
{/* Section 7 End */}



   </div>
  );
}

export default App;
