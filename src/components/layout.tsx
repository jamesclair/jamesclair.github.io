import * as React from 'react'
import {
    StyledLayout,
    StyledH1,
    StyledNavLinkItem,
    StyledNavLink,
    StyledNavLinksUl,
} from '../styles/layout'


const Layout = ({ pageTitle, children }) => {
    return (
        <StyledLayout>
            <nav>
                <StyledNavLinksUl>
                    <StyledNavLinkItem><StyledNavLink to="/">Home</StyledNavLink></StyledNavLinkItem>
                    <StyledNavLinkItem><StyledNavLink to="/about">About</StyledNavLink></StyledNavLinkItem>
                </StyledNavLinksUl>
            </nav>
            <main>
                <StyledH1>{pageTitle}</StyledH1>
                {children}
            </main>
        </StyledLayout>
    )
}

export default Layout