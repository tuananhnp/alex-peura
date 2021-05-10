//State of Screen width
    const [width, setWidth] = useState(window.innerWidth)

    // Screen width pixels for tablets
    const tabletBreakpoint = 767
    
    // When screen is resized
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

    // Fix instagram window.innerwidth issue
    useEffect(() => {
        if (window.screen.width < window.innerWidth) {
            setWidth(window.screen.width)
        }
    }, [])