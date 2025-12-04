import React from "react";
import { Route } from "react-router-dom";

export function generateRoutes(pagesList){
    return pagesList
    .filter(p => p.enabled)
    .map(page =>(
        <Route key={page.id} path={page.path} element={page.element}/>
    ));
}