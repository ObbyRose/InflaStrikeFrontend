import pytest
from appium.webdriver.common.appiumby import AppiumBy
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from conftest import *
from time import sleep

def test_click_sign_up(driver, wait):
    # Wait for the "Sign Up" text to be visible and clickable
    sign_up_element = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Sign Up")]')))

    location = sign_up_element.location
    size = sign_up_element.size

    x = location['x'] + (size['width'] * 4 / 5)
    y = location['y'] + (size['height'] // 2)

    driver.tap([(x, y)])

    sign_up_screen_element = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Simply enter your email")]')))
    assert sign_up_screen_element.is_displayed(), "Signup did not navigate"

# ? Email entering
# def test_no_email(driver, wait):
#     """Test login with an invalid email format."""
#     continue_btn = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.widget.Button[@content-desc="Continue"]')))
#     continue_btn.click()
    
#     error_message = wait.until(EC.visibility_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Email is required")]')))
#     assert error_message.is_displayed(), "Required email error message not shown!"

# def test_invalid_email_format(driver, wait):
#     """Test login with an invalid email format."""
#     email_input = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Email"]/android.widget.EditText')))
#     email_input.send_keys("invalidemail")
    
#     continue_btn = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.widget.Button[@content-desc="Continue"]')))
#     continue_btn.click()
    
#     error_message = wait.until(EC.visibility_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Invalid email format")]')))
#     assert error_message.is_displayed(), "Invalid email format error message not shown!"
    
#     clear_input_fields([email_input])

def test_success_email_(driver, wait):
    """Test login with an invalid email format."""
    email_input = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Email"]/android.widget.EditText')))
    email_input.send_keys("yanivridel@gmail.com")
    
    continue_btn = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.widget.Button[@content-desc="Continue"]')))
    continue_btn.click()
    
    error_message = wait.until(EC.visibility_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[@text="Verify your email"]')))
    assert error_message.is_displayed(), "Sign up screen did not continue"

# ? Email Verifying
# def test_verify_email_screen_elements(driver, wait):
#     """Verify all key elements are present on the email verification screen."""
#     # Check for main title
#     title = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Verify your email")]')))
#     assert title.is_displayed(), "Verification title is missing"

#     # Check for subtitle
#     subtitle = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "We sent a verification email")]')))
#     assert subtitle.is_displayed(), "Subtitle is missing"

#     # Check for 'Check my inbox' button
#     check_inbox_btn = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.widget.Button/android.widget.TextView[contains(@text, "Check my inbox")]')))
#     assert check_inbox_btn.is_displayed(), "'Check my inbox' button is missing"

#     # Check for 'Resend email' button
#     resend_btn = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.widget.Button/android.widget.TextView[contains(@text, "Resend email")]')))
#     assert resend_btn.is_displayed(), "'Resend email' button is missing"

# def test_resend_email_functionality(driver, wait):
#     """Test the 'Resend email' button functionality."""
#     resend_btn = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.widget.Button/android.widget.TextView[contains(@text, "Resend email")]')))
#     resend_btn.click()

#     # Check toast message
#     try:
#         toast_message = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Email has been sent to your inbox")]')))
#         assert toast_message.is_displayed(), "Success toast message not shown"
#     except TimeoutException:
#         pytest.fail("No success message displayed after resending email")

def test_check_inbox_button(driver, wait):
    """Test the 'Check my inbox' button functionality."""
    check_inbox_btn = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.widget.Button/android.widget.TextView[contains(@text, "Check my inbox")]')))
    check_inbox_btn.click()

    sleep(2)
    driver.back()
    # This test assumes the app transitions to the next screen after opening Gmail
    try:
        # Wait for a potential next screen element
        next_screen_element = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Continue")]')))
        assert next_screen_element.is_displayed(), "Did not navigate to next screen after checking inbox"
    except TimeoutException:
        # If no next screen is found, the test might need adjustment based on actual app flow
        pytest.fail("No navigation occurred after 'Check my inbox' button press")

# ? Phone Entering
# def test_phone_number_screen_elements(driver, wait):
#     """Verify all key elements are present on the phone number screen."""
#     # Check for main title
#     title = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Phone Number")]')))
#     assert title.is_displayed(), "Phone Number title is missing"

#     # Check for subtitle
#     subtitle = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Simply enter your phone number")]')))
#     assert subtitle.is_displayed(), "Subtitle is missing"

#     # Check for Continue button
#     continue_btn = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.widget.Button/android.widget.TextView[contains(@text, "Continue")]')))
#     assert continue_btn.is_displayed(), "'Continue' button is missing"

# def test_change_country(driver, wait):
#     """Test submission without entering a phone number."""
#     country_btn = wait.until(EC.presence_of_element_located((AppiumBy.ANDROID_UIAUTOMATOR, 'new UiSelector().className("android.widget.Button").instance(0)')))

#     location = country_btn.location
#     size = country_btn.size

#     x = location['x'] + (size['width'] / 2)
#     y = location['y'] + (size['height'] / 2)

#     driver.tap([(x, y)])
#     sleep(1)

#     first_country = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="🇦🇫 Afghanistan"]')))

#     location = first_country.location
#     size = first_country.size

#     x = location['x'] + (size['width'] / 2)
#     y = location['y'] + (size['height'] / 2)

#     driver.tap([(x, y)])
#     sleep(1)

#     # Check error message for required phone number
#     continue_btn = wait.until(EC.visibility_of_element_located((AppiumBy.XPATH, '//android.widget.Button[@content-desc="Continue"]')))
#     assert continue_btn.is_displayed(), "Select Sheet did not go down"

# def test_no_phone_number(driver, wait):
#     """Test submission without entering a phone number."""
#     continue_btn = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.widget.Button/android.widget.TextView[contains(@text, "Continue")]')))
#     continue_btn.click()

#     # Check error message for required phone number
#     error_message = wait.until(EC.visibility_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Phone number is required")]')))
#     assert error_message.is_displayed(), "Required phone number error message not shown!"

# def test_short_phone_number(driver, wait):
#     """Test submission with a short phone number."""
#     # Find phone number input (you might need to adjust the XPATH based on your exact implementation)
#     phone_input = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.widget.EditText[@text="Phone number"]')))
#     phone_input.send_keys("123")  # Short phone number

#     continue_btn = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.widget.Button/android.widget.TextView[contains(@text, "Continue")]')))
#     continue_btn.click()

#     # Check error message for short phone number
#     error_message = wait.until(EC.visibility_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Phone number is too short")]')))
#     assert error_message.is_displayed(), "Short phone number error message not shown!"
#     clear_input_fields([phone_input])

def test_valid_phone_number(driver, wait):
    """Test submission with a valid phone number."""
    # Clear previous input if necessary
    phone_input = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.widget.EditText[@text="Phone number"]')))
    phone_input.send_keys("501234567")  # Example valid phone number

    continue_btn = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.widget.Button/android.widget.TextView[contains(@text, "Continue")]')))
    continue_btn.click()

    # Verify navigation to next screen
    try:
        next_screen_element = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Please enter the 4-digit code")]')))
        assert next_screen_element.is_displayed(), "Did not navigate to next screen after entering valid phone number"
    except TimeoutException:
        pytest.fail("No navigation occurred after entering valid phone number")

# ? Phone Verifying
# def test_phone_verification_screen_elements(driver, wait):
#     """Verify all key elements are present on the phone verification screen."""
#     # Check for main title
#     title = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Confirm")]')))
#     assert title.is_displayed(), "Confirm title is missing"

#     # Check for subtitle with phone number
#     subtitle = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Please enter the 4-digit code")]')))
#     assert subtitle.is_displayed(), "Subtitle is missing"

#     # Check for Resend code button/text
#     resend_code = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Resend code")]')))
#     assert resend_code.is_displayed(), "'Resend code' option is missing"

# def test_incomplete_code_entry_with_ui_selector(driver, wait):
#     """Test behavior when not all digits are entered."""
#     # Use UiSelector to get the EditText instances
#     digit_inputs = []
#     for i in range(0, 4):  # Index 0 to 3
#         edit_text = driver.find_element(AppiumBy.ANDROID_UIAUTOMATOR, f'new UiSelector().className("android.widget.EditText").instance({i})')
#         digit_inputs.append(edit_text)

#     # Enter partial code
#     digit_inputs[0].send_keys("1")
#     digit_inputs[1].send_keys("2")

#     # Verify no automatic navigation occurs
#     try:
#         next_screen_element = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Create Password")]')))
#         pytest.fail("Should not navigate with incomplete code")
#     except TimeoutException:
#         # This is the expected behavior
#         pass

# def test_resend_code_functionality(driver, wait):
#     """Test the resend code functionality."""
#     # Find Resend code option
#     resend_code = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Resend code")]')))
#     resend_code.click()

#     # Check toast message
#     try:
#         toast_message = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Code has been sent to your phone number")]')))
#         assert toast_message.is_displayed(), "Success toast message not shown"
#     except TimeoutException:
#         pytest.fail("No success message displayed after resending code")

def test_valid_code_entry(driver, wait):
    """Test successful code entry and navigation."""
    # Find input fields
    digit_inputs = []
    for i in range(0, 4):  # Index 0 to 3
        edit_text = driver.find_element(AppiumBy.ANDROID_UIAUTOMATOR, f'new UiSelector().className("android.widget.EditText").instance({i})')
        digit_inputs.append(edit_text)

    # Enter full valid code
    digit_inputs[0].send_keys("1")
    digit_inputs[1].send_keys("2")
    digit_inputs[2].send_keys("3")
    digit_inputs[3].send_keys("4")

    # Wait for loading overlay or navigation
    try:
        next_screen_element = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Create Password")]')))
        assert next_screen_element.is_displayed(), "Did not navigate to next screen after entering valid code"
    except TimeoutException:
        pytest.fail("No navigation occurred after entering valid code")

# ? Create Password
def test_create_password_screen_elements(driver, wait):
    """Verify all key elements are present on the create password screen."""
    # Check for main title
    title = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Create Password")]')))
    assert title.is_displayed(), "Create Password title is missing"

    # Check for subtitle
    subtitle = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Choose a secure password")]')))
    assert subtitle.is_displayed(), "Subtitle is missing"

    # Check password input field
    password_input = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.widget.EditText')))
    assert password_input.is_displayed(), "Password input field is missing"

    # Check validation texts
    validation_texts = [
        "Has at least 8 characters",
        "Has an uppercase letter or symbol",
        "Has a number"
    ]
    for text in validation_texts:
        validation_text = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, f'//android.widget.TextView[contains(@text, "{text}")]')))
        assert validation_text.is_displayed(), f"Validation text '{text}' is missing"

    # Check Continue button
    continue_btn = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.widget.Button[@content-desc="Continue"]')))
    assert continue_btn.is_displayed(), "'Continue' button is missing"

