import time
from appium.webdriver.common.appiumby import AppiumBy

def test_app_launches(driver):
    assert driver.is_app_installed("com.anonymous.Client")
    driver.activate_app("com.anonymous.Client")
    time.sleep(5)

def test_user_info_exists(driver):
    user_balance = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="$0"]')
    assert user_balance.is_displayed()
    user_actions = driver.find_element(AppiumBy.XPATH, '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]')
    assert user_actions.is_displayed()
    
def test_bundle_scroll(driver):
    bundle_scroll = driver.find_element(AppiumBy.XPATH, '//android.widget.ScrollView/android.view.ViewGroup/android.view.View[2]')
    window_size = bundle_scroll.size
    location = bundle_scroll.location
    start_x = location['x'] + window_size['width'] * 0.9
    end_x = location['x'] + window_size['width'] * 0.1
    y = location['y'] + window_size['height'] * 0.5

    for _ in range(3):
        driver.swipe(start_x, y, end_x, y, 800)
        time.sleep(1)

    for _ in range(3):
        driver.swipe(end_x, y, start_x, y, 800)
        time.sleep(1)

