
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const inputDir = "originals";
const outputDir = "public/images";

const sizes = [
    { name: "thumb", width: 480 },
    { name: "medium", width: 1200 },
    { name: "large", width: 2000 },
];

const supported = /\.(jpe?g|png|tiff|webp)$/i;

async function processDirectory(dir) {
    const entries = await fs.readdir(dir, {
        withFileTypes: true,
    });

    for (const entry of entries) {
        const inputPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            await processDirectory(inputPath);
            continue;
        }

        if (!supported.test(entry.name)) continue;

        const relativeDir = path.relative(inputDir, dir);
        const baseName = path.parse(entry.name).name;

        for (const size of sizes) {
            const targetDir = path.join(
                outputDir,
                relativeDir,
                size.name
            );

            await fs.mkdir(targetDir, {
                recursive: true,
            });

            const outputPath = path.join(
                targetDir,
                `${baseName}.avif`
            );

            await sharp(inputPath)
                .rotate()
                .resize({
                    width: size.width,
                    withoutEnlargement: true,
                })
                .avif({
                    quality: 82,
                    effort: 5,
                })
                .toFile(outputPath);

            console.log(`Created: ${outputPath}`);
        }
    }
}

await processDirectory(inputDir);

console.log("Image processing completed.");