def test_password_validation_rules(driver, wait):
    """Test password validation rules."""
    # Find password input
    password_input = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.widget.EditText')))
    continue_btn = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.widget.Button[@content-desc="Continue"]')))

    # Test scenarios
    test_cases = [
        # Short password
        ("short", False),
        # No uppercase or symbol
        ("password123", False),
        # No number
        ("Password", False),
        # Valid password
        ("Password123!", True)
    ]

    for password, should_be_active in test_cases:
        # Clear previous input
        password_input.clear()
        password_input.send_keys(password)

        # Check continue button state
        try:
            # Attempt to click continue
            continue_btn.click()
            
            # If should not be active, this should fail
            if not should_be_active:
                pytest.fail(f"Continue button should be inactive for password: {password}")
        except:
            # If cannot click and should be active, fail
            if should_be_active:
                pytest.fail(f"Continue button should be active for password: {password}")

# Personal Info
# def test_personal_info_screen_elements(driver, wait):
#     """Verify all key elements are present on the personal information screen."""
#     # Check for main title
#     title = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "Personal info")]')))
#     assert title.is_displayed(), "Personal info title is missing"

#     # Check for subtitle
#     subtitle = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "We ask for your personal")]')))
#     assert subtitle.is_displayed(), "Subtitle is missing"

