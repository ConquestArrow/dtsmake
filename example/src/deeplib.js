var deep;
(function (deep) {
    var lib;
    (function (lib) {
        var sample;
        (function (sample) {
            sample.NUMBER = 0;
            var Sample = (function () {
                function Sample(a, b) {
                }
                return Sample;
            })();
            sample.Sample = Sample;
        })(sample = lib.sample || (lib.sample = {}));
    })(lib = deep.lib || (deep.lib = {}));
})(deep || (deep = {}));
var deep;
(function (deep) {
    var lib;
    (function (lib) {
        function sampleFunc() {
            return true;
        }
        lib.sampleFunc = sampleFunc;
    })(lib = deep.lib || (deep.lib = {}));
})(deep || (deep = {}));
