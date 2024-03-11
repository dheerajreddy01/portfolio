import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div> 
        </div>
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-md"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-md"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="text-md"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Skills"
                className="text-md"
              >
                Skills
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://github.com/dheerajreddy01"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
               <svg 
               xmlns="http://www.w3.org/2000/svg" 
               x="0px" y="0px" 
               width="32" 
               height="32" 
               viewBox="0 0 50 50"
               fill="none"
               >
                 <path 
                    d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"
                    fill="black"
                  />
    
                </svg>
              </a>
            </li>
            
            <li>
              <a
                href="https://www.linkedin.com/in/-dheerajreddy/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 31 31"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.33341 4.65479H26.0001C27.4729 4.65479 28.6667 5.84869 28.6667 7.32145V25.9881C28.6667 27.4609 27.4729 28.6548 26.0001 28.6548H7.33341C5.86065 28.6548 4.66675 27.4609 4.66675 25.9881V7.32145C4.66675 5.84869 5.86065 4.65479 7.33341 4.65479ZM11.3334 24.6548C11.7016 24.6548 12.0001 24.3563 12.0001 23.9881V14.6548C12.0001 14.2867 11.7016 13.9881 11.3334 13.9881H9.33342C8.96523 13.9881 8.66675 14.2867 8.66675 14.6548V23.9881C8.66675 24.3563 8.96523 24.6548 9.33342 24.6548H11.3334ZM10.3334 12.6548C9.22884 12.6548 8.33341 11.7594 8.33341 10.6548C8.33341 9.55021 9.22884 8.65479 10.3334 8.65479C11.438 8.65479 12.3334 9.55021 12.3334 10.6548C12.3334 11.7594 11.438 12.6548 10.3334 12.6548ZM24.0001 24.6548C24.3682 24.6548 24.6667 24.3563 24.6667 23.9881V17.8548C24.7101 15.7359 23.1435 13.9275 21.0401 13.6681C19.5694 13.5338 18.1445 14.2207 17.3334 15.4548V14.6548C17.3334 14.2867 17.0349 13.9881 16.6667 13.9881H14.6667C14.2986 13.9881 14.0001 14.2867 14.0001 14.6548V23.9881C14.0001 24.3563 14.2986 24.6548 14.6667 24.6548H16.6667C17.0349 24.6548 17.3334 24.3563 17.3334 23.9881V18.9881C17.3334 17.8836 18.2289 16.9881 19.3334 16.9881C20.4379 16.9881 21.3334 17.8836 21.3334 18.9881V23.9881C21.3334 24.3563 21.6319 24.6548 22.0001 24.6548H24.0001Z"
                    fill="black"
                  />
                </svg>
              </a>
            </li>


            <li>
              <a
                href="mailto:reddydheeraj94@gmail.com"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" 
                x="0px" 
                y="0px" 
                width="32" 
                height="32" 
                viewBox="0 0 50 50"
                fill="none"
                >
                  <path 
                        d="M 5.5 7 C 3.019531 7 1 9.019531 1 11.5 L 1 11.925781 L 25 29 L 49 11.925781 L 49 11.5 C 49 9.019531 46.980469 7 44.5 7 Z M 6.351563 9 L 43.644531 9 L 25 22 Z M 1 14.027344 L 1 38.5 C 1 40.980469 3.019531 43 5.5 43 L 44.5 43 C 46.980469 43 49 40.980469 49 38.5 L 49 14.027344 L 43 18.296875 L 43 41 L 7 41 L 7 18.296875 Z" 
                        fill="black"/>
                        </svg>
              </a>
            </li>

            <li>
              <a
                href="./Dheerajreddy.pdf"
                download="Dheeraj_Reddy_Resume.pdf"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                   <svg
      width="32"
      height="32"
      style={{
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        imageRendering: "optimizeQuality",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      viewBox="0 0 6.827 6.827"
    >
      <rect width="6.827" height="6.827" rx=".853" ry=".853" style={{ fill: "none" }} />
      <path
        d="M1.573.853h2.502v1.072c0 .117.096.213.214.213H5.36v3.729a.107.107 0 0 1-.107.106h-3.68a.107.107 0 0 1-.106-.106V.96c0-.059.047-.107.106-.107zm.455 3.28h2.77v.16h-2.77v-.16zm0-.55h2.77v.16h-2.77v-.16zm0 1.098h2.77v.16h-2.77v-.16zm.588-1.951a.326.326 0 0 1-.32-.305.578.578 0 0 1-.002-.08c0-.122.038-.2.1-.25a.355.355 0 0 1 .221-.07l.007.001c.08.002.157.02.216.068.062.05.1.13.1.25a2.463 2.463 0 0 1-.003.08.335.335 0 0 1-.096.217.335.335 0 0 1-.22.089h-.003zm-.333-.148a.482.482 0 0 0-.169.163.568.568 0 0 0-.086.303v.009c0 .037.014.071.035.096a.124.124 0 0 0 .094.045h.918c.037 0 .07-.017.094-.045a.148.148 0 0 0 .035-.096v-.009a.568.568 0 0 0-.085-.3.483.483 0 0 0-.168-.165.354.354 0 0 1-.072.1.377.377 0 0 1-.596-.101zm2.006-.55a.107.107 0 0 1-.107-.107V.96a.107.107 0 0 1 .183-.076l.964.964a.107.107 0 0 1-.076.182H4.29zm-.877 1.04h1.374v.16H3.412v-.16zm.495-.38.144.046a.322.322 0 0 1-.11.179.313.313 0 0 1-.195.058.316.316 0 0 1-.24-.1.382.382 0 0 1-.094-.273c0-.122.031-.217.094-.284a.324.324 0 0 1 .25-.101c.089 0 .162.026.218.08a.288.288 0 0 1 .075.134l-.147.035a.154.154 0 0 0-.054-.09.155.155 0 0 0-.1-.033.167.167 0 0 0-.133.059c-.034.039-.05.102-.05.19 0 .092.016.158.05.197.033.04.076.06.13.06.039 0 .073-.013.101-.038a.219.219 0 0 0 .061-.118zm.458.27-.262-.733h.16l.186.543.18-.543h.157l-.263.733h-.158z"
        fill="black"
      />
    </svg>
              </a>
            </li>

            
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">@dheerajreddy</p>
        <div className="footer--social--icon">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Privacy_Policy"
                className="text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Terms_of_Service"
                className="text-sm"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;