import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Etudiant from './page_etudiant/etudiant';
import AccueilPrincipal from './page_accueil/accueilPrincipal';
import PageCours from './all_pages/pageCours';
import AboutUS from './common/aboutUs';
import ConditionUtilisation from './common/condition_utilisation';
import Aide from './common/aide';
import Confidentialite from './common/confidentialite';
import Demon_module from './page_accueil/demo';
import Plan_site from './common/plan_site';
import Createur from './page_createur/createur';
import SignIn from './auth/signIn';
import SignUp from './auth/signUp';
import AuthDetails from './auth/authDetail';
import CreationduCours from './page_createur/creationduCours';
import Etape1 from './page_createur/etape1';
import Etape2 from './page_createur/etape2';
import Etape3 from './page_createur/etape3';
import App from './page_createur/etapefinal';



export default function SmartGateRouteur(){


    return(
        <Router>
            <Routes>
                <Route path='/' element={<AccueilPrincipal/>} />
                <Route path='/etudiant' element={<Etudiant/>} />
                <Route path='/cours' element={<PageCours/>} />
                <Route path='/aboutUs' element={<AboutUS/>} />
                <Route path="/condition" element={<ConditionUtilisation/>} />
                <Route path='/confidentialite' element={<Confidentialite/>} />
                <Route path='/aide' element={<Aide/>} />
                <Route path='/demon' element={<Demon_module/>} />
                <Route path='/plan' element={<Plan_site/>} />
                <Route path='/login' element={<SignIn/>} />
                <Route path='/sign' element={<SignUp/>} />
                <Route path='/auth' element={<AuthDetails/>} />
                <Route path='/createur' element={<Createur/>} />
                <Route path='/creer' element={<CreationduCours/>} />
                <Route path='/etape1' element={<Etape1/>} />
                <Route path='/etape2' element={<Etape2/>} />
                <Route path='/etape3' element={<Etape3/>} />
                <Route path='/ajouter' element={<App/>} />
            </Routes>
        </Router>
    )
}