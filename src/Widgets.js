import React from "react";
import "./Widgets.css";

function Widget() {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr%2F%3Fref%3Dpage_internal&tabs=timeline&width=340&height=1200&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=4260791540641948"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
        title="widget"
      ></iframe>
    </div>
  );
}

export default Widget;
