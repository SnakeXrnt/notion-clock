document.addEventListener("DOMContentLoaded", function() {
    function getStatus(time) {
        let status = '';
        const hour = time.getHours();

        if (hour >= 5 && hour < 7) {
            status = 'Dawn';
        } else if (hour >= 7 && hour < 12) {
            status = 'Morning';
        } else if (hour >= 12 && hour < 15) {
            status = 'Mid-day';
        } else if (hour >= 15 && hour < 18) {
            status = 'Afternoon';
        } else if (hour >= 18 && hour < 21) {
            status = 'Evening';
        } else {
            status = 'Mid-night';
        }

        return status;
    }

    function updateTimeAndDate(countryCode, timeElementClass, dateElementClass, statusElementClass) {
        const now = new Date();
        const options = { timeZone: countryCode };
        const timeElement = document.querySelector('.' + timeElementClass);
        const dateElement = document.querySelector('.' + dateElementClass);
        const statusElement = document.querySelector('.' + statusElementClass);
        
        timeElement.textContent = now.toLocaleTimeString('en-US', options);
        dateElement.textContent = now.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        }, options);

        const status = getStatus(now);
        statusElement.textContent = status;
    }

    function updateEverySecond() {
        // Update time, date, and status for Indonesia
        updateTimeAndDate('Asia/Jakarta', 'time-now-ind', 'date-now-ind', 'status-ind');

        // Update time, date, and status for Netherlands
        updateTimeAndDate('Europe/Amsterdam', 'time-now-nl', 'date-now-nl', 'status-nl');
    }

    // Update every second
    setInterval(updateEverySecond, 1000);

    // Initial update
    updateEverySecond();
});
