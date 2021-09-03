import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication(
  "@xiji/web",
  () => System.import("@xiji/web"),
  location => location.pathname === '/'
);

registerApplication(
  "@xiji/mingluo",
  () => System.import("@xiji/mingluo"),
  location => location.pathname.startsWith('/mingluo')
);

registerApplication(
  "@xiji/business",
  () => System.import("@xiji/business"),
  location => location.pathname.startsWith('/business')
);

start({
  urlRerouteOnly: true,
});
