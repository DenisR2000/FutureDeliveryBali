export const trackEvent = (eventName, eventData) => {
    // Implement your analytics tracking logic here
    console.log(`Tracking event '${eventName}' with data: `, eventData);
};


/*   
    EXAMPLE TO USE

    const handleClick = () => {
        const eventData = {
        action: 'clicked',
        target: 'button',
        };
        trackEvent('button-click', eventData);
    };

*/