import { useSearchParams } from "react-router-dom";

export function useURLPosition() {
  const [searhParams] = useSearchParams();
  const lat = searhParams.get("lat");
  const lng = searhParams.get("lng");

  return [lat, lng];
}
