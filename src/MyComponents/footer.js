import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./footerStyles";
import "./footer.css";

const Footer = () => {
  return (
    <div className="mbox" id="home34">
      <Box>
        <h1
          style={{ color: "#b3e5fc", textAlign: "center", marginTop: "-50px" }}
        >
          MissionED
        </h1>
        <Container>
          <Row>
            <Column>
              <Heading>About Us</Heading>
              <div className="aboutUsCont">
                Affiliated with Atal Incubation Center Goa Institute of
                Management India
                <br />
                <br />
                <br />
                Email: missionediit@gmail.com
              </div>

              {/* <FooterLink href="#">Aim</FooterLink>
              <FooterLink href="#">Vision</FooterLink>
              <FooterLink href="#">Testimonials</FooterLink> */}
            </Column>
            <Column>
              <Heading>Our Services</Heading>
              <FooterLink href="#">MissionED Store</FooterLink>
              <FooterLink href="#">MissionED Classes</FooterLink>
              <FooterLink href="#">MissionED Classes(for school)</FooterLink>
              <FooterLink href="#">MissionED Referrals</FooterLink>
            </Column>
            <Column>
              <Heading>Important Links</Heading>
              <FooterLink href="https://www.missioned.in/MissionEd_Store_New/index.html">
                {" "}
                Home
              </FooterLink>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Service</FooterLink>
              <FooterLink href="https://www.missioned.in/MissionEd_Store_New/Careers.html">
                Careers
              </FooterLink>
              <FooterLink href="#">Terms of service</FooterLink>
              <FooterLink href="#">Privacy policy</FooterLink>
            </Column>
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="https://www.facebook.com/MissionEd2020">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>Facebook</span>
                </i>
              </FooterLink>
              <FooterLink href="https://www.linkedin.com/company/missioned/?viewAsMember=true">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>Linkedin</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-twitter">
                  <span style={{ marginLeft: "10px" }}>Twitter</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-youtube">
                  <span style={{ marginLeft: "10px" }}>Youtube</span>
                </i>
              </FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    </div>
  );
};
export default Footer;
