# Auto Backup for Pterodactyl Nodes - Google Drive
This is a personal open-source project designed for Pterodactyl users who need scheduled node backups. Written in JavaScript, this script is built for robustness and is ideal for Pterodactyl panel providers looking to securely back up their users' data.

# 👋 Welcome!
Welcome to this project's repository! This document will guide you through everything you need to know about the project, from installation to contributing. Whether you're a beginner just starting or an experienced developer, we hope you'll find all the information you need here.

# ✨ Features
 * Feature A: A Customizeable.
 * Feature B: A Use Node-cron.
 * Feature C: A Robust.
 
# ⚙️ Prerequisites
Before you begin, make sure you have the following software installed:
 * Rclone
 * Git (optional, for contributing)
 * Google drive 1 TB Minimum storage
 * Effort

# 🚀 Getting Started
This section will walk you through setting up the project in your local environment.

# ⬇️ Installation and Usage
 * Clone the Repository:
 ```bash
git clone https://github.com/NyxObscura/ptdl_nodes_autobackup.git
cd ptdl_nodes_autobackup
```
 * Install Dependencies:
```bash
npm i
```
```bash
npm start
```
 * Dont forget customise your config.js file with your secret information

# Use --now ekstension to test it out
```bash
node index.js --now
```

# Use pm2

```bash
npm install -g pm2
```
```bash
pm2 start npm --name autobackup -- start
```
```bash
pm2 save
```

# 📚 Tutorial: Rclone Setup
Rclone is a powerful command-line program for synchronizing files and directories to and from various cloud storage providers.
# 🖥️ Rclone Setup on a VPS (Linux)
 * Install Rclone:
   Open your VPS terminal and run the following command to download and install Rclone:
   ```bash
   curl https://rclone.org/install.sh | sudo bash
   ```
 * Configure Rclone:
   Once the installation is complete, start the interactive configuration process:
   rclone config

   * Choose n to create a new remote.
   * Provide a name for your remote (e.g., gdrive).
   * Select the cloud storage type you want to use (e.g., Google Drive).
   * For client_id and client_secret, you can leave them blank and press Enter to use Rclone's default values.
   * Choose the appropriate access scope (typically drive for full access).
   * Leave root_folder_id and service_account_file blank by pressing Enter.
   * Select N for "Edit advanced config?".
   * Select Y for "Use auto config?". Rclone will attempt to open a browser on your local machine for authentication. If you're running this on a headless VPS (without a GUI), see the note below.
   * After authorization in the browser, return to the terminal.
   * Configure as a Team Drive if necessary; otherwise, select N.
   * Review the summary and select y to save the configuration.
   * Select q to quit the configuration menu.
   Note for Headless VPS: If you cannot use "auto config," select N. Rclone will provide an rclone authorize command to run on a machine with a browser. Run that command, authorize, and copy the verification token back to your VPS terminal.
 * Verify Installation:
   You can list directories in your remote to ensure everything is working:
   ```bash
   rclone lsd your_remote_name:
   ```
   Example:
   ```bash
   rclone lsd gdrive:
   ```
# 💻 Rclone Setup on Windows
 * Download Rclone:
   Visit the Rclone download page and download the zip file for Windows (Intel/AMD - 64 Bit).
 * Extract Files:
   Extract the rclone.exe file from the downloaded zip archive. You can place it in any directory. For ease of access, you might consider adding it to your system's PATH.
 * Open Command Prompt or PowerShell:
   Open your preferred terminal in Windows.
 * Run Configuration:
   Navigate to the directory where you extracted rclone.exe and run the configuration command:
   ```bash
   .\rclone.exe config
   ```
   The process is similar to that on a VPS:
   * n for a new remote.
   * Give it a name (e.g., onedrive).
   * Select your storage provider (e.g., Microsoft OneDrive).
   * Follow the prompts for authentication. "Auto config" will automatically open your default browser.
   * Log in to your account and grant the necessary permissions.
   * Return to the terminal, confirm settings, and quit.
 * Verify:
   Just like in Linux, test your connection:
   ```bash
   .\rclone.exe ls your_remote_name:
   ```
   Example:
   ```bash
   .\rclone.exe ls onedrive:
   ```
# 📄 License
This project is licensed under the MIT License. See the LICENSE file for more details.
📞 Contact
 * GitHub: [NyxObscura](https://github.com/NyxObscura)
 * Telegram: [Hit me on telegram](t.me/NyxObscura)
 * WhatsApp: [Personal project?](wa.me/6285183343636)
 * Website: [obscuraworks.com](https://obscuraworks.com)
 * Email: [hello@obscuraworks.com](mailto:obscuraworks.com)
