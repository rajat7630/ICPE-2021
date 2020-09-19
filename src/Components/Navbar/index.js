import React, { Component } from 'react';
import 'materialize-css';
import { Navbar as Navigation, NavItem, Icon } from "react-materialize";
import MenuIcon from '@material-ui/icons/Menu';
class Navbar extends Component {
    render() {
        return (
            <Navigation className="transparent"
                alignLinks="right"
                brand={<a className="brand-logo" href="#">Logo</a>}
                id="mobile-nav"
                
                menuIcon={<MenuIcon color="secondary"/>}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}>
                <NavItem className="white-text" href="/">HOME</NavItem>
                <NavItem className="white-text" href="/committee">COMMITTEE</NavItem>
                <NavItem className="white-text" href="/keynote">KEYNOTE</NavItem>
                <NavItem className="white-text" href="/authors">FOR AUTHORS</NavItem>
                <NavItem className="white-text" href="/dates">KEY DATES</NavItem>
                <NavItem className="white-text" href="/contactus">CONTACT US</NavItem>
            </Navigation>
        );
    }
}

export default Navbar;