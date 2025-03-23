from appium.webdriver.common.appiumby import AppiumBy
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from time import sleep

def test_get_into_portfolio_screen(driver, wait):
    button = wait.until(EC.visibility_of_element_located((AppiumBy.XPATH, '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView[1]')))
    
    assert button.is_displayed(), "Portfolio button is not visible on the screen."

    button.click()

    try:
        # Wait for the title text to be visible
        title = wait.until(EC.visibility_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[@text="Portfolio"]')))
        assert title.is_displayed(), "Portfolio title not showing."
    except TimeoutException:
        raise AssertionError("Portfolio title did not appear in time.")

def test_pie_chart_clickables(driver, wait):
    sum = 0
    # Define the XPaths for all 4 clickable elements
    clickables = {
        1: {
            'xpath': '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]/android.view.ViewGroup/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView[1]',
            'x_offset': 0.2,  # 20% of the width (down left)
            'y_offset': 0.5   # 50% of the height (down left)
        },
        2: {
            'xpath': '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]/android.view.ViewGroup/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView[2]',
            'x_offset': 0.0,  # 0% of the width (top left)
            'y_offset': 0.0   # 0% of the height (top left)
        },
        3: {
            'xpath': '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]/android.view.ViewGroup/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView[3]',
            'x_offset': 0.5,  # 50% of the width (top-top, center)
            'y_offset': 0.0   # 0% of the height (top-top, center)
        },
        4: {
            'xpath': '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]/android.view.ViewGroup/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView[4]',
            'x_offset': 1.0,  # 100% of the width (all right side)
            'y_offset': 0.5   # 50% of the height (all right side)
        }
    }

    for index, clickable in clickables.items():
        # Locate the clickable SVG element
        svg_element = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, clickable['xpath'])))

        # Get the location and size of the SVG element
        location = svg_element.location
        size = svg_element.size

        # Calculate the click coordinates based on the defined offsets
        x = location['x'] + size['width'] * clickable['x_offset']
        y = location['y'] + size['height'] * clickable['y_offset']

        # Perform the click action at the calculated coordinates
        driver.tap([(x, y)], 100)  # The second parameter is the tap duration in milliseconds

        # Optionally, wait for some result or element to appear after clicking
        try:
            result = wait.until(EC.visibility_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[@text="Expected Result"]')))
            assert result.is_displayed(), f"Expected result for clickable element {index} is not visible."
        except TimeoutException:
            raise AssertionError(f"Expected result for clickable element {index} did not appear in time.")
        
        sleep(0.5)  # Optional, to prevent clicking too fast