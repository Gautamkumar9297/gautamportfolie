export const animateCounter = (target, callback, duration = 1500) => {
    let count = 0;
    const increment = Math.ceil(target / (duration / 30));

    const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target;
            clearInterval(interval);
        }
        callback(count);
    }, 30);

    return interval;
};
