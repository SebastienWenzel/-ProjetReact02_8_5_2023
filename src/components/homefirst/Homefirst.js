import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BgPink from '../../assets/images/homefirst/hero-bg.png';
import HomeCar from '../../assets/images/homefirst/main-car.png';


const Homefirst = () => {
    
    const [goUp, setGoUp] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: (0, 0), behavior: "smooth" });
      };

    //ramène sur une section de la page
    const bookBtn = () => {
        document
          .querySelector("#booking-section")
          .scrollIntoView({ behavior: "smooth" });
      };
      useEffect(() => {
        const onPageScroll = () => {
          if (window.pageYOffset > 600) {
            setGoUp(true);
          } else {
            setGoUp(false);
          }
        };
        window.addEventListener("scroll", onPageScroll);
    
        return () => {
          window.removeEventListener("scroll", onPageScroll);
        };
      }, []);
    return (
        <>
            <section className='home-section'>
                <div className='container'>
                    <img className='bg-shape' src={BgPink} alt='background-city' />
                    <div className='home-content'>
                        <div className='home-content__text'>
                            <h4>Plan your trip now</h4>
                            <h1>
                                Save <span>big</span> with our car rental
                            </h1>
                            <p>
                                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                                flexible pick-up options and much more.
                            </p>
                        
                                    <div className="home-content__text__btns">
                            <Link
                            onClick={bookBtn}
                            className="home-content__text__btns__book-ride"
                            to="/"
                            >
                            Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
                            </Link>
                            <Link className="home-content__text__btns__learn-more" to="/">
                            Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
                            </Link>
                            </div>
                        </div>
                        <img
                            src={HomeCar}
                            alt="car-img"
                            className="home-content__car-img"
                            />
                    </div>
                </div>
                <div
                    onClick={scrollToTop}
                    className={`scroll-up ${goUp ? "show-scroll" : ""}`}
                    >
                    <i className="fa-solid fa-angle-up"></i>
                </div>
            </section>
        
        </>
    );
};

export default Homefirst;