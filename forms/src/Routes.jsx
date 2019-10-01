import React from "react";
import { Switch } from "react-router-dom";
import AppliedRoute from "./AppliedRoute";

import Form from './Test/form';



export default ({ childProps})=>(
    <switch>
        <AppliedRoute path="/" exact component={Form} props={childProps}></AppliedRoute>

    </switch>
);
