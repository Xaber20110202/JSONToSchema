(function (window, lib) {
    
    'use strict';

    var Compiler = lib.Compiler;
    var AST = lib.AST;
    var utils = lib.utils;

    lib.jsonToSchema = function(json) {
        var compiler = new Compiler();
        var ast = new AST();
        ast.build(json);
        compiler.compile(ast.tree);
        return compiler.schema;
    };

})(window, window.lib || (window.lib = {}));

