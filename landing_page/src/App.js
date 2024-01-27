import React from 'react';

import './style.css';

function App() {
  return (
    <div id="body">
      <Header/>
      <Card
      className="section" 
      img="./Group 114.png"
      title=""
      description=""
      />
      <ContactContainer/>
    </div>
);
}

const Header=()=>{
return(
   <div className='header'>
       <span className='header-title'>
            
       </span>

    <br/>
        <span className='header-text'>
            
        </span>
    </div>
);
}

const Card=(props)=>{
return(
    <><><><div className={props.className}>
    <div className='=small-div'>
      <i className={props.className}></i>
      <img src={props.img} alt='' />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
      <a href='https://www.varaluae.com'>Home</a>&nbsp; &nbsp;&nbsp;
      <a href='https://www.varaluae.com'>Services</a>&nbsp; &nbsp;&nbsp;
      <a href='https://www.varaluae.com'>Pricing</a>&nbsp; &nbsp;&nbsp;
      <a href='https://www.varaluae.com'>About us </a>&nbsp; &nbsp;&nbsp;
      <span className='button1'>
      <a href='https://www.varaluae.com'><button>Start a company</button></a>
      </span>
    </div>
    <div className='big-div'>
      <span className='=div-title'>
        {props.title}
      </span>
      <br />
      <span>
        {props.description}
      </span>
    </div>
  </div><br /></>

    <div class="topnav">
    <img src='https://static.vecteezy.com/system/resources/thumbnails/007/069/369/small/3d-magnifying-glass-icon-in-minimalistic-cartoon-style-purple-is-an-optical-tool-for-finding-details-and-reading-fine-print-vector.jpg' alt=''></img>
      <input type="text" placeholder="Search a Term | Topic"></input>
    </div></>
    <div>
      <span className='section2'>
       <img src='ILLUSTRATION.png' alt=''>
       </img>
      </span>
      
    </div></>
)
}

