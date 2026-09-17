<?php
declare(strict_types=1);

// HubspotSettings SDK utility: result_headers

class HubspotSettingsResultHeaders
{
    public static function call(HubspotSettingsContext $ctx): ?HubspotSettingsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
