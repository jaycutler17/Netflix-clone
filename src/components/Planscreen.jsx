import { createSubscribe } from "@firebase/util";
import "../planscreen.css";

function Planscreen({ plan, quality }) {
  return (
    <div className="plansScreen">
      <div className="plans">
        <h5>Netflix {plan}</h5>
        <h6>{quality}</h6>
      </div>

      <button className="subscribe_button">Subscribe</button>
    </div>
  );
}

export default Planscreen;
