import styled from 'styled-components';


export const Nav = styled.nav` 
font-size: 18px;
position: sticky;
top: 0;
z-index: 999;
height: 80px;
background-color: rgba(0, 0, 0, 0.5);
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
display: flex;
justify-content: center;
align-items: center;
`;

export const Scaffold=styled.div`

`

export const Row=styled.div`
display:flex;
justify-content: space-between;
align-items:center;

`


export const NavIcon = styled.img`
margin-right: .8rem;
transition: all .5s ease;
height: 6vh;
margin : ${props=>props.maring};
padding: ${props=>props.padding};
&:hover {
    transform: scale(1.5) ;
}
`;

export const MenuIcon = styled.div`
display: none;

@media (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 20%);
    font-size: 4rem;
    cursor: pointer;
}
`;

export const Button = styled.button`
  background: ${props => props.background ?? '#32A8B4'};
  color: ${props => props.color ?? 'white'};
  font-size: 1em;
  margin: 0.5vw;
  padding: 0.25em 1em;
  border:none;
  border-radius: 5px;
`;

export const Menu = styled.ul`
display: flex;
align-items: center;
text-align: center;

@media only screen and (max-width:1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => click ? '0' : '-100%'};
    background-color: rgba(0, 0, 0, 0.9);
    transition: all .5s ease;
}
`;

export const MenuItem = styled.li`
list-style: none;
height: 80px;


@media only screen and (max-width:1000px){
    width: 100%;
    &:hover {
        border: none;
    }
}
`;


export const MenuItemBtn = styled.li`
list-style: none;
@media screen and (max-width:1000px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 120px;
}
`;
