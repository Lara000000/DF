import React from "react";

import Card from "../Card";
import "./index.css";

const Layout = ({
    mb = 1,
    dt = mb,
    gap = "normal" // none = 0, small= 2rem, normal = 4rem
}) => {
    let className = "layout";
    switch (mb) {
        case 2: className += " layout_2"; break;
        case 3: className += " layout_3"; break;
        case 4: className += " layout_4"; break;
        default: className += "";
    }
    // Для экранов больше 1064px
    switch (dt) {
        case 1: className += " layout_dt_1"; break;
        case 2: className += " layout_dt_2"; break;
        case 3: className += " layout_dt_3"; break;
        case 4: className += " layout_dt_4"; break;
        default: className += "";
    }
    switch (gap) {
        case "none": className += " layout_gap_none"; break;
        case "small": className += " layout_gap_small"; break;
        default: className += "";
    }
    return <div className={className}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
}

export default Layout;