import { Helmet } from "react-helmet";
import { BrowserRouter } from "react-router-dom";
import {
  SettingsConsumer,
  SettingsProvider,
} from "./@core/context/settingsContext";
import ThemeComponent from "./@core/theme/ThemeComponent";
import themeConfig from "./configs/themeConfig";
import { AuthProvider } from "./context/AuthContext";
import renderRouter from "./routers/MianRouter";
import { routerData } from "./routers/routerData";
function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>{`${themeConfig.templateName} - Material Design React Admin Template`}</title>
        <meta
          name="description"
          content={`${themeConfig.templateName} – Material Design React Admin Dashboard Template – is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.`}
        />
        <meta
          name="keywords"
          content="Material Design, MUI, Admin Template, React Admin Template"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Helmet>
      <SettingsProvider>
        <SettingsConsumer>
          {({ settings }) => {
            return (
              <ThemeComponent settings={settings}>
                <AuthProvider>{renderRouter(routerData)}</AuthProvider>
              </ThemeComponent>
            );
          }}
        </SettingsConsumer>
      </SettingsProvider>
    </BrowserRouter>
  );
}

export default App;
