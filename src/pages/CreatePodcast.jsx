import React from "react";
import Header from "../components/OtherComponents/Header";
import CreatePodcastForm from "../components/StartAPodcast/CreatePodcast";

function CreatePodcast() {
  return (
    <div>
      <Header />
      <div className="input-wrapper">
        <h1>Create A Podcast</h1>
        <CreatePodcastForm />
      </div>
    </div>
  );
}

export default CreatePodcast;