<?php
declare(strict_types=1);

// HubspotSettings SDK base feature

class HubspotSettingsBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(HubspotSettingsContext $ctx, array $options): void {}
    public function PostConstruct(HubspotSettingsContext $ctx): void {}
    public function PostConstructEntity(HubspotSettingsContext $ctx): void {}
    public function SetData(HubspotSettingsContext $ctx): void {}
    public function GetData(HubspotSettingsContext $ctx): void {}
    public function GetMatch(HubspotSettingsContext $ctx): void {}
    public function SetMatch(HubspotSettingsContext $ctx): void {}
    public function PrePoint(HubspotSettingsContext $ctx): void {}
    public function PreSpec(HubspotSettingsContext $ctx): void {}
    public function PreRequest(HubspotSettingsContext $ctx): void {}
    public function PreResponse(HubspotSettingsContext $ctx): void {}
    public function PreResult(HubspotSettingsContext $ctx): void {}
    public function PreDone(HubspotSettingsContext $ctx): void {}
    public function PreUnexpected(HubspotSettingsContext $ctx): void {}
}
