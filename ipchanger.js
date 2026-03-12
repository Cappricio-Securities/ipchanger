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

const { banner,showHelp } = require("./includes/banner");
const { start,stopTorService  } = require("./includes/utils");

const chalk = require('chalk');
const args = process.argv.slice(2);

banner();



if (args.includes("-h")) {
    showHelp();
    process.exit();
}

if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (chunk) => {
        for (const ch of chunk) {
            if (ch === 'x' || ch === 'X') {
                stopTorService();
                console.log('Bye! Tor service stopped.');
                process.exit(0);
            }
        }
    });
}
const index = args.indexOf("-s");

if (index !== -1 && args[index + 1]) {
    let sec = parseInt(args[index + 1]);
    if (isNaN(sec)) {
        showHelp();
        process.exit();
    }
    if (sec < 10) {
        console.log(chalk.red("Minimum interval is 10 seconds. Terminating."));
        process.exit(1);
    }
    start(sec);
} else {
    showHelp();
}