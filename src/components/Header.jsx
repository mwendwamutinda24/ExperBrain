import { Link } from 'react-router-dom';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

function Header() {
  const [isOpen, setIsOpen] = useState(false);


  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="navigation">
      <div className="logoss">
        <Link to="/"><h1>EXPERBRAIN</h1></Link>
      </div>

   
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          
          <span  className="x">✕</span>
        ) : (
        
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        )}
      </div>

  
      <nav className={isOpen ? "nav-links open" : "nav-links"}>
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <HashLink to="/#datasets" onClick={handleLinkClick}>Datasets</HashLink>
        <Link to="/research" onClick={handleLinkClick}>Research</Link>
         <Link to="#" onClick={handleLinkClick}>Experts</Link>
          <HashLink to="/research#join-us">Join Us</HashLink>

         <div className="auth">

            <Link to="/sign-in" onClick={handleLinkClick}>Sign In</Link>
            <Link to="/RequestAccess" onClick={handleLinkClick}>Request Access</Link>

         </div>
      
    
      </nav>
    </header>
  );
}

export default Header;
