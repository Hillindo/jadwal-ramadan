import { Paper } from '@mantine/core';

const VideoFrame = ({ src }) => {
  return (
    <Paper
      radius="20px"
      style={{ maxWidth: 500, margin: 'auto', overflow: 'hidden'}}
    >
      <video controls style={{ width: '100%', height: 'auto' }}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Paper>
  );
};

export default VideoFrame;