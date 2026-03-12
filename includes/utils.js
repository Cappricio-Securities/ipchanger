const { execSync } = require("child_process");
const { showStatus } = require("./banner");
const chalk = require("chalk");
const getIP = require("./ip");
function restartTor() {

    try {

        execSync("pkill tor", { stdio: "ignore" });

    } catch {}

    try {

        execSync("tor &", { stdio: "ignore" });

    } catch {

        console.log("❌ Failed to start Tor");
        process.exit(1);

    }

}

function showIP(ip) {

    const time = new Date().toLocaleTimeString();

    console.log(
        chalk.cyan(`[${time}]`) +
        " Current IP → " +
        chalk.red(ip)
    );

}

async function start(sec) {
  showStatus(sec);
    restartTor();
    await new Promise(r => setTimeout(r, 6000));

    let ip = null;
    let attempts = 0;
    while (attempts < 3) {
        try {
            ip = await getIP();
            if (ip && typeof ip === 'string' && ip !== 'Unable to fetch IP') break;
        } catch {}
        attempts++;
        if (!ip || ip === 'Unable to fetch IP') {
            await new Promise(r => setTimeout(r, 2000)); // Wait before retry
        }
    }
    showIP(ip || 'Unable to fetch IP');

    setInterval(async () => {
        restartTor();
        await new Promise(r => setTimeout(r, 6000));
        let ip = null;
        let attempts = 0;
        while (attempts < 3) {
            try {
                ip = await getIP();
                if (ip && typeof ip === 'string' && ip !== 'Unable to fetch IP') break;
            } catch {}
            attempts++;
            if (!ip || ip === 'Unable to fetch IP') {
                await new Promise(r => setTimeout(r, 2000));
            }
        }
        showIP(ip || 'Unable to fetch IP');
    }, sec * 1000);
}


function stopTorService() {
    const { exec } = require('child_process');
    exec('pkill tor', () => {});
}
module.exports = {
    restartTor,
    stopTorService,
    start
};
