import Link from "next/link";
import styled from "styled-components";


export default function Button ({ href, content, className, color, backgroundcolor }) {
    return (
        <StyledLink
            className={`${className} all-around-effect all-around`} 
            href={href}
            color={color}
            backgroundcolor = {backgroundcolor}
        >{content}</StyledLink>
    )
}
const StyledLink = styled(Link).attrs(props => ({href: props.href}))`
    display: flex;
    border-radius: 5px;
    width: fit-content;
    padding: 1em 2em;
    font-size: 1.1rem;
    background-color: ${props => props.backgroundcolor};
    align-items: center;
    justify-content: center;
    color: ${props => props.color};
    transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out;
    font-weight: bold;
    letter-spacing: 1.5px;
    &:hover {
        background-color: ${props => props.color};
        color: ${props => props.backgroundcolor};
        transition: color 0.3s ease-in-out, background-color 0.25s ease-in-out;
    }

    
`