export var scrollTopToOpacity  = function (state) {
    return state.scrollView.scrollTop/100 > 1 ? 1 : state.scrollView.scrollTop/100
}


