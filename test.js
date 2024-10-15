const scrollLeft = () => {
  const track = carouselTrackRef.current;
  const imageWidth = 210; // 200px + 10px margin (adjust if needed)
  const newPosition = Math.max(scrollPosition - imageWidth * 4, 0); // Move by 4 images
  track.scrollTo({ left: newPosition, behavior: 'smooth' });
  setScrollPosition(newPosition);
};

const scrollRight = () => {
  const track = carouselTrackRef.current;
  const imageWidth = 210; // 200px + 10px margin
  const maxScroll = track.scrollWidth - track.clientWidth;
  const newPosition = Math.min(scrollPosition + imageWidth * 4, maxScroll); // Move by 4 images
  track.scrollTo({ left: newPosition, behavior: 'smooth' });
  setScrollPosition(newPosition);
};
