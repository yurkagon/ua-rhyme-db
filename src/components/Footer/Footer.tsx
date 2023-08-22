const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer id="footer">
      <div className="container text-center">
        <p>Copyright © {currentYear} Yuragon</p>
      </div>
    </footer>
  );
};

export default Footer;
