<?php
declare(strict_types=1);

// HubspotSettings SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class HubspotSettingsMakeContext
{
    public static function call(array $ctxmap, ?HubspotSettingsContext $basectx): HubspotSettingsContext
    {
        return new HubspotSettingsContext($ctxmap, $basectx);
    }
}
