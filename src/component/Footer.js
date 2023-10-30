import styled from 'styled-components';
import { FaUser, FaGraduationCap, FaChalkboardTeacher,FaLinkedin, FaYoutube, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color:  #a35de4 ;
  color: #fff;
  padding: 20px 0;
  position: relative;
`;

const FooterSection = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const FooterHeading = styled.h4`
  font-size: 1.2em;
  border-bottom: 1px solid  #a35de4;
  padding-bottom: 5px;
  display: center;
  align-items: center;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterListItem = styled.li`
  margin: 10px 0;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
`;

const FooterInfo = styled.div`
  margin-top: 20px;
  
`;

const FooterIcon = styled.span`
  margin-right: 5px;
`;
const SocialMediaIcons = styled.div`
  position: absolute;
  bottom: 15px;
  right: 25px;
  display: flex;
  align-items: center;

  & > * {
    margin-left: 15px;
    font-size: 1.5em;
    color: #fff;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #ffc107; /* Change color on hover */
    }
  }
`;
const ContactDetails = styled.div`
  position: absolute;
  bottom: 15px;
  left: 25px;
  display: flex;
  flex-direction: column;
  font-weight :bold;
  align-items: flex-start;

  & > * {
    margin-bottom: 5px;
    font-size: 1em;
  }
`;


const Footer = () => {
  return (
    <FooterContainer>
         <center>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <FooterSection>
           
          <FooterHeading>
            <h2><FooterIcon><FaUser/></FooterIcon>
            Admin</h2>
          </FooterHeading>
          <FooterList>
            <FooterListItem><FooterLink href="/Admin">Login</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/Admin">Faculty Details</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/Admin">Student Details</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/Admin">Syllabus Management</FooterLink></FooterListItem>
          </FooterList>
        </FooterSection>

        <FooterSection>
          <FooterHeading>
          <h2><FooterIcon><FaGraduationCap /></FooterIcon>
           Student</h2>
          </FooterHeading>
          <FooterList>
            <FooterListItem><FooterLink href="/Student">Login</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/Student">Personal Info</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/Student">Check Results</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/Student">View/Download Syllabus</FooterLink></FooterListItem>

          </FooterList>
        </FooterSection>

        <FooterSection>
          <FooterHeading>
            <h2><FooterIcon><FaChalkboardTeacher /></FooterIcon>
            Faculty</h2>
          </FooterHeading>
          <FooterList>
            <FooterListItem><FooterLink href="/Faculty">Login</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/Faculty">Personal Info</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/Faculty">Manage Results</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/Faculty">Manage Syllabus</FooterLink></FooterListItem>
          </FooterList>
         
        </FooterSection>
      </div>
      </center>
      <FooterInfo>
        <center>
        <h4>SNT COLLEGE OF ENGINEERING</h4>
        <h4>DEPARTMENT OF INFORMATION TECHNOLOGY</h4>
        <h4>PERUNDURAI, ERODE - 638053</h4>
        </center>
      </FooterInfo>
      <SocialMediaIcons>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </SocialMediaIcons>
      {/* Contact Details */}
      <ContactDetails>
        <p>Phone: +1 234 567 890</p>
        <p>Email: info@example.com</p>
      </ContactDetails>
    </FooterContainer>
  );
};

export default Footer;
