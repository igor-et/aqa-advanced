// завдання 1

function sayAfterDelay(randomText, delayMs) {
    setTimeout(() => {
        console.log(randomText);
    }, delayMs);
}

sayAfterDelay(`hello`, 2000);

