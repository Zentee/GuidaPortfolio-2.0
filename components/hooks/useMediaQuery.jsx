import { useState, useEffect } from "react";

// Custom Hook for media queries
function useMediaQuery(maxWidth) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Construct the media query string using the maxWidth parameter
    const query = `(max-width: ${maxWidth})`;
    const media = window.matchMedia(query);

    // Set the initial value
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Function to handle the change event
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    // Cleanup function to remove the event listener
    return () => media.removeEventListener("change", listener);
  }, [matches, maxWidth]); // Listen to changes in matches and maxWidth

  return matches;
}

export { useMediaQuery };
