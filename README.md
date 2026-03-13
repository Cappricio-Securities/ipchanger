
# IP CHANGER 🌐🔄

A powerful **Tor-based IP rotation CLI tool** that automatically changes your public IP address at a specified interval and displays it in a clean terminal table.

Built with ❤️ by **[@CappricioSec](https://cappriciosec.com)**

![Main Menu](https://cappriciosec.com/admin_university/university_automation/images/img_69b2cc6993dc10.48077067.png)

> ⚠️ **For educational and privacy testing purposes only.** Do **not** misuse this tool for illegal activities.

---

# 📌 Features

* 🔄 **Automatic IP Rotation** – Change your public IP using the Tor network
* 🧅 **Tor Integration** – Uses Tor SOCKS proxy for anonymous routing
* 📊 **Clean Table Output** – Displays IP and timestamp in a formatted CLI table
* 🖥 **ASCII Banner** – Stylish banner powered by `figlet`
* ⚡ **Live Interval Update** – Change refresh interval without restarting the tool
* 🛑 **Graceful Exit** – Stop the tool anytime using keyboard input

---

# 💻 Tech Stack

**Language**

* Node.js (JavaScript)

**Libraries Used**

* `axios`
* `commander`
* `cli-table3`
* `figlet`
* `chalk`

---

# 🗂️ Project Structure

```
ipchanger/
├── includes/
│   ├── banner.js      # banner, UI and help menu
│   ├── ip.js          # Tor connection and public IP fetching
│   ├── utils.js       # Tor checks and CLI argument handling
│
├── ipchanger.js       # main CLI entry point
├── package.json
└── README.md
```

---

# 🚀 Usage

## 🔧 Installation

First ensure **Tor is installed** on your system.

Download Tor:

* Linux → `sudo apt install tor`
* Mac → `brew install tor`
* Windows → Install from Tor Project website

Then install the CLI globally:

```bash
npm install -g @karthithehacker/ipchanger
```

---

# ▶ Running the Tool

```bash
ipchanger -s 5
```

### Available Options

| Command        | Description                       |
| -------------- | --------------------------------- |
| `-s <seconds>` | Rotate IP every specified seconds |
| `-h`           | Show help menu                    |

---

# 🖥 Example Output

```
┌──(karthithehacker㉿BOOK-UVR5FJ22CV)-[~]
└─$ ipchanger -s 10

██╗██████╗      ██████╗██╗  ██╗ █████╗ ███╗   ██╗ ██████╗ ███████╗██████╗
██║██╔══██╗    ██╔════╝██║  ██║██╔══██╗████╗  ██║██╔════╝ ██╔════╝██╔══██╗
██║██████╔╝    ██║     ███████║███████║██╔██╗ ██║██║  ███╗█████╗  ██████╔╝
██║██╔═══╝     ██║     ██╔══██║██╔══██║██║╚██╗██║██║   ██║██╔══╝  ██╔══██╗
██║██║         ╚██████╗██║  ██║██║  ██║██║ ╚████║╚██████╔╝███████╗██║  ██║
╚═╝╚═╝          ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝

                                                 Website: cappriciosec.com

┌─────────────────────────┬────────────────────────────────────────┐
│ Service                 │ Information                            │
├─────────────────────────┼────────────────────────────────────────┤
│ Tor Status              │ Tor service started                    │
├─────────────────────────┼────────────────────────────────────────┤
│ IP Rotation             │ IP change every 10 sec                 │
├─────────────────────────┼────────────────────────────────────────┤
│ Terminate               │ Press X to terminate                   │
└─────────────────────────┴────────────────────────────────────────┘
[3:23:32 AM] Current IP → 107.189.3.148
[3:23:56 AM] Current IP → 192.42.116.144
[3:24:00 AM] Current IP → 109.70.100.9
[3:24:16 AM] Current IP → 109.70.100.3
[3:24:20 AM] Current IP → 107.189.10.175
[3:24:36 AM] Current IP → 45.134.225.36
[3:24:39 AM] Current IP → 109.70.100.7
[3:24:56 AM] Current IP → 192.159.99.168
```


# 🖥 Help Output

```
┌──(karthithehacker㉿BOOK-UVR5FJ22CV)-[~]
└─$ ipchanger -h

██╗██████╗      ██████╗██╗  ██╗ █████╗ ███╗   ██╗ ██████╗ ███████╗██████╗
██║██╔══██╗    ██╔════╝██║  ██║██╔══██╗████╗  ██║██╔════╝ ██╔════╝██╔══██╗
██║██████╔╝    ██║     ███████║███████║██╔██╗ ██║██║  ███╗█████╗  ██████╔╝
██║██╔═══╝     ██║     ██╔══██║██╔══██║██║╚██╗██║██║   ██║██╔══╝  ██╔══██╗
██║██║         ╚██████╗██║  ██║██║  ██║██║ ╚████║╚██████╔╝███████╗██║  ██║
╚═╝╚═╝          ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝

                                                 Website: cappriciosec.com



Usage:
  ipchanger -s <seconds>   Restart Tor every X seconds
  ipchanger -h             Show help

┌────────────────────┬───────────────────────────────────────────────────────┬─────────────────────────────────────────────┐
│ Application        │ Command / Steps                                       │ Description                                 │
├────────────────────┼───────────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ Chromium           │ chromium --proxy-server="socks5://127.0.0.1:9050"     │ Launch Chromium with SOCKS5 proxy enabled   │
├────────────────────┼───────────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ Chrome             │ chrome --proxy-server="socks5://127.0.0.1:9050"       │ Launch Google Chrome with SOCKS5 proxy      │
├────────────────────┼───────────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ Firefox            │ Settings → Preferences → Network Settings → Manual    │ Configure Firefox via UI to use SOCKS5      │
│                    │ Proxy → SOCKS Host: 127.0.0.1 Port: 9050 SOCKS v5 →   │ proxy                                       │
│                    │ Enable Proxy DNS                                      │                                             │
├────────────────────┼───────────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ Linux (system)     │ export ALL_PROXY="socks5h://127.0.0.1:9050"           │ Set proxy for terminal apps (session only)  │
├────────────────────┼───────────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ Linux              │ Add socks5 127.0.0.1 9050 to /etc/proxychains.conf →  │ Force any application to use SOCKS5 proxy   │
│ (proxychains)      │ proxychains4 <command>                                │                                             │
├────────────────────┼───────────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ macOS              │ sudo networksetup -setsocksfirewallproxy "Wi-Fi"      │ Apply SOCKS5 proxy to Wi-Fi network         │
│                    │ 127.0.0.1 9050                                        │                                             │
├────────────────────┼───────────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ Windows            │ Use Proxifier / ProxyCap → Add Proxy: 127.0.0.1:9050  │ Windows requires helper tool for global     │
│                    │ (SOCKS5)                                              │ SOCKS proxy                                 │
└────────────────────┴───────────────────────────────────────────────────────┴─────────────────────────────────────────────┘
```

---

## Setup


| Connect to              | Command / Steps                                                                                                                   | Description                                                           |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `Chromium`              | `chromium --proxy-server="socks5://127.0.0.1:9050"`                                                                               | **Launch Chromium with SOCKS5 proxy enabled.**                        |
| `Chrome`                | `chrome --proxy-server="socks5://127.0.0.1:9050"`                                                                                 | **Launch Google Chrome with SOCKS5 proxy.**                           |
| `Firefox`               | Settings → Preferences → Network Settings → Manual Proxy → SOCKS Host: `127.0.0.1`, Port: `9050`, SOCKS v5 → Enable **Proxy DNS** | **Configure Firefox via UI to use SOCKS5 proxy.**                     |
| `Linux (system-wide)`   | `export ALL_PROXY="socks5h://127.0.0.1:9050"`                                                                                     | **Set proxy for terminal apps (per session).**                        |
| `Linux (proxychains)`   | Add `socks5 127.0.0.1 9050` to `/etc/proxychains.conf` → Run: `proxychains4 <command>`                                            | **Force any app to use SOCKS5 proxy.**                                |
| `macOS (system-wide)`   | `sudo networksetup -setsocksfirewallproxy "Wi-Fi" 127.0.0.1 9050`                                                                 | **Apply SOCKS5 proxy to Wi-Fi network.**                              |
| `Windows (system-wide)` | Use **Proxifier** / **ProxyCap** → Add Proxy: `127.0.0.1:9050` (SOCKS5) → Apply Rules                                             | **Windows GUI doesn’t support SOCKS globally, requires helper tool.** |


# ⚙️ Runtime Controls

While the program is running you can:

| Action                  | Result                        |
| ----------------------- | ----------------------------- |
| `x` + Enter             | Exit the program              |
| Enter number (ex: `10`) | Change interval to 10 seconds |

---

# 🧅 Tor Requirements

The tool uses the **Tor SOCKS proxy**.

Default Tor port:

```
127.0.0.1:9050
```

If Tor is not running, the tool will attempt to start it automatically.

---

# 🔄 Tor Circuit Rotation

The CLI requests a **new Tor circuit** every refresh using:

```
SIGNAL NEWNYM
```

This requires the **Tor Control Port (9051)**.

Add this to your **torrc** file:

```
ControlPort 9051
CookieAuthentication 1
```

Restart Tor after updating.

---

# ⚠️ Notes

* IP rotation depends on Tor's internal routing behavior.
* Sometimes the IP may not change instantly.

Example warning:

```
warning: could not rotate Tor circuit: connect ECONNREFUSED 127.0.0.1:9051
```

---


## 👨‍💻 Authors

**KarthiTheHacker**  
- 🌐 Website: [karthithehacker.com](https://karthithehacker.com)  
- 🐙 GitHub: [@karthi-the-hacker](https://github.com/karthi-the-hacker)  

---

# ⚠️ Disclaimer

This tool is intended **strictly for educational and privacy testing purposes**.

Do **NOT** use this tool for:

* illegal activities
* bypassing services
* attacking systems without permission

The developer assumes **no responsibility for misuse**.


<p align="center">
<  <em>Built by hackers who care about security — Team Cappricio Securities.</em> /><br/> 
  <a href="https://www.cappriciosec.com">www.cappriciosec.com</a>
</p>

