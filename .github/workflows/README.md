# GitHub Workflow Secret Variables

These environment variables are required for the GitHub Actions workflows in this repository:

## Required Secrets

- **DISCORD_WEBHOOK_URL**: Discord webhook URL for sending automated notifications about workflow statuses. 
    - Create this in your Discord server under Server Settings > Integrations > Webhooks
    - Add as a repository secret in GitHub repository settings

- **EXPO_TOKEN**: Authentication token for Expo operations (builds, deployments, etc.)
    - Generate this token from your Expo account dashboard
    - Required for any workflows that interact with Expo services
    - Add as a repository secret in GitHub repository settings

To set up these secrets, go to your GitHub repository > Settings > Secrets and variables > Actions > New repository secret

```
 DISCORD_WEBHOOK_URL=
 EXPO_TOKEN=
```