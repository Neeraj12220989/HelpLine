import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { LazyLoadImage } from "react-lazy-load-image-component";
// eslint-disable-next-line react-refresh/only-export-components
const App = lazy(() => import("./App.jsx"));
ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense
    fallback={
      <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100dvh'
      }}>
        <LazyLoadImage
          alt=""
          src="https://cdnl.iconscout.com/lottie/premium/thumb/loading-tiles-six-hands-spin-half-5020422-4175311.gif"
          width="130px"
          style={{
            borderRadius: "1.5rem",
          }}
        />
      </div>
    }
  >
    <App />
  </Suspense>
);
