import React from 'react';

import BaseCard from './BaseCard.js';
import Content from './Content.js';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function PrototypeThree() {
    return (
        <div>

            <Router>
                <div>


                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>

                        <Route path="/EmpoweringMotherhood">
                            <Content title="Empowering Motherhood"/>
                        </Route>

                        <Route path="/Motherhood2">
                            <Content title="Motherhood2"/>
                        </Route>

                        {/* The home route of "/" contains links to all the content,
                            which take the form of BaseCard components.
                            When clicked, the BaseCard will take the user to the
                            corresponding content card as denoted via the "to" attribute*/}
                        <Route path="/">
                            <Link to="/EmpoweringMotherhood">
                                <BaseCard title="Empowering Motherhood" image="Empowering_Motherhood.jpg" avatar="Ameerah.png"/>
                            </Link>
                            <Link to="/Motherhood2">
                                <BaseCard title="Motherhood2" image="Motherhood.jpg" avatar="karen.png"/>
                            </Link>
                        </Route>

                    </Switch>
                </div>
            </Router>



        </div>
    )
}

export default PrototypeThree