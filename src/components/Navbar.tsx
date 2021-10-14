import React, {FC} from 'react';
import {Col, Layout, Menu, Row} from "antd";
import {useHistory} from "react-router-dom";
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Navbar :FC= () => {
    const router = useHistory()
    const {isAuth} = useTypedSelector(state => state.auth)
    return (
        <Layout.Header>
<Row justify="end">
            {isAuth
                ?
                <>
                    <div style={{color: 'white'}}>
                        Max
                    </div>
                    <Menu theme="dark" mode="horizontal" selectable = {false}>
                        <Menu.Item onClick={() => console.log('exit')} key="1">
                            Exit
                        </Menu.Item>
                    </Menu>
                </>
                :<>
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