#     for i in range(0,4):
#         input_field = wait.until(EC.presence_of_element_located((AppiumBy.ANDROID_UIAUTOMATOR, f'new UiSelector().className("android.widget.EditText").instance({i})')))
#         assert input_field.is_displayed(), f"Input field {i} is missing"

#     # Check security text
#     security_text = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[contains(@text, "We use 128-bit encryption for security")]')))
#     assert security_text.is_displayed(), "Security disclaimer text is missing"

#     # Check Continue button
#     continue_btn = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.widget.Button[@content-desc="Continue"]')))
#     assert continue_btn.is_displayed(), "'Continue' button is missing"

# def test_birthday_input_format(driver, wait):
#     """Test birthday input format validation."""
#     birthday_input = wait.until(EC.element_to_be_clickable((AppiumBy.ANDROID_UIAUTOMATOR, 'new UiSelector().className("android.widget.EditText").instance(2)')))

#     invalid_formats = [
#         "1/1/1990",      # Missing leading zeros
#         "01-01-1990",    # Wrong separator
#         "1990/01/01",    # Wrong order
#         "01/01/90"       # Two-digit year
#     ]

#     valid_formats = [
#         "01/01/1990",
#         "12/31/2000"
#     ]

#     for format in invalid_formats:
#         birthday_input.clear()
#         birthday_input.send_keys(format)
        
