import { useEffect } from "react";


function useClickOutside(ref: React.MutableRefObject<HTMLElement | null>, callback: () => void) {

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {

      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default useClickOutside
