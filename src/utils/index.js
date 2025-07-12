
export const birthdayCountdown = ({ releaseDate, callbackProcess, callbackWhenDone, executingTime = 0, intervalCheckTime = 5 }) => {
    const now = new Date();
    setTimeout(() => {
        console.log("Running interval...");
        let cdInterval = setInterval(() => {
            const today = new Date();
            console.log("Checking release date...");
            callbackProcess && callbackProcess(today, releaseDate);
            console.log(`Is released: ${today} ${releaseDate} : ${today >= releaseDate} ${today.getSeconds()}`);
            if (today >= releaseDate) {
                console.log("Release date reached, clearing interval.");
                cdInterval && clearInterval(cdInterval);
                callbackWhenDone && callbackWhenDone(today, releaseDate);
            }
        }, 1000 * intervalCheckTime); // Check every minute
    }, (executingTime ? executingTime : (60 - now.getSeconds())) * 1000);
}