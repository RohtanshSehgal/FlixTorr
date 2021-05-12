import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import ReactLoading from "react-loading";
function Loading() {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && (
      <div className="loader-container">
        <div className="loader">
          <ReactLoading type={"cylon"} color={"#ffff"} />
        </div>
      </div>
    )
  );
}

export default Loading;
