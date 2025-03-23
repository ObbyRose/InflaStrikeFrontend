import time
from appium.webdriver.common.appiumby import AppiumBy

def test_navigate_to_profile(driver):
    profile_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Profile"]')
    profile_button.click()

    time.sleep(2)
    profile_title = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Profile"]')
    assert profile_title.is_displayed()
    
def test_navigate_to_settings(driver):
    settings_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Settings"]')
    settings_button.click()

    time.sleep(2)
    settings_title = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Settings"]')
    assert settings_title.is_displayed()

def test_toggle_theme(driver):
    theme_check = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="light"]')
    assert theme_check.is_displayed()

    theme_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Toggle Theme, light"]')
    theme_button.click()
    time.sleep(2)

    theme_check = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="dark"]')
    assert theme_check.is_displayed()

    theme_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Toggle Theme, dark"]')
    theme_button.click()
    time.sleep(2)

    theme_check = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="light"]')
    assert theme_check.is_displayed()