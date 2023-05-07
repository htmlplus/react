import { u as getConfig$1, C as CONFIG_NAMESPACE, s as setConfig$1 } from './index-1d9a2e38.js';

const getConfig = (...parameters) => {
    return getConfig$1(CONFIG_NAMESPACE, ...parameters);
};
const setConfig = (config, override) => {
    setConfig$1(CONFIG_NAMESPACE, config, override);
};

export { getConfig as g, setConfig as s };
