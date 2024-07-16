import React, { Component } from "react";
import { connect } from "react-redux";
class ResultGame extends Component {
  render() {
    return (
      <div>
        <div className="info__result">
          <h3 className="text-center text-4xl">
            Bạn chọn:{" "}
            <span className="text-red-400">
              {this.props.taiXiu ? "Tài" : "Xỉu"}
            </span>
          </h3>
        </div>
        <div className="info__result">
          <h3 className="text-center text-4xl">
            Bạn Được:
            <span className="text-red-400">{this.props.tongDiem}</span>
          </h3>
        </div>
        <div className="info__result">
          <h3 className="text-center text-4xl">
            Bàn Thắng:{" "}
            <span className="text-red-400">{this.props.soBanThang}</span>
          </h3>
        </div>
        <div className="info__result">
          <h3 className="text-center text-4xl">
            Tổng số bàn chơi:{" "}
            <span className="text-red-400">{this.props.tongSoBanChoi}</span>
          </h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    soBanThang: state.xucXacReducer.soBanThang,
    tongSoBanChoi: state.xucXacReducer.tongSoBanChoi,
    taiXiu: state.xucXacReducer.taiXiu,
    tongDiem: state.xucXacReducer.tongDiem,
  };
};

export default connect(mapStateToProps)(ResultGame);
