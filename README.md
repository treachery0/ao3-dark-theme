# AO3 Overengineered Skin

#### AO3 site skin with way too much effort put into it. Fully customizable and mobile friendly.

## Usage

This skin replaces the default site skin instead of building on top of it, so installation differs from most other skins.

#### Use it as it is

1. Download the latest release and unzip the archive
2. Create a new site skin for each CSS file.
    - Copy and paste file contents.
    - In the skin settings, go to "*Advanced > Conditions > What it does*", then set it to "*replace archive skin entirely*".
    - Still in the advanced settings, select the correct checkbox for *Media*:
      - media-all.css: all
      - media-midsize.css: only screen and (max-width: 62em) 
      - media-narrow.css: only screen and (max-width: 42em)
      - (optional) media-aural.css: speech
      - (optional) media-print.css: print
    - Create skin
3. Create another skin to link parts together.
    - Leave CSS empty, put `* {}` to deal with the error.
    - In the skin settings, go to "*Advanced > Conditions > What it does*", then set it to "*replace archive skin entirely*".
    - Scroll down to parent skins and add all previous skins.
    - Create skin
4. Save and use this last skin.

#### Modify the skin

Modify the source files instead of the final CSS. The source files utilize CSS features that site skins cannot use, so you need to compile them.
Make sure you have Node.js 22 installed, then in the project root run:

```
npm install
npm run build
```

This generates output files in the `dist` folder.
You will need to run `npm run build` again each time you make changes to source files.

## Features

- Invert foreground and background colors
- Remove most borders and box shadows
- Rounded corners
- Rebalanced paddings and margins

## Disclaimer

Early development, styles may be missing or not look as expected on all pages.