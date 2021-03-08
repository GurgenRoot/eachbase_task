export const Required = value => {
    return value || typeof value === 'number' ? undefined : ' ';
}

export const RequiredValue = value => {
    if (value.trim() === '') {
        return 'Need any Value in Input';
    }
}
export const MaxValueValidate = max => {
    return (value) => {
        if (value.length > max) {
            return `Maximum value length must be ${max} characters or less`;
        }
    }
};
