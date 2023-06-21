// import { BrowserWindow } from "electron";
// import * as path from "path";
// import * as url from "url";

// export function createWindow(): Electron.BrowserWindow {
//   const window = new BrowserWindow({
//     width: 1100,
//     height: 700,
//     backgroundColor: "#f2f2f2",
//     webPreferences: {
//       nodeIntegration: true,
//       contextIsolation: false,
//       devTools: process.env.NODE_ENV !== "production",
//     },
//   });

//   if (process.env.NODE_ENV === "development") {
//     window.loadURL("http://localhost:4000");
//   } else {
//     window.loadURL(
//       url.format({
//         pathname: path.join(__dirname, "renderer/index.html"),
//         protocol: "file:",
//         slashes: true,
//       })
//     );
//   }

//   window.on("closed", () => {
//     mainWindow = null;
//   });

//   return window;
// }
