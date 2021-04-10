const VideoComponent = ({ videoUrl }: { videoUrl?: string }) => {
  return (
    <>
      {videoUrl && (
        <iframe
          src={videoUrl}
          title="Beaconinfo video"
          width="100%"
          height="250px"
          allowFullScreen
        />
      )}
    </>
  );
};

export default VideoComponent;
