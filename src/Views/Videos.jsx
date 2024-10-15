// src/components/VideoSection.jsx
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { Box, Text, Button, Flex, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import { FaVolumeDown, FaVolumeUp, FaFastBackward, FaFastForward } from 'react-icons/fa';

const Videos = () => {
  const [volume, setVolume] = useState(0.5); // Volume from 0 to 1
  const [playbackRate, setPlaybackRate] = useState(1); // Playback speed
  const videoUrl = "https://youtu.be/q6e_b0NERCA?list=RDGMEMgGOgHdkrBSNHvacS9Sp8bgVMq6e_b0NERCA"; // Replace with any YouTube video URL

  return (
    <Box mt={6}>
      <Text fontSize="lg" fontWeight="semibold" mb={4}>
        Video Section
      </Text>
      <ReactPlayer
        url={videoUrl}
        controls={true}
        volume={volume}
        playbackRate={playbackRate}
        width="100%"
        height="400px"
      />
      <Flex mt={4} justify={"space-between"}>
      <Flex align="center" gap={2}>
          <FaVolumeDown />
          <Slider
            aria-label="Volume"
            defaultValue={volume * 100}
            min={0}
            max={100}
            onChange={(val) => setVolume(val / 100)}
            width="200px"
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <FaVolumeUp />
        </Flex>

        <Flex  gap={2}>
        <Button onClick={() => setPlaybackRate(playbackRate <= 0.5 ? 0.5 : playbackRate - 0.25)} aria-label="Decrease Speed">
          <FaFastBackward />  
          <Text ml={2}>- . 25x</Text>
        </Button>
        <Button onClick={() => setPlaybackRate(playbackRate >= 2 ? 2 : playbackRate + 0.25)} aria-label="Increase Speed">
          <FaFastForward /> 
          <Text ml={2}>+ . 25x</Text>
        </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Videos;
