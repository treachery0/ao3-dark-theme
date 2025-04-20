import oklabFunction from '@csstools/postcss-oklab-function';
import minify from '@csstools/postcss-minify';
import resolveImport from 'postcss-import';
import resolveNested from 'postcss-nested';
import customProperties from 'postcss-custom-properties';
import discardComments from 'postcss-discard-comments';
import discard from 'postcss-discard';
import resolveCalc from 'postcss-calc';

export default {
    plugins: [
        // include other stylesheets
        resolveImport,

        // convert colors to rgb
        oklabFunction({
            preserve: false,
            subFeatures: {
                displayP3: false
            }
        }),

        // replace custom properties
        customProperties({
            preserve: false
        }),

        resolveCalc,

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