import { assets } from "../../assets/frontend_assets/assets";
import "./AppDownload.css";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        for better experience download <br /> tomato app
      </p>
      <div className="app-download-platform">
        <img src={assets.play_store} alt="playStore" />
        <img src={assets.app_store} alt="appStore" />
      </div>
    </div>
  );
};

export default AppDownload;
