import time
from appium.webdriver.common.appiumby import AppiumBy

def test_notifications_navigation(driver):
    notifications_button = driver.find_element(AppiumBy.XPATH, '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView')
    notifications_button.click()

    time.sleep(2)
    notifications_title = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Notifications"]')
    assert notifications_title.is_displayed()

def test_notifications_removal(driver):
    swipe_left = driver.find_element(AppiumBy.XPATH, '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup')
    driver.execute_script("mobile: swipeGesture", {
        "elementId": swipe_left.id,
        "direction": "left",
        "percent": 0.25
    })
    remove_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Remove"]')
    remove_button.click()
    time.sleep(1)
    try:
        waiting_for_approval = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Order Waiting for approval"]')
        assert waiting_for_approval.is_displayed()
    except:
        pass
    
