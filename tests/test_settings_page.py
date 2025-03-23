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

def test_navigate_to_bank_cards(driver):
    bank_cards_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Bank & Cards"]')
    bank_cards_button.click()
    time.sleep(1)

def test_navigate_to_add_card(driver):
    add_card_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Credit / Debit Card, Use any Visa or Mastercard to make small investments"]/android.view.ViewGroup')
    add_card_button.click()

def test_add_card_details(driver):
    wait = WebDriverWait(driver, 10)

    fields = {
        "Name on card": "John Doe",
        "Card number": "4111111111111111",
        "MM/YY": "1225",
        "CVC": "123",
        "Postal Code": "90210"
    }

    for label, value in fields.items():
        field = wait.until(EC.presence_of_element_located((
            AppiumBy.XPATH, f'//android.view.ViewGroup[@content-desc="{label}"]/android.widget.EditText'
        )))
        field.click()
        field.send_keys(value)

    save_btn = wait.until(EC.element_to_be_clickable((
        AppiumBy.XPATH, '//android.widget.Button[@content-desc="Add Card"]'
    )))
    save_btn.click()

    time.sleep(2)