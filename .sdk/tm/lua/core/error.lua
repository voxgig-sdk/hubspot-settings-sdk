-- HubspotSettings SDK error

local HubspotSettingsError = {}
HubspotSettingsError.__index = HubspotSettingsError


function HubspotSettingsError.new(code, msg, ctx)
  local self = setmetatable({}, HubspotSettingsError)
  self.is_sdk_error = true
  self.sdk = "HubspotSettings"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function HubspotSettingsError:error()
  return self.msg
end


function HubspotSettingsError:__tostring()
  return self.msg
end


return HubspotSettingsError
