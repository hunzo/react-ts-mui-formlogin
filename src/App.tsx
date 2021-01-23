import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import InfoPages from './InfoPages';
import LoginPages from './LoginPages';
import LoginImg from './LoginImg'
import LoginStd from './LoginStd';
import LoginSimplePage from './LoginSimplePage';

const App: React.FC = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={LoginPages} />
                    <Route path="/info" component={InfoPages} />
                    <Route path="/loginimg" component={LoginImg} />
                    <Route path="/loginstd" component={LoginStd} />
                    <Route path="/simplelogin" component={LoginSimplePage} />
                    <Route exaxt path="/" render={() => (
                        <p>start page</p>
                    )} />
                </Switch>
            </BrowserRouter>

        </div>
    );
}

export default App;
