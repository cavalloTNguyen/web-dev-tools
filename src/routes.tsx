import { createHashRouter } from "react-router";
import { App } from "./App";
import { ZlibDecoder } from "./screens/ZlibDecoder/ZlibDecoder";
import { PercentChange } from "./screens/PercentChange/PercentChange";

const router = createHashRouter(
  [
    {
      path: "/",
      Component: App,
      children: [
        { path: "/", element: <div>all the fun is in the menu</div> },
        { path: "zlib-decoder", Component: ZlibDecoder },
        { path: "percent-change", Component: PercentChange },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

export default router;
