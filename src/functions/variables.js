function density(...values) {
    return multiplyVariable(values, '--density');
}

function round(...values) {
    return multiplyVariable(values, '--roundness');
}

function multiplyVariable(values, variable) {
    if (Array.isArray(values)) {
        if(values.length === 0) {
            return '0';
        }

        return values.map(value => multiplyVariable(value, variable)).join(' ');
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