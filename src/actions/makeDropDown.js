export const makeDropDown = (start, finish) => {
    let state = Array(finish - start + 1).fill({})
    return state.map((part, index) => ({
      value: (start + index)
    }));
}