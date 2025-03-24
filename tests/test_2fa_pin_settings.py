from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from appium.webdriver.common.appiumby import AppiumBy
import time

def test_navigate_to_profile(driver):
    profile_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Profile"]')
    profile_button.click()

    profile_title = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Profile"]')
    assert profile_title.is_displayed()
    
def test_navigate_to_settings(driver):
    settings_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Settings"]')
    settings_button.click()
    time.sleep(1)

    settings_title = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Settings"]')
    assert settings_title.is_displayed()

def test_navigate_to_change_pin(driver):
    change_pin_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Change PIN"]')
    change_pin_button.click()
    time.sleep(1)

    change_pin_title = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Pin Settings"]')
    assert change_pin_title.is_displayed()

def test_navigate_to_create_pin(driver):
    create_pin_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Create PIN"]')
    create_pin_button.click()
    time.sleep(1)

    create_pin_title = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Create PIN"]')
    assert create_pin_title.is_displayed()

def test_enter_pin(driver):
    pin = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="1"]')
    for _ in range(4):
        pin.click()
    time.sleep(1)

    confirm_pin = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="1"]')
    for _ in range(4):
        confirm_pin.click()
    time.sleep(1)