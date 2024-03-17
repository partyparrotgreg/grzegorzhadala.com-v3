const glob = require("glob");
const fs = require("fs");
const path = require("path");
const svgr = require("@svgr/core").default;

const ICONS_SOURCE_DIR = "src/assets/logos/clients";
const COMPONENTS_DIR = "src/assets/clients-generated";

const logos = glob.sync(`${ICONS_SOURCE_DIR}/**.svg`);

for (const logo of logos) {
  const svg = fs.readFileSync(logo, "utf8");
  const componentName = path.parse(logo).name;
  svgr
    .transform(
      svg,
      {
        icon: false,
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        template: require("./my-template"),
      },
      { componentName }
    )
    .then((res) =>
      fs.writeFileSync(
        path.join(COMPONENTS_DIR, `${componentName}.tsx`),
        res.code
      )
    );
}
