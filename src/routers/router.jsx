// import Auth from "../components/Auth";
import Answers from '../pages/Answers';
// import Contact from "../pages/Contact";
import Learning from '../pages/Learning-paths';
import Quiz from '../pages/Quiz';
import Result from '../pages/Result';
import Test from '../pages/Test';
import Topic from '../pages/Topic';
import Profile from '../pages/Profile';
import DefaultLayout from '../layouts/DefaultLayout';
import Personal from '../pages/Setting/components/Personal';
import Setting from '../pages/Setting';
import Security from '../pages/Setting/components/Security';

import Success from '../pages/Success';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import PublicLayout from '../layouts/PublicLayout';
import Home from '~/pages/Home';

const PrivateRouters = [
    // { path: '/admin', component: Admin, layout: Admin },
];

const PublicRouters = [
    { path: '/', component: Home, layout: PublicLayout },
    { path: '/login', component: Login, layout: PublicLayout },
    { path: '/register', component: Register, layout: PublicLayout },
    { path: '/success/:id', component: Success, layout: PublicLayout },
    { path: 'learning-paths', component: Learning, layout: PublicLayout },
    { path: '/quiz/:slug', component: Quiz, layout: PublicLayout },
    { path: '/topic', component: Topic, layout: PublicLayout },
    { path: '/answers', component: Answers, layout: PublicLayout },
    { path: '/test', component: Test, layout: PublicLayout },
    { path: '/result/:id', component: Result, layout: PublicLayout },
    { path: '/:username', component: Profile, layout: PublicLayout },
    // {path: '/profile', component: Profile, layout:HomeLayout },
    { path: '/setting/personal', component: Personal, layout: Setting },
    { path: '/setting/security', component: Security, layout: Setting },
];

export { PrivateRouters, PublicRouters };
