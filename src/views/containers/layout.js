import { h } from "preact";
import Header from "./header";

export default function(props) {
  return (
    <div class="mapPreReq">
      <Header />
      <main class="mapPreReq">
        {props.children}
      </main>
    </div>
  );
}
