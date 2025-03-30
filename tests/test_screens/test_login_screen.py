import pytest
from appium.webdriver.common.appiumby import AppiumBy
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from conftest import *

def test_missing_password(driver, wait):
    """Test login with a missing password."""
    email_input = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Email"]/android.widget.EditText')))
    email_input.send_keys("test@example.com")
    
    login_button = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.widget.Button[@content-desc="Sign In"]')))
    login_button.click()
    
    error_message = wait.until(EC.visibility_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Password is required.")]')))
    assert error_message.is_displayed(), "Password required error message not shown!"

    clear_input_fields([email_input, password_input])

def test_invalid_email_format(driver, wait):
    """Test login with an invalid email format."""
    email_input = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Email"]/android.widget.EditText')))
    email_input.send_keys("invalidemail")
    
    password_input = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Password"]/android.widget.EditText')))
    password_input.send_keys("password123")
    
    login_button = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.widget.Button[@content-desc="Sign In"]')))
    login_button.click()
    
    error_message = wait.until(EC.visibility_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Invalid email format.")]')))
    assert error_message.is_displayed(), "Invalid email format error message not shown!"
    
    clear_input_fields([email_input, password_input])

def test_missing_email(driver, wait):
    """Test login with a missing email."""
    password_input = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Password"]/android.widget.EditText')))
    password_input.send_keys("password123")

    login_button = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.widget.Button[@content-desc="Sign In"]')))
    login_button.click()

    error_message = wait.until(EC.visibility_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Email is required.")]')))
    assert error_message.is_displayed(), "Email required error message not shown!"

    clear_input_fields([email_input, password_input])

def test_password_too_short(driver, wait):
    """Test login with a password shorter than 6 characters."""
    email_input = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Email"]/android.widget.EditText')))
    email_input.send_keys("test@example.com")

    password_input = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Password"]/android.widget.EditText')))
    password_input.send_keys("123")

    login_button = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.widget.Button[@content-desc="Sign In"]')))
    login_button.click()

    error_message = wait.until(EC.visibility_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Password must be at least 6 characters.")]')))
    assert error_message.is_displayed(), "Password too short error message not shown!"

    clear_input_fields([email_input, password_input])

# def test_successful_login(driver, wait):
#     """Test successful login and navigation."""
#     email_input = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Email"]/android.widget.EditText')))
#     email_input.send_keys("test@example.com")
    
#     password_input = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Password"]/android.widget.EditText')))
#     password_input.send_keys("password123")
    
#     login_button = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.widget.Button[@content-desc="Sign In"]')))
#     login_button.click()
    
#     # Wait for Home screen
#     home_screen = wait.until(EC.visibility_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Welcome")]')))
#     assert home_screen.is_displayed(), "Failed to navigate to Home screen after login!"
