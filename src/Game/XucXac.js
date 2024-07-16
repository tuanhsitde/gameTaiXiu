import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  handleRenderXucXac = () => {
    return this.props.mangXucXac.map((item, index) => {
      return <img key={index} src={item.hinhAnh} alt="1" className="w-12" />;
    });
  };
  render() {
    return <div className="flex">{this.handleRenderXucXac()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    mangXucXac: state.xucXacReducer.mangXucXac,
  };
};
export default connect(mapStateToProps)(XucXac);
