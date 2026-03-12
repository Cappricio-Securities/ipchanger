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

const axios = require("axios");
const { SocksProxyAgent } = require("socks-proxy-agent");

const agent = new SocksProxyAgent("socks5h://127.0.0.1:9050");

async function getIP() {

    try {

        const res = await axios.get("https://api.ipify.org?format=json", {
            httpAgent: agent,
            httpsAgent: agent
        });

        return res.data.ip;

    } catch {

        return "Unable to fetch IP";

    }

}

module.exports = getIP;