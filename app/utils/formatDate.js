export const titleDate = date => {
    let d = new Date(date);
    if (d === 'Invalid Date') {
        return date;
    }

    return `${d.getDate()}${d.getMonth() + 1}${d.getFullYear()}`
};

export const humanDate = date => {
    let d = new Date(date);
    if (!isValidDate(d)) {
        return date;
    }

    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
};

function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
}