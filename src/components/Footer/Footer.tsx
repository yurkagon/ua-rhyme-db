const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer id="footer" className="py-8">
      <div className="mx-auto max-w-screen-xl text-center px-4">
        <p>Copyright © {currentYear} Yuragon</p>
      </div>
    </footer>
  );
};

export default Footer;
