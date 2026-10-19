# Integrations

[← Back to contents](../README.md)

All integrations are off or auto-detected by default. Their code sits in the open `bridge/` folder so you can adapt them to custom scripts.

| Integration | Setting | What it does |
| --- | --- | --- |
| Your DMV / licence script | `Config.DMVBridge.enabled` | Accept a licence from your own script in place of the in-game licence. Edit `Framework.HasDMVLicense` in `bridge/server.lua` to read it |
| City hall | `Config.CityHallBridge` | Pilots buy a physical licence card at city hall after training. With `enabled = true` **and** `requirePhysicalLicense = true`, missions also require the card |
| Company fund | `Config.CompanyBridge.mode` | `'internal'` (default), `'society'` (ESX esx_addonaccount — esx_billing invoices land in the fund), `'external'` or `'disabled'` |
| Discord logs | convar `ms_flightsim_webhook` | Sends the script's logs to a Discord channel |
| ATC voice re-recording | convar `ms_flightsim_elevenlabs_key` | Only needed to record your own ATC voice lines. The shipped voice works without it |
| Dispatch | ps-dispatch | Auto-detected |

## Keep secrets in convars

Put the webhook URL and API keys in `server.cfg` with `set`, never in `config.lua` or `config_overrides.lua`: those files are sent to every player's game.

```cfg
set ms_flightsim_webhook "https://discord.com/api/webhooks/..."
set ms_flightsim_elevenlabs_key "your-key"   # only if you re-record ATC voice
```

## Exports for developers

Other resources can call MS_FlightSim through exports. Server-side examples:

```lua
local MSF = exports['MS_FlightSim']

MSF:HasCertificateSync(identifier, 'plane')   -- 'plane' | 'heli' | a specialist rating
MSF:GetPilotRankScore(identifier)
MSF:IsATCOnDuty()
MSF:HasPhysicalLicense(...)                   -- for police scripts checking a licence card
MSF:GetServerWind()
MSF:RaiseGroundRequest(...)
MSF:GroundCrewCount()
```

Client-side: `HUD_AddWarning`, `HUD_RemoveWarning`, `GetTCASContacts`, `IsTCASFailed`.
