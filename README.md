# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-gluestack-app`](https://www.npmjs.com/package/create-gluestack).

## Get started

1. Install dependencies

   ```bash
   bun install
   ```

2. Start the app

   ```bash
    bun run start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Project Structure

```
app/               # Main application code
├── assets/        # Images, fonts, and other static assets
├── pages/         # Expo Router pages
pkgs/              # Modularized code
├── components/    # Reusable UI components
├── constants/     # App constants
├── hooks/         # Custom React hooks
```

## Environment Variables

This project supports environment variables through Expo's configuration system:
### Setup Environment Variables

1. Create environment files for different environments:

   ```
   .env                # Default environment variables
   .env.local          # Local overrides (not committed to repository)
   .env.development    # Development environment variables
   .env.staging        # Staging environment variables
   .env.production     # Production environment variables
   ```

   **Note on precedence**: `.env.local` takes priority over `.env`, and environment-specific files (like `.env.development`) take priority over both when running in that environment.

2. Add your variables to these files (without quotes):

   ```
   # .env.local
   MODE=development
   PROJECT_ID=123123
   EXPO_PUBLIC_API_URL=http://localhost:3000/api
   EXPO_PUBLIC_SECRET_KEY=123123
   EXPO_PUBLIC_SECRET_PAIR=123123
   EXPO_PUBLIC_SITE_URL=http://localhost:3000
   ```

### Access Environment Variables

In your code, access variables using process:

```javascript
const IS_DEV = process.env.MODE === "development";
```

### Secure Environment Variables

For sensitive information (API keys, secrets):

1. Use [EAS Secret](https://docs.expo.dev/build-reference/variables/) for CI/CD:

   ```bash
   eas secret:create --scope project --name GOOGLE_SERVICES_JSON --value YOUR_GOOGLE_SERVICES_JSON
   ```

2. Never commit sensitive environment files (.env*) to your repository
3. Add them to .gitignore:

   ```
   .env*
   !.env.example
   ```

   It's recommended to create an `.env.example` file with dummy values to guide other developers on what environment variables are needed for the project.

## Build and Deployment

This project uses [EAS Build](https://docs.expo.dev/build/introduction/) for building and deploying apps:

- Development: eas build --profile development
- Staging: eas build --profile staging
- Production: eas build --profile production

For updates without rebuilding:

```bash
 eas update --channel [development|staging|production]
```

The project includes GitHub Actions workflows for CI/CD in the .github/workflows directory.

## Technologies

- [Expo](https://expo.dev/) - React Native platform
- [Expo Router](https://docs.expo.dev/router/introduction/) - File-based navigation
- [GlueStack UI](https://gluestack.io/) - Component library
- [NativeWind](https://www.nativewind.dev/) - Tailwind CSS for React Native
- [Bun](https://bun.sh/) - JavaScript runtime & package manager

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.
- [Nativewind](https://www.nativewind.dev/): Nativewind is a utility-first library for building native apps with Tailwind CSS.
- [Gluestack](https://gluestack.io/): Gluestack is a component library for building native apps with Tailwind CSS.

## Join the community

Join our community of developers creating universal apps.

- [gluestack-ui on GitHub](https://github.com/gluestack/gluestack-ui): View our open source UI library and contribute.
- [gluestack community](https://discord.com/channels/1050761204852858900/1336392784168484914): Chat with gluestack users and ask questions.
