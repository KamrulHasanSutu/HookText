import React from "react";
import './profile.style.css'

import Bio from "./Bio";
import Skill from "./Skills";
import Links from "./Links";


export default class Profile extends React.Component {
    me = {
        name: 'kamrul hasan',
        title: 'full time front-end developer'
    }
    render() {
        return (
            <>
                <div className="container">
                    <Bio name={this.me.name} title={this.me.title} />
                    <Skill />
                    <Links />


                </div>
            </>
        )
    }
}