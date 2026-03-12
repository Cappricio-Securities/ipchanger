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

const chalk = require("chalk");
const Table = require("cli-table3");

function banner() {
console.log(chalk.red(`
██╗██████╗      ██████╗██╗  ██╗ █████╗ ███╗   ██╗ ██████╗ ███████╗██████╗ 
██║██╔══██╗    ██╔════╝██║  ██║██╔══██╗████╗  ██║██╔════╝ ██╔════╝██╔══██╗
██║██████╔╝    ██║     ███████║███████║██╔██╗ ██║██║  ███╗█████╗  ██████╔╝
██║██╔═══╝     ██║     ██╔══██║██╔══██║██║╚██╗██║██║   ██║██╔══╝  ██╔══██╗
██║██║         ╚██████╗██║  ██║██║  ██║██║ ╚████║╚██████╔╝███████╗██║  ██║
╚═╝╚═╝          ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝
`));
console.log(chalk.white("                                                 Website: cappriciosec.com\n"));
}

function showStatus(sec) {

    const table = new Table({
        head: [chalk.cyan("Service"), chalk.cyan("Information")],
        colWidths: [25, 40]
    });

    table.push(
        ["Tor Status", chalk.green("Tor service started")],
        ["IP Rotation", `IP change every ${sec} sec`],
        ["Terminate", chalk.red("Press X to terminate")]
    );

    console.log(table.toString());
}

function showHelp() {

const table = new Table({
    head: ["Application", "Command / Steps", "Description"],
    colWidths: [20, 55, 45],
    wordWrap: true
});

table.push(
[
"Chromium",
'chromium --proxy-server="socks5://127.0.0.1:9050"',
"Launch Chromium with SOCKS5 proxy enabled"
],
[
"Chrome",
'chrome --proxy-server="socks5://127.0.0.1:9050"',
"Launch Google Chrome with SOCKS5 proxy"
],
[
"Firefox",
"Settings → Preferences → Network Settings → Manual Proxy → SOCKS Host: 127.0.0.1 Port: 9050 SOCKS v5 → Enable Proxy DNS",
"Configure Firefox via UI to use SOCKS5 proxy"
],
[
"Linux (system)",
'export ALL_PROXY="socks5h://127.0.0.1:9050"',
"Set proxy for terminal apps (session only)"
],
[
"Linux (proxychains)",
'Add socks5 127.0.0.1 9050 to /etc/proxychains.conf → proxychains4 <command>',
"Force any application to use SOCKS5 proxy"
],
[
"macOS",
'sudo networksetup -setsocksfirewallproxy "Wi-Fi" 127.0.0.1 9050',
"Apply SOCKS5 proxy to Wi-Fi network"
],
[
"Windows",
"Use Proxifier / ProxyCap → Add Proxy: 127.0.0.1:9050 (SOCKS5)",
"Windows requires helper tool for global SOCKS proxy"
]
);

console.log(`

Usage:
  ipchanger -s <seconds>   Restart Tor every X seconds
  ipchanger -h             Show help
`);

console.log(table.toString());
}

module.exports = {
  banner,
  showHelp,
  showStatus
};