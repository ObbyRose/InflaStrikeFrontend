import time
from appium.webdriver.common.appiumby import AppiumBy
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def test_kyc_presence(driver):
    kyc_title = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Verify your identity #1"]')
    assert kyc_title.is_displayed()

def test_kyc_navigation(driver):
    kyc_button = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Verify now"]')
    kyc_button.click()
    time.sleep(2)

    kyc_screen_confirmation = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Government ID"]')
    assert kyc_screen_confirmation.is_displayed()

def test_id_actionsheet(driver):
    id_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Take a photo"]')
    id_button.click()
    time.sleep(2)

    driver_license = driver.find_element(AppiumBy.XPATH, '(//android.widget.TextView[@text="￼"])[1]')
    assert driver_license.is_displayed()

    national_identity_card = driver.find_element(AppiumBy.XPATH, '(//android.widget.TextView[@text="￼"])[2]')
    assert national_identity_card.is_displayed()

    passport = driver.find_element(AppiumBy.XPATH, '(//android.widget.TextView[@text="￼"])[3]')
    assert passport.is_displayed()

def test_driver_license_selection(driver):
    driver_license = driver.find_element(AppiumBy.XPATH, '(//android.widget.TextView[@text="￼"])[1]')
    driver_license.click()
    time.sleep(2)

    driver_license_title = driver.find_element(AppiumBy.XPATH, """//android.widget.TextView[@text="Driver's License"]""")
    assert driver_license_title.is_displayed()

def test_driver_license_capture(driver):
    flip_camera_button = driver.find_element(AppiumBy.XPATH, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[4]')
    flip_camera_button.click()
    flip_camera_button.click()
    time.sleep(2)

    capture_button = driver.find_element(AppiumBy.XPATH, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.view.ViewGroup')
    capture_button.click()
    time.sleep(4)

def test_driver_license_capture_confirmation(driver):
    photo_is_displayed = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Check Quality"]')
    assert photo_is_displayed.is_displayed()

    confirm_button = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Continue"]')
    confirm_button.click()
    time.sleep(2)

def test_driver_license_capture_success(driver):
    success_icon = driver.find_element(AppiumBy.XPATH, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/com.horcrux.svg.SvgView[2]/com.horcrux.svg.GroupView/com.horcrux.svg.GroupView/com.horcrux.svg.CircleView[2]')
    assert success_icon.is_displayed()

def test_national_identity_selection(driver):
    id_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Take a photo"]')
    id_button.click()
    time.sleep(2)

    national_identity_card = driver.find_element(AppiumBy.XPATH, '(//android.widget.TextView[@text="￼"])[2]')
    national_identity_card.click()
    time.sleep(2)

    national_identity_card_title = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="ID Card"]')
    assert national_identity_card_title.is_displayed()

    front_of_id_card = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Front of your ID"]')
    assert front_of_id_card.is_displayed()

def test_national_identity_capture(driver):
    capture_front_button = driver.find_element(AppiumBy.XPATH, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.view.ViewGroup')
    capture_front_button.click()
    time.sleep(4)

    capture_front_confirmation = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Back of your ID"]')
    assert capture_front_confirmation.is_displayed()

    capture_back_button = driver.find_element(AppiumBy.XPATH, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.view.ViewGroup')
    capture_back_button.click()
    time.sleep(4)

def test_national_identity_confirmation(driver):
    front_photo_is_displayed = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Check Quality"]')
    assert front_photo_is_displayed.is_displayed()

    confirm_button = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Continue"]')
    confirm_button.click()
    time.sleep(2)

def test_national_identity_capture_success(driver):
    success_icon = driver.find_element(AppiumBy.XPATH, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/com.horcrux.svg.SvgView[2]/com.horcrux.svg.GroupView/com.horcrux.svg.GroupView/com.horcrux.svg.CircleView[2]')
    assert success_icon.is_displayed()

def test_passport_selection(driver):
    id_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Take a photo"]')
    id_button.click()
    time.sleep(2)

    passport = driver.find_element(AppiumBy.XPATH, '(//android.widget.TextView[@text="￼"])[3]')
    passport.click()
    time.sleep(2)

    passport_title = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Passport"]')
    assert passport_title.is_displayed()

def test_passport_capture(driver):
    capture_button = driver.find_element(AppiumBy.XPATH, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.view.ViewGroup')
    capture_button.click()
    time.sleep(4)

def test_passport_capture_confirmation(driver):
    photo_is_displayed = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Check Quality"]')
    assert photo_is_displayed.is_displayed()

    confirm_button = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Continue"]')
    confirm_button.click()
    time.sleep(2)

def test_passport_success(driver):
    success_icon = driver.find_element(AppiumBy.XPATH, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/com.horcrux.svg.SvgView[2]/com.horcrux.svg.GroupView/com.horcrux.svg.GroupView/com.horcrux.svg.CircleView[2]')
    assert success_icon.is_displayed()

def test_take_selfie(driver):
    selfie_button = driver.find_element(AppiumBy.XPATH, '//android.view.ViewGroup[@content-desc="Take a selfie"]')
    selfie_button.click()
    time.sleep(2)

    selfie_title = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Selfie"]')
    assert selfie_title.is_displayed()

def test_take_selfie_capture(driver):
    capture_button = driver.find_element(AppiumBy.XPATH, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.view.ViewGroup')
    capture_button.click()
    time.sleep(4)

def test_selfie_confirmation(driver):
    photo_is_displayed = driver.find_element(AppiumBy.XPATH, '//android.widget.ImageView[@content-desc="id image"]')
    assert photo_is_displayed.is_displayed()

    confirm_button = driver.find_element(AppiumBy.XPATH, '//android.widget.TextView[@text="Continue"]')
    confirm_button.click()
    time.sleep(2)

def test_selfie_success(driver):
    success_icon = driver.find_element(AppiumBy.XPATH, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/com.horcrux.svg.SvgView[4]/com.horcrux.svg.GroupView/com.horcrux.svg.GroupView/com.horcrux.svg.CircleView[2]')
    assert success_icon.is_displayed()