import ImageComponent from "./ImageComponent";
import ListsComponent from "./ListsComponent";
import ParagraphsComponent from "./ParagraphsComponent";
import VideoComponent from "./VideoComponent";

function Main() {
  return (
    <>
      <ImageComponent />
      <VideoComponent />
      {/* <ParagraphsComponent /> почему то не видит его*/}
      <ParagraphsComponent />
      {/* <ListsComponent /> */}
      <ListsComponent />
    </>
  );
}

export default Main;
