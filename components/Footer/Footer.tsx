import { FooterContainer } from "./FooterStyle";
import { getFullYear } from "../../utilities/getFullYear";

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {getFullYear()} - Nahuel Gómez</p>
    </FooterContainer>
  );
};

export default Footer;
