import "./WhatsAppButton.css";
import whatsAppimg from "../../assets/whatsapp.png";

const WhatsAppButton = () => {
  const handleClick = () => {
     const message = "Hi! I want to know more about your projects.";

    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=917070501157&text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <div className="whatsapp-button" onClick={handleClick}>
      <img src={whatsAppimg} alt="WhatsApp" className="whatsapp-icon" />
    </div>
  );
};

export default WhatsAppButton;

