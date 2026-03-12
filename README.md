# IP Changer CLI

A Node.js command-line tool that rotates your public IP address through Tor and displays the current address in a clean table format.

## Features

- ASCII banner using `figlet`
- CLI argument parsing with `commander`
- Public IP lookup via `axios` through Tor's SOCKS proxy
- Nicely formatted table output with `cli-table3`
- Interval-based updates

## Installation

This tool requires Tor to be installed and available on your `PATH`. When you run the CLI it will verify the `tor` command exists and will try to start a local Tor process if the SOCKS port (`127.0.0.1:9050`) is not open.

If Tor is not installed the program will exit with an error message – please install Tor for your platform and rerun the command.

To install and run the CLI globally:

```bash
npm install -g .
```

This will install the `ipchanger` binary globally.

> **Note:** passing arguments through `npm start` requires a `--` separator. For example:
>
> ```bash
> npm start -- -s 10
> # or
> npm run start -- -s 10
> ```
>
> Running `npm start -s 10` will not forward `-s` to the script, which results in the help text being shown.

## Usage

```
ipchanger -s 5
```

- `-s <seconds>`: Rotate/fetch the IP every specified number of seconds.
- `-h`: Show help/banner and usage information.

The tool will print a big `IP CHANGER` banner (incl. author/website) and then update a table with the **current public IP and a nicely formatted local timestamp** every N seconds. On each refresh the application will request a new Tor circuit (SIGNAL NEWNYM), so the IP should change if Tor and the control port are properly configured.

After startup you can:

- press **x** then **Enter** to terminate the program gracefully
- type a **number** followed by Enter to adjust the refresh interval on the fly (e.g. enter `5` to switch to 5‑second updates)

The current interval is displayed beneath the table each cycle. (IP rotation depends on Tor’s NEWNYM behavior; sometimes it may take a few seconds to propagate.)

## Project Structure

```
ipchanger/
├── includes/
│   ├── banner.js      # banner, table printing, and UI/help logic
│   ├── ip.js          # Tor connection and public IP fetch
│   ├── utils.js       # argument processing and Tor checks/startup
├── ipchanger.js       # entry point, ties modules together
├── package.json
└── README.md
```

## Notes

- Ensure Tor is running (`tor` service or appropriate package) so the SOCKS proxy is available.
- The script gracefully handles errors when fetching the IP and prints them to the console.

### Tor Control Port

The application uses Tor's control port (default **9051**) to request a new circuit with `SIGNAL NEWNYM` on each refresh. If the port is not reachable you will see warnings such as:

```
warning: could not rotate Tor circuit: connect ECONNREFUSED 127.0.0.1:9051
```

To enable the control port, add to your `torrc` file (e.g. `/etc/tor/torrc` or `%APPDATA%\tor\torrc` on Windows):

```text
ControlPort 9051
CookieAuthentication 1  # or use HashedControlPassword
```

Restart Tor after editing. Without control port access the CLI will still show your IP but cannot force a change – you must manually restart Tor or wait for its own rotation schedule.
