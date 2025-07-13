// config.js

// !!! SECURITY WARNING !!!
// This file contains sensitive credentials and API keys.
// NEVER share this file or commit it to a public repository.
// Make sure to add this file to your .gitignore.

module.exports = {
    // A unique identifier for this server, which will appear in notifications.
    serverIdentifier: 'Pterodactyl-Server-01',

    // Cron schedule for running the backup.
    // Example: '0 2 * * *' means every day at 2 AM.
    // For debugging (every minute): '*/1 * * * *'
    cronSchedule: '0 2 * * *',

    // Directory and file configuration
    sourceDir: '/var/lib/pterodactyl/volumes', // The source directory to back up
    backupDir: '/tmp/pterodactyl_backups',     // A temporary directory to store the backup archive
    logFile: '/var/log/pterodactyl_backup.log', // The location for the log file

    // List of files or folders to exclude from the backup.
    // Uses 'tar' supported globbing patterns.
    excludeFiles: [
        '*/node_modules',
        '*/.npm',
        '*/.cache',
        '*/package-lock.json',
        '*/session',
        '*/sessions',
        '*.iso',
        '*.zip',
        '*.tar',
        '*.tar.gz',
    ],

    // Rclone configuration for uploading to cloud storage
    rcloneRemote: 'gdrive', // The name of your Rclone remote (see 'rclone listremotes')
    driveFolder: 'Pterodactyl_Backups', // The folder name on the remote destination

    // Notification Configuration
    notifications: {
        discord: {
            enabled: true, // Set to `false` to disable Discord notifications
            webhookUrl: 'https://discord.com/api/webhooks/', // Replace with your Discord Webhook URL
        },
        email: {
            enabled: true, // Set to `false` to disable email notifications
            from: '"Backup Bot" <bot@obscuraworks.com>', // Sender's email address
            recipient: 'someone@gmail.com',        // Recipient's email address
            subjectSuccess: '✅ Pterodactyl Backup Successful',
            subjectFailure: '❌ Pterodactyl Backup Failed',
            smtp: {
                host: 'smtp.resend.com',
                port: 2587,
                secure: false, // `true` for port 465, `false` for other ports (like 587)
                auth: {
                    user: 'resend',     // Your SMTP username
                    pass: 'KEY', // Your SMTP password
                },
            },
        },
    },
    
    // --- NEW FEATURE ---
    // Remote Cleanup Configuration
    remoteCleanup: {
        enabled: true, // Set to `false` to disable deleting old backups from the remote.
        maxAge: '7d',  // Max age of files to keep. Files older than this will be deleted.
                       // Format: '7d' for 7 days, '3d' for 3 days, '4w' for 4 weeks, etc.
    },
};
