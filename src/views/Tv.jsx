import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import TvView from "../components/Tv/TvView";
import useFetchdetails from "../hooks/useFetchdetails";
import Row from "../components/Row/Row";
import TvRoutes from "../services/Tv";
function Tv() {
  const params = useParams();
  const parentRef = useRef(null);
  const data = useFetchdetails({
    id: params.id,
    media_type: "Tv",
  });
  return (
    <div>
      <TvView forwardedRef={parentRef} data={data} />
      {/* Reccomendation */}
      <Row
        title={TvRoutes.idSearch.recommendation.title}
        fetchUrl={
          TvRoutes.idSearch.idpath +
          params.id +
          TvRoutes.idSearch.recommendation.path +
          "1"
        }
        heading={true}
        forwardedRef={parentRef}
      />
    </div>
  );
}

export default Tv;
