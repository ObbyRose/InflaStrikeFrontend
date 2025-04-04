import time
from appium.webdriver.common.appiumby import AppiumBy

def test_app_launches(driver):
    assert driver.is_app_installed("com.lkyexchange.TothorV2")
    driver.activate_app("com.lkyexchange.TothorV2")
    time.sleep(5)


def test_navigate_to_markets(driver):
    markets_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Markets"]')
    markets_button.click()

    time.sleep(2)
    markets_title = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Markets"]')
    assert markets_title.is_displayed()



def test_navigate_to_tothor(driver):
    tothor_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc=" Tothor "]')
    tothor_button.click()

    time.sleep(2)
    tothor_title = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Tothor"]')
    assert tothor_title.is_displayed()


def test_navigate_to_investment(driver):
    investment_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Investment"]')
    investment_button.click()

    time.sleep(2)
    investment_title = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Investment"]')
    assert investment_title.is_displayed()


def test_navigate_to_profile(driver):
    profile_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Profile"]')
    profile_button.click()

    time.sleep(2)
    profile_title = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Profile"]')
    assert profile_title.is_displayed()

def test_navigate_to_home(driver):
    home_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Home"]')
    home_button.click()

    time.sleep(2)
    home_title = driver.find_element(AppiumBy.XPATH, '//android.widget.ScrollView/android.view.ViewGroup/com.horcrux.svg.SvgView[1]')
    assert home_title.is_displayed()