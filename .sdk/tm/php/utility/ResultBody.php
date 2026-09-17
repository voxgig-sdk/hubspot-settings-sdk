<?php
declare(strict_types=1);

// HubspotSettings SDK utility: result_body

class HubspotSettingsResultBody
{
    public static function call(HubspotSettingsContext $ctx): ?HubspotSettingsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
