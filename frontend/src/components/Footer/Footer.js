import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  FooterRights,
} from "./FooterStyle";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Book</FooterLink>
          </Column>
          <Column>
            <FooterLink href="#">Contact Us</FooterLink>
            <FooterLink href="#">How We Operate</FooterLink>
          </Column>
          <Column>
            <FooterLink href="#">Contact Us</FooterLink>
            <FooterLink href="#">How We Operate</FooterLink>
          </Column>
        </Row>
      </Container>
      <FooterRights>Firecrest © 2022</FooterRights>
    </Box>
  );
};
export default Footer;
