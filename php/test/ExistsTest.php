<?php
declare(strict_types=1);

// HubspotSettings SDK exists test

require_once __DIR__ . '/../hubspotsettings_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = HubspotSettingsSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
