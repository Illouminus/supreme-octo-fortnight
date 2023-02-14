import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {About} from "pages/About";
import {Main} from "pages/Main";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                        (<div className="page-wrapper">element</div>)
                    }
                    />
                ))}
            </Routes>
        </Suspense>
    );
};
