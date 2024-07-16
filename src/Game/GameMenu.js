import React, { Component } from "react";
import "./GameMenu.css";
import XucXac from "./XucXac";
import ResultGame from "./ResultGame";
import { connect } from "react-redux";
class GameMenu extends Component {
  render() {
    return (
      <div className="game">
        <h1 className="text-center text-8xl mt-20">Game Xuc Xac</h1>
        <div className="game__content w-7/12 m-auto mt-6">
          <div className="flex justify-around">
            <div>
              <button
                className="w-28 h-28 text-2xl text-white xucxac"
                onClick={() => {
                  this.props.datCuoc(true);
                }}
              >
                Tài
              </button>
            </div>
            <div className="item__xucxac">
              <XucXac />
            </div>
            <div>
              <button
                className="w-28 h-28 text-2xl text-white xucxac"
                onClick={() => {
                  this.props.datCuoc(false);
                }}
              >
                Xỉu
              </button>
            </div>
          </div>
        </div>
        <div className="mt-20 m-auto">
          <ResultGame />
          <button
            className="text-2xl text-gray-950 mt-20 border-4 p-5 rounded-2xl play"
            onClick={() => {
              this.props.playGame();
            }}
          >
            Play Game
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      let action = {
        type: "DAT_CUOC",
        taiXiu,
      };
      dispatch(action);
    },
    playGame: () => {
      let action = {
        type: "PLAY_GAME",
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(GameMenu);
