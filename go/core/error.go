package core

type HubspotSettingsError struct {
	IsHubspotSettingsError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewHubspotSettingsError(code string, msg string, ctx *Context) *HubspotSettingsError {
	return &HubspotSettingsError{
		IsHubspotSettingsError: true,
		Sdk:              "HubspotSettings",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *HubspotSettingsError) Error() string {
	return e.Msg
}
