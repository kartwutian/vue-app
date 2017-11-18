export default {
    UPDATANAVBARSTYLES: (state, data) => {
        state.index.navbarStyles = data
    },
    SAVE_POSITION: (state, data) => {
        state.positions[data.name] = data
    },
    UPDATASONGSHEET: ( state, data) => {
        state.music.songSheet = data
    }
}
