import React from 'react';
import ReactDOM from 'react';
const { useState } = React;
const contentHeader = {
  about: 
    <div class='contentHeader'>
      <h1>About Us</h1>
    </div>,
  forSale: 
    <div class='contentHeader'>
      <h1>Byrdhouses For Sale</h1>
    </div>,
  sold: 
    <div class='contentHeader'>
      <h1>Byrdhouses Sold</h1>
    </div>,
  contact: 
    <div class='contentHeader'>
      <h1>Contact Us</h1>
    </div>
}

function ByrdhousesSold(props){
  return(
    <div>Byrdhouses Sold</div>
  )
}

function ByrdhousesForSale(props){
  return(
    <div>Byrdhouses for sale</div>
  )
}

function ContactUs(props){
  return(
    <div class='content'>Please contact us at <a class='link' href="mailto: backdoorbyrd@gmail.com">backdoorbyrd@gmail.com</a> or our <a class='link' href='https://www.facebook.com/Thebackdoorbyrd-105479927752589'>Facebook page</a>. We will be happy to answer any questions, ideas for a custom birdhouse, or our best chicken stew and biscuit recipe!</div>
  )
}

function AboutUs(props){
  return(
    <div class='content'>
      <h1 class='sectionHeader'>Our Approach</h1>
First we gather all of the unique finds from cranny and crook and the juices start flowing. Some pieces find each other and others need to be introduced properly. There is a harmony that creates a unique piece when something discarded, possibly lost is found and comes together to make a feathered friend a home of their own. We enjoy building custom birdhouse. We have made cabins, churches, homes and themed houses. Anything is possible!

      <h1 class='sectionHeader'>Our Story</h1>
We are Jill Allen and Jim Reeves and byrdhousing isn’t just a passion, it is something we love to do! We work hard to create one of a kind byrdhouses for you and your loved ones. (not to mention the lucky birds!)

      <h1 class='sectionHeader'>Meet the Team</h1>
<h4 style={{display:'inline'}}>Jim Reeves</h4><br/>
Founder & Visionary Craftsman/Carpenter – partner<br/><br/>

My passion is connecting people to the outdoors. Bird houses are a way of connecting people to nature, even if it’s in their own backyard.
<br/>
<br/>
      
      <h4 style={{display:'inline'}}>Jill Allen</h4><br/>
Founder & decorator/designer – partner<br/><br/>

Love of old things and lovely homes for all the wonderful byrdies in the world!
<br/><br/><br/>
      <em>Contact us with custom orders!</em> <a class='link' href="mailto: backdoorbyrd@gmail.com">backdoorbyrd@gmail.com</a>
    </div>
  )
}

function ContentSwitch(props){
  function content(){
    switch(props.nav){
      case 'about':
        return <AboutUs />
      case 'contact':
        return <ContactUs />
      case 'forSale':
        return <ByrdhousesForSale />
      case 'sold':
        return <ByrdhousesSold />
      case 'landing':
        return <Landing />
    }
  }
  return(
    <div>
      {content()}
    </div>
  )
}

function Landing(props){
  return(
    <div>
      <div class='content'>
        <h1 class='sectionHeader'>Welcome to Backdoorbyrd!</h1>
  What started as making a birdhouse out of found objects (mostly in the basement!) for a gift, became a hobby. Jim is the craftsman with his love and expertise for wood. Jill takes his creations he builds and embellishes each one with discarded or found “junk”. (treasures to us!)
        <br />
Half the fun is creating a custom birdhouse for an individual. It might be a barn, church, treehouse, lake house, their home, school, sports related…anything!
      </div>
    </div>
  )
}

function TopWelcome(props){
  return(
    <div><a id='welcomeText' href='http://thebackdoorbyrd.com/'>BACKDOORBYRD |</a> Awesome Byrdhouses</div>
  )
}

function NavBar(props){
  const activeNav = (x) => {
    if(props.nav == x){
      return 'activeNav'
    }else{
      return 'inactiveNav'
    }
  }
  return(
    <div>  
      <div id='navButtonWrapper'>
        <button 
          type='button' 
          class={activeNav('about')}
          onClick={() => props.setNav('about')}>ABOUT US</button>
        <button 
          type='button' 
          class={activeNav('contact')}
          onClick={() => props.setNav('contact')}>CONTACT US</button>
        <button 
          type='button' 
          class={activeNav('forSale')}
          onClick={() => props.setNav('forSale')}>BYRDHOUSES FOR SALE</button>
        <button 
          type='button' 
          class={activeNav('sold')}
          onClick={() => props.setNav('sold')}>BIRDHOUSES SOLD</button>
      </div>
    </div>
  )
}

function Footer(props){
  return(
    <div id='footerWrapper'>
      <div class='sectionHeader footerItemA'>
        FOLLOW US <br/>
        <a id='facebookIcon' href='https://www.facebook.com/Thebackdoorbyrd-105479927752589'><i class="fab fa-facebook fa-2x"></i></a>
      </div>
      <div class='footerItemA' style={{order: 2}}>
        <div class='sectionHeader'>CONTACT US</div>
        <a id='mailIcon' href="mailto: backdoorbyrd@gmail.com"><i class="fas fa-envelope-square fa-2x"></i></a>
      </div>
      <div class='footerItemB'>Copyright <i class="far fa-copyright"></i> 2020 Backdoorbyrd <br/>
        designed and maintained by <a class='footerLink' href="mailto: HighDynamics@gmail.com">HighDynamics</a>
      </div>  
    </div>
  )
}

function Site(){
  const [nav, setNav] = useState('landing');
  return(
    <div id='siteWrapper'>
      <div id='topBackground'>
        <div class='topBackdoorByrd'>
          <div id='headerWrapper'>
            <TopWelcome />
          </div>
        </div>
        <div id='navBarWrapper'>
          <NavBar setNav={setNav} nav={nav}/>
          <hr size='1' />
        </div>
        <div>  
          {(nav == 'landing') ? 
            <div class='contentHeader'>
              <h1>Custom, Funky, Functional, Fun Byrdhouses!</h1>
We create functional byrdhouses that are one of a kind and perfect for your discriminating feathered houseguests. Order a <button type='button' class='psuedoHyperlink' onClick={() => setNav('contact')}>custom home</button> or look at our <button type='button' class='psuedoHyperlink' onClick={() => setNav('forSale')}>current selection</button> now!
      </div> : contentHeader[nav]}
        </div>
      </div>
      <div id='contentWrapper'>
        <ContentSwitch nav={nav} />
      </div>
      <div id='footerWrapper'>
        <Footer />
      </div>
    </div>
  )
}

ReactDOM.render(<Site />, document.getElementById('root'))