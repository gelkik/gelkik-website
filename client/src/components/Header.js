import React, {useEffect, useState} from "react";
import {Link} from 'react-scroll'
import EmailForm from './EmailForm'
import AboutMe from './AboutMe'
import Projects from './Projects';
import PageContent from "./PageContent";


const Header = () => {
  
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } 
    else {
      setTheme('light');
    }
    };
  
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  return (
      
    <div className={`App-${theme}`}>
      <header className={`header-${theme}`}>
        <nav 
          className="header-nav"
        >
          <ul>
            <li>
              <Link activeClass="active" smooth spy to="page-content">
                HOME
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="projects">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="contact">
                CONTACT ME
              </Link>
            </li>
          </ul>
        </nav>
        <button onClick={toggleTheme}>{theme === 'light' ? <span>&#9789;</span> : <span>&#9788;</span>}</button>
      </header>
      <section id="page-content">
        <PageContent 
          theme={theme}
        />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <EmailForm 
          theme={theme}
        />
      </section>
    </div>
  );
  }
export default Header;
    

    // const router = useRouter();
    // const { theme, setTheme } = useTheme();
    // const [mounted, setMounted] = useState(false);
  
    // const { name, showBlog, showResume } = data;
  
    // useEffect(() => {
    //   setMounted(true);
    // }, []);
    
    // return (
      //   <section
  //     className="header"
  //     style={{
  //       fontFamily: '-apple-system',
  //       fontSize: "1rem",
  //       fontWeight: 1.5,
  //       lineHeight: 1.5,
  //       color: "#292b2c",
  //       backgroundColor: "#fff",
  //       padding: "0 2em",
  //       textAlign:"right"
  //     }}>
  //     <Tab.Group manual>
  //       <Tab.List defaultIndex={0}>
  //         <Tab>
  //           <Link to="/">About Me</Link>
  //         </Tab>
  //         <Tab>
  //           <Link to="/projects">Projects</Link>
  //         </Tab>
  //         <Tab>
  //           <Link to="/contact">Contact Me</Link>
  //         </Tab>
  //       </Tab.List>
  //     </Tab.Group>
  //   </section>
  // )


// const navItems = ['Home', 'About Me', 'Projects', 'Contact'];
// const drawerWidth = 240;

// function Header() {
// }
// export default Header;





// return (
//   <ul className = 'headers'
//     style={
//       {display: 'flex', listStyle: 'none', justifyContent: 'space-around'}
//     }>
//     <ToggleButtonGroup
//       color="primary"
//       value={alignment}
//       exclusive
//       onChange={handleChange}
//       aria-label="Platform"
//     >
//       <ToggleButton value="home">
//         <li>
//           <Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link>
//         </li>
//       </ToggleButton>

//       <ToggleButton value="about">
//       <li>
//           <Link  to="about" spy={true} smooth={true}>About</Link>
//         </li>
//       </ToggleButton>

//       <ToggleButton value="projects">
//       <li>
//       <Link  to="projects" spy={true} smooth={true}>Projects</Link>
//         </li>
//       </ToggleButton>

//       <ToggleButton value="contact">
//       <li>
//       <Link  to="contact" spy={true} smooth={true}>Contact</Link>
//         </li>
//       </ToggleButton>
//     </ToggleButtonGroup>
//   </ul>
// );