import React from "react";
import DevIcon,{iconList} from "devicon-react-svg";

// Local Data
// import data from "../../data/portfolio.json";

const AboutMe = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  // const router = useRouter();
  // const { theme, setTheme } = useTheme();
  // const [mounted, setMounted] = useState(false);

  // const { name, showBlog, showResume } = data;

  // useEffect(() => {
  //   setMounted(true);
  // }, []);
  const devIconStyle = {
      fill: "olive",
      width: "150px",
  };

  console.log(iconList)
  return (
    // <Tab.Group manual>
    //   <Tab.List defaultIndex={0}>
    //     <Tab>About Me</Tab>
    //     <Tab>Experience</Tab>
    //     <Tab>Projects</Tab>
    //     <Tab>Contact Info</Tab>
    //   </Tab.List>
    // </Tab.Group>
    <div className="about-me">
      <h1>
        About Me
      </h1>
        <div className="about-me-text">
          
          Full Stack Developer with knowledge and experience in programming Frontend and Backend technologies
          such as <span style={{ fontSize: '120%', fontWeight: 'bold' }}>Python, Node, JavaScript, and React. </span>  
          I am certified in Amazon Web Services as an Associate Solutions
          Architect as well as Cloud Practitioner. Along with my technical coding skills, I am a graduate of Electrical Engineering,
          completing my Masters Degree in May of 2021, focusing on telecommunications, computer networking and security,
          and power systems.
          <h4>
            I am passionate to use my knowledge and knack for problem-solving in Full Stack Development in the 
            tech industry, and am eager to continuously learn new things!
          </h4>
        </div>
        <div className="about-me-skills">
          <h2>
            Coding Languages and Frameworks
          </h2>
          <div>
            <DevIcon icon="react" style={devIconStyle} viewBox="0 0 32 32"/>
            <DevIcon icon="python" style={devIconStyle} viewBox="0 0 32 32"/>
            <DevIcon icon="javascript" style={devIconStyle} viewBox="0 0 32 32"/>
            <DevIcon icon="html5" style={devIconStyle} viewBox="0 0 32 32"/>
            <div>
            <DevIcon icon="css3" style={devIconStyle} viewBox="0 0 32 32"/>
            <DevIcon icon="nodejs" style={devIconStyle} viewBox="0 0 32 32"/>
            <DevIcon icon="github" style={devIconStyle} viewBox="0 0 32 32"/>
            </div>
            <div>
            <DevIcon icon="django" style={devIconStyle} viewBox="0 0 32 32"/>
            <DevIcon icon="sqllite" style={devIconStyle} viewBox="0 0 32 32"/>
            <DevIcon icon="aws" style={devIconStyle} viewBox="0 0 32 32"/>
            </div>
          </div>
        </div>
    </div>
  )

}

export default AboutMe;