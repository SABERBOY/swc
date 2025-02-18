//// [assignmentCompatWithObjectMembersOptionality2.ts]
// M is optional and S contains no property with the same name as M
// N is optional and T contains no property with the same name as N
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
var Base = function Base() {
    "use strict";
    _class_call_check(this, Base);
};
var Derived = /*#__PURE__*/ function(Base) {
    "use strict";
    _inherits(Derived, Base);
    var _super = _create_super(Derived);
    function Derived() {
        _class_call_check(this, Derived);
        return _super.apply(this, arguments);
    }
    return Derived;
}(Base);
var Derived2 = /*#__PURE__*/ function(Derived) {
    "use strict";
    _inherits(Derived2, Derived);
    var _super = _create_super(Derived2);
    function Derived2() {
        _class_call_check(this, Derived2);
        return _super.apply(this, arguments);
    }
    return Derived2;
}(Derived);
var TargetHasOptional;
(function(TargetHasOptional) {
    var c;
    var a;
    var b = {
        opt: new Base()
    };
    var d;
    var e;
    var f;
    // disallowed by weak type checking
    c = d;
    c = e;
    c = f;
    a = d;
    a = e;
    a = f;
    b = d;
    b = e;
    b = f;
    // ok
    c = a;
    a = c;
    b = a;
    b = c;
})(TargetHasOptional || (TargetHasOptional = {}));
var SourceHasOptional;
(function(SourceHasOptional) {
    var c;
    var a;
    var b = {
        opt: new Base()
    };
    var d;
    var e;
    var f;
    c = d; // error
    c = e; // error
    c = f; // error
    c = a; // ok
    a = d; // error
    a = e; // error
    a = f; // error
    a = c; // ok
    b = d; // error
    b = e; // error
    b = f; // error
    b = a; // ok
    b = c; // ok
})(SourceHasOptional || (SourceHasOptional = {}));
