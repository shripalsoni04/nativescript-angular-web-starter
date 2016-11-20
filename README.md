# Nativescript Angular Web Starter
A simple starter project to create native mobile and web apps with single shared code base using angular and nativescript.

[![YouTube demo](http://ngxp.io/wp-content/product-previews/nativescript-angular-web-starter/nativescript-angular-web-starter.png)](https://youtu.be/NJ1oOEIdXVk "YouTube demo")

Check this [Open Souce Cross Platform Quotes Application](https://github.com/shripalsoni04/ngxp-quotes-app) for reference, which is made with the exact same architecture as this starter project.  

## Prerequisites
1. Globally installed Nativecript  - `npm install -g nativescript`
2. Globally installed Angular CLI - `npm install -g angular-cli`
3. Mac OS to build iOS app.

## Installation
1. `git clone https://github.com/shripalsoni04/nativescript-angular-web-starter --depth=1`
2. `cd nativescript-angular-web-starter`
3. `npm run ngxp-install` 

## Run Web application
`npm start` - This will start the application at http://localhost:4200. 

## Run iOS Application
`npm run start.ios` 

## Run Android Application
`npm run start.android`
  
## Project Folder Structure
**nativescript**

This contains a nativescript project for creating Android/iOS applications.

**tools**

This contains scripts useful during development.

**web**

This contains nothing but a web project created using `angular-cli`.

**x-shared**

All the code/assets which are common to both web and nativescript projects resides here. This folder is symlinked to `nativescript/app/x-shared` and `web/src/x-shared` folder. So changes in `x-shared` folder from any of the three locations will get reflected in other two folders.


## Commands
You can execute any valid command of angular-cli from `web/` folder and any valid command of nativescript-cli from `nativescript/` folder.
For convenince below are the commands which you can execute from root directory.

### Common
| Command                | Description                                                                                                                          |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| npm run ngxp-install   | Installs dependencies of web and nativescript applications. Creates symlink of x-shared folder in both web and nativescript project. |

### Web Application
| Command                | Description                                                                                                                        |
|------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| npm start              | Starts web application at http://localhost:4200                                                                                    |
| npm run start.prod     | Starts web application in production mode. Runs uglification and minification.                                                     |
| npm run start.aot      | Performs AOT for web application templates and starts web application. (Before executing this command refer Point 1 of [Known Issues](https://github.com/shripalsoni04/nativescript-angular-web-starter#known-issues-and-solution))              |
| npm run start.aot.prod | Performs AOT, minification, uglification and starts web application. (Before executing this command refer Point 1 of [Known Issues](https://github.com/shripalsoni04/nativescript-angular-web-starter#known-issues-and-solution))                |
| npm run build          | Builds the web application and copy the built project in web/dist folder.                                                          |
| npm run build.prod     | Builds the web application in production mode and copy the built project in web/dist folder.                                       |
| npm run build.aot      | Performs AOT, build the project and then copy the built project in web/dist folder.                                                |
| npm run build.aot.prod | Performs AOT, prepares production build and then copy the built project in web/dist folder.                                        |
| npm test               | Runs web application and x-shared unit test cases. It will not generate code coverage report.                                      |
| npm run test-cc        | Runs web application and x-shared unit test cases and generates code coverage report.                                              |
                                      

### Nativescript Application
| Command                  | Description                                                                                                                        |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| npm run start.ios        | Runs application on iOS emulator/device                                                                                            |
| npm run start.android    | Runs application on Android emulator/device                                                                                        |
| npm run livesync.ios     | Starts application in livesync mode on iOS emulator/device.                                                                        |
| npm run livesync.android | Starts application in livesync mode on Android emulator/device.       

## Known Issues and Solution
1. For Android/iOS, changes in `x-shared` folder are not being watched and deplyed to device/emulator when using livesync command in watch mode.
  - Currently there is a bug in `nativescript-cli` that the changes in symlinked folder are not being watched. This can be tracked at https://github.com/NativeScript/nativescript-cli/issues/2221. So this may be fixed in next releases but if you want this functionality right now, there is a workaround solution as follows:

  - **Workaround Solution** - Go to the folder where `nativescript` is globally installed. For macOS it is at `/usr/local/lib/node_modules/nativescript/`. From that folder open `lib/services/livesync/livesync-service.js` file and add `follow:true` option in `gaze` function call in  `partialSync` method as follows:

  ```
  LiveSyncService.prototype.partialSync = function (syncWorkingDirectory, onChangedActions) {
        ...
        var gazeWatcher = gaze("**/*", { cwd: syncWorkingDirectory, follow: true }, function (err, watcher) {
            ...
        });
        ...
    };
  ```

2. Angular dependencies at two levels for AOT support
  - Currently we have added angular dependencies in root level package.json and web/package.json. Because, AOT does not work properly when we use path mapping and this issue is reported and can be traked at https://github.com/angular/angular-cli/issues/1732 and PR:https://github.com/angular/angular-cli/pull/2470. Once this issue is resolved we can add path mapping as shown below and remove the angular dependencies from web/package.json, so in case of any version update we just need to change the version at root directory level.

    **web/src/tsconfig.json**
    ```
    "paths": {
        "@angular/*": ["../../node_modules/@angular/*"]
      }
    ```


## FAQ
### How to change package/bundle id for Android/iOS apps?
To change the package/bundle id you need to do changes in below files.

1. `nativescript/package.json`
- Change `id` property of `nativescript` object as follows:

```
"nativescript": {
    "id": "com.domain.yourapp"
}
```

2. Open `nativescript/app/App_Resources/Android/app.gradle` file and change `applicationId` as shown below:

```
android {
  defaultConfig {
    ...
    applicationId = "com.domain.yourapp"
  }
  ...
}
```

### How to change Android and iOS Application Display Name?
**For Android**, open `nativescript/app/App_Resources/Android/values/strings.xml` file and write your app name where `Nativescript Angular Web Starter` is written:

```
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="app_name">Nativescript Angular Web Starter</string>
    <string name="title_activity_kimera">Nativescript Angular Web Starter</string>
</resources>
```

**For iOS**, open `nativescript/app/App_Resources/iOS/info.plist` file and change value of `CFBundleDisplayName` and `CFBundleName` to your app name:

```
<dict>
  ...
  <key>CFBundleDisplayName</key>
	<string>Nativescript Angular Web Starter</string>
  <key>CFBundleName</key>
	<string>NativescriptAngularWebStarter</string>
  ...
</dict>
```

## Attributes
1. Angular framework
2. Nativescript framework
3. nativescript-swiss-army-knife

