import { useState } from "react";
import styles from "./ZlibDecoder.module.css";
import zlib from "react-zlib-js";
import { Buffer } from "buffer";

export function ZlibDecoder() {
  const [toEncode, setToEncode] = useState("");
  const [toDecode, setToDecode] = useState("");

  const handleEncode = (uri?: boolean) => {
    // Perform encoding logic here
    const encoded: string = zlib
      .deflateSync(Buffer.from(toEncode))
      .toString("base64");

    const setValue = uri ? encodeURIComponent(encoded) : encoded;

    setToDecode(setValue);
  };

  const handleDecode = () => {
    // Perform decoding logic here
    const uriDecoded = decodeURIComponent(toDecode);
    const decoded: string = zlib
      .inflateSync(Buffer.from(uriDecoded, "base64"))
      .toString();

    setToEncode(decoded);
  };

  return (
    <div className={styles.container}>
      <h2>Zlib Decoder</h2>
      <div>
        encodes the things to zlib base64 format, and decodes the zlib base64
        format back to the original string.
      </div>
      <div className={styles.form}>
        <textarea
          className={styles.encoderInput}
          value={toEncode}
          onChange={(e) => setToEncode(e.target.value)}
        />
        <button onClick={() => handleEncode()}>encode</button>
        <button onClick={() => handleEncode(true)}>encode to uri</button>
        <textarea
          className={styles.encoderInput}
          value={toDecode}
          onChange={(e) => setToDecode(e.target.value)}
        />
        <button onClick={() => handleDecode()}>decode</button>
      </div>
    </div>
  );
}
