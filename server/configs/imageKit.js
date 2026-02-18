import ImageKit from 'imagekit';
import 'dotenv/config';   // ✅ THIS LINE FIXES IT

const imageKit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY || "dummy",
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY || "dummy",
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/dummy"
});

export default imageKit;
