#!/usr/bin/env node

/*
IPChanger - Network Identity & IP Rotation CLI Tool
---------------------------------------------------

Author      : Karthikeyan (https://karthithehacker.com)
GitHub      : https://github.com/karthi-the-hacker
Project     : IPChanger - A command-line utility for managing proxy routing,
              IP rotation, and network identity testing.

License     : Open-source — strictly for educational and ethical purposes ONLY.

Description:
------------
IPChanger is a lightweight CLI tool designed to help security researchers,
developers, and privacy enthusiasts test network routing through proxies
such as SOCKS and Tor. It simplifies switching IP identities and launching
applications with proxy configurations.

Key Features:
-------------
• Easy proxy-based IP routing
• Tor network integration support
• Quick browser launch with proxy settings
• Designed for security testing and research
• Simple CLI interface for fast operations

Note to Users:
--------------
🔐 This tool is intended for educational use, research, and authorized
security testing only.

🚫 Unauthorized use on networks or systems without explicit permission
may violate laws and regulations.

❗ If you modify or redistribute this project, please provide proper
credit to the original author.

Warning to Code Thieves:
------------------------
❌ Removing this header or claiming this project as your own without
credit is unethical and violates open-source principles.

🧠 Real hackers build tools — they don’t steal them.

✅ Respect developers, respect open-source, and give proper credit.
*/

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
