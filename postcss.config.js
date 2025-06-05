import oklabFunction from '@csstools/postcss-oklab-function';
import minify from '@csstools/postcss-minify';
import resolveColorMix from '@csstools/postcss-color-mix-function';
import resolveImport from 'postcss-import';
import resolveNested from 'postcss-nested';
import customProperties from 'postcss-custom-properties';
import discardComments from 'postcss-discard-comments';
import discard from 'postcss-discard';
import resolveCalc from 'postcss-calc';
import resolveFunctions from 'postcss-functions';
import functions from "./src/functions/variables.js";

export default {
    plugins: [
        // include other stylesheets
        resolveImport,

        // execute functions
        resolveFunctions({
            functions
        }),

        // convert colors to rgb
        oklabFunction({
            preserve: false,
            subFeatures: {
                displayP3: false
            }
        }),

        // replace variables
        customProperties({
            preserve: false
        }),

        // simplify calc statements
        resolveCalc,

        // replace color mix functions
        resolveColorMix({
            preserve: false
        }),

        // remove root selector
        discard({
            rule: ':root'
        }),

        // remove comments
        discardComments,

        // resolve nested selectors
        resolveNested,

        // minify output
        minify
    ]
};