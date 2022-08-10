export function toCelcious(fahrenheight) {
    return ((fahrenheight - 32) * 5) / 9;
}
export function toFerenheight(celcious) {
    return ((celcious * 9) / 5) + 32
}

export function converter(temperature,toConvert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) { return ''; }

    const output = toConvert(input);
    const rounded = Math.round(output * 1000) / 1000;

    return rounded.toString();
}
