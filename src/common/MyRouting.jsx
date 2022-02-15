import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from '../home';
import NotFound from '../404';
import Lifecycle from '../basics/lifecycle';
import ClassesCounter from '../counter/classes/counter';
import HooksCounterV1 from '../counter/hooks/counter-v1';
import HooksCounterV2 from '../counter/hooks/counter-v2';
import HooksCounterV3 from '../counter/hooks/counter-v3';
import HooksCounterV4 from '../counter/hooks/counter-v4';
import HooksCounterV5 from '../counter/hooks/counter-v5';
import Covid from '../data/covid';
import ContactsHooks from '../data/contacts/contact-list/Contacts-hooks';
import ContactsClass from '../data/contacts/contact-list/Contacts-class';
import ContactDetails from '../data/contacts/contact-details/ContactDetails-hooks';
import MapWithPins from '../data/maps/MapWithPins';
import ElectionResult from '../data/election/ElectionResult';
import ContextDrill from '../context/PropDrilling/L1-SimpleState';
import ContextContainment from '../context/Containment/L1-SimpleContainment';
import ContextWith from '../context/ContextSample/L1-SimpleContext';
import WithRef from '../basics/RefSample';
import Step1 from '../best/hooks/Step1';
import Step2 from '../best/hooks/Step2';
import Step3 from '../best/hooks/Step3';
import Step4 from '../best/hooks/Step4';
import Step5 from '../best/hooks/Step5';
import Step6 from '../best/hooks/Step6';
import TodosClassic from '../todos/classic-state/TodosContainer';
import TodosContextHooks from '../todos/context-use-reducer/TodosContainer';
import TodosReduxClassic from '../todos/older-ways/redux/classic/connect/todos';
import TodosReduxHooks from '../todos/older-ways/redux/classic/hooks/todos';
import TodosToolkitClassic from '../todos/older-ways/toolkit/connect/todos';
import ToolkitHooks from '../todos/redux-toolkit/TodosContainer';
import RedditToolkit from '../reddit/toolkit/fetch';
import RedditThunk from '../reddit/toolkit/fetch';
import RedditClassicFetch from '../reddit/classic/fetch';
import RedditClassicThunk from '../reddit/classic/thunk';
import Clock from '../perf/Clock';
// import SignUp from '../security/SignUp';
// import SignIn from '../security/SignIn';
// import Profile from '../security/Profile';
// import PasswordReset from '../security/PasswordReset';
// import SignOff from '../security/SignOff';

import About from '../basics/list';

//const About = React.lazy(() => import('./about'));

export default function MyRouting({ location }) {
  return (
    <>
      {/* <React.Suspense fallback={<h1>Loading...</h1>}   > */}
      <Routes location={location}>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='lifecycle' element={<Lifecycle />} />
          <Route path='counter'>
            <Route path='classes' element={<ClassesCounter init={5} />} />
            <Route path='hooks-v1' element={<HooksCounterV1 init={5} />} />
            <Route path='hooks-v2' element={<HooksCounterV2 init={5} />} />
            <Route path='hooks-v3' element={<HooksCounterV3 init={5} />} />
            <Route path='hooks-v4' element={<HooksCounterV4 init={5} />} />
            <Route path='hooks-v5' element={<HooksCounterV5 init={5} />} />
          </Route>
          <Route path='data'>
            <Route path='covid' element={<Covid />} />
            <Route path='hooks' element={<ContactsHooks />} />
            <Route path='class' element={<ContactsClass />} />
            <Route path='details'>
              <Route index element={<ContactDetails />} />
              <Route path=':id' element={<ContactDetails />} />
            </Route>
            <Route path='map' element={<MapWithPins />} />
            <Route path='election' element={<ElectionResult />} />
          </Route>
          <Route path='todos'>
            <Route path='ClassicState' element={<TodosClassic />} />
            <Route path='ContextHooks' element={<TodosContextHooks />} />
            <Route path='ReduxClassic' element={<TodosReduxClassic />} />
            <Route path='ReduxHooks' element={<TodosReduxHooks />} />
            <Route path='ToolkitClassic' element={<TodosToolkitClassic />} />
            <Route path='ToolkitHooks' element={<ToolkitHooks />} />
          </Route>
          <Route path='reddit'>
            <Route path='toolkitFetch' element={<RedditToolkit />} />
            <Route path='toolkitThunk' element={<RedditThunk />} />
            <Route path='classicFetch' element={<RedditClassicFetch />} />
            <Route path='classicThunk' element={<RedditClassicThunk />} />
          </Route>
          <Route path='/clock' element={<Clock />} />

          <Route path='context'>
            <Route path='PropDrill' element={<ContextDrill />} />
            <Route path='WithContext' element={<ContextWith />} />
            <Route path='containment' element={<ContextContainment />} />
            <Route path='reference' element={<WithRef />} />
          </Route>
          <Route path='best'>
            <Route path='step1' element={<Step1 />} />
            <Route path='step2' element={<Step2 />} />
            <Route path='step3' element={<Step3 />} />
            <Route path='step4' element={<Step4 />} />
            <Route path='step5' element={<Step5 />} />
            <Route path='step6' element={<Step6 />} />
          </Route>
          {/* <Route path='/auth/signup' element={<SignUp/>} />
          <Route path='/auth/signin' element={<SignIn/>} />
          <Route path='/auth/profile' element={<Profile/>} />
          <Route path='/auth/passwordreset' element={<PasswordReset/>} />
          <Route path='/auth/signoff' element={<SignOff/>} /> */}
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      {/* </React.Suspense> */}
    </>
  );
}
