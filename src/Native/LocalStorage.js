var _MarkyMarkMcDonald$elm_architecture_tutorial$Native_LocalStorage = function () {
    var getItem = function (item) {
        var val = localStorage.getItem(item);
        taskOfJust = _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Just(val))
        taskOfNothing = _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
        return !!val ? taskOfJust : taskOfNothing
    };

    var setItem = function (item) {
        return function (val) {
            localStorage.setItem(item, JSON.stringify(val));
            return _elm_lang$core$Task$succeed(_elm_lang$core$Native_Utils.Tuple0);
        };
    };

    var removeItem = function (item) {
        localStorage.removeItem(item);
        return _elm_lang$core$Task$succeed(_elm_lang$core$Native_Utils.Tuple0);
    };

    var clear = function () {
        localStorage.clear();
        return _elm_lang$core$Task$succeed(_elm_lang$core$Native_Utils.Tuple0);
    };

    return {
        getItem: getItem,
        setItem: setItem,
        removeItem: removeItem,
        clear: clear
    };
}();
