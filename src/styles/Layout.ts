import { Dimensions } from "react-native"


const { height, width } = Dimensions.get('screen');

export default {
    screen_width: width,
    screen_height: height,
    item_width: (width / 2) - 10
}
