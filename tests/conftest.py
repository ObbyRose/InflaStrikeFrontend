import pytest
from appium import webdriver
from appium.options.android import UiAutomator2Options
from selenium.webdriver.support.ui import WebDriverWait

@pytest.fixture(scope="session")
def driver():
    options = UiAutomator2Options()
    options.platform_name = "Android"
    options.platform_version = "15"  # or "15" depending on the exact version
    options.device_name = "Android Emulator"
    options.app_package = "com.anonymous.Client"
    options.app_activity = ".MainActivity"
    options.no_reset = True
    options.automation_name = "UiAutomator2"

    # Start Appium session
    driver = webdriver.Remote("http://localhost:4723", options=options)
    yield driver
    driver.quit()


@pytest.fixture
def wait(driver):
    # Default timeout is 10 seconds, but you can adjust this if needed
    return WebDriverWait(driver, 10)
