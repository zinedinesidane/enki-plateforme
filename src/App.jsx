import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profil from "./pages/Profil";
import AppLayout2 from "./ui/AppLayout2";
import Units from "./pages/Units";
import Settings from "./pages/Settings";
import Cels from "./pages/Cels";
import SalleEnseignement from "./pages/SalleEnseignement";
import NouvelleClasse from "./pages/NouvelleClasse";
import Marketplace from "./pages/Marketplace";
import Security from "./Features/Settings/Security";
import ProfilSettings from "./Features/Settings/ProfilSettings";
import PaiementSettings from "./Features/Settings/PaiementSettings";
import ConfientialiteSettings from "./Features/Settings/ConfientialiteSettings";
import APropos from "./Features/Settings/APropos";
import SettingsInformations from "./Features/Settings/SettingsInformations";
import ClientMarketplace from "./Features/Maretkplace/ClientMarketplace";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />

            <Route path="loggedin" element={<Home loggedin={true} />} />
          </Route>
          <Route element={<AppLayout2 />}>
            <Route index element={<Navigate replace to="profil" />} />
            <Route path="profil" element={<Profil />} />
            <Route path="units" element={<Units />} />
            <Route path="cellules" element={<Cels />} />
            <Route path="votre-salle" element={<SalleEnseignement />} />
            <Route path="nouvelle-classe" element={<NouvelleClasse />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="marketplace-2" element={<ClientMarketplace />} />
            <Route element={<Settings />}>
              <Route
                index
                element={
                  <Navigate
                    replace
                    to="/parametres/informations-personnelles"
                  />
                }
              />
              <Route
                path="parametres/informations-personnelles"
                element={<SettingsInformations />}
              />
              <Route path="parametres/sécurité" element={<Security />} />
              <Route path="parametres/profil" element={<ProfilSettings />} />
              <Route
                path="parametres/paiement"
                element={<PaiementSettings />}
              />
              <Route
                path="parametres/données-et-confidentialité"
                element={<ConfientialiteSettings />}
              />
              <Route path="parametres/a-propos" element={<APropos />} />
            </Route>
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
