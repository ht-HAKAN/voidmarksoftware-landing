        document.addEventListener('DOMContentLoaded', function() {
            const percentageEl = document.getElementById('percentage');
            let counter = 0;
            const interval = setInterval(() => {
                counter++;
                if (counter <= 50) {
                    percentageEl.textContent = counter + '%';
                } else {
                    clearInterval(interval);
                }
            }, 60);
        });