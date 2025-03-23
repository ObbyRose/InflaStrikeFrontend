def test_app_launches(driver):
    assert driver.is_app_installed("com.anonymous.Client")
