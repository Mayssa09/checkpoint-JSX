import React from "react";
import abcd from "./abcd.jpg";
import photo from "./photo.jpg";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1 black", maxWidth: "100vw" }}>
        <h1
          className="title red"
          style={{ color: "green", fontWeight: "bolder", textAlign: "center" }}
        >
          Nature
        </h1>

        <br />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <img
            style={{ width: 500, height: 300 }}
            src={abcd}
            alt="imagefromsrc"
          />

          <img
            style={{ width: 500, height: 300 }}
            src={photo}
            alt="imagefromsrc"
          />

          <img
            style={{ width: 500, height: 300 }}
            src="/abc.jpg"
            alt="imagefrompublic"
          />
        </div>
        <br />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: 100 }}
      >
        <iframe
          width="600"
          height="300"
          src="https://www.youtube.com/embed/fEErySYqItI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default App;
