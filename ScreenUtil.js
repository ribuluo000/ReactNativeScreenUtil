/**
 * Created by nick on 2018/5/4.
 */
/**
 * 屏幕工具类
 * ui设计基准
 * width:375px
 * height:667px

 iPhone 6 = 750px * 1334px
 */
import { Dimensions, PixelRatio, Platform } from "react-native";

export let screenW = Dimensions.get('window').width;
export let screenH = Dimensions.get('window').height;
// export let scale = Dimensions.get('window').scale;
export let fontScale = Dimensions.get('window').fontScale;
// const fontScale = PixelRatio.getFontScale();
export let pixelRatio = PixelRatio.get();
//像素密度
export const DEFAULT_DENSITY = 1;
//px转换成dp
//以iphone6为基准,如果以其他尺寸为基准的话,请修改下面的750和1334为对应尺寸即可.
const w2 = 375 / DEFAULT_DENSITY;
//px转换成dp
const h2 = 667 / DEFAULT_DENSITY;

let scale = Math.min(screenH / h2, screenW / w2);   //获取缩放比例

// iPhoneX
const X_WIDTH = 375;
const X_HEIGHT = 812;


export function setSpText(size) {
    // console.log("size:",size,"--scale:",scale,"--pixelRatio:",pixelRatio,"--fontScale:",fontScale,"--DEFAULT_DENSITY:",DEFAULT_DENSITY);
    let pr = pixelRatio>2.8?2:pixelRatio;
    size = Math.round((size * scale + 0.5) * pr / fontScale / DEFAULT_DENSITY / 2);
    return size;
}

/**
 * 屏幕适配,缩放size
 * @param size Number
 * @returns {Number}
 */
export function scaleSize(size) {
    size = Math.round((size * scale + 0.5) / DEFAULT_DENSITY);
    return size;
}

/**
 * 判断是否为iphoneX
 * @returns {boolean}
 */
export function isIphoneX() {
    return (
        Platform.OS === 'ios' &&
        ((screenH === X_HEIGHT && screenW === X_WIDTH) ||
        (screenH === X_WIDTH && screenW === X_HEIGHT))
    )
}

/**
 * 根据是否是iPhoneX返回不同的样式
 * @param iphoneXStyle
 * @param iosStyle
 * @param androidStyle
 * @returns {*}
 */
export function ifIphoneX(iphoneXStyle, iosStyle = {}, androidStyle) {
    if (isIphoneX()) {
        return iphoneXStyle;
    } else if (Platform.OS === 'ios') {
        return iosStyle
    } else {
        if (androidStyle) {
            return androidStyle;
        }
        return iosStyle
    }
}

export default class ScreenUtil {
    static screenW = screenW;
    static screenH = screenH;
    static pixelRatio = pixelRatio;
    static DEFAULT_DENSITY = DEFAULT_DENSITY;
    static scale = scale;
    static fontScale = fontScale;

    //Number
    static setSpText(size) {
        return setSpText(size);
    }

    //Number
    static scaleSize(size) {
        return scaleSize(size);
    }

}
