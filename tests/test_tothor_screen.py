import time
from appium.webdriver.common.appiumby import AppiumBy
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def test_tothor_navigation(driver):
    tothor_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc=" Tothor "]/android.view.ViewGroup')
    tothor_button.click()

    time.sleep(2)
    tothor_title = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Tothor"]')
    assert tothor_title.is_displayed()

def test_drag_chart(driver):
    wait = WebDriverWait(driver, 10)

    chart = wait.until(EC.presence_of_element_located((
        AppiumBy.XPATH,
        '//android.widget.ScrollView/android.view.ViewGroup/com.horcrux.svg.SvgView[5]/com.horcrux.svg.GroupView/com.horcrux.svg.PathView'
    )))

    location = chart.location
    size = chart.size

    start_x = location['x'] + size['width'] // 2
    start_y = location['y'] + size['height'] // 2
    end_x = start_x - 300
    end_y = start_y

    driver.execute_script("mobile: dragGesture", {
        "startX": start_x,
        "startY": start_y,
        "endX": end_x,
        "endY": end_y,
        "duration": 1500 
    })

    time.sleep(2)

def test_open_action_sheet(driver):
    action_button = driver.find_element(AppiumBy.XPATH, '//android.widget.Button[@content-desc="Start Saving With Tothor"]')
    action_button.click()

    time.sleep(2)
    action_sheet = driver.find_element(AppiumBy.XPATH, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.View[1]')
    assert action_sheet.is_displayed()

def test_drag_slider(driver):
    wait = WebDriverWait(driver, 10)
    slider = wait.until(EC.presence_of_element_located((
        AppiumBy.XPATH,
        '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[3]'
    )))

    location = slider.location
    size = slider.size

    start_x = location['x'] + size['width'] // 2
    start_y = location['y'] + size['height'] // 2
    end_x = start_x - 300
    end_y = start_y

    driver.execute_script("mobile: dragGesture", {
        "startX": start_x,
        "startY": start_y,
        "endX": end_x,
        "endY": end_y,
        "duration": 1500 
    })

    time.sleep(2)

def test_lock_time(driver):
    lock_time_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="3 months"]')
    lock_time_button.click()

    lock_time_title = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Expected interest: 6.7%"]')
    assert lock_time_title.is_displayed()

    lock_time_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="6 months"]')
    lock_time_button.click()

    lock_time_title = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Expected interest: 7.8%"]')
    assert lock_time_title.is_displayed()

    lock_time_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="12 months"]')
    lock_time_button.click()

    lock_time_title = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Expected interest: 8.9%"]')
    assert lock_time_title.is_displayed()

def test_buy_now(driver):
    buy_now_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Buy now!"]')
    buy_now_button.click()

    time.sleep(1)
    buy_now_title = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@resource-id="com.lkyexchange.TothorV2:id/alertTitle"]')
    assert buy_now_title.is_displayed()

    click_ok = driver.find_element(AppiumBy.XPATH, '//android.widget.Button[@resource-id="android:id/button1"]')
    click_ok.click()
