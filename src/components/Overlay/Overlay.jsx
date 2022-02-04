import Details from "../Details/Details";
import "./Overlay.css";

function Overlay({ forwardedRef, details, handleUpdate }) {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <Details
          handleUpdate={handleUpdate}
          forwardedRef={forwardedRef}
          details={details}
        />
      </div>
    </div>
  );
}

export default Overlay;
