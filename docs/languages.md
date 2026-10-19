# Languages and text

[← Back to contents](../README.md)

MS_FlightSim ships in eight languages; you pick one for the whole server, can change any single line of text, and can add a language of your own.

## Choosing the language

Set `Config.Language` on the first lines of `config.lua`:

```lua
Config.Language = 'de'
```

| Code | Language |
| --- | --- |
| `en` | English (default) |
| `cs` | Czech |
| `de` | German |
| `es` | Spanish |
| `fr` | French |
| `pl` | Polish |
| `ro` | Romanian |
| `ru` | Russian |

Restart MS_FlightSim after changing it. The language applies to notifications, menus, the tablet and most of the cockpit display.

Set it in `config.lua` itself, not in `config_overrides.lua`. The text, including aircraft, rank, malfunction and NPC names, is loaded while `config.lua` runs, before the overrides, so an override line comes too late to switch the language. An update replaces `config.lua`, so set the language again after updating.

## Missing text falls back to English

Every language file is checked against English when the resource starts. Any line a translation doesn't have is shown in English. New lines are added to English first, so after an update a few new texts can appear in English until the translation catches up.

A few fixed cockpit labels, such as PFD SCALE in the CFG menu, are always in English.

## Changing a single line

Use `locales/zz_overrides.lua`. Updates never replace it.

1. Rename `locales/zz_overrides.lua.example` to `locales/zz_overrides.lua`. Keep the `zz_` at the start: it makes the file load after every language file, so your text wins.
2. Find the line you want to change. Open the language file, for example `locales/en.lua`, and search for the text you see in game. The name on the left of the `=` is its key.
3. Set the new text for that key and language:

   ```lua
   if Locales and Locales['en'] then
       Locales['en']['shopTitle'] = 'Aircraft Sales'
   end

   if Locales and Locales['de'] then
       Locales['de']['shopTitle'] = 'Flugzeugverkauf'
   end
   ```

4. Restart MS_FlightSim.

Change only the language your server uses; the others are never shown. Keep markers such as `%s`, `%d` and `%.0f` in the same order as the original, because the script fills numbers and names into them.

## Adding a new language

1. Copy `locales/en.lua` and name the copy after your language code, for example `locales/it.lua`.
2. Near the top, change `Locales['en'] = {` to your code: `Locales['it'] = {`.
3. Translate the text on the right of each `=`. Never change the key names on the left, and keep every `%s`, `%d` and similar marker.
4. In `config.lua`, set `Config.Language = 'it'`.
5. Restart MS_FlightSim.

The new file is picked up automatically; you don't need to touch `fxmanifest.lua`. You can translate a part and leave the rest: anything missing shows in English.

Updates don't include your file, so it stays. After an update, compare it with the new `en.lua` and translate any new lines.

## ATC voice is English only

The tower's spoken radio calls and the cockpit's spoken warnings ("Terrain", "Stall", "Traffic") are pre-recorded in English. They stay English whatever `Config.Language` is set to. Players can turn them down or off with the **Callout sounds** and **ATC chatter** sliders in the cockpit CFG menu.
