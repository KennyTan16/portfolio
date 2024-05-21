import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slide } from 'react-awesome-reveal';
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import { TypeAnimation } from 'react-type-animation';
import { MdStar, MdStarOutline } from 'react-icons/md';


function App() {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const renderSlider = (imageList) => {
    const imageElements = [];
    imageList.forEach((image) => {
      imageElements.push(
        <div key={image.title} className='p-3 border rounded py-2'>
          <img src={image.src} className='w-100 object-fit-contain' style={{height: "350px"}}  />
          <p className='text-center mt-3'><strong>{image.title}</strong></p>
        </div>
      )
    })
    return imageElements;
  }

  const getStars = (numberOfStar) => {
    const starElements = [];
    for(let i = 1; i <= 5; i++) {
      if(numberOfStar >= i) {
        starElements.push(
          <MdStar fill='orange' />
        )
      }
      else {
        starElements.push(
          <MdStarOutline fill='orange' />
        )
      }
    }
    return starElements;
  } 

  const getBadge = (text) => {
    return (
      <Badge
        bg="light"
        text="dark"
        className="border-dark border"
      >
        {text}
      </Badge>
    )
  }

  return (
    <>
      <div className='align-content-center bg-light' style={{ height: "100vh" }}>
        <Container>
        <Slide direction={"up"}>
            <h1 className='mb-0 fs-lg'>I am Kenny Tan Sze Ken</h1>
            <TypeAnimation
              sequence={[
                'a Front',
                1000,
                'a Front-End', // Types 'One'
                2000, // Waits 1s
                'a Back',
                1000,
                'a Back-End', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'a Full-Stack Developer', // Types 'Three' without deleting 'Two'
              ]}
              wrapper="span"
              cursor={true}
              className='fs-md'
            />
        </Slide>
          <Button variant='dark' className='mt-4'>
            <a href="#projects" className='text-white' style={{ textDecoration: "none"}}>
              View Projects
            </a>
          </Button>
          <strong className='position-absolute bottom-0 fs-xxl right-0'>{"</>"}</strong>
        </Container>
      </div>
      <Container className='py-5 my-5'>
          <div className='text-left mb-5'>
            <h1>About Me</h1>
            <p>Here you will find more information about me, what I do, and my current skills mostly in terms <br />of programming and technology</p>
          </div>
          <Row>
          <Col md={6}>
              <h2>Get to know me!</h2>
              <p>A skilled and dedicated Full Stack Developer with 5 years of experience, specializing in website and mobile application development. Proficient in React, NodeJS, Express, and C#, adept in both front-end and back-end development. Capable of guiding projects from planning to deployment.
              I have successfully delivered over 10+ IT websites and mobile apps, encompassing payment systems, appointment scheduling, inventory management, and loyalty programs. My solutions address clients' business challenges while ensuring optimal user experience through high-quality code.
              </p>
          </Col>
          <Col md={6} className='position-relative'>
              <h2 className='mt-3 mt-lg-0'>My Skills</h2>
              <div className="d-flex gap-3 flex-wrap">
                {getBadge("ReactJS")}
                {getBadge("NodeJS")}
                {getBadge("ExpressJS")}
                {getBadge("React Native")}
                {getBadge("HTML")}
                {getBadge("Sass")}
                {getBadge("TypeScript")}
                {getBadge("Bootstrap")}
                {getBadge("JavaScript")}
                {getBadge("C#")}
                {getBadge("SQL")}
                {getBadge("WordPress")}
                {getBadge("AWS")}
                {getBadge(".Net Core")}
                {getBadge("Nginx Server")}
                {getBadge("Virtualmin")}
              </div>
              <div className='height-sm'></div>
              <img src="/portfolio/kenny-avatar.png"  className='position-absolute bottom-n-0 right-0 height-md' />
          </Col>
          </Row>
      </Container>
      <div className='py-5 bg-light'>
        <h1 className='text-center' id="projects">Projects</h1>
        <Container className='d-flex flex-column gap-4'>
        <div>
          <h2>1. WeRent</h2>
          <Slider {...settings}>
            {
              renderSlider([
                {src: "/portfolio/werent/1.JPG", title: "Home Page"},
                {src: "/portfolio/werent/2.JPG", title: "Listing Page"},
                {src: "/portfolio/werent/3.JPG", title: "Create Listing Page"},
                {src: "/portfolio/werent/4.JPG", title: "Profile Page"},
                {src: "/portfolio/werent/5.JPG", title: "Login Page (Mobile)"},
                {src: "/portfolio/werent/6.JPG", title: "Property Bills Page (Mobile)"}
              ])
            }
          </Slider>
          <div className='d-flex gap-2 flex-column my-5 px-o px-lg-5'>
            <p><strong>Project Type: </strong>Property Listing Platform</p>
            <div className='d-flex align-items-center mb-3'>
                <div className='d-flex gap-2 flex-wrap'>
                {getBadge("React Native")}
                {getBadge("ReactJS")}
                {getBadge("NodeJS")}
                {getBadge("ExpressJS")}
                {getBadge("Sass")}
                {getBadge("TypeScript")}
                {getBadge("PostgreSQL")}
                {getBadge("AWS")}
                </div>
            </div>
            <p><strong>Project Details: </strong>A property listing platform that enables tenants to schedule viewings for available listings posted by agents and owners.
              <ol>
                <li>Enable booking of property viewings via a calendar system.</li>
                <li>Display available properties for tenant viewing.</li>
                <li>Offer payment options for agents/owners scheduling viewings.</li>
                <li>Implement login authentication via Google or Facebook.</li>
              </ol>
            </p>
            <p><strong>Complexity: {getStars(5)}</strong>
            </p>
          </div>
          </div>
          <div>
          <h2>2. Space Pass</h2>
          <Slider {...settings}>
            {
              renderSlider([
                {src: "/portfolio/space-pass/1.JPG", title: "Home Page"},
                {src: "/portfolio/space-pass/2.JPG", title: "Entry Listing Page"},
                {src: "/portfolio/space-pass/3.JPG", title: "Landing Page (Tablet)"},
                {src: "/portfolio/space-pass/4.JPG", title: "New Entry Page (Tablet)"},
                {src: "/portfolio/space-pass/5.JPG", title: "Gatepass List Page (Tablet)"},
                {src: "/portfolio/space-pass/6.JPG", title: "New Gatepass Page (Tablet)"}
              ])
            }
          </Slider>
          <div className='d-flex gap-2 flex-column my-5 px-o px-lg-5'>
            <p><strong>Project Type: </strong>Warehouse Platform (Website and Mobile App)</p>
            <div className='d-flex align-items-center mb-3'>
                <div className='d-flex gap-2 flex-wrap'>
                {getBadge("React Native")}
                {getBadge("ReactJS")}
                {getBadge("NodeJS")}
                {getBadge("ExpressJS")}
                {getBadge("Sass")}
                {getBadge("Bootstrap")}
                {getBadge("TypeScript")}
                {getBadge("MySQL")}
                {getBadge("AWS")}
                </div>
            </div>
            <p><strong>Project Details: </strong>Digitize warehouse operations to streamline processes, ensuring speed, simplicity, and overall enhancement.
              <ol>
                <li>Track entry records of lorries effectively.</li>
                <li>Enable workers to sign records for validation.</li>
                <li>Upload images of goods during loading and unloading.</li>
                <li>Generate reports including total goods and pricing.</li>
                <li>Administer all records through the Admin Panel.</li>
                <li>Monitor remaining goods status in the warehouse.</li>
              </ol>
            </p>
            <p><strong>Complexity: {getStars(3)}</strong>
            </p>
          </div>
          </div>
          <div>
          <h2>3. Space Loyalty</h2>
          <Slider {...settings}>
            {
              renderSlider([
                {src: "/portfolio/space-loyalty/1.png", title: "Home Page"},
                {src: "/portfolio/space-loyalty/2.png", title: "Rewards Page"},
                {src: "/portfolio/space-loyalty/3.png", title: "Payment Page"},
                {src: "/portfolio/space-loyalty/4.png", title: "Transaction Page"}
              ])
            }
          </Slider>
          <div className='d-flex gap-2 flex-column my-5 px-o px-lg-5'>
            <p><strong>Project Type: </strong>Space Loyalty Mobile App</p>
            <div className='d-flex align-items-center mb-3'>
                <div className='d-flex gap-2 flex-wrap'>
                {getBadge("React Native")}
                {getBadge("NodeJS")}
                {getBadge("ExpressJS")}
                {getBadge("AWS")}
                {getBadge("Sass")}
                {getBadge("TypeScript")}
                </div>
            </div>
            <p><strong>Project Details: </strong> Allow the customer to make payment like E-Wallet and collect points for vouchers redemption.
              <ol>
                <li>Enable customers to make payments via E-Wallet and accumulate points for voucher redemption.</li>
                <li>Facilitate E-Wallet top-up using FPX (Financial Process Exchange).</li>
                <li>Allow payment by scanning vendor QR codes and entering the amount.</li>
                <li>Reward customers with loyalty points for each payment made.</li>
                <li>Enable redemption of various vouchers using accumulated points.</li>
              </ol>
            </p>
            <p><strong>Complexity: {getStars(4)}</strong>
            </p>
          </div>
          </div>
          <div>
          <h2>4. Trading CRM</h2>
          <Slider {...settings}>
            {
              renderSlider([
                {src: "/portfolio/trading-crm/1.jpg", title: "Deposit History Page"},
                {src: "/portfolio/trading-crm/2.jpg", title: "Charge History Page"},
                {src: "/portfolio/trading-crm/3.jpg", title: "Dashboard (PWA)"},
                {src: "/portfolio/trading-crm/4.jpg", title: "Payment Account (PWA)"},
                {src: "/portfolio/trading-crm/5.jpg", title: "Home (PWA)"},
                {src: "/portfolio/trading-crm/6.jpg", title: "Wallet (PWA)"}
              ])
            }
          </Slider>
          <div className='d-flex gap-2 flex-column my-5 px-o px-lg-5'>
            <p><strong>Project Type: </strong>Trading CRM</p>
            <div className='d-flex align-items-center mb-3'>
                <div className='d-flex gap-2 flex-wrap'>
                {getBadge("C#")}
                {getBadge("CSS")}
                {getBadge("ASP.Net")}
                {getBadge("MSSQL")}
                </div>
            </div>
            <p><strong>Project Details: </strong>Enable the client to oversee customer trading via a CRM platform.
              <ol>
                <li>Revamp the website for responsiveness, user-friendliness, and aesthetic appeal</li>
                <li>Develop the interface for the mobile version of the progressive web app.</li>
                <li>Address front-end and back-end bugs.</li>
              </ol>
            </p>
            <p><strong>Complexity: {getStars(2)}</strong>
            </p>
          </div>
          </div>
          <div>
          <h2>5. WordPress Websites</h2>
          <Slider {...settings}>
            {
              renderSlider([
                {src: "/portfolio/wordpress/1.jpg", title: "The Bavaria"},
                {src: "/portfolio/wordpress/2.jpg", title: "Caldo and Merci"},
                {src: "/portfolio/wordpress/3.jpg", title: "Riverchain"},
                {src: "/portfolio/wordpress/4.jpg", title: "SW Lifestyle"},
                {src: "/portfolio/wordpress/5.jpg", title: "Tyler Coffee Bar"},
                {src: "/portfolio/wordpress/6.jpg", title: "Incomm Marketing"},
                {src: "/portfolio/wordpress/7.jpg", title: "Six Seasons"},
                {src: "/portfolio/wordpress/8.jpg", title: "3493 Market"},
                {src: "/portfolio/wordpress/9.jpg", title: "Tiktok Hub"},
                {src: "/portfolio/wordpress/10.jpg", title: "WenlynOng"},
                {src: "/portfolio/wordpress/11.jpg", title: "PropertyLuxe"},
                {src: "/portfolio/wordpress/12.jpg", title: "CO Health Care"},
                {src: "/portfolio/wordpress/13.jpg", title: "NewFi"},

              ])
            }
          </Slider>
          <div className='d-flex gap-2 flex-column my-5 px-o px-lg-5'>
            <p><strong>Project Type: </strong>WordPress Websites</p>
            <div className='d-flex align-items-center mb-3'>
                <div className='d-flex gap-2 flex-wrap'>
                {getBadge("CSS")}
                {getBadge("PHP")}
                {getBadge("JavaScript")}
                </div>
            </div>
            <p><strong>Project Details: </strong>Design professional and E-Commerce websites for the clients to showcase their business online.
              <ol>
                <li>Develop professional E-Commerce websites for clients to present their businesses online.</li>
                <li>Ensure responsive design of the user interface (UI).</li>
                <li>Integrate necessary plugins for customer needs like Shipping, Payment, etc.</li>
                <li>Deploy and host websites using Hostinger's platform.</li>
              </ol>
            </p>
            <p><strong>Complexity: {getStars(1)}</strong>
            </p>
          </div>
          </div>
          </Container>
          <div className='my-5 my-lg-0'></div>
      </div>
    </>
  )
}

export default App
