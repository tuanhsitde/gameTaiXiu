const stateDefault = {
  taiXiu: true, // true === tai / false === xiu
  mangXucXac: [
    { ma: 1, hinhAnh: "./img/1.png" },
    { ma: 1, hinhAnh: "./img/1.png" },
    { ma: 1, hinhAnh: "./img/1.png" },
  ],
  soBanThang: 0,
  tongSoBanChoi: 0,
  tongDiem: 0,
};

const xucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC":
      state.taiXiu = action.taiXiu;
      return { ...state };
    case "PLAY_GAME":
      let mangXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        let randomNum = Math.floor(Math.random() * 6) + 1;
        let newObj = { ma: randomNum, hinhAnh: `./img/${randomNum}.png` };
        mangXucXacNgauNhien.push(newObj);
      }
      state.mangXucXac = mangXucXacNgauNhien;
      state.tongSoBanChoi += 1;

      // xu ly win game
      let tongSoDiem = mangXucXacNgauNhien.reduce((tongDiem, xucXac, index) => {
        return (tongDiem += xucXac.ma);
      }, 0);
      state.tongDiem = tongSoDiem;
      if (
        (tongSoDiem > 11 && state.taiXiu) ||
        (tongSoDiem && state.taiXiu === false)
      ) {
        state.soBanThang += 1;
      }
      return { ...state };
    default:
      return { ...state };
  }
};

export default xucXacReducer;
