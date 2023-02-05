//this is footer component
const Footer = () => {
  return (
    <div
      className="card w-100 mt-5  bg-secondary"
      style={{ position: "absolute", bottom: 0 }}
    >
      <div className="card-header">
        <footer className="blockquote-footer text-center text-light">
          <div>&#169; All Rights Reserved</div>
        </footer>
      </div>
    </div>
  );
};
export default Footer;
