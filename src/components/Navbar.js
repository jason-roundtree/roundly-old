import React from 'react';
import { Link, withRouter } from "react-router-dom";
import styled from 'styled-components';
import auth0Client from './Auth';

const List = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0 0 5px;
`
const ListItem = styled.li`
  margin: 5px 10px;
`
function Navbar(props) {
    const signOut = () => {
        auth0Client.signOut();
        props.history.replace('/');
    };
    return (
        <nav role="navigation">
            <List>
                <ListItem>
                    <Link to="/">Home</Link>
                </ListItem>
                <ListItem>
                    <Link to="/about">About</Link>
                </ListItem>
                {/* <ListItem>
                    <Link to="/signup">Signup</Link>
                </ListItem> */}
                {!auth0Client.isAuthenticated() &&
                    <button
                        onClick={auth0Client.signIn}
                    >
                        Sign-in
                    </button>
                }
                {auth0Client.isAuthenticated() &&
                    <div>
                        <ListItem>
                            <Link to="/account">Account</Link>
                        </ListItem>
                        <label>
                            {auth0Client.getProfile().name} 
                        </label>
                        <button
                            onClick={() => signOut()}
                        >
                            Sign-Out
                        </button>
                    </div>
                    
                }
                
            </List>
        </nav>
    );
}

export default withRouter(Navbar);