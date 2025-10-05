const track = (eventName, event_category, event_label, value) => {
    gtag('event',
        eventName, {
            event_category,
            event_label,
            value
        }
    );
}

export default track;