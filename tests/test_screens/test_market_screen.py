from appium.webdriver.common.appiumby import AppiumBy
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from time import sleep
from conftest import *

# ENTER INTO SCREEN
def test_get_into_markets_screen(driver, wait):
    navigate(wait, "Markets")
    sleep(5) # make sure data list loads

    try:
        # Wait for the title text to be visible
        title = wait.until(EC.visibility_of_element_located((AppiumBy.XPATH, '//android.widget.TextView[@text="Markets"]')))
        assert title.is_displayed(), "Markets title not showing."
    except TimeoutException:
        raise AssertionError("Markets title did not appear in time.")

# SEARCH FUNCTIONALITY
def test_search_crypto(driver, wait):
    search_box = wait.until(EC.presence_of_element_located((AppiumBy.CLASS_NAME, "android.widget.EditText")))
    search_box.click()
    search_box.send_keys("btc")

    sleep(1)  # Allow filtering to apply
    all_items = driver.find_elements(AppiumBy.XPATH, "//android.widget.ScrollView//android.view.ViewGroup")
    assert len(all_items) > 0, "No items found after search."

    first_item_text = all_items[0].find_element(AppiumBy.XPATH, '//android.widget.TextView').text
    assert "BTC" in first_item_text, "Search did not filter results correctly."
    search_box.send_keys("")

# ! CHECK IF CRYPTO LIST POPULATES
# def test_market_data_displayed_and_last_item(driver, wait):
#     scroll_view = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, "//android.widget.ScrollView")))
#     # Wait for at least one ViewGroup (representing market data) to be present inside the ScrollView
#     crypto_list = scroll_view.find_elements(AppiumBy.XPATH, "//android.view.ViewGroup")
    
#     assert len(crypto_list) > 0, "Market list did not populate correctly."
#     # Swipe to bottom list
#     driver.swipe(100, 500, 100, 100, 800)
#     sleep(1)
#     # Repopulate the list
#     crypto_list = driver.find_elements(AppiumBy.XPATH, "//android.widget.ScrollView//android.view.ViewGroup")
    
#     assert len(crypto_list) > 0, "Market list did not populate correctly after swipe."

#     last_item = crypto_list[-1]
#     print("last_item", last_item)
#     last_item_text = last_item.find_element(AppiumBy.XPATH, '//android.widget.TextView').text
    
#     print("last_item_text", last_item_text)

#     # Verify that "MATIC" is in the last item text
#     assert "MATIC" in last_item_text, "Expected crypto symbols not found."

# EMPTY SEARCH RESULT
def test_empty_search_result(driver, wait):
    search_box = wait.until(EC.presence_of_element_located((AppiumBy.CLASS_NAME, "android.widget.EditText")))
    search_box.click()
    search_box.clear()
    search_box.send_keys("invalidcoinxyz")  # Input an unlikely coin name

    sleep(1)  # Allow filtering to apply
    crypto_list = driver.find_elements(AppiumBy.XPATH, "//android.widget.ScrollView//android.view.ViewGroup[.//android.widget.TextView]")
    assert len(crypto_list) == 0, "Unexpected results found in empty search."
    search_box.send_keys("")

# TAP ON CRYPTO ITEM AND NAVIGATE
def test_tap_on_crypto_card(driver, wait):
    sleep(1)
    crypto_list = wait.until(EC.presence_of_all_elements_located((AppiumBy.XPATH, "//android.widget.ScrollView//android.view.ViewGroup[.//android.widget.TextView]")))
    first_item = crypto_list[0]

    title_el = first_item.find_elements(AppiumBy.CLASS_NAME, 'android.widget.TextView')[0]
    assert title_el.is_displayed(), "First element title does not displayed"
    title_text = title_el.text

    location = title_el.location
    size = title_el.size

    x = location['x'] + size['width'] / 2
    y = location['y'] + size['height'] / 2
    driver.tap([(x, y)])
    title_el.click()
    sleep(1) # let screen change

    # print("title_text", title_text)
    # ! Wait for next screen to appear with correct title
    # title = wait.until(EC.visibility_of_element_located((AppiumBy.XPATH, f'(//android.widget.TextView[@text="{title_text}"])[1]')))
    # assert title.is_displayed(), "Correct coin title not showing."


#?  COIN SCREEN TESTS
def test_switch_categories(driver, wait):
    categories = ["Depth", "Info", "Price"]
    active_sections = [
        '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/com.horcrux.svg.SvgView[4]/com.horcrux.svg.GroupView/com.horcrux.svg.PathView',  # Line graph
        '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]',    # About section
        '//android.view.ViewGroup[@content-desc="1d"]',                         # candlestick graph legend       
    ]

    sleep(1)
    for index, category in enumerate(categories):
        button = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, f'//android.view.ViewGroup[@content-desc="{category}"]')))
        button.click()
        sleep(2)  # Allow UI update

        # ! Check why not working
        # curr_section = wait.until(EC.visibility_of_element_located((AppiumBy.XPATH, active_sections[index])))
        # assert curr_section.is_displayed(), f"{category} section did not load."


def test_order_book_display(driver, wait):
    driver.swipe(100, 500, 100, 100, 800)
    sleep(1) # wait for animation
    order_book_container = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup')))
    assert order_book_container.is_displayed(), 'order book is not displayed'

    bids_asks = order_book_container.find_elements(AppiumBy.XPATH, '//android.widget.TextView')
    assert len(bids_asks) > 0, "Bids or Asks are not displayed."

def test_open_buy_sell_sheet(driver, wait):
    buy_button = wait.until(EC.presence_of_element_located((AppiumBy.XPATH, '//android.widget.Button[@content-desc="Buy"]')))
    assert buy_button.is_displayed(), "Buy/Sell Sheet did not open."
    buy_button.click()

def test_close_buy_sell_sheet(driver, wait):
    swiper = wait.until(EC.element_to_be_clickable((AppiumBy.XPATH, '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup')))
    
    sleep(1) 

    location = swiper.location
    size = swiper.size
    start_x = location['x'] + size['width'] // 2
    start_y = location['y'] + size['height'] // 2
    end_y = start_y + 1000

    # Use mobile: dragGesture to simulate a swipe-down
    driver.execute_script("mobile: dragGesture", {
        "element": swiper.id,  # Get element id for swipe target
        "endX": start_x,
        "endY": end_y,
        "duration": 2  # Duration of the swipe gesture (in seconds)
    })

    sleep(3) # wait for slide animation

    # Verify the sheet is closed
    order_book_container = wait.until(EC.visibility_of_element_located((AppiumBy.ANDROID_UIAUTOMATOR, 'new UiSelector().className("android.view.ViewGroup").instance(30)')))
    assert order_book_container.is_displayed(), 'order book is not displayed'

    navigate(wait, "Home")