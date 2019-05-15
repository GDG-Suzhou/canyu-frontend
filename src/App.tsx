import React from 'react';
import './App.css';
import {observer, inject} from "mobx-react";
import {AppStore} from "./store/AppStore";
import {Icon} from "antd";
import {StoreEnum} from "./store/StoreEnum";

interface InjectedProps {
    appStore: AppStore
}

@inject(StoreEnum.appStore)
@observer
class App extends React.Component {

    get injected() {
        return this.props as InjectedProps;
    }

    render() {
        return <div className="App">
            <Icon type="play-circle" theme="twoTone" />
            {this.injected.appStore.name}
        </div>;
    }
}

export default App;
