export function myDebounce(func, delay) {
    let timerId = null;
    return function debounced(...args) {
        clearTimeout(timerId);

        timerId = setTimout(() => {
            func.apply(this, args)
        }, delay);

    }
}