function density(...values) {
    return multipleVariable(values, '--density');
}

function round(...values) {
    return multipleVariable(values, '--roundness');
}

function multipleVariable(values, variable) {
    if (Array.isArray(values)) {
        if(values.length === 0) {
            return '0';
        }

        return values.map(value => multipleVariable(value, variable)).join(' ');
    }

    if (values === '0' || values === 'auto') {
        return values;
    }

    return `calc(${values} * var(${variable}))`;
}

export default {
    density,
    round
}