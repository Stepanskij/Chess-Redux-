import React from "react";
import block from "bem-cn";
import { Route, Switch } from "react-router-dom";

import Button from "components/Button";
import Checkbox from "components/Checkbox";
import Input from "components/Input";

import "./UiKit.scss";

const b = block("ui-kit");

class UiKit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked1: false,
    };
  }

  handleCheckbox1Click = () => {
    this.setState((preState) => {
      return {
        ...preState,
        isChecked1: !preState.isChecked1,
      };
    });
  };

  render() {
    return (
      <div className={b()}>
        <div className={b("button-container")}>
          <Button>
            <text>ert</text>
            <div>sss</div>
          </Button>
        </div>
        <div className={b("checkbox-container")}>
          <Checkbox
            isChecked={this.state.isChecked1}
            onClick={this.handleCheckbox1Click}
          />
        </div>
        <div className={b("input-container")}>
          <Input type="text" />
        </div>
        <Switch>
          <Route path="/uikit/arg1">
            <div>TEST1</div>
          </Route>
          <Route path="/uikit/arg2">
            <div>TEST2</div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default UiKit;
