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

def test_face_id(driver):
    face_id_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Add / Change Face ID"]')
    face_id_button.click()
    time.sleep(1)

    face_id_title = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Set Up Face ID"]')
    assert face_id_title.is_displayed()

    enable_face_id = driver.find_element(AppiumBy.XPATH, '//android.widget.Button[@content-desc="Enable Face ID"]')
    enable_face_id.click()
    time.sleep(1)
    no_face_id_found = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@resource-id="android:id/message"]')
    assert no_face_id_found.is_displayed()
    ok_button = driver.find_element(AppiumBy.XPATH, '//android.widget.Button[@resource-id="android:id/button1"]')
    ok_button.click()
    time.sleep(1)


def test_skip_face_id(driver):
    skip_button = driver.find_element(AppiumBy.XPATH, """//android.widget.TextView[@text="Skip, I'll do this later"]""")
    skip_button.click()
    time.sleep(5)

def test_navigate_to_profile2(driver):
    profile_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Profile"]')
    profile_button.click()

    profile_title = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Profile"]')
    assert profile_title.is_displayed()
    time.sleep(1)
    
def test_navigate_to_settings2(driver):
    settings_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Settings"]')
    settings_button.click()
    time.sleep(1)

    settings_title = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Settings"]')
    assert settings_title.is_displayed()

def test_navigate_to_change_pin2(driver):
    change_pin_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Change PIN"]')
    change_pin_button.click()
    time.sleep(1)

    change_pin_title = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Pin Settings"]')
    assert change_pin_title.is_displayed()

def test_touch_id(driver):
    touch_id_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Add / Change Touch ID"]')
    touch_id_button.click()
    time.sleep(1)

    enable_touch_id = driver.find_element(AppiumBy.XPATH, '//android.widget.Button[@content-desc="Enable Touch ID"]')
    enable_touch_id.click()
    time.sleep(1)
    no_touch_id_found = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@resource-id="android:id/message"]')
    assert no_touch_id_found.is_displayed()
    ok_button = driver.find_element(AppiumBy.XPATH, '//android.widget.Button[@resource-id="android:id/button1"]')
    ok_button.click()
    time.sleep(1)

def test_skip_touch_id(driver):
    skip_button = driver.find_element(AppiumBy.XPATH, """//android.widget.TextView[@text="Skip, I'll do this later"]""")
    skip_button.click()
    time.sleep(1)

