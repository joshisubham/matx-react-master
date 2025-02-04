import { lazy } from "react";
import Loadable from "app/components/Loadable";

const AppForm = Loadable(lazy(() => import("./forms/AppForm")));
const AppMenu = Loadable(lazy(() => import("./menu/AppMenu")));
const AppIcon = Loadable(lazy(() => import("./icons/AppIcon")));
const AppProgress = Loadable(lazy(() => import("./AppProgress")));
const AppRadio = Loadable(lazy(() => import("./radio/AppRadio")));
const AppTable = Loadable(lazy(() => import("./tables/AppTable")));
const AppSwitch = Loadable(lazy(() => import("./switch/AppSwitch")));
const AppSlider = Loadable(lazy(() => import("./slider/AppSlider")));
const AppDialog = Loadable(lazy(() => import("./dialog/AppDialog")));
const AppButton = Loadable(lazy(() => import("./buttons/AppButton")));
const AppCheckbox = Loadable(lazy(() => import("./checkbox/AppCheckbox")));
const AppSnackbar = Loadable(lazy(() => import("./snackbar/AppSnackbar")));

const AppRichEditor = Loadable(lazy(() => import("./rich-editor/AppRichEditor")));

const AppAttributes = Loadable(lazy(() => import("./attributes/AppAttributes")));
const AppDictionary = Loadable(lazy(() => import("./dictionary/AppDictionary")));
const AppUsers = Loadable(lazy(() => import("./users/AppUsers")));
const AppRoles = Loadable(lazy(() => import("./roles/AppRoles")));
const AppValueList = Loadable(lazy(() => import("./value-list/AppValueList")));

const AppAutoComplete = Loadable(lazy(() => import("./auto-complete/AppAutoComplete")));
const AppExpansionPanel = Loadable(lazy(() => import("./expansion-panel/AppExpansionPanel")));

const materialRoutes = [
  { path: "/material/table", element: <AppTable /> },
  { path: "/material/form", element: <AppForm /> },
  { path: "/material/buttons", element: <AppButton /> },
  { path: "/material/icons", element: <AppIcon /> },
  { path: "/material/progress", element: <AppProgress /> },
  { path: "/material/menu", element: <AppMenu /> },
  { path: "/material/checkbox", element: <AppCheckbox /> },
  { path: "/material/switch", element: <AppSwitch /> },
  { path: "/material/radio", element: <AppRadio /> },
  { path: "/material/slider", element: <AppSlider /> },
  { path: "/material/autocomplete", element: <AppAutoComplete /> },
  { path: "/material/expansion-panel", element: <AppExpansionPanel /> },
  { path: "/material/dialog", element: <AppDialog /> },
  { path: "/material/snackbar", element: <AppSnackbar /> },
  { path: "/material/rich-editor", element: <AppRichEditor /> },

  { path: "/material/users", element: <AppUsers /> },
  { path: "/material/roles", element: <AppRoles /> },
  { path: "/material/dictionary", element: <AppDictionary /> },
  { path: "/material/attributes", element: <AppAttributes /> },
  { path: "/material/value-list", element: <AppValueList /> }
];

export default materialRoutes;
