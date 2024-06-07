import { channels } from './channels.js';
import QRCode from 'qrcode';

const generateQR = async channelList => {
    for (let channel of channelList) {
        await QRCode.toFile(`outputImages/${channel.name}.png`, channel.url)
    }
}
generateQR(channels);