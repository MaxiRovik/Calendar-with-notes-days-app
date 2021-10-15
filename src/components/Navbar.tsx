import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useHistory} from "react-router-dom";
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const Navbar :FC= () => {
    const router = useHistory()
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const {logout} = useActions()
    return (
        <Layout.Header>
<Row justify="end">
            {isAuth
                ?
                <>
                    <div style={{color: 'white'}}>
                        {user.username}
                    </div>
                    <Menu theme="dark" mode="horizontal" selectable = {false}>
                        <Menu.Item onClick={() => logout()} key="1">
                            Exit
                        </Menu.Item>
                    </Menu>
                </>
                :
                <>
                    <div style={{color: 'white'}}>
                        ?
                    </div>
                    <Menu theme="dark" mode="horizontal" selectable = {false}>
                        <Menu.Item onClick = {() => router.push(RouteNames.LOGIN)} key="1">
                            Login
                        </Menu.Item>
                    </Menu>
                </>
            }
</Row>
        </Layout.Header>
    );
};

export default Navbar;




// {auth
//     ?
//     <Row>
//         <Col span = {2} offset={16} style = {{color:'white'}}>
//             Max
//         </Col>
//         <Col span = {2} offset={18}>
//             <Menu theme="dark" mode = "horizontal" selectable={false} >
//                 <Menu.Item onClick = {() => console.log('exit')}
//                            key ="1">Exit
//                 </Menu.Item>
//             </Menu>
//         </Col>
//     </Row>
//     :
//     <Row>
//         <Menu theme="dark" mode = "horizontal" selectable={false} >
//             <Menu.Item onClick = {() => router.push(RouteNames.LOGIN)}
//                        key ="1">Login</Menu.Item>
//         </Menu>
//     </Row>  }



// <Menu.Item onClick={() => router.push(RouteNames.LOGIN)}
//            key="1">
//     Login
// </Menu.Item>