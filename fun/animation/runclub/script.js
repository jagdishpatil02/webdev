window.onload = function () {
  const emoji = document.getElementById("emoji");
  const emojis = ["🏃‍♀️", "🏃‍♂️"]; // Array of emojis: girl and boy
  let index = 0; // Start with the girl emoji

  // Function to toggle emoji
  const toggleEmoji = () => {
    emoji.textContent = emojis[index]; // Set the current emoji
    index = (index + 1) % emojis.length; // Alternate between 0 and 1
  };

  // Start the animation
  const interval = setInterval(toggleEmoji, 500); // Change emoji every 500ms

  // Stop the animation after 10 seconds
  setTimeout(() => {
    clearInterval(interval);
    emoji.textContent = "🏃‍♀️"; // Reset to original girl running emoji
  }, 100000000000000);
};
