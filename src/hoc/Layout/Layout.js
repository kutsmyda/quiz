import React, {Component} from 'react';
import styles from './Layout.module.css'
import MenuToggle from "../../Components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../Components/Navigation/Drawer/Drawer";

class Layout extends Component {
    state = {
        menu: false,
    }
    toggleHandlerMenu = () =>{
this.setState({
    menu: !this.state.menu
})
    }

    handleCloseMenu = () => {
        this.setState({
            menu: false,
        })
    }

    render() {
        return (
            <div className={styles.Layout}>

                <Drawer isOpen={this.state.menu} onClose={this.handleCloseMenu}/>

                <MenuToggle
                    onToggle={this.toggleHandlerMenu}
                    isOpen={this.state.menu}
                />

                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;