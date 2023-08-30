export const findByTestAttr = (component: any, attr: String) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}
export const findByClassName = (component: any, className: String) => {
    const wrapper = component.find(`.${className}`);
    return wrapper;
}