import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate(); // programmatic navigation
  const [searhParams, setSearchParams] = useSearchParams();
  const lat = searhParams.get("lat");
  const lng = searhParams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h1>
        Position: {lat}, {lng}
      </h1>
      <button onClick={() => setSearchParams({ lat: 34, lng: 54 })}>
        Change pos
      </button>
    </div>
  );
}

export default Map;
