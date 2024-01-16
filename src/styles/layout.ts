import styled from "styled-components";
import { Link } from 'gatsby'

const StyledLayout = styled.div`
    margin: auto;
    max-width: 500px;
    font-family: sans-serif;
`

const StyledH1 = styled.h1`
    color: rebeccapurple;
`

const StyledNavLinksUl = styled.ul`
    display: flex;
    list-style: none;
    padding-left: 0;
`

const StyledNavLinkItem = styled.li`
    padding-right: 2rem;
`

const StyledNavLink = styled(Link)`
    color: black;
`


export {
    StyledLayout,
    StyledH1,
    StyledNavLinkItem,
    StyledNavLink,
    StyledNavLinksUl,
}