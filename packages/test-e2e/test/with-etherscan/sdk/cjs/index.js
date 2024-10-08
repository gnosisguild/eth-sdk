"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContract = getContract;
exports.getMainnetSdk = getMainnetSdk;
const ethers_1 = require("ethers");
const dai_json_1 = __importDefault(require("../../eth-sdk/abis/mainnet/tokens/dai.json"));
const mkr_json_1 = __importDefault(require("../../eth-sdk/abis/mainnet/tokens/mkr.json"));
const uniswap_json_1 = __importDefault(require("../../eth-sdk/abis/mainnet/uniswap.json"));
const withGasFields_json_1 = __importDefault(require("../../eth-sdk/abis/mainnet/withGasFields.json"));
const proxyStandardStorageSlot_json_1 = __importDefault(require("../../eth-sdk/abis/mainnet/proxies/proxyStandardStorageSlot.json"));
const proxyCustomImplementation_json_1 = __importDefault(require("../../eth-sdk/abis/mainnet/proxies/proxyCustomImplementation.json"));
function getContract(address, abi, defaultSignerOrProvider) {
    return new ethers_1.Contract(address, abi, defaultSignerOrProvider);
}
function getMainnetSdk(defaultSignerOrProvider) {
    return {
        "tokens": {
            "dai": getContract('0x6B175474E89094C44Da98b954EedeAC495271d0F', dai_json_1.default, defaultSignerOrProvider),
            "mkr": getContract('0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2', mkr_json_1.default, defaultSignerOrProvider),
        },
        "uniswap": getContract('0x1F98431c8aD98523631AE4a59f267346ea31F984', uniswap_json_1.default, defaultSignerOrProvider),
        "withGasFields": getContract('0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7', withGasFields_json_1.default, defaultSignerOrProvider),
        "proxies": {
            "proxyStandardStorageSlot": getContract('0x1c5a768bdb10750f9007e33243fef5f3e094ad3a', proxyStandardStorageSlot_json_1.default, defaultSignerOrProvider),
            "proxyCustomImplementation": getContract('0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b', proxyCustomImplementation_json_1.default, defaultSignerOrProvider),
        },
    };
}
