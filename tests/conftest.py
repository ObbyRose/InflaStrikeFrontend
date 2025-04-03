import pytest
from appium import webdriver
from appium.options.android import UiAutomator2Options
from selenium.webdriver.support.ui import WebDriverWait
from appium.webdriver.common.appiumby import AppiumBy
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

@pytest.fixture(scope="session")
def driver():
    options = UiAutomator2Options()
    options.set_capability("platformName", "Android")
    options.set_capability("platformVersion", "16")  # or the one shown by `adb shell getprop ro.build.version.release`
    options.set_capability("deviceName", "Android Emulator")
    options.set_capability("automationName", "UiAutomator2")
    options.set_capability("appPackage", "com.lkyexchange.Tothor")
    options.set_capability("appActivity", ".MainActivity")
    options.set_capability("noReset", True)

    driver = webdriver.Remote("http://localhost:4723", options=options)
    yield driver
    # driver.terminate_app("com.lkyexchange.Tothor")
    driver.quit()


@pytest.fixture
def wait(driver):
    # Default timeout is 10 seconds, but you can adjust this if needed
    return WebDriverWait(driver, 10)

# Help Functions
def navigate(wait, text):
    wait.until(EC.visibility_of_element_located((AppiumBy.XPATH, f'//android.view.ViewGroup[@content-desc="{text}"]'))).click()

def clear_input_fields(input_elements):
    """Clears all input fields passed as WebElement list."""
    for element in input_elements:
        try:
            element.clear()
        except Exception as e:
            print(f"Could not clear input field: {e}")