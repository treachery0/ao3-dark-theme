# AO3 Overengineered Skin

#### AO3 site skin with way too much effort put into it. Fully customizable and mobile friendly.

## Usage

#### Use it as it is

1. Copy the file contents of the latest release and paste it into your site skin.
2. Open AO3 and create a new site skin.
3. In the skin settings, go to "*Advanced > Conditions > What it does*", then set it to "*replace archive skin entirely*".
4. Save skin.

#### Modify the skin

Modify the source files instead of the final CSS. The source files utilize CSS features that site skins cannot use, so you need to compile them.
Make sure you have Node.js 22 installed, then in the project root run:

```
npm install
npm run build
```

This generates the output files in the `dist` folder.
You will need to run `npm run build` again each time you make changes to a source file.

## Features

- Invert foreground and background colors
- Remove most borders and box shadows
- Rounded corners
- Rebalanced paddings and margins

## Disclaimer

Not guaranteed to look perfect on all pages. If you find anything styled incorrectly, let me know.