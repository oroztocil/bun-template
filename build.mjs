import { dts } from "@anymud/bun-plugin-dts";

const result = await Bun.build({
    entrypoints: ["./src/index.ts"],
    outdir: "./dist",
    external: ["typescript"],
    plugins: [dts()],
    root: "./src",
    target: "node",
    sourcemap: "external"
});

if (result.success) {
    console.info("Built files:");
    result.outputs.forEach(out => console.info(`${out.path} (${out.kind})`));
} else {
    console.error("Build failed.");
}

if (result.logs?.length) {
    console.info("Logs:");
    console.info(result.length);
}