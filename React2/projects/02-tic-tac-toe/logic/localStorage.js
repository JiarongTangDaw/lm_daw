export const setlocalStorage = function (board,turn) {
    window.localStorage.setItem('board',JSON.stringify(board));
    window.localStorage.setItem('turno', turn);
}

export const resetLocalStorage = function () {
    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turno');
}