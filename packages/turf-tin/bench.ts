import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Benchmark from "benchmark";
import { tin } from "./index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const points = JSON.parse(
  fs.readFileSync(path.join(__dirname, "test", "Points.json"))
);

const suite = new Benchmark.Suite("turf-tin");
suite
  .add("turf-tin", () => tin(points, "elevation"))
  .on("cycle", (event) => console.log(String(event.target)))
  .run();