#         # Verify that continue button remains inactive
#         continue_btn = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.widget.Button[@content-desc="Continue"]')))
        
#         try:
#             continue_btn.click()
#             pytest.fail(f"Continue button should be inactive for invalid birthday format: {format}")
#         except:
#             pass  # Expected behavior

#     for format in valid_formats:
#         birthday_input.clear()
#         birthday_input.send_keys(format)
        
#         # Attempt to click continue button should be possible
#         continue_btn = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.widget.Button[@content-desc="Continue"]')))

def test_continue_button_inactive_with_incomplete_data(driver, wait):
    """Test that Continue button remains inactive with incomplete personal information."""
    first_name_input = wait.until(EC.element_to_be_clickable((AppiumBy.ANDROID_UIAUTOMATOR, 'new UiSelector().className("android.widget.EditText").instance(0)')))
    last_name_input = wait.until(EC.element_to_be_clickable((AppiumBy.ANDROID_UIAUTOMATOR, 'new UiSelector().className("android.widget.EditText").instance(1)')))
    birthday_input = wait.until(EC.element_to_be_clickable((AppiumBy.ANDROID_UIAUTOMATOR, 'new UiSelector().className("android.widget.EditText").instance(2)')))
    ssn_input = wait.until(EC.element_to_be_clickable((AppiumBy.ANDROID_UIAUTOMATOR, 'new UiSelector().className("android.widget.EditText").instance(3)')))

    test_cases = [
        # Partial data scenarios
        {"first_name": "John", "expects_inactive": True},
        {"last_name": "Doe", "expects_inactive": True},
        {"birthday": "01/01/1990", "expects_inactive": True},
        {"ssn": "1234", "expects_inactive": True},
        # Complete data scenario
        {"first_name": "John", "last_name": "Doe", "birthday": "01/01/1990", "ssn": "1234", "expects_inactive": False}
    ]

    for case in test_cases:
        # Reset inputs
        clear_input_fields([first_name_input,last_name_input, birthday_input, ssn_input])

        # Fill in provided data
        if case.get("first_name"):
            first_name_input.send_keys(case.get("first_name", ""))
        if case.get("last_name"):
            last_name_input.send_keys(case.get("last_name", ""))
        if case.get("birthday"):
            birthday_input.send_keys(case.get("birthday", ""))
        if case.get("ssn"):
            ssn_input.send_keys(case.get("ssn", ""))

        continue_btn = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.widget.Button[@content-desc="Continue"]')))
        
        try:
            continue_btn.click()
            if case["expects_inactive"]:
                pytest.fail(f"Continue button should be inactive for incomplete data: {case}")
        except:
            if not case["expects_inactive"]:
                pytest.fail(f"Continue button should be active for complete data: {case}")

# Address

