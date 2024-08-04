function VideoComponent() {
  return (
    <div>
      <video src="video">
        <source
          src="https://www.youtube.com/watch?v=uVJQI1Uu1t0"
          type="video/mp4"
        />
        {/* <source src="https://download.blender.org/durian/trailer/sintel_trailer-720p.mp4" type="video/mp4"> */}
      </video>
    </div>
  );
}

export default VideoComponent;