const ContactContainer=()=>{
return(
  <div className='text'>

    <span className='any'>
      <img src='Ellipse 7.png' alt=''></img>
      <a href='https://www.varaluae.com/'>Claim a Free Quote</a>
    </span>
    <br />
    <span className='any2'>
      <b><u>Get started</u> on fulfilling <br></br>
        &nbsp;&nbsp; your Dubai or UAE <br></br>
        &nbsp;&nbsp; dream.</b>
    </span>
    <br></br><br></br>
    <span className='any'>
      UAE & Offshore Company
    </span>

    <br></br>
    <br></br>
    <span className='any3'>
      <b>We provide you with information about UAE or<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Offshore Company Registration & help you<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setup your company with a bank account and<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;visas.</b>
    </span>
    <br />
    <br />
    <span className='button'>
      <a href='https://www.varaluae.com'><button>Start a company</button></a>
    </span>
    <span className='button2'>
      <a href='https://www.varaluae.com'><button>Renew a company</button></a>
    </span>
    <br />
    <br />
    <br />
    <br />
    <span className='link'>
      <a href='https://www.varaluae.com'>Watch the video about UAE or Offshore Company Registration</a>&nbsp;
      <img src='Group 117.png' alt=''></img>
    </span>
    <br />
    <br />
    <img src='Ellipse 9.png' alt=''></img>
    <br />
    <br />
    <img src='Ellipse 13.png' alt=''></img>
    <span className='link2'>
      <b><u>Dedicated</u></b>
    </span> <img src='Ellipse 13.png' alt=''></img>
    <br></br>
    <span className='link3'>
      <b>
       &nbsp;&nbsp;&nbsp; to our mission we are
      </b>
    </span> 
    <br />
    <br />
    <span className='link4'>
      Our services include Company Formation & Renewals,
    </span>
    <br />
    <span className='link5'>
      Trust & Fiduciary, Tax Residency Setup With Family, Bank
    </span>
    <br />
    <span className='link6'>
      Accounts, Remote Management, Stock Trading
    </span>
    <br />
    <span className='link7'>
      Platforms, Ownership Solutions
    </span>

    <br />
    <br />
    <br />
    <br />

    <span className='img1'>
      <img src='dungeon.png' alt=''></img>
    </span>
    <span className='img2'>
      <img src='Vector-2.png' alt=''></img>
    </span>
    <span className='img3'>
      <img src='Vector-1.png' alt=''></img>
    </span>
    <br/>
    <span className='test1'>
    <b> UAE Free Zone Company</b>
    </span>
    <span className='test2'>
    <b> Dubai Local Companies</b>
    </span>
    <span className='test3'>
    <b> Offshore Compamies </b>
    </span>
    <br/>
    <span className='test9'>
    Your registration agent, will answer all 
    </span>
    <span className='test5'>
    &nbsp;&nbsp; &nbsp;The Dubai LLC formation documents 
    </span>
    <span className='test7'>
    &nbsp;&nbsp;&nbsp; You can register an offshore company 
    </span><br/>

    <span className='test9'>
    of your questions and help you to reach 
    </span>
    <span className='test5'>
    are actually articles of organization or a
    </span>
    <span className='test7'>
    and open its bank account in Dubai. 
    </span><br/>

    <span className='test9'>
    a conclusion that meets your objectives 
    </span>
    <span className='test5'> 
    &nbsp;certificate of organization. You can get 
    </span>
    <span className='test7'>
    &nbsp;Your agent will help you along all the 
    </span><br/>

    <span className='test9'>
    of investing in the UAE.
    </span>
    <span className='test5'>
    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
    yours today.
    </span>
    <span className='test7'>
    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
     &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
     &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
     process
    </span><br/><br/>
    <span className='test4'>
    <a href='https://www.varaluae.com/'>Get started</a>
    </span>
    <span className='test6'>
    <a href='https://www.varaluae.com/'>Get started</a>
    </span>
    <span className='test8'>
    <a href='https://www.varaluae.com/'>Get started</a>
    <img src='Ellipse 9.png' alt=''></img>
    </span>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <span className='learn'>
  
    <div className='box'>
      <div className='box2'>
 <img src='Group.png' alt=''></img>
 </div>
 <br></br>
 <div className='box1'><b>Advice & Guidance</b></div>
 <br></br>
 
 <div className='box3'>
All activities in the UAE are licensed. <br/>
Whether manufacturing, finance, <br/>
trading, marketing, consultancy or <br/>
restaurants. In some countries only <br/>
manufacturing is licensed. In others <br/>
there is a threshold below which <br/>
business are encouraged. Get our <br/>
insightfull guidance today<br/>
    </div><br/><br/>
    <div className='box4'>
      <a href='https://www.varaluae.com/'><b>Learn more&nbsp;</b></a>
      <img src='Vector.png' alt=''></img>
    </div>
    </div>
   <b>Learn the ways in which you can benefit <br/>
    &nbsp;&nbsp; &nbsp;  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
    from a UAE/Offshore Company. Then get <br/>
    &nbsp;&nbsp; &nbsp;  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
    started on fulfilling your UAE dream<br/></b>
    </span>
    <br/>
    <br/>
    <span className='learn1'>
     <a href='https://www.varaluae.com/'>Claim a Free Quote</a>
    </span>
    <br/>
    <br/>
    <img src='Ellipse 19.png' alt=''></img>
    <br/>

  <div className='Box'>

   <div className='Box2'>
 <img src='ILLUSTRATION 03  1.png' alt=''></img>
 </div>
 <br></br>
 <div className='Box1'><b>Bank Account Setup</b></div>
 <br></br>
 
 <div className='Box3'>
     
There are many banks in the United <br/>
Arab Emirates [UAE]. Both locally  <br/>
owned and branches of  <br/>
multinational ones. Foreign banks  <br/>
adjust according to their parent's  <br/>
strategies and have changed local  <br/>
requirements overnight in the past.  <br/>
But we are here to help you.
    </div><br/><br/>
    <div className='box4'>
      <a href='https://www.varaluae.com/'><b>Learn more&nbsp;</b></a>
      <img src='Vector.png' alt=''></img>
      <img src='Ellipse 13.png' alt=''></img>
    </div>
    </div> <img src='Ellipse 13.png' alt=''></img>
    <div className='BOX'>
      <div className='BOX2'>
 <img src='Group-1.png' alt=''></img>
 </div>
 <br></br>
 <div className='BOX1'><b>Registration Document <br/> Perparation</b></div>
 <br></br>
 
 <div className='BOX3'>
 Several documents must be <br/>
prepared to start the process of <br/>
registering a new company in the <br/>
United Arab Emirates. Be it a Dubai <br/>
local company, a free zone one or an <br/>
offshore entity. Your registered <br/>
agent is dedicated to get this done <br/>
for you for a seamless process.<br/>
    </div><br/><br/>
    <div className='box4'>
      <a href='https://www.varaluae.com/'><b>Learn more&nbsp;</b></a>
      <img src='Vector.png' alt=''></img>
    </div>
    </div>
    
    <br/>
    <br/>
    <br/>
    
   <div className='TEXT'>
   We have gathered a team of <br/>
professionals to craft adequate <br/>
services you can rely on for a friction<br/> 
free setup in UAE<br/>
   </div>
   <div className='TEXT1'>
    <a href='https://www.varaluae.com/'>More about our services</a>
   <img src='Vector.png' alt=''></img>
   </div>

   <div className='BOx'>
<div className='BOx2'>
<img src='Group-2.png' alt=''></img>
</div>
<br></br>
<div className='BOx1'><b>UAE Company Visas</b></div>
<br></br>

<div className='BOx3'>
  
Your application for visas is critical<br/> 
especially if you intend to move to <br/> 
Dubai. This becomes even more <br/> 
urgent if your family will also move <br/> 
with you. All the paperwork is done <br/> 
on your behalf smoothly so that you <br/> 
may only focus on doing what <br/> 
matters most to you.<br/> 
 </div><br/><br/>
 <div className='box4'>
  <a href='https://www.varaluae.com/'><b>Learn more&nbsp;</b></a>
   <img src='Vector.png' alt=''></img>
  </div>
  </div>

  <h1>
  Most <u>popular affordable pricing</u> per <br/>
jurisdictions are brought to you to <br/>
kick off your adventure.<br/>
<img src='Ellipse 13.png' alt=''></img>
  </h1>
<br/>
<br/>
<br/>
<img src='Ellipse 13.png' alt=''></img>
<div className='parent'>
  <div className='child'>
      <div className='ajman'>
      <img src='Ellipse 13.png' alt=''></img>
      <b>AJMAN OFFSHORE</b>
      </div><br/>
      <span className='money'>
      <b>$2,997</b>
      <span className='one'> One Time Payment 
      </span>
      </span><br/><br/>
      <div className='offer'>
      
      Ajman Offshore New Company <br/>
      formation includes<br/><br/>


     <img src='Group 35.png' alt=''></img>&nbsp;Attestation Charges<br/><br/>
     <img src='Group 35.png' alt=''></img>&nbsp;Registered Agent<br/><br/>
     <img src='Group 35.png' alt=''></img>&nbsp;Registered Office<br/><br/>
      <img src='Group 35.png' alt=''></img>&nbsp;Varal Administrative<br/><br/>
      <img src='Group 35.png' alt=''></img>&nbsp;Preparing Statutory File<br/><br/>
      <img src='Group 35.png' alt=''></img>&nbsp;Liasing with Registration Authorities<br/><br/>
      <img src='Group 35.png' alt=''></img>&nbsp;Due Diligence Appraisal<br/><br/>
      <img src='Group 35.png' alt=''></img>&nbsp;Keeping The Register<br/><br/>
      <img src='Group 35.png' alt=''></img>&nbsp;Seal Charges<br/><br/>
      <img src='Group 35.png' alt=''></img>&nbsp;Certificate of Good Standing<br/><br/>
      <a href='https://www.varaluae.com/'><button>Continue</button></a>
      </div>
  </div>
  <div className='child'>
 
  <div className='ajman2'>
      <b>RAK ICC</b>
      </div><br/>
      <span className='money2'>
      <b>$2,997</b>
      <span className='one2'> One Time Payment 
      </span>
      </span><br/><br/>
      <div className='offer2'>
      
      
      Rak Icc New Company <br/>
      formation includes<br/><br/>


     <img src='Group 35.png' alt=''></img>&nbsp; Attestation Charges<br/><br/>
     <img src='Group 35.png' alt=''></img>&nbsp;Registered Agent<br/><br/>
     <img src='Group 35.png' alt=''></img>&nbsp;Registered Office<br/><br/>
      <img src='Group 35.png' alt=''></img>&nbsp;Varal Administrative<br/><br/>
      <img src='Group 35.png' alt=''></img>&nbsp;Preparing Statutory File<br/><br/>
      <img src='Group 35.png' alt=''></img>&nbsp;Liasing with Registration Authorities<br/><br/>
      <img src='Group 35.png' alt=''></img>&nbsp;Due Diligence Appraisal<br/><br/>
      <img src='Group 35.png' alt=''></img>&nbsp;Keeping The Register<br/><br/>
      <img src='Group 35.png' alt=''></img>&nbsp;Seal Charges<br/><br/>
      <img src='Group 35.png' alt=''></img>&nbsp;Certificate of Good Standing<br/><br/>
      <a href='https://www.varaluae.com/'><button>Continue</button></a>
      </div>

  </div>
  <img src='Ellipse 13.png' alt=''></img>

  <div className='child'>

  <div className='ajman'>
      <b>SHARJAH MEDIA CITY</b>
      </div><br/>
      <span className='money'>
      <b>$4,124</b>
      <span className='one'> One Time Payment 
      </span>
      </span><br/><br/>
      <div className='offer'>
      
      Sharjah Media City New Company <br/>
      formation includes<br/><br/>


     <img src='Group 35.png' alt=''></img>&nbsp; Attestation Charges<br/><br/>
     <img src='Group 35.png' alt=''></img>&nbsp;Registered Agent<br/><br/>
     <img src='Group 35.png' alt=''></img>&nbsp;Registered Office<br/><br/>
      <img src='Group 35.png' alt=''></img>&nbsp;Varal Administrative<br/><br/>
      <img src='Group 35.png' alt=''></img>&nbsp;Preparing Statutory File<br/><br/>
      <img src='Group 35.png' alt=''></img>&nbsp;Liasing with Registration Authorities<br/><br/>
      <img src='Group 35.png' alt=''></img>&nbsp;Due Diligence Appraisal<br/><br/>
      <img src='Group 35.png' alt=''></img>&nbsp;Keeping The Register<br/><br/>
      <img src='Group 35.png' alt=''></img>&nbsp;Seal Charges<br/><br/>
      <img src='Group 35.png' alt=''></img>&nbsp;Certificate of Good Standing<br/><br/>
     <a href='https://www.varaluae.com/'><button>Continue</button></a>
      </div>
 
  </div>
</div>

 <div className='vl'>
 </div>
 <span className='read'><b>Read about our blogs for more <br/>
      information on our processes</b> </span>
 
 <div className='vl2'></div>
<span className='read2'><b>
Get to know the whole us and <br/>
more of our services</b>
</span>

<div className='IMG'>
<img src='Vector-4.png' alt=''>
</img>
<span className='IMG2'>
<b>How to start a company</b> <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
<b>formation in Dubai</b>
<br/>
<br/>
<span className='IMG3'>
5 minutes
</span>
</span>
</div>

<div className='IMG'>
<img src='Vector-4.png' alt=''>
</img>
<span className='IMG2'>
<b>How to start an Offshore</b> <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;
<b>company formation in Dubai</b>
<br/>
<br/>
<span className='IMG3'>
5 minutes
</span>
</span>
</div>

<div className='shift'>
<div className='IMG11'>
<img src='Vector-4.png' alt=''>
</img>
<span className='IMG21'>
<b>SEO Dubai: Who benefits </b><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
<b>the most?</b>
<br/>
<br/>
<span className='IMG31'>
5 minutes
</span>
</span>
</div>
</div>

<div className='vl'>
 </div>
 <span className='read'><b>Satisfied We are When Our <br/>
            Customers Are Happy</b>
 </span>
<br/><br/>
<br/><br/>
 <div className='IMG5'>
<img src='Vector-3.png' alt=''>
</img>
<span className='IMG2'>

<b>"</b>
I am very happy with them. I'll <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;
continue to use their services in <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;
future & highly recommend them <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;
to anyone.
<b>"</b>

<br/>
<br/>
<span className='IMG6'>
<b>Muhib Abrar</b>
</span>
</span>


<div className='IMG5'>
<img src='Vector-3.png' alt=''>
</img>
<span className='IMG2'>

<b>"</b>
Rama has a high level of integrity, 
 <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;
intellect, knowledge of his  <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;
business, resourcefulness and  <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;
humanity.
<b>"</b>

<br/>
<br/>
<span className='IMG6'>
<b>Colin Saldahna</b>
</span>
</span>
</div>

</div>


<div className='IMG5'>
<img src='Vector-3.png' alt=''>
</img>
<span className='IMG2'>

<b>"</b>
Your advise was so complete that I 
 <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;
actually realized how beneficial  <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;
this would be to my clients and my  <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;
business.
<b>"</b>

<br/>
<br/>
<span className='IMG6'>
<b>Mark Swann</b>
</span>
</span>
</div>

<div className='Services'>
  <b>Services</b>
  <br/>
 <a href='https://www.varaluae.com/'> Products</a><br/>
 <a href='https://www.varaluae.com/'> Solutions</a><br/>
 <a href='https://www.varaluae.com/'> Assurance</a><br/>
 <a href='https://www.varaluae.com/'>FAQ</a><br/>
 <a href='https://www.varaluae.com/'>Working at Varal-Singhania</a><br/>
  <br/><br/>
<b>Policies</b><br/>
<a href='https://www.varaluae.com/'>Privacy Policy</a><br/>
<a href='https://www.varaluae.com/'>Terms & Conditions</a><br/><br/>

<b>About</b><br/>
<a href='https://www.varaluae.com/'>About Us</a><br/>
<a href='https://www.varaluae.com/'>Contact Us</a><br/><br/>

<b>Address</b><br/>
608 One Lake Plaza, Cluster T,<br/>
Al Sarayat Street, Jumeirah <br/>
Lake Towers<br/>
Dubai<br/>
United Arab Emirates<br/>
<br/><br/>

Office Hours: Sunday to <br/>
Thursday 8:30 AM to 6:30 PM <br/>
[GMT+4]<br/>
M: +971 55 794 2016<br/>
O: +971 4 447 206<br/>
<br/>

<b>Subscribe Now</b><br/>
Sunbscribe now to receive our <br/>
Newsletters about amazing <br/>
opportunities in Dubai<br/>
<br/><br/>

<input type='text' placeholder="  Enter Email Address">
</input>
<img src='Group 34.png' alt=''></img>
<br/><br/>
</div>
<div className='Services2'>
<img src='Vector-5.png' alt=''></img>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src='Vector-6.png' alt=''></img>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src='Vector-7.png' alt=''></img>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src='Vector-8.png' alt=''></img>
&nbsp;&nbsp;
</div>
<br/><br/><br/>
<div className='copyright'>
Varaluae 2021 &copy; All Right Reserved
</div>
</div>

)
  
}

export default App;
